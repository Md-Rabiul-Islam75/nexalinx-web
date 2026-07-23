"use client";

import { useState } from "react";

const INTERESTS = [
  "AI & automation",
  "Web app / SaaS MVP",
  "Mobile app",
  "Website & conversion",
  "App rescue",
  "Dedicated team",
];

const BUDGETS = ["Under $10k", "$10k – $25k", "$25k – $60k", "$60k+", "Not sure yet"];

const EMPTY = {
  name: "",
  email: "",
  company: "",
  country: "",
  interest: "",
  budget: "",
  message: "",
};

/**
 * Contact form.
 *
 * There is no backend on this site yet, so a submit composes a well-formatted
 * email to hello@nexalinx.com and hands it to the visitor's mail client. Swap
 * `handleSubmit` for a POST to your form endpoint or CRM when one exists — the
 * field names already match the brief's lead-qualification fields.
 */
export function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);

  const set = (key: keyof typeof EMPTY) => (value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company && `Company: ${form.company}`,
      form.country && `Country: ${form.country}`,
      form.interest && `Service interest: ${form.interest}`,
      form.budget && `Budget range: ${form.budget}`,
      "",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");

    const subject = `New enquiry${form.company ? ` — ${form.company}` : ""}`;
    window.location.href = `mailto:hello@nexalinx.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-100 bg-white p-10 text-center shadow-card">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="mt-5 font-display text-2xl font-bold text-ink">
          Your message is ready to send
        </h2>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-500">
          We&apos;ve opened your email client with everything filled in — press send and
          we&apos;ll reply within one business day. If nothing opened, email us directly at{" "}
          <a href="mailto:hello@nexalinx.com" className="font-semibold text-brand-600 underline underline-offset-4">
            hello@nexalinx.com
          </a>
          .
        </p>
        <button onClick={() => { setForm(EMPTY); setSent(false); }} className="btn-ghost mt-7">
          Write another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-100 bg-white p-7 shadow-card sm:p-9"
    >
      <h2 className="font-display text-xl font-bold text-ink">Tell us about your project</h2>
      <p className="mt-2 text-sm text-slate-500">
        The more context you give, the more useful our first reply will be.
      </p>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <Field label="Full name" required value={form.name} onChange={set("name")} />
        <Field label="Work email" type="email" required value={form.email} onChange={set("email")} />
        <Field label="Company" value={form.company} onChange={set("company")} />
        <Field label="Country" value={form.country} onChange={set("country")} />
        <Select label="What do you need?" options={INTERESTS} value={form.interest} onChange={set("interest")} />
        <Select label="Budget range" options={BUDGETS} value={form.budget} onChange={set("budget")} />
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink">
          What are you trying to build or fix? <span className="text-accent-600">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => set("message")(e.target.value)}
          placeholder="A few sentences about the product, the problem or the situation you're in…"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
        />
      </div>

      <button type="submit" className="btn-primary mt-6 w-full text-base">
        Send message
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <p className="mt-4 text-center text-xs leading-relaxed text-slate-400">
        We reply within one business day. Happy to sign an NDA before you share details —
        just say so in the message.
      </p>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink">
        {label} {required && <span className="text-accent-600">*</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
      />
    </div>
  );
}

function Select({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  const id = label.toLowerCase().replace(/[^a-z]+/g, "-");
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-ink outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
