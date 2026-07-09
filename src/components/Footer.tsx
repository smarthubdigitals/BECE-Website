import { ChevronUp, Facebook, Twitter, Instagram, Linkedin, MessageSquare } from 'lucide-react';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    { name: 'WhatsApp', href: 'https://wa.me/233241234567', icon: MessageSquare, color: 'hover:text-emerald-cta hover:bg-emerald-cta/10' },
    { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:text-royal hover:bg-royal/10' },
    { name: 'Instagram', href: '#', icon: Instagram, color: 'hover:text-pink-500 hover:bg-pink-500/10' },
    { name: 'Facebook', href: '#', icon: Facebook, color: 'hover:text-blue-600 hover:bg-blue-600/10' },
    { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:text-cyan-accent hover:bg-cyan-accent/10' },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy border-t border-white/10 text-white py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left - Branding */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <div className="w-8 h-8 rounded bg-royal flex items-center justify-center overflow-hidden">
                <img 
                  src="https://imgur.com/VIOgWUK.jpg" 
                  alt="Abdul Waheed Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-poppins font-bold text-base tracking-wide">
                Abdul Waheed
              </span>
            </div>
            <p className="font-sans text-xs text-gray-400 max-w-sm leading-relaxed">
              Young ICT & Digital Skills Specialist. Building professional designs and website solutions for local enterprises.
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex flex-col items-center space-y-3">
            <span className="font-poppins font-bold text-xs uppercase tracking-wider text-gray-500">
              Connect With Me
            </span>
            <div className="flex space-x-3">
              {socials.map((soc) => {
                const IconComponent = soc.icon;
                return (
                  <a
                    key={soc.name}
                    href={soc.href}
                    className={`w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 ${soc.color}`}
                    aria-label={`Visit Abdul Waheed on ${soc.name}`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right - Back to Top */}
          <div className="flex flex-col items-center md:items-end">
            <button
              id="footer-scroll-top"
              onClick={handleScrollTop}
              className="w-10 h-10 rounded-full bg-royal hover:bg-cyan-accent hover:text-navy text-white flex items-center justify-center shadow-lg hover:shadow-royal/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
            <span className="font-poppins text-[10px] text-gray-400 uppercase tracking-widest mt-2">
              Back To Top
            </span>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-10 pt-6 border-t border-white/5 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-gray-400">
            &copy; {year} Abdul Waheed. All rights reserved.
          </p>
          <p className="font-sans text-xs text-cyan-accent font-semibold tracking-wide">
            Building Digital Solutions Through Creativity and Technology.
          </p>
        </div>

      </div>
    </footer>
  );
}
