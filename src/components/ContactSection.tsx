import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Mail, Phone, MapPin, Send, RefreshCw, Check } from 'lucide-react';

interface ContactSectionProps {
  contatoNome: string;
  setContatoNome: (v: string) => void;
  contatoEmail: string;
  setContatoEmail: (v: string) => void;
  contatoMensagem: string;
  setContatoMensagem: (v: string) => void;
  isSendingContato: boolean;
  contatoSucesso: boolean;
  triggerMessageDispatch: (e: React.FormEvent) => void;
}

export default function ContactSection({
  contatoNome,
  setContatoNome,
  contatoEmail,
  setContatoEmail,
  contatoMensagem,
  setContatoMensagem,
  isSendingContato,
  contatoSucesso,
  triggerMessageDispatch
}: ContactSectionProps) {
  const personalEmail = "josevelmma5@gmail.com";
  const personalPhone = "85 98950-0747";

  return (
    <motion.section 
      id="contato" 
      className="bg-cyber-bg/50 dark:bg-slate-950/20 text-cyber-text py-16 sm:py-20 border-t border-cyber-border text-left transition-colors duration-300"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          
          {/* Left Column - Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-cyber-neon font-mono text-xs uppercase tracking-wider font-bold transition-colors duration-300">
                <span className="w-1.5 h-1.5 bg-cyber-neon rounded-full animate-pulse" />
                <span>Vamos Conversar</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-display font-black leading-tight tracking-tight text-cyber-text transition-colors duration-300">
                Vamos trabalhar juntos?
              </h2>
              
              <p className="text-cyber-muted text-xs sm:text-sm leading-relaxed font-serif max-w-md transition-colors duration-300">
                Estou aberto para propostas de contratação CLT / PJ, projetos de consultoria de teste pontual, auditorias de usabilidade ou posições de QA Júnior e cibersegurança preventiva. Contate-me diretamente.
              </p>
            </div>

            {/* Direct Contact Links List */}
            <div className="space-y-4 font-mono text-xs">
              
              {/* GitHub Link */}
              <a 
                href="https://github.com/JHOSEVEL" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-4 p-4 rounded-xl border border-cyber-border hover:border-cyber-neon/40 bg-cyber-card hover:bg-cyber-border-subtle/20 transition-all cursor-pointer group"
              >
                <div className="w-9 h-9 rounded-lg bg-cyber-bg flex items-center justify-center text-cyber-muted group-hover:text-cyber-text transition-all">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-cyber-muted uppercase block font-bold transition-colors duration-300">Link GitHub</span>
                  <span className="text-cyber-text font-semibold group-hover:text-cyber-neon transition-colors duration-300">github.com/JHOSEVEL</span>
                </div>
              </a>

              {/* LinkedIn Link */}
              <a 
                href="https://linkedin.com/in/josevel-silva-4863301b0" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-4 p-4 rounded-xl border border-cyber-border hover:border-cyber-neon/40 bg-cyber-card hover:bg-cyber-border-subtle/20 transition-all cursor-pointer group"
              >
                <div className="w-9 h-9 rounded-lg bg-cyber-bg flex items-center justify-center text-cyber-muted group-hover:text-cyber-text transition-all">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-cyber-muted uppercase block font-bold transition-colors duration-300">Link LinkedIn</span>
                  <span className="text-cyber-text font-semibold group-hover:text-cyber-neon transition-colors duration-300">linkedin.com/in/josevel-silva</span>
                </div>
              </a>

              {/* Email Link */}
              <a 
                href={`mailto:${personalEmail}`}
                className="flex items-center space-x-4 p-4 rounded-xl border border-cyber-border hover:border-cyber-neon/40 bg-cyber-card hover:bg-cyber-border-subtle/20 transition-all cursor-pointer group"
              >
                <div className="w-9 h-9 rounded-lg bg-cyber-bg flex items-center justify-center text-cyber-muted group-hover:text-cyber-text transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-cyber-muted uppercase block font-bold transition-colors duration-300">Enviar E-mail</span>
                  <span className="text-cyber-text font-semibold group-hover:text-cyber-neon select-all transition-colors duration-300">{personalEmail}</span>
                </div>
              </a>

              {/* Telephone Connection */}
              <div 
                className="flex items-center space-x-4 p-4 rounded-xl border border-cyber-border bg-cyber-card transition-colors duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-cyber-bg flex items-center justify-center text-cyber-muted">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-cyber-muted uppercase block font-bold transition-colors duration-300">WhatsApp / Contato</span>
                  <span className="text-cyber-text font-semibold select-all transition-colors duration-300">{personalPhone}</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column - Submission Form */}
          <div className="lg:col-span-7 bg-cyber-card border border-cyber-border rounded-2xl p-6 sm:p-10 shadow-xl relative overflow-hidden transition-colors duration-300">
            <div className="absolute top-0 right-10 w-24 h-px bg-cyber-neon" />
            
            <form onSubmit={triggerMessageDispatch} className="space-y-6">
              
              {/* Name field */}
              <div className="space-y-2">
                <label className="block text-xs font-mono font-bold text-cyber-text uppercase tracking-wide transition-colors duration-300">Nome</label>
                <input 
                  type="text" 
                  required
                  value={contatoNome}
                  onChange={(e) => setContatoNome(e.target.value)}
                  placeholder="Seu nome"
                  className="w-full bg-cyber-bg/50 dark:bg-slate-950/40 border border-cyber-border text-cyber-text placeholder:text-cyber-muted/80 focus:border-cyber-neon rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-cyber-neon font-sans text-sm transition-all duration-300"
                />
              </div>

              {/* Email field */}
              <div className="space-y-2">
                <label className="block text-xs font-mono font-bold text-cyber-text uppercase tracking-wide transition-colors duration-300">Email</label>
                <input 
                  type="email" 
                  required
                  value={contatoEmail}
                  onChange={(e) => setContatoEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full bg-cyber-bg/50 dark:bg-slate-950/40 border border-cyber-border text-cyber-text placeholder:text-cyber-muted/80 focus:border-cyber-neon rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-cyber-neon font-sans text-sm transition-all duration-300"
                />
              </div>

              {/* Message field */}
              <div className="space-y-2">
                <label className="block text-xs font-mono font-bold text-cyber-text uppercase tracking-wide transition-colors duration-300">Mensagem</label>
                <textarea 
                  required
                  rows={4}
                  value={contatoMensagem}
                  onChange={(e) => setContatoMensagem(e.target.value)}
                  placeholder="Olá Josevel, gostaria de discutir uma vaga de QA Júnior..."
                  className="w-full bg-cyber-bg/50 dark:bg-slate-950/40 border border-cyber-border text-cyber-text placeholder:text-cyber-muted/80 focus:border-cyber-neon rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-cyber-neon font-sans text-sm resize-none transition-all duration-300"
                />
              </div>

              {/* Submit button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-6 justify-between border-t border-cyber-border-subtle">
                <button
                  type="submit"
                  disabled={isSendingContato}
                  className="w-full sm:w-auto px-8 py-3.5 bg-cyber-neon hover:opacity-90 disabled:bg-cyber-border-subtle text-white dark:text-slate-950 disabled:text-cyber-muted font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 rounded-xl transition-all shadow-lg cursor-pointer self-stretch sm:self-auto text-[11px]"
                >
                  {isSendingContato ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Processando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </button>
                
                <div className="text-[10px] text-cyber-muted font-mono text-center sm:text-left leading-tight transition-colors duration-300">
                  ✓ Mensagem processada em tempo real com envio imediato.
                </div>
              </div>

              {/* Success validation feedback */}
              <AnimatePresence>
                {contatoSucesso && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs text-left"
                  >
                    ✓ Sucesso! Mensagem encaminhada diretamente para Josevel Silva. Ele receberá uma notificação em: <b>josevelmma5@gmail.com</b>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

        </div>

        {/* Small Footer credits block inside Contact wrapper bottom */}
        <div className="pt-12 mt-12 border-t border-cyber-border text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-cyber-muted transition-colors duration-300 font-bold">
          <div>
            <span>JOSEVEL SILVA • PORTFÓLIO 2026</span>
          </div>
          <p className="text-[10px] max-w-sm leading-relaxed text-center sm:text-right transition-colors duration-300">
            Polido com React, Tailwind CSS, TypeScript &amp; Framer Motion. 100% responsivo.
          </p>
        </div>

      </div>
    </motion.section>
  );
}
