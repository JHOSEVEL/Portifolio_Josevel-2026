import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, CheckCircle2, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data';

export default function ExperienceSection() {
  const experiences = portfolioData.experiences;

  return (
    <motion.section 
      id="experiencia" 
      className="py-16 sm:py-20 px-4 max-w-7xl mx-auto text-left scroll-mt-20"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      
      {/* Heading */}
      <div className="mb-14">
        <div className="flex items-center space-x-2 text-cyber-neon font-mono text-xs uppercase tracking-wider font-bold mb-3 transition-colors duration-300">
          <Briefcase className="w-4 h-4" />
          <span>Histórico Profissional</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-black text-cyber-text tracking-tight transition-colors duration-300">
          Experiência Profissional
        </h2>
        <p className="text-cyber-muted text-xs sm:text-sm mt-2 font-medium transition-colors duration-300">
          Dedicando mais de uma década ao controle de confiabilidade sistêmica e validações rígidas de layouts e lógicas.
        </p>
      </div>

      <div className="space-y-10 md:space-y-12">
        {experiences.map((exp, idx) => (
          <div 
            key={idx}
            className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 pb-10 border-b border-cyber-border last:border-none last:pb-0 relative transition-colors duration-300"
          >
            
            {/* Left Column - Company Block */}
            <div className="md:col-span-4 space-y-3">
              <div className="inline-block bg-cyber-card text-cyber-text rounded-2xl px-5 py-4 w-full border border-cyber-border shadow-sm relative overflow-hidden transition-colors duration-300">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-cyber-neon" />
                <h3 className="text-xl font-display font-extrabold tracking-tight">
                  {exp.company}
                </h3>
                <p className="text-[10px] font-mono text-cyber-muted mt-1 uppercase tracking-wider transition-colors duration-300">
                  Organização Registrada
                </p>
              </div>
              
              <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-cyber-muted uppercase px-1 transition-colors duration-300">
                <MapPin className="w-3.5 h-3.5 text-cyber-neon" />
                <span>{exp.location}</span>
              </div>
            </div>

            {/* Right Column - Role and Activities Info */}
            <div className="md:col-span-8 space-y-4">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-cyber-border">
                <h4 className="text-lg font-display font-black text-cyber-text">
                  {exp.role}
                </h4>
                
                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-cyber-neon bg-cyber-border-subtle/30 border border-cyber-border px-3 py-1 rounded-full uppercase shrink-0 transition-colors duration-300">
                  <Calendar className="w-3 h-3 text-cyber-neon" />
                  {exp.period}
                </span>
              </div>

              {/* Position short overview */}
              <p className="text-cyber-muted font-serif text-sm sm:text-base leading-relaxed transition-colors duration-300">
                {exp.description}
              </p>

              {/* Specific Acts bullets */}
              <div className="space-y-3 pt-2">
                <div className="text-[10px] font-mono font-bold tracking-widest text-cyber-muted uppercase transition-colors duration-300">Principais Atuações e Resultados:</div>
                <ul className="space-y-2.5">
                  {exp.achievements.map((ach, achIdx) => (
                    <li key={achIdx} className="flex items-start text-xs sm:text-sm font-serif text-cyber-text leading-relaxed transition-colors duration-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mr-3 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies tag cloud inside this experience block */}
              <div className="flex flex-wrap gap-1.5 pt-5">
                {exp.tags.map((tag, tagIdx) => (
                  <span 
                    key={tagIdx}
                    className="text-[10px] font-mono bg-cyber-border-subtle/40 border border-cyber-border text-cyber-text px-3 py-1 rounded-md transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>

          </div>
        ))}
      </div>

    </motion.section>
  );
}
