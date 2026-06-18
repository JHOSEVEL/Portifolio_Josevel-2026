import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Cpu, Terminal } from 'lucide-react';

export default function AboutSection() {
  const avatarPath = "/src/assets/images/josevel_avatar_new_1781811552737.jpg";

  return (
    <motion.section 
      id="sobre" 
      className="py-16 sm:py-20 px-4 max-w-7xl mx-auto scroll-mt-20"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
        
        {/* Photo Box column on the left */}
        <div className="lg:col-span-4 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-cyber-neon/10 rounded-3xl translate-x-3 translate-y-3 -z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
            <div className="w-60 h-60 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border border-cyber-border bg-cyber-card transition-colors duration-300">
              <img 
                src={avatarPath}
                alt="Josevel Alves Silva - Sobre Mim"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                referrerPolicy="referrer"
              />
            </div>
          </div>
        </div>

        {/* Story details column on the right */}
        <div className="lg:col-span-8 text-left space-y-5">
          <div className="inline-flex items-center space-x-2 text-cyber-neon font-mono text-xs uppercase tracking-wider font-bold mb-1 transition-colors duration-300">
            <Terminal className="w-4 h-4" />
            <span>Minha História &amp; Foco</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-display font-black text-cyber-text tracking-tight transition-colors duration-300">
            Sobre Mim.
          </h2>

          <div className="space-y-4 text-cyber-muted font-serif leading-relaxed text-sm sm:text-base transition-colors duration-300">
            <p className="font-semibold text-cyber-text text-base sm:text-lg transition-colors duration-300">
              Sou um QA Engineer Júnior com bagagem analítica construída ao longo de uma década de experiência de oito anos de atuação no setor de hotelaria e suporte técnico. Essa trajetória multidisciplinar me proporcionou uma forte orientação para a experiência do usuário, comunicação assertiva e rigor na identificação de falhas. Atualmente, direciono minha carreira para ambas as areas Qualidade de Software e Cibersegurança. Possuo experiência prática na criação de cenários de testes (manuais, Basicos em API e regressão) e foco na cultura de Shift-Left Security, visando a detecção precoce de vulnerabilidades na esteira de entrega. Estudante de Cibersegurança e graduando em Ciência de Dados, utilizo o pensamento analítico para identificar anomalias sistêmicas e garantir entregas seguras e consistentes.
            </p>

            <p className="text-cyber-muted transition-colors duration-300">
              Minha grande meta profissional é <strong>unificar as disciplinas de QA e Cybersecurity</strong>. Acredito que a qualidade de software só existe quando unida a uma defesa. Por isso, pesquiso sobre o mapeamento de segurança do guia OWASP Top 10 e busco vulnerabilidades lógicas precocemente na esteira de entrega (Shift-Left Security).
            </p>
          </div>

          {/* Combined highlight card for QA + CyberSecurity */}
          <div className="bg-cyber-card border border-cyber-border rounded-2xl p-5 mt-4 space-y-3 relative overflow-hidden transition-colors duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-neon/5 rounded-full filter blur-xl pointer-events-none" />
            <div className="flex items-center gap-2.5 text-cyber-neon font-mono text-[11px] font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 animate-pulse" />
              <span>União entre (QA + Segurança)</span>
            </div>
            <p className="text-[11.5px] font-mono text-cyber-muted/90 leading-relaxed">
              Minha formação atual em <strong className="text-cyber-text">Cibersegurança (UNINTER)</strong> combinada com <strong className="text-cyber-text">Ciência de Dados (UNICESUMAR)</strong> me capacita a analisar comportamentos sistêmicos anômalos, blindando rotas de API e interfaces de forma inteligente e integrada com relatórios analíticos de consistência.
            </p>
          </div>
        </div>

      </div>
    </motion.section>
  );
}
