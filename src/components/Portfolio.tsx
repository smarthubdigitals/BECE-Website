import { useState } from 'react';
import { projects } from '../data';
import { Project } from '../types';
import ProjectModal from './ProjectModal';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, ExternalLink, SlidersHorizontal } from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Graphic Design' | 'Website Design' | 'Content Creation' | 'Video Editing'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: Array<'All' | 'Graphic Design' | 'Website Design' | 'Content Creation' | 'Video Editing'> = [
    'All',
    'Graphic Design',
    'Website Design',
    'Content Creation',
    'Video Editing',
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute bottom-12 right-12 w-[500px] h-[500px] bg-royal rounded-full blur-[120px]" />
        <div className="absolute top-12 left-12 w-[300px] h-[300px] bg-cyan-accent rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-poppins text-xs font-bold text-cyan-accent uppercase tracking-widest bg-cyan-accent/10 px-3 py-1.5 rounded-full">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-white mt-3 tracking-tight">
            My Creative Portfolio
          </h2>
          <p className="font-sans text-sm text-gray-400 mt-2">
            Explore recently completed projects built for local enterprises, educational workshops, and NGOs.
          </p>
          <div className="w-16 h-1 mt-4 bg-royal mx-auto rounded-full" />
        </div>

        {/* Filter Category Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <div className="flex items-center space-x-2 mr-2 text-gray-400 text-xs sm:text-sm font-poppins font-semibold">
            <SlidersHorizontal className="w-4 h-4 text-cyan-accent" />
            <span className="hidden sm:inline">Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              id={`portfolio-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl font-poppins font-medium text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-royal text-white font-bold shadow-lg shadow-royal/20 scale-105'
                  : 'bg-white/[0.04] border border-white/5 hover:border-white/20 text-gray-300 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid with Framer Motion AnimatePresence */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => setSelectedProject(project)}
                className="bg-white/[0.03] rounded-2xl border border-white/5 hover:border-cyan-accent/30 overflow-hidden cursor-pointer group hover:shadow-xl hover:shadow-cyan-accent/5 transition-all duration-300"
              >
                {/* Project Image Wrapper */}
                <div className="relative h-48 overflow-hidden bg-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Black Overlay on Hover */}
                  <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                    <div className="p-3 bg-white rounded-full text-navy shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Category Pill Tag */}
                  <span className="absolute top-4 left-4 bg-navy/85 backdrop-blur-md border border-white/10 text-cyan-accent text-[10px] font-poppins font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Project Text Metadata */}
                <div className="p-5 flex flex-col justify-between h-48">
                  <div>
                    <h3 className="font-poppins font-bold text-lg text-white mb-2 leading-snug group-hover:text-cyan-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-gray-400 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Action Link Row */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-poppins font-semibold text-royal group-hover:text-cyan-accent transition-colors">
                    <span>View Project Specifications</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
