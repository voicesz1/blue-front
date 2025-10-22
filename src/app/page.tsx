"use client";
import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import WhyBlue from "../components/WhyBlue";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorks from "../components/HowItWorks";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import AppDownload from "../components/AppDownload";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import TravelPlanModal from "../components/TravelPlanModal";

export default function HomePage() {
  const [openPlan, setOpenPlan] = useState(false);
  return (
    <main>
      <Header onPlanificar={() => setOpenPlan(true)} />
      <Hero onPlanificar={() => setOpenPlan(true)} />
      <ServicesSection />
      <WhyBlue />
      <FeaturesSection />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <AppDownload />
      <CTASection />
      <Footer />
      <TravelPlanModal open={openPlan} onClose={() => setOpenPlan(false)} />
    </main>
  );
}