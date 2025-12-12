import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Profile from "@/components/Profile";
import ServiceSection from "@/components/ServiceSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Introduction />
      <Profile />
      <ServiceSection />
      <BlogSection />
      <CTASection />
      <Footer />
    </main>
  );
}
