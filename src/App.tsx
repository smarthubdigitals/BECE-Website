import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Transfer custom quote package summaries from Estimator to Contact form
  const [customQuoteSummary, setCustomQuoteSummary] = useState<string>('');

  const handleQuoteRequested = (summaryText: string) => {
    setCustomQuoteSummary(summaryText);
    
    // Smoothly scroll down to the Contact Section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClearCustomSummary = () => {
    setCustomQuoteSummary('');
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-soft-white text-dark-gray font-sans antialiased overflow-x-hidden">
      {/* Sticky Top Header Navigation */}
      <Header onContactClick={scrollToContact} />

      {/* Main Page Layout Sections */}
      <main>
        {/* Hero Section */}
        <Hero 
          onViewWorkClick={scrollToPortfolio} 
          onContactClick={scrollToContact} 
        />

        {/* About Me Section */}
        <About />

        {/* Core Skills Directory */}
        <Skills />

        {/* Services & Package Cost Estimator */}
        <Services onQuoteRequested={handleQuoteRequested} />

        {/* Creative Work Showcase */}
        <Portfolio />

        {/* Value Proposition Highlights */}
        <WhyWorkWithMe />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Lead Generation & Contact Form */}
        <Contact 
          customServiceSummary={customQuoteSummary} 
          onClearCustomSummary={handleClearCustomSummary} 
        />
      </main>

      {/* Footer Branding & Links */}
      <Footer />
    </div>
  );
}
