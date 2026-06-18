import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface NavBarProps {
  onNavClick: (section: string) => void;
  activeSection: string;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function NavBar({ onNavClick, activeSection, theme, onToggleTheme }: NavBarProps) {
  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'sobre', label: 'SOBRE' },
    { id: 'habilidades', label: 'HABILIDADES' },
    { id: 'projetos', label: 'PROJETOS' },
    { id: 'experiencia', label: 'EXPERIÊNCIA' },
    { id: 'contato', label: 'CONTATO' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-cyber-nav backdrop-blur-md border-b border-cyber-nav-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Author Brand Name Signature */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavClick('home')}>
          <div className="relative w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-white font-display font-black text-xs shadow-sm">
            <span>JS</span>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-cyber-bg animate-pulse" />
          </div>
          <div className="text-left">
            <h1 className="font-display font-bold text-sm tracking-tight text-cyber-text flex items-center gap-1.5 uppercase">
              <span>JOSEVEL SILVA</span>
            </h1>
            <p className="text-[10px] text-cyber-muted font-mono tracking-wider uppercase font-medium">
              QA Engineer & Security Júnior
            </p>
          </div>
        </div>

        {/* Navigation Actions */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Desk Nav Menu Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-xs font-mono tracking-widest font-semibold">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavClick(item.id)}
                  className={`text-[11px] py-1 relative group uppercase transition-all duration-200 cursor-pointer ${
                    isActive ? 'text-cyber-neon font-extrabold' : 'text-cyber-muted hover:text-cyber-text'
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-[2.5px] bg-cyber-neon transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            id="theme-toggle-btn"
            className="p-2 sm:px-3 sm:py-2 rounded-xl border border-cyber-border bg-cyber-card text-cyber-text hover:border-cyber-neon hover:text-cyber-neon shadow-xs hover:shadow-cyan-400/5 hover:-translate-y-0.5 active:translate-y-0 font-mono text-[10px] font-bold tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
            title={theme === 'dark' ? 'Ativar Modo Claro' : 'Ativar Modo Escuro'}
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
                <span className="hidden sm:inline">CLARO</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-blue-600" />
                <span className="hidden sm:inline">ESCURO</span>
              </>
            )}
          </button>

          {/* Mobile menu trigger helper/indicator */}
          <div className="flex md:hidden items-center">
            <div className="text-[9px] bg-cyber-card border border-cyber-border font-mono rounded px-2.5 py-1 text-cyber-muted flex items-center gap-1.5 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span>Ativo</span>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
