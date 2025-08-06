import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FreeTest from "@/components/FreeTest";
import Levels from "@/components/Levels";
import Modalities from "@/components/Modalities";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="free-test">
          <FreeTest />
        </section>
        <section id="levels">
          <Levels />
        </section>
        <section id="modalities">
          <Modalities />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="cta">
          <CTA />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;