import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, Languages } from 'lucide-react';

export default function EducationSection() {
  const leftColumn = [
    {
      institution: "UNICESSUMAR",
      title: "Ciência de Dados",
      subtitle: "Duração • 2023 - 2027",
      icon: GraduationCap,
      color: "bg-blue-50 text-blue-600 border-blue-200"
    },
    {
      institution: "UNINTER",
      title: "Cibersegurança",
      subtitle: "Duração • 2025 - 2027",
      icon: GraduationCap,
      color: "bg-cyan-50 text-cyan-600 border-cyan-200"
    },
    {
      institution: "EBAC",
      title: "Full Stack Python",
      subtitle: "Especialização Computacional",
      icon: BookOpen,
      color: "bg-emerald-50 text-emerald-600 border-emerald-200"
    }
  ];

  const rightColumn = [
    {
      institution: "Hashtag Treinamentos",
      title: "Imersão Python",
      subtitle: "Desenvolvimento de Scripts E2E",
      icon: Award,
      color: "bg-amber-50 text-amber-600 border-amber-200"
    },
    {
      institution: "Nivel de Inglês",
      title: "Inglês Intermediário",
      subtitle: "B1",
      icon: Languages,
      color: "bg-indigo-50 text-indigo-600 border-indigo-200"
    }
  ];

  return (
    <motion.section 
      className="py-16 bg-cyber-bg/50 dark:bg-slate-950/40 border-y border-cyber-border text-left transition-colors duration-300"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Title */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 text-cyber-neon font-mono text-xs uppercase tracking-wider font-bold mb-3 transition-colors duration-300">
            <GraduationCap className="w-4 h-4" />
            <span>Formação Acadêmica</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-cyber-text tracking-tight transition-colors duration-300">
            Formação & Certificações
          </h2>
        </div>

        {/* Binary Columns as in image reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          
          {/* Left Block Column */}
          <div className="space-y-6">
            {leftColumn.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div key={index} className="flex gap-4 items-start pb-6 border-b border-cyber-border last:border-none last:pb-0 transition-colors duration-300">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center border shrink-0 ${item.color} transition-colors duration-300`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-cyber-text text-lg leading-tight flex items-center gap-1.5 flex-wrap transition-colors duration-300">
                      <span>{item.institution}</span>
                      <span className="text-cyber-muted font-normal transition-colors duration-300">|</span>
                      <span className="font-sans font-bold text-cyber-text text-sm transition-colors duration-300">{item.title}</span>
                    </h3>
                    <p className="text-[11px] font-mono font-semibold text-cyber-muted uppercase mt-1 tracking-wider transition-colors duration-300">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Block Column */}
          <div className="space-y-6">
            {rightColumn.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div key={index} className="flex gap-4 items-start pb-6 border-b border-cyber-border last:border-none last:pb-0 transition-colors duration-300">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center border shrink-0 ${item.color} transition-colors duration-300`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-cyber-text text-lg leading-tight flex items-center gap-1.5 flex-wrap transition-colors duration-300">
                      <span>{item.institution}</span>
                      <span className="text-cyber-muted font-normal transition-colors duration-300">|</span>
                      <span className="font-sans font-bold text-cyber-text text-sm transition-colors duration-300">{item.title}</span>
                    </h3>
                    <p className="text-[11px] font-mono font-semibold text-cyber-muted uppercase mt-1 tracking-wider transition-colors duration-300">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </motion.section>
  );
}
