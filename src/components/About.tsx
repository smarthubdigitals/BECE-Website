import { motion } from 'motion/react';
import { BookOpen, GraduationCap, Laptop, Compass, Heart, ArrowRight } from 'lucide-react';

export default function About() {
  const milestones = [
    {
      year: 'Recent Milestone',
      title: 'WAEC BECE Completion',
      desc: 'Completed the West African Examinations Council Basic Education Certificate Examination with excellent results, building a strong academic foundation.',
      icon: GraduationCap,
      color: 'bg-royal text-white',
    },
    {
      year: 'Active Focus',
      title: 'ICT & Digital Skill Acceleration',
      desc: 'Enrolled in practical digital programs, masteries, and AI-assisted tooling workshops to establish industry-grade tech capabilities.',
      icon: Laptop,
      color: 'bg-cyan-accent text-navy',
    },
    {
      year: 'Our Mission',
      title: 'Helping Businesses Grow',
      desc: 'Synthesizing creative graphic designs, videos, and modern landing pages to support local communities, NGOs, churches, and small ventures.',
      icon: Compass,
      color: 'bg-emerald-cta text-white',
    },
  ];

  const values = [
    {
      title: 'Continuous Learning',
      desc: 'Always reading, practice coding, and trying out new AI tools to deliver cutting-edge results.',
    },
    {
      title: 'Quality First',
      desc: 'Never rushing. Taking the time to understand your targets and perfecting details to ensure growth.',
    },
    {
      title: 'Creative Passion',
      desc: 'Believing that every local shop, church, and school deserves premium-grade, beautiful design.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-soft-white text-dark-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-poppins text-xs font-bold text-royal uppercase tracking-widest bg-royal/10 px-3 py-1.5 rounded-full">
            Who I Am
          </span>
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-navy mt-3 tracking-tight">
            About Abdul Waheed
          </h2>
          <div className="w-16 h-1 mt-4 bg-cyan-accent mx-auto rounded-full" />
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Biography */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-poppins font-bold text-navy">
              A Passionate Young Digital Creator & Tech Enthusiast
            </h3>
            
            <p className="font-sans text-base text-gray-600 leading-relaxed">
              I recently completed my **WAEC BECE** examinations in Ghana, marks a pivot towards my true calling—technology. I am currently focusing my entire daily energy on learning, developing, and deploying world-class ICT and digital skills.
            </p>
            
            <p className="font-sans text-base text-gray-600 leading-relaxed">
              For me, technology isn&apos;t just about screens; it&apos;s about creating opportunities. I believe that small businesses, schools, churches, and non-profits deserve modern tools to share their messages. I bridge that gap by designing professional, affordable digital content.
            </p>

            {/* Core Values Rows */}
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <h4 className="font-poppins font-bold text-sm uppercase text-gray-500 tracking-wider">
                My Core Commitments
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {values.map((val, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <h5 className="font-poppins font-semibold text-sm text-navy">{val.title}</h5>
                    <p className="font-sans text-xs text-gray-500 mt-1 leading-relaxed">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Milestone Timeline */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl shadow-xl shadow-navy/5 border border-gray-100">
            <h3 className="text-xl font-poppins font-bold text-navy mb-8 flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-royal" />
              <span>My Growth Timeline & Milestones</span>
            </h3>

            {/* Timeline */}
            <div className="relative border-l-2 border-gray-100 pl-6 ml-3 space-y-8">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Circle icon */}
                    <div className={`absolute -left-[37px] top-0.5 w-7 h-7 rounded-full flex items-center justify-center ${milestone.color} shadow-md`}>
                      <IconComponent className="w-4 h-4" />
                    </div>

                    {/* Timeline box */}
                    <div>
                      <span className="inline-block text-[10px] font-poppins font-bold text-royal bg-royal/10 px-2 py-0.5 rounded-full mb-1">
                        {milestone.year}
                      </span>
                      <h4 className="font-poppins font-bold text-base text-navy">
                        {milestone.title}
                      </h4>
                      <p className="font-sans text-sm text-gray-500 mt-1.5 leading-relaxed">
                        {milestone.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
