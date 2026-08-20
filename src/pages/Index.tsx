import { FloatingNav } from "@/components/FloatingNav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { MartelinhoSpotlight } from "@/components/MartelinhoSpotlight";
import { Differentials } from "@/components/Differentials";
import { Numbers } from "@/components/Numbers";
import { InstagramSection } from "@/components/InstagramSection";
import { Testimonials } from "@/components/Testimonials";
import { Story } from "@/components/Story";
import { Units } from "@/components/Units";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

const Index = () => (
  <div className="min-h-screen bg-[#F6F5F2]">
    <FloatingNav />

    <main>
      <Hero />
      <Services />
      <MartelinhoSpotlight />
      <Differentials />
      <Numbers />
      <InstagramSection />
      <Testimonials />
      <Story />
      <Units />
      <FinalCta />
    </main>

    <Footer />
    <WhatsAppFab />
  </div>
);

export default Index;
