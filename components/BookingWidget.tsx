"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const TIME_SLOTS = ["9:00 am", "10:30 am", "12:00 pm", "1:30 pm", "3:00 pm", "4:30 pm", "6:00 pm"];

type Stage = "select" | "details" | "done";

export function BookingWidget() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date | null>(today);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [stage, setStage] = useState<Stage>("select");
  const [tz, setTz] = useState("UTC +06:00 Bishkek, Dhaka, Kashgar");
  const [form, setForm] = useState({ name: "", email: "", company: "", notes: "" });

  useEffect(() => {
    try {
      const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const offMin = -new Date().getTimezoneOffset();
      const sign = offMin >= 0 ? "+" : "-";
      const hh = String(Math.floor(Math.abs(offMin) / 60)).padStart(2, "0");
      const mm = String(Math.abs(offMin) % 60).padStart(2, "0");
      setTz(`UTC ${sign}${hh}:${mm} · ${zone}`);
    } catch {
      /* keep default */
    }
  }, []);

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstOffset = new Date(viewYear, viewMonth, 1).getDay();
  const cells: (number | null)[] = [
    ...Array(firstOffset).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const canGoPrev = new Date(viewYear, viewMonth, 1) > new Date(today.getFullYear(), today.getMonth(), 1);
  const gotoMonth = (delta: number) => {
    const d = new Date(viewYear, viewMonth + delta, 1);
    setViewYear(d.getFullYear());
    setViewMonth(d.getMonth());
  };

  const isPast = (day: number) => new Date(viewYear, viewMonth, day) < today;
  const isSelected = (day: number) =>
    !!selectedDate &&
    selectedDate.getFullYear() === viewYear &&
    selectedDate.getMonth() === viewMonth &&
    selectedDate.getDate() === day;

  const dateLabel = selectedDate
    ? `${MONTHS[selectedDate.getMonth()]} ${selectedDate.getDate()}, ${selectedDate.getFullYear()}`
    : "";

  return (
    <div className="grid overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-[1fr_1.05fr]">
      {/* Left — host + calendar */}
      <div className="relative bg-brand-gradient p-7 text-white sm:p-9">
        <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(circle_at_80%_0%,#fff,transparent_45%)]" />
        <div className="relative">
          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
              <Image src="/nexalinx-mark.png" alt="Nexalinx" width={49} height={66} className="h-9 w-auto" />
            </div>
          </div>
          <h2 className="mt-4 text-center font-display text-xl font-bold leading-snug">
            Find a time to chat with the Nexalinx team
          </h2>

          {/* month nav */}
          <div className="mt-6 flex items-center justify-center gap-6">
            <button
              onClick={() => canGoPrev && gotoMonth(-1)}
              disabled={!canGoPrev}
              className="grid h-8 w-8 place-items-center rounded-full transition hover:bg-white/20 disabled:opacity-30"
              aria-label="Previous month"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <span className="font-display text-lg font-bold">
              {MONTHS[viewMonth]} {viewYear}
            </span>
            <button
              onClick={() => gotoMonth(1)}
              className="grid h-8 w-8 place-items-center rounded-full transition hover:bg-white/20"
              aria-label="Next month"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* weekday header */}
          <div className="mt-6 grid grid-cols-7 gap-1 text-center text-[11px] font-bold tracking-wide text-white/80">
            {WEEKDAYS.map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>

          {/* days */}
          <div className="mt-2 grid grid-cols-7 gap-1">
            {cells.map((day, i) => {
              if (day === null) return <div key={`e${i}`} />;
              const past = isPast(day);
              const selected = isSelected(day);
              return (
                <button
                  key={day}
                  disabled={past}
                  onClick={() => {
                    setSelectedDate(new Date(viewYear, viewMonth, day));
                    setSelectedTime(null);
                    setStage("select");
                  }}
                  className={`mx-auto grid h-9 w-9 place-items-center rounded-full text-sm font-semibold transition ${
                    past
                      ? "cursor-not-allowed text-white/35"
                      : selected
                        ? "bg-white text-accent-600 shadow"
                        : "text-white hover:bg-white/20"
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right — details */}
      <div className="p-7 sm:p-9">
        {stage === "done" ? (
          <Confirmation
            dateLabel={dateLabel}
            time={selectedTime}
            name={form.name}
            onReset={() => {
              setStage("select");
              setSelectedTime(null);
              setForm({ name: "", email: "", company: "", notes: "" });
            }}
          />
        ) : (
          <>
            <Detail icon="pin" label="Meeting location" value="Google Meet" />
            <Detail icon="clock" label="Meeting duration" value="30 mins" pill />

            {stage === "select" && (
              <div className="mt-7">
                <p className="font-display text-base font-bold text-ink">What time works best?</p>
                <p className="mt-1 text-sm text-slate-500">
                  Showing times for <span className="font-semibold text-ink">{dateLabel || "a date"}</span>
                </p>
                <div className="mt-3 flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-xs font-medium text-brand-600">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="9" /><path d="M2 12h20M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
                  </svg>
                  {tz}
                </div>

                <div className="mt-4 grid max-h-72 gap-2.5 overflow-y-auto pr-1 sm:grid-cols-2">
                  {selectedDate ? (
                    TIME_SLOTS.map((t) => {
                      const active = selectedTime === t;
                      return (
                        <button
                          key={t}
                          onClick={() => setSelectedTime(t)}
                          className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                            active
                              ? "border-accent-500 bg-accent-500 text-ink shadow-glow"
                              : "border-slate-200 text-accent-600 hover:border-accent-400 hover:bg-accent-50"
                          }`}
                        >
                          {t}
                        </button>
                      );
                    })
                  ) : (
                    <p className="col-span-2 text-sm text-slate-400">Pick a date to see available times.</p>
                  )}
                </div>

                <button
                  disabled={!selectedTime}
                  onClick={() => setStage("details")}
                  className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Continue
                </button>
              </div>
            )}

            {stage === "details" && (
              <form
                className="mt-7"
                onSubmit={(e) => {
                  e.preventDefault();
                  setStage("done");
                }}
              >
                <button
                  type="button"
                  onClick={() => setStage("select")}
                  className="mb-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {dateLabel} · {selectedTime}
                </button>

                <div className="space-y-3">
                  <Field label="Full name" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                  <Field label="Work email" type="email" required value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                  <Field label="Company (optional)" value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
                  <div>
                    <label className="mb-1 block text-sm font-semibold text-ink">What do you want to build?</label>
                    <textarea
                      rows={3}
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      placeholder="A sentence or two about your idea, app or workflow…"
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                    />
                  </div>
                </div>

                <button type="submit" className="btn-primary mt-5 w-full">
                  Confirm discovery call
                </button>
                <p className="mt-3 text-center text-xs text-slate-400">
                  We&apos;ll email a Google Meet link and calendar invite.
                </p>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function Detail({ icon, label, value, pill }: { icon: "pin" | "clock"; label: string; value: string; pill?: boolean }) {
  return (
    <div className="mb-5">
      <p className="text-sm font-bold text-ink">{label}</p>
      {pill ? (
        <div className="mt-1.5 rounded-lg bg-slate-100 px-4 py-2 text-center text-sm font-medium text-slate-600">
          {value}
        </div>
      ) : (
        <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-600">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-accent-500">
            {icon === "pin" ? (
              <>
                <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" strokeLinejoin="round" />
                <circle cx="12" cy="10" r="2.5" />
              </>
            ) : (
              <>
                <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
              </>
            )}
          </svg>
          {value}
        </p>
      )}
    </div>
  );
}

function Field({
  label, value, onChange, type = "text", required,
}: {
  label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-semibold text-ink">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
      />
    </div>
  );
}

function Confirmation({
  dateLabel, time, name, onReset,
}: {
  dateLabel: string; time: string | null; name: string; onReset: () => void;
}) {
  return (
    <div className="flex h-full flex-col items-center justify-center py-6 text-center">
      <div className="grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
          <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h2 className="mt-5 font-display text-2xl font-bold text-ink">You&apos;re booked{name ? `, ${name.split(" ")[0]}` : ""}!</h2>
      <p className="mt-2 max-w-sm text-sm text-slate-500">
        Your discovery call is set for <span className="font-semibold text-ink">{dateLabel}</span> at{" "}
        <span className="font-semibold text-ink">{time}</span>. A Google Meet link and calendar invite are on the way to your inbox.
      </p>
      <button onClick={onReset} className="btn-ghost mt-7">
        Book another time
      </button>
    </div>
  );
}
