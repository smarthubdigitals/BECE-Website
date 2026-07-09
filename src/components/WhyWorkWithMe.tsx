import { Sparkles, Zap, Eye, Cpu, Heart, Check } from 'lucide-react';
import { whyWorkWithMe } from '../data';
import { motion } from 'motion/react';

const iconMap: { [key: string]: any } = {
  Sparkles: Sparkles,
  Zap: Zap,
  Eye: Eye,
  Cpu: Cpu,
  Heart: Heart,
};

export default function WhyWorkWithMe() {
  return (
    <section id="why-me" className="py-24 bg-soft-white text-dark-gray relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-poppins text-xs font-bold text-royal uppercase tracking-widest bg-royal/10 px-3 py-1.5 rounded-full">
            My Strengths
          </span>
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-navy mt-3 tracking-tight">
            Why Work With Me?
          </h2>
          <p className="font-sans text-sm text-gray-500 mt-2">
            Blending youth-driven creative energy with a solid digital foundation to elevate your brand presence.
          </p>
          <div className="w-16 h-1 mt-4 bg-cyan-accent mx-auto rounded-full" />
        </div>

        {/* Why Choose Me Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
          {whyWorkWithMe.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Sparkles;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group text-center hover:-translate-y-1"
              >
                <div>
                  {/* Icon Circle */}
                  <div className="w-12 h-12 rounded-full bg-royal/5 text-royal mx-auto flex items-center justify-center mb-5 group-hover:bg-royal group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="font-poppins font-bold text-base text-navy mb-3 group-hover:text-royal transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Micro Metric Badge */}
                <div className="pt-3 border-t border-gray-50 inline-flex items-center justify-center space-x-1.5 text-[10px] font-poppins font-bold text-emerald-cta uppercase tracking-widest">
                  <Check className="w-3.5 h-3.5" />
                  <span>{item.stat}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Added professional trust banner */}
        <div className="mt-16 bg-navy text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-white/5">
          <div className="text-center sm:text-left">
            <h4 className="font-poppins font-bold text-lg text-white">
              Ready to Kickstart a Digital Campaign with Me?
            </h4>
            <p className="font-sans text-xs sm:text-sm text-gray-400 mt-1">
              Affordable, reliable designs tailored specifically for small business budgets and local projects.
            </p>
          </div>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-emerald-cta hover:bg-emerald-cta/90 text-white font-poppins font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-emerald-cta/25 shrink-0 cursor-pointer"
          >
            Schedule Free Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
