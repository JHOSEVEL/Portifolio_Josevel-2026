import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, 
  Play, 
  RefreshCw, 
  Github, 
  ExternalLink,
  ShieldCheck, 
  FileCode, 
  CheckCircle2, 
  AlertCircle,
  Code
} from 'lucide-react';
import { portfolioData, Project } from '../data';

interface ProjectsSectionProps {
  playwrightStatus: "idle" | "running" | "completed";
  playwrightLogs: string[];
  handlePlaywrightSimulation: () => void;
  apiStatus: "idle" | "running" | "completed";
  apiLogs: string[];
  handleApiSimulation: () => void;
  securityInput: string;
  setSecurityInput: (v: string) => void;
  securityLogs: string[];
  isScanning: boolean;
  sanitizedResult: string;
  handleSecurityScan: () => void;
}

export default function ProjectsSection({
  playwrightStatus,
  playwrightLogs,
  handlePlaywrightSimulation,
  apiStatus,
  apiLogs,
  handleApiSimulation,
  securityInput,
  setSecurityInput,
  securityLogs,
  isScanning,
  sanitizedResult,
  handleSecurityScan
}: ProjectsSectionProps) {
  const [activeProjectTab, setActiveProjectTab] = useState<string>("playwright-e2e");

  const projects = [
    {
      id: "playwright-e2e",
      title: "E-Commerce Core Flow (Playwright)",
      subtitle: "Automação de Fluxo de Compra de Ponta a Ponta",
      description: "Em vez de testar 50 coisas superficiais, automatiza todo o fluxo crítico no site de treinamento Automation Exercise: Login ➔ Busca de Produto ➔ Adição ao Carrinho ➔ Checkout.",
      techs: ["Playwright", "TypeScript", "Page Object Model (POM)", "Automation Exercise", "Assertions"],
      githubUrl: "https://github.com/JHOSEVEL",
      icon: Code,
      badge: "E-Commerce Flow"
    },
    {
      id: "postman-newman-api",
      title: "E-Commerce API Validation (Postman)",
      subtitle: 'Escopo da Collection: "E-Commerce API Validation"',
      description: "Coleção no Postman com duas requisições encadeadas: POST /api/verifyLogin para autenticar o usuário e validar credenciais, e GET /api/productsList para listar produtos com asserções de contrato de dados.",
      techs: ["Postman API", "Chained Requests", "API Validation", "JavaScript Tests", "Automation Exercise API"],
      githubUrl: "https://github.com/JHOSEVEL",
      icon: Terminal,
      badge: "E-Commerce API"
    },
    {
      id: "security-sanitizer",
      title: "Email Tampering & BOLA Test (SecQA)",
      subtitle: 'Conceito: "Email Tampering & BOLA Test"',
      description: "Garante a imunidade de rotas contra Broken Object Level Authorization (BOLA). Testa e valida se o backend bloqueia tentativas ilegítimas de manipulação de parâmetros (BOLA no endpoint de dados cadastrais).",
      techs: ["Postman Sec", "BOLA Prevention", "Security QA", "Automation Exercise API", "Vulnerability Test"],
      githubUrl: "https://github.com/JHOSEVEL",
      icon: ShieldCheck,
      badge: "Security QA"
    }
  ];

  return (
    <motion.section 
      id="projetos" 
      className="py-16 sm:py-20 px-4 max-w-7xl mx-auto scroll-mt-20"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      
      {/* Centered Heading */}
      <div className="text-center max-w-xl mx-auto mb-14">
        <div className="inline-flex items-center space-x-2 text-cyber-neon font-mono text-xs uppercase tracking-wider font-bold mb-3 transition-colors duration-300">
          <span className="w-1.5 h-1.5 bg-cyber-neon rounded-full animate-pulse" />
          <span>Vitrine Acadêmica</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-black text-cyber-text tracking-tight transition-colors duration-300">
          Projetos em Destaque
        </h2>
        <p className="text-cyber-muted text-xs sm:text-sm mt-3 font-medium transition-colors duration-300">
          Escolha um projeto, veja os detalhes técnicos e teste as simulações interativas na hora.
        </p>
      </div>

      {/* Grid of the 3 Dark Blue Cards exactly matching prompt screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {projects.map((proj) => {
          const IconComp = proj.icon;
          const isSelected = activeProjectTab === proj.id;
          
          return (
            <div
              key={proj.id}
              className={`rounded-2xl p-7 flex flex-col justify-between text-left transition-all duration-300 relative border ${
                isSelected 
                  ? "bg-[#0b1329] border-blue-500 shadow-lg shadow-blue-500/10 text-white scale-[1.01]" 
                  : "bg-[#0f172a] hover:bg-[#131d36] border-slate-800 text-slate-100 hover:scale-[1.01]"
              }`}
            >
              <div>
                {/* Header card icon wrapper */}
                <div className="flex justify-between items-center mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                    isSelected ? "bg-blue-600/20 border-blue-400/40 text-blue-450" : "bg-slate-950/40 border-slate-850 text-sky-400"
                  }`}>
                    <IconComp className="w-5 h-5 animate-pulse" />
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-slate-950 px-2.5 py-1 rounded-full border border-slate-850 shrink-0 select-none tracking-wider text-slate-400">
                    {proj.badge}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold leading-tight mb-2">
                  {proj.title}
                </h3>
                
                <h4 className="text-xs text-blue-400 font-medium mb-4">
                  {proj.subtitle}
                </h4>

                <p className="text-slate-350 text-xs sm:text-sm leading-relaxed mb-6 font-serif">
                  {proj.description}
                </p>

                {/* Stacks tags list */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {proj.techs.map((t, idx) => (
                    <span 
                      key={idx} 
                      className="text-[9px] font-mono bg-slate-950/60 border border-slate-850 text-slate-300 px-2.5 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons drawer selector */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800/80 font-mono text-xs">
                <button
                  onClick={() => setActiveProjectTab(proj.id)}
                  className={`py-2.5 px-3 rounded-lg font-bold uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer text-[10.5px] ${
                    isSelected
                      ? "bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-500/10"
                      : "bg-[#1e293b] hover:bg-[#334155] text-slate-200 border border-slate-700/50"
                  }`}
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Ver Detalhes</span>
                </button>

                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-lg font-bold uppercase transition-all bg-[#0d1323] hover:bg-[#11192e] text-slate-300 hover:text-white border border-slate-800 flex items-center justify-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Simulator Overlay Sandbox based on active tab selection */}
      <div className="bg-cyber-card border border-cyber-border rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden text-left transition-colors duration-300">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyber-neon to-cyber-neon-cyan transition-colors duration-300" />
        
        <AnimatePresence mode="wait">
          {activeProjectTab === "playwright-e2e" && (
            <motion.div
              key="playwright-sim"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-cyber-border pb-5 gap-4">
                <div>
                  <h3 className="text-lg font-display font-bold text-cyber-text uppercase tracking-tight flex items-center gap-2">
                    <FileCode className="w-5 h-5 text-cyber-neon" />
                    <span>E-Commerce Core Flow • Solução Playwright</span>
                  </h3>
                  <p className="text-cyber-muted text-xs mt-1">
                    Arquitetura profissional em Page Object Model (POM) para automação resiliente ponta a ponta.
                  </p>
                </div>
                
                {/* Simulated Run Trigger Button */}
                <button
                  onClick={handlePlaywrightSimulation}
                  disabled={playwrightStatus === "running"}
                  className="px-5 py-3 rounded-xl bg-cyber-neon hover:opacity-90 disabled:bg-cyber-border-subtle text-white dark:text-slate-950 disabled:text-cyber-muted font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-md cursor-pointer self-start sm:self-auto text-[11px]"
                >
                  {playwrightStatus === "running" ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Executando Testes...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Executar Simulação E2E</span>
                    </>
                  )}
                </button>
              </div>

              {/* Arquitetura Recomendada Header Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#0b1329]/50 border border-cyber-border p-4 rounded-xl">
                  <span className="text-[10px] uppercase font-mono text-cyber-neon font-bold block mb-1">🛠️ Ferramenta Core</span>
                  <p className="text-xs text-cyber-text font-semibold">Playwright + TypeScript</p>
                  <p className="text-[11px] text-cyber-muted mt-1 leading-relaxed">Alta velocidade, waits inteligentes automáticos e isolamento de contexto de navegador.</p>
                </div>
                <div className="bg-[#0b1329]/50 border border-cyber-border p-4 rounded-xl">
                  <span className="text-[10px] uppercase font-mono text-cyber-neon font-bold block mb-1">📐 Padrão Design</span>
                  <p className="text-xs text-cyber-text font-semibold">Page Object Model (POM)</p>
                  <p className="text-[11px] text-cyber-muted mt-1 leading-relaxed">Código desacoplado, manutenível e limpo separando localizadores de fluxos lógicos.</p>
                </div>
                <div className="bg-[#0b1329]/50 border border-cyber-border p-4 rounded-xl">
                  <span className="text-[10px] uppercase font-mono text-cyber-neon font-bold block mb-1">🛍️ Sandbox Público</span>
                  <p className="text-xs text-cyber-text font-semibold">Sauce Demo / Automation Ex.</p>
                  <p className="text-[11px] text-cyber-muted mt-1 leading-relaxed">E-commerce público seguro para validação e simulação de rotas transacionais.</p>
                </div>
              </div>

              {/* Escopo do Projeto: 3 Cenários */}
              <div className="space-y-3.5">
                <h4 className="text-xs font-mono font-bold text-cyber-text uppercase tracking-widest">🎯 Escopo do Projeto: "E-Commerce Core Flow"</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Cenário 1 */}
                  <div className="p-5 rounded-2xl border border-cyber-border bg-cyber-border-subtle/10 text-left hover:border-cyber-neon/40 transition-all">
                    <div className="flex items-center gap-2 mb-2 text-cyber-text font-sans font-bold text-sm">
                      <span className="w-5 h-5 rounded-md bg-cyber-neon/20 border border-cyber-neon/30 text-[10.5px] font-mono text-cyber-neon flex items-center justify-center font-bold">1</span>
                      <span>Autenticação (Login)</span>
                    </div>
                    <div className="space-y-2.5 text-[11.5px] text-cyber-muted font-serif leading-relaxed">
                      <div>
                        <strong className="text-[10px] uppercase font-mono text-cyber-text block">Ação:</strong>
                        Preencher credenciais de teste no formulário e submeter.
                      </div>
                      <div>
                        <strong className="text-[10px] uppercase font-mono text-cyber-text block">Validação (Assert):</strong>
                        Garantir redirecionamento ou que vitrine esteja visível.
                      </div>
                    </div>
                  </div>

                  {/* Cenário 2 */}
                  <div className="p-5 rounded-2xl border border-cyber-border bg-cyber-border-subtle/10 text-left hover:border-cyber-neon/40 transition-all">
                    <div className="flex items-center gap-2 mb-2 text-cyber-text font-sans font-bold text-sm">
                      <span className="w-5 h-5 rounded-md bg-cyber-neon/20 border border-cyber-neon/30 text-[10.5px] font-mono text-cyber-neon flex items-center justify-center font-bold">2</span>
                      <span>Seleção &amp; Carrinho</span>
                    </div>
                    <div className="space-y-2.5 text-[11.5px] text-cyber-muted font-serif leading-relaxed">
                      <div>
                        <strong className="text-[10px] uppercase font-mono text-cyber-text block">Ação:</strong>
                        Localizar produto específico, adicionar ao carrinho e abrir a sacola.
                      </div>
                      <div>
                        <strong className="text-[10px] uppercase font-mono text-cyber-text block">Validação (Assert):</strong>
                        Garantir item correto na lista e contagem correta do carrinho.
                      </div>
                    </div>
                  </div>

                  {/* Cenário 3 */}
                  <div className="p-5 rounded-2xl border border-cyber-border bg-cyber-border-subtle/10 text-left hover:border-cyber-neon/40 transition-all">
                    <div className="flex items-center gap-2 mb-2 text-cyber-text font-sans font-bold text-sm">
                      <span className="w-5 h-5 rounded-md bg-cyber-neon/20 border border-cyber-neon/30 text-[10.5px] font-mono text-cyber-neon flex items-center justify-center font-bold">3</span>
                      <span>Checkout Simulado</span>
                    </div>
                    <div className="space-y-2.5 text-[11.5px] text-cyber-muted font-serif leading-relaxed">
                      <div>
                        <strong className="text-[10px] uppercase font-mono text-cyber-text block">Ação:</strong>
                        Inserir informações de remessa e finalizar a transação.
                      </div>
                      <div>
                        <strong className="text-[10px] uppercase font-mono text-cyber-text block">Validação (Assert):</strong>
                        Verificar captura da mensagem hoteleira: 'Thank you for your order!'.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Snippet and Output Terminal Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-2">
                
                {/* Code POM Snippet */}
                <div className="lg:col-span-5 bg-cyber-border-subtle/10 p-5 rounded-2xl border border-cyber-border text-left">
                  <h4 className="text-[10.5px] font-mono font-bold text-cyber-text uppercase tracking-wider mb-2.5">Código Técnico Page Object Model</h4>
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-900 text-[10.5px] font-mono text-emerald-400 overflow-x-auto leading-relaxed h-[200px]">
                    <span className="text-cyan-400">export class</span> <span className="text-white">CheckoutPage</span> &#123;<br />
                    &nbsp;&nbsp;<span className="text-amber-400">readonly</span> page: Page;<br />
                    &nbsp;&nbsp;<span className="text-cyan-400">constructor</span>(page: Page) &#123;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">this</span>.page = page;<br />
                    &nbsp;&nbsp;&#125;<br />
                    <br />
                    &nbsp;&nbsp;<span className="text-cyan-400">async</span> <span className="text-blue-300">completeCheckout</span>(name, zip) &#123;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">await this</span>.page.fill(<span className="text-amber-200">'#first-name'</span>, name);<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">await this</span>.page.fill(<span className="text-amber-200">'#postal-code'</span>, zip);<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">await this</span>.page.click(<span className="text-amber-200">'#finish'</span>);<br />
                    &nbsp;&nbsp;&#125;<br />
                    &#125;
                  </div>
                </div>

                {/* Simulated CLI Terminal Output */}
                <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-5 border border-slate-900 text-slate-350 text-[11px] font-mono min-h-[220px] flex flex-col justify-between">
                  <div>
                    <div className="border-b border-slate-900 pb-2 mb-2 text-[10px] text-slate-500 flex items-center justify-between">
                      <span>CONSOLE CLI PLAYWRIGHT RUNNER</span>
                      <span className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${
                          playwrightStatus === "running" ? "bg-amber-400 animate-pulse" : playwrightStatus === "completed" ? "bg-emerald-400" : "bg-slate-500"
                        }`} />
                        <span className="text-[9px] uppercase tracking-wider">{playwrightStatus}</span>
                      </span>
                    </div>

                    <div className="space-y-1.5 max-h-[155px] overflow-y-auto pr-1">
                      {playwrightLogs.length === 0 ? (
                        <div className="text-slate-650 italic pt-12 text-center text-xs">
                          Pressione "Executar Simulação E2E" para despachar a automação.
                        </div>
                      ) : (
                        playwrightLogs.map((log, idx) => {
                          const isSucesso = typeof log === 'string' && (log.includes("🎉") || log.includes("✓"));
                          const isCenario = typeof log === 'string' && (log.includes("CENÁRIO") || log.includes("🎯"));
                          return (
                            <div 
                              key={idx} 
                              className={isSucesso ? "text-emerald-400 font-semibold" : isCenario ? "text-cyan-400 font-bold" : "text-slate-300"}
                            >
                              {log}
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {activeProjectTab === "postman-newman-api" && (
            <motion.div
              key="postman-sim"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-cyber-border pb-5 gap-4">
                <div>
                  <h3 className="text-lg font-display font-bold text-cyber-text uppercase tracking-tight flex items-center gap-2">
                    <FileCode className="w-5 h-5 text-cyber-neon" />
                    <span>E-Commerce API Validation • Solução Postman</span>
                  </h3>
                  <p className="text-cyber-muted text-xs mt-1">
                    Coleção automatizada no Postman com extração dinâmica de variáveis de ambiente e testes de contrato.
                  </p>
                </div>
                
                {/* Simulated Run Trigger Button */}
                <button
                  onClick={handleApiSimulation}
                  disabled={apiStatus === "running"}
                  className="px-5 py-3 rounded-xl bg-cyber-neon hover:opacity-90 disabled:bg-cyber-border-subtle text-white dark:text-slate-950 disabled:text-cyber-muted font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-md cursor-pointer self-start sm:self-auto text-[11px]"
                >
                  {apiStatus === "running" ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Executando Testes...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Executar Coleção Postman</span>
                    </>
                  )}
                </button>
              </div>

              {/* Escopo de Chained Requests */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono font-bold text-cyber-text uppercase tracking-widest">🛠️ Arquitetura Detalhada da Collection</h4>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Requisição 1: POST /api/verifyLogin */}
                  <div className="p-6 rounded-2xl border border-cyber-border bg-cyber-border-subtle/10 text-left hover:border-cyber-neon/40 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2 text-cyber-text font-sans font-bold text-sm">
                          <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 font-bold uppercase">POST</span>
                          <span>1. Autenticação de Usuário - api/verifyLogin</span>
                        </div>
                        <span className="text-[10px] font-mono text-cyber-muted">Automation Exercise API</span>
                      </div>
                      
                      <div className="mb-4">
                        <span className="text-[10px] uppercase font-mono text-cyber-muted block mb-1">URL da Requisição:</span>
                        <code className="text-[11px] block text-cyan-400 bg-slate-950 px-2 py-1.5 rounded border border-slate-900 font-mono">
                          https://automationexercise.com/api/verifyLogin
                        </code>
                      </div>

                      <div className="mb-4">
                        <span className="text-[10px] uppercase font-mono text-cyber-muted block mb-1">Parâmetros (Form-Data/Body):</span>
                        <pre className="text-[10px] p-2 bg-slate-950 rounded border border-slate-900 text-slate-300 font-mono">
{`{
  "email": "emilys@example.com",
  "password": "emilyspassword"
}`}
                        </pre>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase font-mono text-cyber-neon font-bold block mb-1">Aba "Tests" (Código de Automação &amp; Validações):</span>
                        <div className="p-3 bg-slate-950 rounded-xl border border-slate-900 text-[10px] font-mono text-emerald-400 overflow-y-auto max-h-[140px] leading-relaxed">
                          <span className="text-slate-500">// 1. Validar se o status da resposta é 200 (Sucesso)</span><br />
                          pm.test(<span className="text-amber-200">"Status code é 200 - Login Sucesso"</span>, <span className="text-cyan-400">function</span> () &#123;<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;pm.response.to.have.status(200);<br />
                          &#125;);<br />
                          <br />
                          <span className="text-slate-500">// 2. Validar se retornou mensagem de conta ativa</span><br />
                          pm.test(<span className="text-amber-200">"Retornou mensagem de validação contendo User exists!"</span>, <span className="text-cyan-400">function</span> () &#123;<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">var</span> jsonData = pm.response.json();<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;pm.expect(jsonData.message).to.eql(<span className="text-amber-200">'User exists!'</span>);<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500">// EXTRA: Salva o e-mail na variável global do teste</span><br />
                          &nbsp;&nbsp;&nbsp;&nbsp;pm.environment.set(<span className="text-amber-200">"session_email"</span>, <span className="text-amber-200">"emilys@example.com"</span>);<br />
                          &#125;);
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Requisição 2: GET /api/productsList */}
                  <div className="p-6 rounded-2xl border border-cyber-border bg-cyber-border-subtle/10 text-left hover:border-cyber-neon/40 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2 text-cyber-text font-sans font-bold text-sm">
                          <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono text-blue-400 font-bold uppercase">GET</span>
                          <span>2. Obter Lista de Produtos</span>
                        </div>
                        <span className="text-[10px] font-mono text-cyber-muted">Products Database</span>
                      </div>
                      
                      <div className="mb-4">
                        <span className="text-[10px] uppercase font-mono text-cyber-muted block mb-1">URL da Requisição:</span>
                        <code className="text-[11px] block text-cyan-400 bg-slate-950 px-2 py-1.5 rounded border border-slate-900 font-mono">
                          https://automationexercise.com/api/productsList
                        </code>
                      </div>

                      <div className="mb-4">
                        <span className="text-[10px] uppercase font-mono text-cyber-muted block mb-1">Autenticação:</span>
                        <div className="p-2.5 bg-slate-950 rounded border border-slate-900 text-[10.5px] font-mono text-slate-300">
                          Type: <strong className="text-emerald-450 font-bold">No Auth</strong> <span className="text-slate-500">(Rota pública de catálogo)</span><br />
                          Session tracking: <span className="text-cyan-450 font-semibold">&#123;&#123;session_email&#125;&#125;</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase font-mono text-cyber-neon font-bold block mb-1">Aba "Tests" (Contrato &amp; Performance):</span>
                        <div className="p-3 bg-slate-950 rounded-xl border border-slate-900 text-[10px] font-mono text-emerald-400 overflow-y-auto max-h-[140px] leading-relaxed">
                          <span className="text-slate-500">// 1. Validar o status de sucesso</span><br />
                          pm.test(<span className="text-amber-200">"Status code é 200 - Produtos Listados"</span>, <span className="text-cyan-400">function</span> () &#123;<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;pm.response.to.have.status(200);<br />
                          &#125;);<br />
                          <br />
                          <span className="text-slate-500">// 2. Validar tempo de resposta (&lt; 500ms)</span><br />
                          pm.test(<span className="text-amber-200">"Tempo de resposta menor que 500ms"</span>, <span className="text-cyan-400">function</span> () &#123;<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;pm.expect(pm.response.responseTime).to.be.below(500);<br />
                          &#125;);<br />
                          <br />
                          <span className="text-slate-500">// 3. Validar a integridade estrutural do JSON</span><br />
                          pm.test(<span className="text-amber-200">"A lista de produtos contém itens válidos"</span>, <span className="text-cyan-400">function</span> () &#123;<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">var</span> jsonData = pm.response.json();<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;pm.expect(jsonData.products).to.be.an(<span className="text-amber-200">'array'</span>);<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;pm.expect(jsonData.products[0]).to.have.property(<span className="text-amber-200">'id'</span>);<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;pm.expect(jsonData.products[0]).to.have.property(<span className="text-amber-200">'name'</span>);<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;pm.expect(jsonData.products[0]).to.have.property(<span className="text-amber-200">'price'</span>);<br />
                          &#125;);
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simulated CLI Terminal Output for Newman Run */}
              <div className="bg-slate-950 rounded-2xl p-5 border border-slate-900 text-slate-350 text-[11px] font-mono min-h-[220px] flex flex-col justify-between">
                <div>
                  <div className="border-b border-slate-900 pb-2 mb-2 text-[10px] text-slate-500 flex items-center justify-between">
                    <span>CONSOLE CLI / INTEGRATION API TESTER (NEWMAN)</span>
                    <span className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${
                        apiStatus === "running" ? "bg-amber-400 animate-pulse" : apiStatus === "completed" ? "bg-emerald-400" : "bg-slate-500"
                      }`} />
                      <span className="text-[9px] uppercase tracking-wider">{apiStatus}</span>
                    </span>
                  </div>

                  <div className="space-y-1.5 max-h-[160px] overflow-y-auto pr-1">
                    {apiLogs.length === 0 ? (
                      <div className="text-slate-650 italic pt-12 text-center text-xs">
                        Pressione "Executar Coleção Postman" para despachar o ambiente de teste em tempo real.
                      </div>
                    ) : (
                      apiLogs.map((log, idx) => {
                        const isSucesso = typeof log === 'string' && (log.includes("🎉") || log.includes("✔"));
                        const isCenario = typeof log === 'string' && (log.includes("📡") || log.includes("🚀") || log.includes("🧪"));
                        return (
                          <div 
                            key={idx} 
                            className={isSucesso ? "text-emerald-400 font-semibold" : isCenario ? "text-cyan-400 font-bold" : "text-slate-300"}
                          >
                            {log}
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeProjectTab === "security-sanitizer" && (
            <motion.div
              key="security-sim"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-cyber-border pb-5 gap-4">
                <div>
                  <h3 className="text-lg font-display font-bold text-cyber-text uppercase tracking-tight flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-cyber-neon" />
                    <span>ID Tampering &amp; BOLA Test • Solução SecQA</span>
                  </h3>
                  <p className="text-cyber-muted text-xs mt-1">
                    Defesa preventiva baseada em testes automatizados contra acessos Broken Object Level Authorization (OWASP API1:2023).
                  </p>
                </div>

                {/* Simulated Run Trigger Button */}
                <button
                  onClick={handleSecurityScan}
                  disabled={isScanning}
                  className="px-5 py-3 rounded-xl bg-cyber-neon hover:opacity-90 disabled:bg-cyber-border-subtle text-white dark:text-slate-950 disabled:text-cyber-muted font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-md cursor-pointer self-start sm:self-auto text-[11px]"
                >
                  {isScanning ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Auditando Rotas...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Executar Testes de Segurança</span>
                    </>
                  )}
                </button>
              </div>

              {/* Arquitetura de Negocio */}
              <div className="bg-[#0b1329]/50 border border-cyber-border p-5 rounded-2xl text-left">
                <span className="text-[10px] uppercase font-mono text-[#38bdf8] font-bold block mb-1">🎯 Cenário de Negócio de Segurança (BOLA)</span>
                <p className="text-xs text-cyber-text font-serif leading-relaxed">
                  Em um e-commerce seguro, o usuário <strong>"João" (joao@example.com)</strong> deve conseguir buscar os próprios dados cadastrais (POST <code className="text-[#38bdf8] text-[11px] font-mono hover:underline">/api/getUserDetailByEmail</code> com body <code className="text-[#38bdf8] text-[11px] font-mono">email=joao@example.com</code>). Se ele tentar alterar o e-mail no corpo para <strong>"maria@example.com"</strong> mantendo sua própria sessão, o sistema <strong>deve recusar e bloquear o vazamento lateral de dados</strong> com erro 403 Forbidden para impedir Broken Object Level Authorization (BOLA).
                </p>
              </div>

              {/* As Duas Abas / Blocos de Cenários */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono font-bold text-cyber-text uppercase tracking-widest text-left">🛠️ Cenários Automatizados no Postman &amp; NewMan</h4>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Cenário 1: Acesso Autorizado */}
                  <div className="p-6 rounded-2xl border border-cyber-border bg-cyber-border-subtle/10 text-left hover:border-cyber-neon/40 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2 text-cyber-text font-sans font-bold text-sm">
                          <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 font-bold uppercase">POST</span>
                          <span>Cenário 1: Acesso Autorizado (Happy Path)</span>
                        </div>
                        <span className="text-[10px] font-mono text-cyber-muted font-bold">200 OK</span>
                      </div>

                      <div className="mb-4">
                        <span className="text-[10px] uppercase font-mono text-cyber-muted block mb-1">URL Completa / Endpoint:</span>
                        <code className="text-[11px] block text-cyan-400 bg-slate-950 px-2 py-1.5 rounded border border-slate-900 font-mono">
                          https://automationexercise.com/api/getUserDetailByEmail
                        </code>
                      </div>

                      <div className="mb-4">
                        <span className="text-[10px] uppercase font-mono text-cyber-muted block mb-1">Corpo da Requisição (Param):</span>
                        <div className="p-2.5 bg-slate-950 rounded border border-slate-900 text-[10.5px] font-mono text-slate-350">
                          email: <span className="text-cyan-400">joao@example.com</span><br />
                          Token/Session: <span className="text-emerald-400">joao_validated_cookie</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase font-mono text-cyber-neon font-bold block mb-1">Validação na Aba "Tests":</span>
                        <div className="p-3 bg-slate-950 rounded-xl border border-slate-900 text-[10px] font-mono text-emerald-400 overflow-y-auto max-h-[140px] leading-relaxed">
                          pm.test(<span className="text-amber-200">"Status deve ser 200 - Usuário acessou os próprios dados"</span>, <span className="text-cyan-400">function</span> () &#123;<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;pm.response.to.have.status(200);<br />
                          &#125;);
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cenário 2: Ataque de Manipulação (BOLA) */}
                  <div className="p-6 rounded-2xl border border-cyber-border bg-cyber-border-subtle/10 text-left hover:border-cyber-neon/40 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2 text-cyber-text font-sans font-bold text-sm">
                          <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-emerald-500/20 text-[10px] font-mono text-amber-500 font-bold uppercase">POST (TAMPER)</span>
                          <span className="text-amber-400">Cenário 2: Teste de Pentest / SecQA (Ataque BOLA)</span>
                        </div>
                        <span className="text-[10px] font-mono text-rose-500 font-bold">403 EXPECTED</span>
                      </div>

                      <div className="mb-4">
                        <span className="text-[10px] uppercase font-mono text-cyber-muted block mb-1">URL Alterada (ID Tampering / Parameter Pollution):</span>
                        <code className="text-[11px] block text-rose-400 bg-slate-950 px-2 py-1.5 rounded border border-slate-900 font-mono">
                          https://automationexercise.com/api/getUserDetailByEmail
                        </code>
                      </div>

                      <div className="mb-4">
                        <span className="text-[10px] uppercase font-mono text-cyber-muted block mb-1">Corpo Manipulado (Alvo Terceiros):</span>
                        <div className="p-2.5 bg-slate-950 rounded border border-slate-900 text-[10.5px] font-mono text-rose-350">
                          email: <span className="text-rose-400">maria@example.com</span> <span className="text-slate-500">(Alvo do ataque)</span><br />
                          Token/Session: <span className="text-cyan-400">joao_validated_cookie</span> <span className="text-slate-500">(João tenta ler dados da Maria)</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase font-mono text-cyber-neon font-bold block mb-1">Validação Crítica de Segurança:</span>
                        <div className="p-3 bg-slate-950 rounded-xl border border-slate-900 text-[10px] font-mono text-emerald-400 overflow-y-auto max-h-[140px] leading-relaxed">
                          <span className="text-slate-450">// O acesso lateral deve ser bloqueado!</span><br />
                          pm.test(<span className="text-amber-200">"Segurança: Status deve ser 403 Forbidden para manipulação lateral de email"</span>, <span className="text-cyan-400">function</span> () &#123;<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;pm.expect(pm.response.code).to.be.oneOf([403, 401]);<br />
                          &#125;);<br />
                          <br />
                          pm.test(<span className="text-amber-200">"Segurança: Resposta não deve conter dados da Maria"</span>, <span className="text-cyan-400">function</span> () &#123;<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">var</span> jsonData = pm.response.json();<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;pm.expect(jsonData).to.not.have.property(<span className="text-amber-200">'user'</span>);<br />
                          &#125;);
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simulated CLI Terminal Output */}
              <div className="bg-slate-950 rounded-2xl p-5 border border-slate-900 text-slate-350 text-[11px] font-mono min-h-[220px] flex flex-col justify-between text-left">
                <div>
                  <div className="border-b border-slate-900 pb-2 mb-2 text-[10px] text-slate-500 flex items-center justify-between">
                    <span>CONSOLE CLI / SECURITY PIPELINE (NEWMAN SECURITY SCANNER)</span>
                    <span className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${
                        isScanning ? "bg-amber-400 animate-pulse" : sanitizedResult === "Imunizado" ? "bg-emerald-400" : "bg-slate-500"
                      }`} />
                      <span className="text-[9px] uppercase tracking-wider">{isScanning ? "running" : sanitizedResult ? "completed" : "idle"}</span>
                    </span>
                  </div>

                  <div className="space-y-1.5 max-h-[160px] overflow-y-auto pr-1">
                    {securityLogs.length === 0 ? (
                      <div className="text-slate-650 italic pt-12 text-center text-xs">
                        Pressione "Executar Testes de Segurança" para simular a auditoria BOLA Newman em tempo real.
                      </div>
                    ) : (
                      securityLogs.map((log, idx) => {
                        const isSucesso = typeof log === 'string' && (log.includes("🎉") || log.includes("✔"));
                        const isCenario = typeof log === 'string' && (log.includes("📡") || log.includes("⚔️") || log.includes("🚀") || log.includes("🕵️") || log.includes("🧪"));
                        return (
                          <div 
                            key={idx} 
                            className={isSucesso ? "text-emerald-400 font-semibold" : isCenario ? "text-cyan-400 font-bold" : "text-slate-300"}
                          >
                            {log}
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </motion.section>
  );
}
