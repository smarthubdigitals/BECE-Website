import { Palette, Globe, PenTool, Video, CheckCircle2 } from 'lucide-react';
import { services } from '../data';
import ServiceEstimator from './ServiceEstimator';

// Map icon names to Lucide icons
const iconMap: { [key: string]: any } = {
  Palette: Palette,
  Globe: Globe,
  PenTool: PenTool,
  Video: Video,
};

interface ServicesProps {
  onQuoteRequested: (summary: string) => void;
}

export default function Services({ onQuoteRequested }: ServicesProps) {
  return (
    <section id="services" className="py-24 bg-soft-white text-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-poppins text-xs font-bold text-royal uppercase tracking-widest bg-royal/10 px-3 py-1.5 rounded-full">
            What I Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-navy mt-3 tracking-tight">
            Professional Services & Solutions
          </h2>
          <p className="font-sans text-sm text-gray-500 mt-2">
            Providing polished digital deliverables tailored for schools, NGOs, churches, and growing brands.
          </p>
          <div className="w-16 h-1 mt-4 bg-cyan-accent mx-auto rounded-full" />
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {services.map((srv) => {
            const IconComponent = iconMap[srv.iconName] || Palette;
            return (
              <div
                key={srv.id}
                className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group"
              >
                {/* Decorative Accent Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-royal/5 rounded-bl-[100px] rounded-tr-2xl group-hover:bg-cyan-accent/10 transition-colors" />

                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-royal/10 border border-royal/20 flex items-center justify-center text-royal group-hover:bg-royal group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-poppins font-bold text-lg sm:text-xl text-navy">
                        {srv.title}
                      </h3>
                      <span className="inline-block text-[10px] font-poppins font-semibold text-emerald-cta uppercase tracking-wider bg-emerald-cta/10 px-2 py-0.5 rounded-full mt-1">
                        {srv.priceEstimate}
                      </span>
                    </div>
                  </div>

                  <p className="font-sans text-sm text-gray-600 mb-6 leading-relaxed">
                    {srv.description}
                  </p>

                  {/* Features Bullet List */}
                  <ul className="space-y-3">
                    {srv.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-cta mt-0.5 shrink-0" />
                        <span className="font-sans text-xs sm:text-sm text-gray-600 leading-normal">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer Action */}
                <div className="pt-8 mt-6 border-t border-gray-100 flex items-center justify-between text-xs font-poppins font-bold text-royal group-hover:text-cyan-accent transition-colors">
                  <span>Fast Turnaround Guaranteed</span>
                  <span>Learn More &rarr;</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Embedded Cost & Package Estimator Component */}
        <div className="mt-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-poppins font-bold text-xl sm:text-2xl text-navy">
              Estimate Your Own Custom Package
            </h3>
            <p className="font-sans text-xs sm:text-sm text-gray-500 mt-2">
              Combine services to form a custom campaign. Adjust your delivery timelines, and lock in the plan to contact Abdul instantly.
            </p>
          </div>
          <ServiceEstimator onQuoteRequested={onQuoteRequested} />
        </div>

      </div>
    </section>
  );
}
