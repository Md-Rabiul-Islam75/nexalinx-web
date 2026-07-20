import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { Pillars } from "@/components/Pillars";
import { Proof } from "@/components/Proof";
import { RiskReversal } from "@/components/RiskReversal";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Pillars />
        <Proof />
        <RiskReversal />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
