export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  deployUrl: string;
  hasInteractiveDemo: boolean;
  demoType?: "playwright" | "security";
  badge: string;
  metric1: { label: string; value: string };
  metric2: { label: string; value: string };
  metric3: { label: string; value: string };
  mockupUrl: string;
  mockupImage: string;
  mockupCaption: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  tags: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: number; description: string }[];
}

export const portfolioData = {
  personalInfo: {
    name: "Josevel Alves Silva",
    title: "QA Automation & Security Júnior",
    location: "Florianópolis - SC (Híbrido / Remoto)",
    phone: "(85) 98950-0747",
    headline: "Garantia de Qualidade de Software & Noções de Segurança Preventiva",
    subheadline: "QA Júnior focado em testes funcionais, automação E2E e testes de APIs, com forte interesse e noções básicas de Pentesting (OWASP Top 10, Nmap e segurança defensiva).",
    shortIntro: "Graduando em Gestão de TI e Defesa Cibernética (UNINTER, 2027) e Engenharia de Software Full Stack Python (EBAC). Especialista júnior na execução de testes de funcionalidade, usabilidade de layout, automações básicas (Playwright/Selenium) e noções de segurança e auditorias de vulnerabilidades.",
    linkedin: "https://linkedin.com/in/josevel-silva-4863301b0",
    github: "https://github.com/JHOSEVEL",
    email: "josevelmma5@gmail.com",
    whatsapp: "https://wa.me/5585989500747",
    resumeLink: "#"
  },
  
  aboutMe: {
    story: "Com uma sólida trajetória de mais de uma década liderando processos técnicos e operacionais de alta responsabilidade — com ampla atuação na hotelaria de alto padrão como Gestor de Operações e Recepcionista Líder —, desenvolvi resiliência técnica, profundo senso de urgência e uma obsessão pela otimização da usabilidade final frente a sistemas ERP robustos. Converti essa bagagem de liderança e diagnóstico em competências fundamentais de Engenharia de Software e Controle de Qualidade.",
    focus: "Atualmente, consolido minha transição técnica por meio da graduação em Gestão de TI e Defesa Cibernética (UNINTER, 2027), complementada pelas formações integradas em Engenharia de Software Full Stack na EBAC e automação com bibliotecas focadas em produtividade. Minha missão é entregar soluções de software imunes a erros críticos, que unem uma cobertura meticulosa de testes funcionais a um design de segurança defensivo baseado em mitigações estruturadas.",
    skillsSummary: "Especialista em testes funcionais detalhados, testes exploratórios avançados de usabilidade (UI/UX) e validações rigorosas de regras de negócios complexas. Atuo no desenvolvimento de scripts de automação robustos e resilientes via Playwright e Selenium, com ampla cobertura de testes de integração e validação de contratos e segurança de APIs REST via Postman. Experiência na gestão estruturada do ciclo de vida de defeitos utilizando Jira, manipulação e auditoria de bancos de dados via queries de banco relacionais complexos (SQL) e controle de versão profissional via Git/GitHub.",
  },

  experiences: [
    {
      company: "Hotel Veleiro Mar",
      role: "Analista de Usabilidade & Auditor de Sistemas ERP",
      period: "Mar 2024 - Out 2025",
      location: "Fortaleza - CE",
      description: "Supervisão operacional e auditoria técnica de sistemas legados e ERPs integrados de gestão, focando na identificação ativa de vulnerabilidades transacionais e na conformidade de dados financeiros de clientes.",
      achievements: [
        "Auditoria analítica diária de transações eletrônicas e faturamento, identificando e documentando falhas de conciliação de dados nos sistemas centrais de reserva.",
        "Mapeamento de melhorias preventivas de UX/UI, reportando ativamente refinamentos visuais e lógicas inconsistentes nos fluxos internos para os fornecedores de TI.",
        "Execução de verificações detalhadas quanto à conformidade de segurança e controle de acessos em dados confidenciais de hospedes estrangeiros."
      ],
      tags: ["Auditoria de ERPs", "Garantia de Usabilidade", "Consistência de Dados", "Processos Críticos"]
    },
    {
      company: "Software-In",
      role: "Engenheiro de QA (Software Quality Assurance)",
      period: "Jan 2015 - Mai 2016",
      location: "Fortaleza - CE",
      description: "Planejamento, automação e controle completo do ciclo integrado de qualidade de software para sistemas da web transacionais complexos, estabelecendo esteiras básicas de testes contínuos.",
      achievements: [
        "Elaboração e execução de planos de testes funcionais completos, contemplando testes de regressão, Sanity Checks e Smoke Tests em sistemas corporativos.",
        "Identificação cirúrgica de inconsistências de interface e discrepâncias de fluxos de decisão com documentação minuciosa em Jira, diminuindo consideravelmente o retrabalho em desenvolvimento.",
        "Iniciação e concepção de suítes de testes automatizados E2E utilizando Selenium WebDriver e Playwright, otimizando o tempo de liberação de novas funcionalidades.",
        "Execução de testes de integração de API e testes unitários básicos visando garantir o correto processamento de payloads XML/JSON."
      ],
      tags: ["Playwright", "Selenium", "Postman", "Documentação de Defeitos", "Esteiras CI/CD"]
    },
    {
      company: "CB Inspector",
      role: "Analista de Testes Manuais & QA",
      period: "Mar 2014 - Out 2014",
      location: "Fortaleza - CE",
      description: "Análise analítica exploratória manual em software SaaS direcionado à otimização operacional hoteleira, garantindo padrões internacionais de usabilidade.",
      achievements: [
        "Garantia de qualidade focada na aderência às regras do negócio e resiliência de fluxos transacionais essenciais.",
        "Verificação meticulosa de layouts responsivos (mobile/desktop), assegurando design responsivo e compatibilidade multiplataforma sem distorção das informações.",
        "Gestão no ciclo de vida de bugs através de relatórios técnicos precisos, contendo dados técnicos (logs de console e etapas detalhadas do bug).",
        "Atuação conjunta direta com engenheiros e engenheiras de desenvolvimento para acelerar a validação de hotfixes urgentes em produção."
      ],
      tags: ["Análise Exploratória", "QA Funcional", "Gerenciamento de Bugs", "Garantia de Layouts"]
    },
    {
      company: "Pousada Sol Nascente",
      role: "Gerente de Operações & Gestor de Processos Tecnológicos",
      period: "Fev 2011 - Ago 2014",
      location: "Fortaleza - CE",
      description: "Liderança executiva de operações locais com foco no refinamento de processos, validação de softwares proprietários e auditoria tecnológica de faturamento eletrônico.",
      achievements: [
        "Liderança na implantação, migração e homologação de novos softwares internos de check-in, eliminando gargalos sistêmicos de faturamento redundante.",
        "Conversão de desafios reais enfrentados pelos usuários internos em propostas estruturadas de melhoria para os desenvolvedores parceiros.",
        "Auditoria técnica em dados consolidados de banco de dados por meio da execução de queries analíticas preliminares no ERP corporativo."
      ],
      tags: ["Liderança de TI", "Melhoria Contínua", "Homologação de Software", "Auditoria de BD"]
    }
  ] as Experience[],

  projects: [
    {
      id: "playwright-e2e",
      title: "Framework de Automação de Testes E2E com Playwright & Clean Architecture",
      subtitle: "Qualidade de Software com POM, Auto-Waiting e Paralelismo",
      description: "Um repositório de automação de testes para uma aplicação web, estruturado do zero utilizando boas práticas de desenvolvimento (Page Object Model - POM) para garantir escalabilidade. Aborda a mitigação de testes instáveis (flaky) com auto-waiting estruturado, fixtures personalizadas, capturas automáticas de vídeo/screenshot em caso de falha e execução em paralelo mulitinavegador (Chromium, Firefox, WebKit).",
      technologies: ["Playwright", "Clean Architecture", "POM (Page Object Model)", "TypeScript", "CI/CD Git Flow"],
      githubUrl: "https://github.com/JHOSEVEL",
      deployUrl: "#",
      hasInteractiveDemo: true,
      demoType: "playwright",
      badge: "E2E Browser Pipeline Ready",
      metric1: { label: "Assertions", value: "+45 Passadas" },
      metric2: { label: "Ambiente", value: "Multi-Browser" },
      metric3: { label: "Resiliência", value: "Auto-Waiting" },
      mockupUrl: "localhost:3000/reports/playwright-suite",
      mockupImage: "/src/assets/images/playwright_dashboard_1781633632883.jpg",
      mockupCaption: "Relatório visual do executor E2E Chromium em pipeline estável"
    },
    {
      id: "postman-newman-api",
      title: "Automação e Testes de Contrato de APIs Rest com Postman & Newman",
      subtitle: "Suíte de Testes com Validação de JSON Schema e Encadeamento de Requests",
      description: "Uma suíte de testes automatizados para APIs REST, validando fluxos críticos de regras de negócio, headers de resposta e testes de contrato por meio de validação de JSON Schema. Destaca requisições encadeadas dinamicamente (criar -> autenticar -> deletar) e prontos para rodar em linha de comando (Newman CLI).",
      technologies: ["Postman", "Newman CLI", "JSON Schema", "JavaScript Tests", "Coleções de API"],
      githubUrl: "https://github.com/JHOSEVEL",
      deployUrl: "#",
      hasInteractiveDemo: false,
      badge: "API Contract Verified",
      metric1: { label: "Asserções", value: "Schema Valid" },
      metric2: { label: "Estratégia", value: "Encadeamento" },
      metric3: { label: "CLI Runner", value: "Newman Test" },
      mockupUrl: "api.valide.local/v1/auth",
      mockupImage: "/src/assets/images/playwright_dashboard_1781633632883.jpg",
      mockupCaption: "Execução de coleções encadeadas e validação de contrato de API"
    },
    {
      id: "cicd-qaops-pipeline",
      title: "Pipeline de CI/CD Integrada com Testes Automatizados (QAOps)",
      subtitle: "QAOps Automatizado com Atila do GitHub Actions",
      description: "Configuração completa de pipeline de Integração Contínua (CI/CD) focando em QAOps. Garante que códigos quebrados não atinjam homologação ao disparar Playwright/Postman automaticamente a cada Pull Request. Executa testes de navegador em modo headless de forma transparente na nuvem, gerando relatórios em HTML Reporter persistidos como artefatos.",
      technologies: ["GitHub Actions", "YAML CI/CD", "QAOps Flow", "Headless Testing", "HTML Report Artifacts"],
      githubUrl: "https://github.com/JHOSEVEL",
      deployUrl: "#",
      hasInteractiveDemo: false,
      badge: "Continuous QAOps Active",
      metric1: { label: "Trigger", value: "Pull Requests" },
      metric2: { label: "Platform", value: "GitHub Actions" },
      metric3: { label: "Status", value: "Headless Green" },
      mockupUrl: "github.com/JHOSEVEL/qaops-actions",
      mockupImage: "/src/assets/images/playwright_dashboard_1781633632883.jpg",
      mockupCaption: "Workflow estruturado em YAML com geração de relatórios de cobertura"
    },
    {
      id: "security-sanitizer",
      title: "Lab de Pentest: Auditoria de Segurança e Hardening em Aplicação Web",
      subtitle: "Análise de Vulnerabilidade, Mapeamento Nmap, Hydra e Diretrizes de Hardening",
      description: "Um relatório técnico detalhado (Write-up) de análise de segurança em ambiente controlado. Usando Nmap para mapeamento de serviços ativos no host e Hydra para simulação instruída de força bruta contra logins vulneráveis. Aponta correções direcionadas à mitigação de falhas de XSS e injeção do guia OWASP Top 10.",
      technologies: ["Nmap Scan", "Hydra Brute Force", "Segurança de Redes", "OWASP Top 10", "Mitigação / Hardening"],
      githubUrl: "https://github.com/JHOSEVEL",
      deployUrl: "#",
      hasInteractiveDemo: true,
      demoType: "security",
      badge: "OWASP Top 10 Guard Configured",
      metric1: { label: "Proteção", value: "SQLi & XSS" },
      metric2: { label: "Auditoria", value: "Ataques Hydra" },
      metric3: { label: "Scanner", value: "Nmap/Serviços" },
      mockupUrl: "localhost:3000/reports/pentest-hardening",
      mockupImage: "/src/assets/images/shield_defender_dashboard_1781633648629.jpg",
      mockupCaption: "Relatório técnico de auditoria e saneamento preventivo"
    },
    {
      id: "jira-agile-qa",
      title: "Simulação de Gestão de Qualidade e Agile QA no Jira/Kanban",
      subtitle: "Definição de DoR/DoD, Shift-Left Testing e Escrita de Histórias com BDD",
      description: "Estudo de caso detalhado aplicando conceitos ágeis (Scrum/Kanban) e a abordagem estratégica de Shift-Left Testing. Apresenta o desenho de fluxos de ciclo de vida de bugs no Jira, estabelecimento estrito de checklists de portões de qualidade (DoR/DoD) e redação impecável de estórias de usuário e relatórios de defeitos.",
      technologies: ["Atlassian Jira", "Metodologia Ágil", "Definição DoR/DoD", "Critérios BDD (Gherkin)", "Bug Reporting"],
      githubUrl: "https://github.com/JHOSEVEL",
      deployUrl: "#",
      hasInteractiveDemo: false,
      badge: "Agile QA Quality Gates",
      metric1: { label: "Abordagem", value: "Shift-Left" },
      metric2: { label: "Critérios", value: "BDD Gherkin" },
      metric3: { label: "Controle", value: "DoR & DoD" },
      mockupUrl: "jira.atlassian.net/projects/QA",
      mockupImage: "/src/assets/images/shield_defender_dashboard_1781633648629.jpg",
      mockupCaption: "Estruturação de tickets, transições de kanban e ciclos de bugs"
    }
  ] as Project[],

  skillsData: [
    {
      title: "QA & Automação",
      icon: "ShieldAlert",
      skills: [
        { name: "Automação com Playwright", level: 60, description: "Modelagem inicial de scripts simples para automação de testes funcionais e fluxos de navegação básica." },
        { name: "Testes de APIs com Postman", level: 45, description: "Validação básica de requisições, payloads JSON de resposta e verificação preliminar de status codes." },
        { name: "Front-end básico", level: 50, description: "Compreensão essencial de HTML, CSS e JavaScript para manipulação de seletores de DOM e correções em páginas web." }
      ]
    },
    {
      title: "Pentest",
      icon: "Binary",
      skills: [
        { name: "Scan de Redes com Nmap", level: 40, description: "Identificação de portas abertas, mapeamento de hosts ativos e detecção básica de serviços na rede local." },
        { name: "Brute Force com Hydra", level: 30, description: "Simulações básicas de ataques de força bruta contra serviços SSH ou HTTP para identificação de senhas fracas." },
        { name: "Redes básico", level: 45, description: "Entendimento conceitual de protocolos fundamentais (TCP/IP, HTTP/S, DNS) e modelos de comunicação de rede." }
      ]
    },
    {
      title: "Processos & Ferramentas",
      icon: "FolderGit",
      skills: [
        { name: "Gestão Ágil com Atlassian Jira", level: 80, description: "Modelagem minuciosa de tickets de bugs com passos para reproduzir, comportamento esperado e relatórios de erro." },
        { name: "Organização com Kanban", level: 75, description: "Gestão de fluxo de trabalho visual e de filas de prioridade para otimização de entregas contínuas." },
        { name: "Metodologia Scrum", level: 70, description: "Participação ativa e entendimento conceitual das cerimônias (Daily, Planning, Review e Retrospective)." },
        { name: "Conhecimentos básicos em CI/CD", level: 35, description: "Entendimento teórico de pipelines automatizados de compilação, teste e integração contínua." }
      ]
    }
  ] as SkillCategory[]
};
