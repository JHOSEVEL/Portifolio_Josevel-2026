import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, Download, RefreshCw } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDownloading: boolean;
  onDownload: () => void;
}

export default function CVModal({ isOpen, onClose, isDownloading, onDownload }: CVModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop blur overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm cursor-pointer"
          />
          
          {/* Modal box Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-cyber-card border border-cyber-border rounded-2xl p-6 sm:p-8 max-w-lg w-full relative z-10 text-left shadow-2xl transition-colors duration-300"
          >
            <h3 className="text-lg font-display font-black text-cyber-text mb-2 flex items-center gap-2 transition-colors duration-300">
              <ShieldAlert className="w-5 h-5 text-cyber-neon animate-pulse transition-colors duration-300" />
              <span>Expedidor de Currículo Integrado</span>
            </h3>
            
            <p className="text-xs sm:text-sm text-cyber-muted font-serif leading-relaxed mb-6 transition-colors duration-300">
              Clique no botão abaixo para compilar a ficha profissional e acadêmica oficial de <b>Josevel Alves Silva</b> em um arquivo no formato texto plano (.txt). Ideal para triagens de RH e plataformas automáticas de ATS.
            </p>

            <div className="bg-cyber-border-subtle/30 border border-cyber-border rounded-xl p-4 font-mono text-[11px] mb-6 tracking-wide text-cyber-text space-y-1 transition-colors duration-300">
              <div><span className="text-emerald-500 font-bold">✓ FORMATO:</span> ASCII UTF-8 Comum</div>
              <div><span className="text-cyber-neon font-bold transition-colors duration-300">✓ TAMANHO:</span> ~4.5 KB estruturados</div>
              <div><span className="text-emerald-500 font-bold">✓ COMPATIBILIDADE:</span> Total (Windows, Linux, macOS)</div>
              <div><span className="text-cyber-neon font-bold transition-colors duration-300">✓ CONTEÚDO:</span> Histórico de QA, Formações e 10+ anos de experiência.</div>
            </div>

            <div className="flex gap-3 justify-end pt-4 border-t border-cyber-border">
              <button
                onClick={onClose}
                className="px-4 py-2 border border-cyber-border text-cyber-muted hover:text-cyber-text font-mono text-xs rounded-lg transition-colors cursor-pointer"
              >
                Cancelar
              </button>
              
              <button
                onClick={onDownload}
                disabled={isDownloading}
                className="px-5 py-2 bg-cyber-neon hover:opacity-90 disabled:bg-cyber-border-subtle text-white dark:text-slate-950 disabled:text-cyber-muted font-mono text-xs font-bold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer text-[11px]"
              >
                {isDownloading ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Processando...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span>Iniciar Download</span>
                  </>
                )}
              </button>
            </div>

          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}
