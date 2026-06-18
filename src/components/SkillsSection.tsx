import React from 'react';
import { motion } from 'motion/react';
import { 
  Database, 
  Github, 
  ShieldAlert
} from 'lucide-react';

function CustomSkillIcon({ name }: { name: string }) {
  if (name === "Playwright") {
    return (
      <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-600 shadow-xs">
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect cx="3" cy="11" width="18" height="10" rx="2" />
          <path d="M12 2v9M8 5h8" />
          <circle cx="8" cy="15" r="1.5" fill="currentColor" />
          <circle cx="16" cy="15" r="1.5" fill="currentColor" />
        </svg>
      </div>
    );
  }
  if (name === "Selenium") {
    return (
      <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white font-sans font-black flex items-center justify-center text-2xl tracking-tighter shadow-sm border border-emerald-700">
        Se
      </div>
    );
  }
  if (name === "Postman") {
    return (
      <div className="w-14 h-14 rounded-2xl bg-[#ff6c37]/10 border border-[#ff6c37]/25 flex items-center justify-center text-[#ff6c37] shadow-xs">
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      </div>
    );
  }
  if (name === "Jira" || name === "Jira_OWASP") {
    return (
      <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/25 flex items-center justify-center text-blue-600 shadow-xs">
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
          <path d="M11.5 13.5l3.5-3.5 3.5 3.5-3.5 3.5-3.5-3.5zm-5-5L10 5l3.5 3.5-3.5 3.5-3.5-3.5zm-5 5L5 10l3.5 3.5-3.5 3.5-3.5-3.5z" />
        </svg>
      </div>
    );
  }
  
  if (name === "Git/GitHub") {
    return (
      <div className="w-14 h-14 rounded-2xl bg-slate-950/10 border border-slate-900/20 flex items-center justify-center text-slate-900 shadow-xs">
        <Github className="w-7 h-7" />
      </div>
    );
  }
  if (name === "SQL") {
    return (
      <div className="w-14 h-14 rounded-2xl bg-cyan-600/10 border border-cyan-500/25 flex items-center justify-center text-cyan-500 shadow-xs">
        <Database className="w-7 h-7" />
      </div>
    );
  }
  if (name === "Python") {
    return (
      <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-xs">
        <svg viewBox="0 0 110 110" className="w-9 h-9">
          <path d="M54 2C32.18 2 17.03 5.48 11.22 11.28c-7.25 7.25-6.72 17.94-6.72 26.25v10.5h11.2v-3.5c0-11 5.91-16.1 16.59-16.1h21v-11.2H32.19c-3.12 0-3.12-4.59 0-4.59h35c10.4 0 16.1 5.91 16.1 16.59v9.8h11.2V26.78c0-8.31.53-19-6.72-26.25C82.06 4.72 71.37 2 54 2z" fill="#3776ab" />
          <path d="M56 108c21.82 0 36.97-3.48 42.78-9.28 7.25-7.25 6.72-17.94 6.72-26.25v-10.5H94.3v3.5c0 11-5.91 16.1-16.59 16.1H56.71v11.2h21.1c3.12 0 3.11 4.59 0 4.59H42.82c-10.4 0-16.11-5.91-16.11-16.59v-9.8H15.51v11.29c0 8.3-.53 19 6.72 26.25C27.94 105.28 38.63 108 56 108z" fill="#ffd343" />
          <circle cx="28" cy="24" r="5" fill="#fff" />
          <circle cx="82" cy="86" r="5" fill="#fff" />
        </svg>
      </div>
    );
  }
  if (name === "JavaScript") {
    return (
      <div className="w-14 h-14 rounded-2xl bg-[#ea580c] text-white font-sans font-black flex items-center justify-center text-xl tracking-tight shadow-xs border border-orange-600">
        JS
      </div>
    );
  }
  return null;
}

export default function SkillsSection() {
  const skillsList = [
    { name: "Playwright", subBadge: "Automação Júnior", level: 60 },
    { name: "Selenium", subBadge: "Testes E2E Júnior", level: 55 },
    { name: "Postman", subBadge: "Testes API Basico", level: 65 },
    { name: "Git/GitHub", subBadge: "Versionamento", level: 60 },
    { name: "SQL", subBadge: "Consultas Júnior", level: 50 },
    { name: "Python", subBadge: "Scripts Auxiliares", level: 40 },
    { name: "JavaScript", subBadge: "Lógica de Automação", level: 45 }
  ];

  return (
    <motion.section 
      id="habilidades" 
      className="py-16 sm:py-20 bg-cyber-bg/50 dark:bg-slate-950/40 border-y border-cyber-border scroll-mt-20 transition-colors duration-300"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title center */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-cyber-neon font-mono text-xs uppercase tracking-wider font-bold mb-3 transition-colors duration-300">
            <span className="w-1.5 h-1.5 bg-cyber-neon rounded-full animate-pulse" />
            <span>Ferramentas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-cyber-text tracking-tight transition-colors duration-300">
            Habilidades Técnicas
          </h2>
          <p className="text-cyber-muted text-xs sm:text-sm mt-3 font-medium transition-colors duration-300">
            Meu conhecimento nível Júnior em Automação de Testes (QA) e noções intrigantes de Segurança Preventiva e Pentesting.
          </p>
        </div>

        {/* Big Grid Layout matching image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main White Cards Grid (col-span-8) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {skillsList.map((skill, index) => {
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-cyber-card border border-cyber-border rounded-3xl p-5 flex flex-col items-center justify-between text-center shadow-xs cursor-pointer hover:shadow-md transition-all duration-300 min-h-[220px]"
                >
                  <div className="flex flex-col items-center justify-center">
                    <div className="mb-3">
                      <CustomSkillIcon name={skill.name} />
                    </div>
                    <span className="font-display font-bold text-sm text-cyber-text tracking-tight leading-tight transition-colors duration-300">
                      {skill.name}
                    </span>
                    <span className="text-[9px] font-mono text-cyber-muted uppercase mt-0.5 transition-colors duration-300">
                      {skill.subBadge}
                    </span>
                  </div>

                  {/* Horizontal Progress Bar under 70% */}
                  <div className="w-full mt-4 pt-3 border-t border-cyber-border-subtle space-y-1 text-left transition-colors duration-300">
                    <div className="flex justify-between text-[9px] font-mono text-cyber-muted font-bold transition-colors duration-300">
                      <span>Nível Júnior</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-cyber-border-subtle rounded-full overflow-hidden border border-cyber-border/40 transition-colors duration-300">
                      <div 
                        className="h-full bg-cyber-neon rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Featured Security Pentesting Highlight Card (col-span-4) */}
          <div className="lg:col-span-4">
            <div className="h-full bg-[#0b1329] text-white rounded-3xl p-8 flex flex-col justify-between shadow-lg shadow-blue-500/10 relative overflow-hidden text-left border border-blue-900/60">
              
              {/* background glows */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full filter blur-2xl pointer-events-none" />
              
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/35 border border-blue-500/30 flex items-center justify-center text-cyan-300 shadow-inner">
                  <ShieldAlert className="w-6 h-6 animate-pulse" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-display font-extrabold tracking-tight">
                  Noções de Pentesting
                </h3>
                
                <p className="text-blue-100 text-xs sm:text-sm font-serif leading-relaxed pr-2">
                  Varredura preventiva de vulnerabilidades em servidores Apache/Nginx, testes lógicos de autenticação e estudos aprofundados sobre vetores de ataque.
                </p>
              </div>

              {/* Badges details inside security card */}
              <div className="mt-8 space-y-2 font-mono text-[10px]">
                <div className="text-blue-300 uppercase block font-semibold tracking-wider">Metodologias Operacionais:</div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Nmap", "Hydra", "Wireshark", "Burp Suite", "OWASP Top 10"].map((tool, i) => (
                    <span key={i} className="bg-slate-950/70 border border-blue-500/20 px-2.5 py-1 rounded text-[9.5px] text-cyan-300 font-bold">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </motion.section>
  );
}
