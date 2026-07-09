import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Download, Award, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  onViewWorkClick: () => void;
  onContactClick: () => void;
}

export default function Hero({ onViewWorkClick, onContactClick }: HeroProps) {
  // Define animation states
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 80, damping: 20, delay: 0.4 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-navy text-white overflow-hidden"
    >
      {/* Background visual graphics */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-royal/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-accent/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/[0.03] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/[0.05] border-dashed rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col space-y-6 text-left"
          >
            {/* Young Entrepreneur Badge */}
            <motion.div variants={itemVariants} className="self-start">
              <span className="inline-flex items-center space-x-2 bg-royal/20 border border-royal/40 px-3.5 py-1.5 rounded-full text-cyan-accent font-poppins text-xs font-semibold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5 animate-pulse text-cyan-accent" />
                <span>Available for Projects</span>
              </span>
            </motion.div>

            {/* Name Heading */}
            <motion.div variants={itemVariants}>
              <span className="block text-gray-400 font-poppins font-semibold text-lg sm:text-xl uppercase tracking-wider leading-none mb-2">
                Hello, I am
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-bold tracking-tight text-white leading-tight">
                Abdul <span className="text-royal">Waheed</span>
              </h1>
            </motion.div>

            {/* Tagline list */}
            <motion.div variants={itemVariants} className="border-l-4 border-cyan-accent pl-4 py-1">
              <p className="font-poppins font-bold text-lg sm:text-xl md:text-2xl text-cyan-accent leading-relaxed">
                Young ICT & Digital Skills Specialist
              </p>
              <p className="font-sans font-medium text-sm sm:text-base text-gray-300 mt-1">
                Graphic Designer <span className="text-cyan-accent">•</span> Content Creator <span className="text-cyan-accent">•</span> Website Designer
              </p>
            </motion.div>

            {/* Bio Introduction */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl"
            >
              I am Abdul Waheed, a passionate young digital creator dedicated to helping individuals and small businesses establish a strong digital presence through graphic design, content creation, website design, and modern digital solutions.
            </motion.p>

            {/* Local Client Highlights */}
            <motion.div 
              variants={itemVariants} 
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 pb-4 text-xs font-poppins font-medium text-gray-400"
            >
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-cta" />
                <span>Small Businesses</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-cta" />
                <span>Schools & NGOs</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-cta" />
                <span>Churches & Individuals</span>
              </div>
            </motion.div>

            {/* CTA Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <button
                id="hero-cta-work"
                onClick={onViewWorkClick}
                className="flex items-center justify-center space-x-2 bg-royal hover:bg-royal/90 text-white px-8 py-3.5 rounded-full font-poppins font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-royal/25 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                id="hero-cta-contact"
                onClick={onContactClick}
                className="flex items-center justify-center space-x-2 bg-transparent border-2 border-white/20 hover:border-cyan-accent hover:bg-white/5 text-white px-8 py-3.5 rounded-full font-poppins font-semibold text-base transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 text-cyan-accent" />
                <span>Contact Me</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Hero Image Column */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Outer Decorative Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-accent/30 animate-[spin_60s_linear_infinite]" />
              <div className="absolute -inset-4 rounded-full border border-white/5 animate-[spin_40s_linear_infinite_reverse]" />
              
              {/* Glowing Ambient Drops */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-royal/40 rounded-full blur-[40px] -z-10" />
              <div className="absolute bottom-4 left-0 w-32 h-32 bg-cyan-accent/30 rounded-full blur-[40px] -z-10" />

              {/* Central Portrait Container */}
              <div className="absolute inset-4 rounded-3xl overflow-hidden border-2 border-white/10 bg-navy-light shadow-2xl group">
                <img
                  src="https://imgur.com/Ciqw6ij.jpg"
                  alt="Abdul Waheed - Young Digital Creator Profile"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Embedded floating badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-navy/80 backdrop-blur-md border border-white/10 p-3.5 rounded-xl flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-royal/20 text-cyan-accent">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-xs text-white leading-tight">Ghana-based</h4>
                    <p className="font-sans text-[10px] text-gray-400 mt-0.5">Serving clients worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
