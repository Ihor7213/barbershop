import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Masters from "@/components/Masters";
import Beard from "@/components/Beard";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Services />
      <Stats />
      <Masters />
      <Beard />
      <ContactForm />
      <Footer />
    </main>
  );
}
