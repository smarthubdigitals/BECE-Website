import { Quote, Star } from 'lucide-react';
import { testimonials } from '../data';
import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Visual abstract overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-dashed border-white rounded-full animate-[spin_120s_linear_infinite]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-poppins text-xs font-bold text-cyan-accent uppercase tracking-widest bg-cyan-accent/10 px-3 py-1.5 rounded-full">
            Social Proof
          </span>
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-white mt-3 tracking-tight">
            Client Reviews & Testimonials
          </h2>
          <p className="font-sans text-sm text-gray-400 mt-2">
            Hear from local schools, NGOs, and businesses who have partnered with me for creative solutions.
          </p>
          <div className="w-16 h-1 mt-4 bg-royal mx-auto rounded-full" />
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative group hover:bg-white/[0.05] hover:border-royal/30 transition-all duration-300 shadow-md"
            >
              {/* Floating Quote Icon */}
              <div className="absolute top-6 right-8 text-white/5 group-hover:text-cyan-accent/10 transition-colors">
                <Quote className="w-10 h-10 transform scale-x-[-1]" />
              </div>

              <div>
                {/* Stars Indicator */}
                <div className="flex space-x-1 mb-5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="font-sans text-sm sm:text-base text-gray-300 italic leading-relaxed mb-6">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="flex items-center space-x-3.5 pt-5 border-t border-white/5">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-600 border border-white/10">
                  <img
                    src={test.avatar}
                    alt={test.author}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-sm text-white leading-tight">
                    {test.author}
                  </h4>
                  <p className="font-sans text-[11px] text-cyan-accent font-medium mt-0.5">
                    {test.role}, <span className="text-gray-400 font-normal">{test.organization}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
