import { motion } from 'motion/react';
import { Palette, PenTool, Globe, Video, Cpu, ShieldAlert, Sparkles, Server } from 'lucide-react';
import { skillGroups, additionalSkills } from '../data';

// Map icon strings to Lucide components
const iconMap: { [key: string]: any } = {
  Palette: Palette,
  PenTool: PenTool,
  Globe: Globe,
  Video: Video,
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="skills" className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-accent rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-royal rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-poppins text-xs font-bold text-cyan-accent uppercase tracking-widest bg-cyan-accent/10 px-3 py-1.5 rounded-full">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-white mt-3 tracking-tight">
            My Digital Toolkit
          </h2>
          <p className="font-sans text-sm text-gray-400 mt-2">
            A comprehensive overview of creative digital design capabilities and foundational ICT competencies.
          </p>
          <div className="w-16 h-1 mt-4 bg-royal mx-auto rounded-full" />
        </div>

        {/* Featured Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {skillGroups.map((group, idx) => {
            const IconComp = iconMap[group.iconName] || Palette;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-cyan-accent/30 p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-cyan-accent/5 group flex flex-col justify-between"
              >
                <div>
                  {/* Icon Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-royal/10 border border-royal/30 flex items-center justify-center text-cyan-accent group-hover:bg-cyan-accent group-hover:text-navy transition-all duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-poppins font-bold text-lg sm:text-xl text-white">
                        {group.category}
                      </h3>
                      <p className="font-sans text-xs text-cyan-accent font-medium">
                        Creative Sub-Specialties
                      </p>
                    </div>
                  </div>

                  <p className="font-sans text-sm text-gray-400 mb-6 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Bullet List Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {group.items.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center space-x-2 bg-white/5 py-2 px-3 rounded-lg border border-white/[0.02] hover:border-royal/30 transition-all duration-200"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-accent" />
                        <span className="font-sans text-xs text-gray-200 font-medium">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Skills Divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-navy px-4 font-poppins text-xs font-bold text-cyan-accent uppercase tracking-wider">
              Foundational ICT & Digital Tools
            </span>
          </div>
        </div>

        {/* Additional Skills Badge Cloud */}
        <div className="bg-white/[0.02] border border-white/5 p-6 sm:p-8 rounded-2xl text-center max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center space-x-2 bg-navy border border-white/10 hover:border-cyan-accent hover:text-cyan-accent px-4 py-2 rounded-xl text-xs sm:text-sm font-sans font-medium text-gray-300 transition-all duration-200 cursor-default shadow-sm"
              >
                <Cpu className="w-3.5 h-3.5 text-royal" />
                <span>{skill}</span>
              </motion.span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
