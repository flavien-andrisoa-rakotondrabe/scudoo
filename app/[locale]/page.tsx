import NavBar from "@/components/utils/NavBar";
import Hero from "@/components/landing/Hero";
import Vision from "@/components/landing/Vision";
import Ecosystem from "@/components/landing/Ecosystem";
import Careers from "@/components/landing/Careers";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen">
      <NavBar />
      <main>
        <Hero />
        <Vision />
        <Ecosystem />
        <Careers />
      </main>
      <Footer />
    </div>
  );
}
