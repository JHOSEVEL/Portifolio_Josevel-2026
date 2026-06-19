import React from 'react';
import { motion } from 'motion/react';
import { FileText, Mail, MapPin, ShieldCheck, Cpu } from 'lucide-react';

interface HeroSectionProps {
  onVerCV: () => void;
  onContactClick: () => void;
}

export default function HeroSection({ onVerCV, onContactClick }: HeroSectionProps) {
  // Use the newly generated professional avatar path
  const avatarPath = "/src/assets/images/josevel alves silva.jpeg";

  return (
    <section id="home" className="py-8 sm:py-12 px-4 max-w-7xl mx-auto">
      <motion.div 
        className="relative rounded-3xl bg-slate-900 border border-slate-850 overflow-hidden shadow-2xl bg-gradient-to-br from-slate-950 via-[#0b1329] to-[#111e38]"
        initial={{ opacity: 0, scale: 0.98, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        
        {/* Grid pattern overlays */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        {/* Animated Light Blobs in the background */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[100px] pointer-events-none animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-14 relative z-10">
          
          {/* Avatar Area with Abstract Circuit Lines Decorator */}
          <motion.div 
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
            initial={{ opacity: 0, scale: 0.92, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl p-[1.5px] bg-gradient-to-tr from-blue-500 via-indigo-500 to-cyan-400 overflow-hidden shadow-xl group">
              <div className="absolute inset-0 bg-slate-950/20 mix-blend-color z-10 pointer-events-none rounded-2xl" />
              
              {/* Circuit SVG Lines Overlay */}
              <svg className="absolute inset-0 w-full h-full opacity-60 z-10 pointer-events-none" viewBox="0 0 350 350">
                <defs>
                  <linearGradient id="circuit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                {/* Visual node links representing security and automation */}
                <path d="M 30,100 L 120,100 L 150,130 L 150,180" stroke="url(#circuit-grad)" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />
                <path d="M 320,250 L 260,250 L 230,220 L 230,150" stroke="url(#circuit-grad)" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />
                <circle cx="150" cy="180" r="4.5" fill="#0ea5e9" className="animate-ping" />
                <circle cx="150" cy="180" r="2.5" fill="#38bdf8" />
                <circle cx="230" cy="150" r="4.5" fill="#10b981" />
                <circle cx="230" cy="150" r="2.5" fill="#34d399" />
              </svg>

              <img 
                src={avatarPath} 
                alt="Josevel Alves Silva" 
                className="w-full h-full object-cover rounded-2xl hover:scale-102 transition-all duration-500 select-none"
                referrerPolicy="referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none rounded-2xl" />
              
              {/* Floating micro stats on avatar */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-center text-[10px] font-mono select-none">
                <span className="text-slate-350 flex items-center gap-1.5 bg-slate-950/70 backdrop-blur-md px-2.5 py-1 rounded border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  QA Engineer & SECURITY JÚNIOR
                </span>
                <span className="text-cyan-400 bg-slate-950/70 backdrop-blur-md px-2.5 py-1 rounded border border-white/5 uppercase">
                  Florianópolis
                </span>
              </div>
            </div>
          </motion.div>

          {/* Core Introduction Text Details */}
          <motion.div 
            className="lg:col-span-7 text-left space-y-6"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center space-x-2.5 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full text-blue-400 select-none">
              <ShieldCheck className="w-4 h-4 animate-bounce" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider">
                JOSEVEL SILVA | QA Engineer & Security Júnior
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-white leading-tight tracking-tight">
                Garantindo Qualidade
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-serif">
                &amp; Segurança através de testes manuais, automação estratégica (Selenium, Playwright) e noções de Pentesting. Florianópolis - SC.
              </p>
            </div>

            {/* Quick stats micro deck */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 font-mono text-[11px] max-w-lg">
              <div className="bg-slate-950/50 rounded-xl p-3 border border-white/5">
                <span className="text-slate-500 block uppercase text-[9px] font-bold">Qualidade</span>
                <strong className="text-emerald-400 block text-xs mt-1">TESTES MANUAIS &amp; E2E</strong>
              </div>
              <div className="bg-slate-950/50 rounded-xl p-3 border border-white/5">
                <span className="text-slate-500 block uppercase text-[9px] font-bold">Resiliência</span>
                <strong className="text-cyan-400 block text-xs mt-1">SHIFT-LEFT TESTING</strong>
              </div>
              <div className="bg-slate-950/50 rounded-xl p-3 border border-white/5 col-span-2 sm:col-span-1">
                <span className="text-slate-500 block uppercase text-[9px] font-bold">Segurança</span>
                <strong className="text-blue-400 block text-xs mt-1">Iniciante no Pentester</strong>
              </div>
            </div>

            {/* CTA Action Deck Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={onVerCV}
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-mono font-bold text-xs rounded-full uppercase tracking-wider flex items-center gap-2.5 transition-all shadow-lg shadow-blue-500/10 cursor-pointer text-[12px]"
              >
                <FileText className="w-4 h-4" />
                <span>Ver CV</span>
              </button>

              <button
                onClick={onContactClick}
                className="px-6 py-3.5 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-mono font-bold text-xs rounded-full uppercase tracking-wider flex items-center gap-2.5 transition-all cursor-pointer text-[12px]"
              >
                <Mail className="w-4 h-4" />
                <span>Contato</span>
              </button>
            </div>

          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
