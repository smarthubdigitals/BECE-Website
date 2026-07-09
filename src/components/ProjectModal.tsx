import { X, Calendar, User, Hammer, Milestone, ExternalLink } from 'lucide-react';
import { Project } from '../types';
import { motion } from 'motion/react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Black Translucent Overlay */}
      <div 
        className="absolute inset-0 bg-navy/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: 'spring', duration: 0.4 }}
        className="relative bg-white text-dark-gray w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col z-10 border border-gray-100"
      >
        {/* Header Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-navy/60 hover:bg-navy text-white hover:scale-105 transition-all duration-200 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content wrapper */}
        <div className="overflow-y-auto flex-1">
          {/* Top Banner Image */}
          <div className="relative h-56 sm:h-72 w-full bg-gray-100 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <span className="inline-block bg-cyan-accent text-navy text-[10px] font-poppins font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-2">
                {project.category}
              </span>
              <h3 className="font-poppins font-bold text-xl sm:text-2xl md:text-3xl">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Details Panels */}
          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left Content column */}
            <div className="md:col-span-8 space-y-5">
              <div>
                <h4 className="font-poppins font-bold text-sm uppercase tracking-wider text-gray-400 mb-2">
                  Project Description
                </h4>
                <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Measurable Project Impact */}
              {project.impact && (
                <div className="bg-emerald-cta/10 border border-emerald-cta/30 rounded-xl p-4 flex items-start space-x-3">
                  <div className="p-1.5 rounded-lg bg-emerald-cta/20 text-emerald-cta">
                    <Milestone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-poppins font-bold text-xs text-navy uppercase tracking-wider">
                      Project Outcome & Impact
                    </h5>
                    <p className="font-sans text-xs sm:text-sm text-gray-700 mt-1">
                      {project.impact}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Right metadata column */}
            <div className="md:col-span-4 bg-gray-50 border border-gray-100 p-5 rounded-2xl space-y-5 self-start">
              <h4 className="font-poppins font-bold text-xs uppercase tracking-wider text-navy pb-2 border-b border-gray-200">
                Project Profile
              </h4>

              <div className="space-y-4">
                {/* Client Profile */}
                <div className="flex items-start space-x-2.5 text-xs text-gray-600">
                  <User className="w-4 h-4 text-royal mt-0.5 shrink-0" />
                  <div>
                    <p className="font-poppins font-bold text-gray-400">Client Category</p>
                    <p className="font-sans text-gray-800 mt-0.5 font-medium">{project.clientType}</p>
                  </div>
                </div>

                {/* Completed Date */}
                {project.completedDate && (
                  <div className="flex items-start space-x-2.5 text-xs text-gray-600">
                    <Calendar className="w-4 h-4 text-royal mt-0.5 shrink-0" />
                    <div>
                      <p className="font-poppins font-bold text-gray-400">Date Delivered</p>
                      <p className="font-sans text-gray-800 mt-0.5 font-medium">{project.completedDate}</p>
                    </div>
                  </div>
                )}

                {/* Software / Tools */}
                <div className="flex items-start space-x-2.5 text-xs text-gray-600">
                  <Hammer className="w-4 h-4 text-royal mt-0.5 shrink-0" />
                  <div>
                    <p className="font-poppins font-bold text-gray-400">Tools Implemented</p>
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {project.tools.map((tool, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="bg-royal/10 text-royal px-2 py-0.5 rounded-md font-mono text-[10px] font-semibold"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Simulated project click */}
              <button
                onClick={() => alert(`This is a mock project page demonstrating Abdul Waheed's competence in delivering high-quality ${project.category} solutions for his clients.`)}
                className="w-full mt-4 bg-royal hover:bg-royal/90 text-white py-2.5 rounded-xl font-poppins font-semibold text-xs flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
              >
                <span>Live Preview</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
