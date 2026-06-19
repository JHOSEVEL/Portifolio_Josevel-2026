# 🧪 E-Commerce Testing Suite (Automation Exercise)

Este repositório contém uma suíte de testes de ponta a ponta (E2E), validação de APIs e auditoria de segurança baseada no site de treinamento de automação [Automation Exercise](https://automationexercise.com/). 

O projeto está dividido em **3 pilares fundamentais de Qualidade de Software (QA)**:
1. **Automação Front-End (Playwright)**: Fluxo completo de compra utilizando Page Object Model (POM).
2. **Validação e Contrato de APIs (Postman)**: Testes de integração encadeados e validações de modelo de dados.
3. **Segurança de API - Pentest BOLA (SecQA)**: Simulação e validação preventiva contra violação de controle de acesso de nível de objeto (Broken Object Level Authorization).

---

## 📁 Estrutura do Repositório

```text
├── .github/workflows/       # Integração contínua (CI/CD)
├── playwright/
│   ├── pages/               # Page Objects (POM)
│   │   ├── BasePage.ts
│   │   ├── LoginPage.ts
│   │   ├── CartPage.ts
│   │   └── CheckoutPage.ts
│   └── tests/
│       └── e2e-flow.spec.ts # Fluxo crítico E2E
├── postman/
│   ├── collections/
│   │   └── ecommerce_api_validation.json # Collection Postman
│   └── environments/
│       └── production.postman_environment.json # Variáveis globais
├── security-qa/
│   └── bola_tampering_test.json # Testes de vulnerabilidade Newman
└── README.md
```

---

## 🚀 1. E-Commerce Core Flow | Playwright (E2E)

### 🎯 Objetivo
Automação robusta do fluxo transacional crítico do e-commerce no site `automationexercise.com`, estruturado sob o padrão **Page Object Model (POM)** para máxima reutilização e manutenção facilitada de seletores.

### 🔄 Fluxo Automatizado
1. **Login**: Autenticação com credenciais previamente cadastradas.
2. **Busca e Seleção**: Navegação até o catálogo de produtos, pesquisa do item `"Sleeveless Dress"` e inserção no carrinho.
3. **Sacola**: Validação de integridade do item adicionado e quantidade correta.
4. **Checkout**: Avançar para a tela de faturamento (`Proceed To Checkout`), inserção simulada de dados de pagamento e finalização com a captura da tela `"ORDER PLACED!"`.

### 🛡️ Código do Teste (`e2e-flow.spec.ts`)
```typescript
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('E-Commerce Core Flow', () => {
  test('Deve autenticar, adicionar produto ao carrinho e finalizar compra com sucesso', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // 1. Autenticação de Usuário (Login)
    await loginPage.navigate();
    await loginPage.login('tester@example.com', 'seu_password_seguro');
    await expect(page.locator('text=Logged in as username')).toBeVisible();

    // 2. Busca e Adição ao Carrinho
    await cartPage.searchAndAddProduct('Sleeveless Dress');
    await cartPage.goToCart();
    await expect(cartPage.productInCart('Sleeveless Dress')).toBeVisible();

    // 3. Checkout e Pagamento
    await checkoutPage.proceedToCheckout();
    await checkoutPage.fillPaymentDetailsAndConfirm({
      nameOnCard: 'QA Engineer',
      cardNumber: '4000123456789010',
      cvc: '123',
      expiryMonth: '12',
      expiryYear: '2029'
    });

    // 4. Asserção Final de Sucesso
    await expect(page.locator('text=ORDER PLACED!')).toBeVisible();
  });
});
```

---

## 📡 2. E-Commerce API Validation | Postman

### 🎯 Objetivo
Garantir o funcionamento contínuo, consistência do contrato e velocidade dos endpoints de API do Automation Exercise através do encadeamento dinâmico de variáveis globais e testes funcionais em JavaScript.

### 🔗 Arquitetura das Requisições

#### **Requisição 1: POST `/api/verifyLogin`**
* **Finalidade**: Validar credenciais fornecidas para autenticação da sessão.
* **Corpo (Form-Data)**: `email=emilys@example.com&password=emilyspassword`
* **Asserções na aba "Tests"**:
  ```javascript
  // Valida status e contrato
  pm.test("Status code é 200 - Login Sucesso", function () {
      pm.response.to.have.status(200);
  });

  pm.test("Retornou mensagem de validação contendo User exists!", function () {
      var jsonData = pm.response.json();
      pm.expect(jsonData.message).to.eql('User exists!');
      
      // Armazena e-mail validado globalmente para as próximas rotas
      pm.environment.set("session_email", "emilys@example.com");
  });
  ```

#### **Requisição 2: GET `/api/productsList`**
* **Finalidade**: Obter o catálogo completo de produtos do e-commerce.
* **Asserções na aba "Tests"**:
  ```javascript
  pm.test("Status code é 200 - Produtos Listados", function () {
      pm.response.to.have.status(200);
  });

  pm.test("Tempo de resposta menor que 500ms", function () {
      pm.expect(pm.response.responseTime).to.be.below(500);
  });

  pm.test("A lista de produtos contém itens válidos", function () {
      var jsonData = pm.response.json();
      pm.expect(jsonData.products).to.be.an('array');
      pm.expect(jsonData.products[0]).to.have.property('id');
      pm.expect(jsonData.products[0]).to.have.property('name');
      pm.expect(jsonData.products[0]).to.have.property('price');
  });
  ```

---

## 🛡️ 3. Email Tampering & BOLA Test | Security QA

### 🎯 Conceito de Teste (Vulnerabilidade OWASP API1:2023)
O teste averigua o comportamento do sistema contra ataques de **Broken Object Level Authorization (BOLA)**. Em cenários reais, se o usuário **João** (`joao@example.com`) está logado, ele deve apenas conseguir buscar as informações de sua conta `/api/getUserDetailByEmail?email=joao@example.com`. 

Se o João interceptar a chamada e enviar alterado no corpo `email=maria@example.com` (Email Tampering), o backend **deve recusar e retornar código 403 Forbidden ou 401 Unauthorized** para proteger a integridade dos dados da Maria.

```text
Atacante (João)                              Servidor Protegido (BOLA Immune)
     |                                                      |
     |-----> POST /api/getUserDetailByEmail                |
     |       Body: { email: "maria@example.com" }           |
     |       Session: [Sessão Válida do João]               |
     |                                                      |
     |                                                [Valida Sessão vs Body]
     |                                                [Inconsistência Detectada]
     |                                                      |
     |<----- HTTP 403 Forbidden / 401 Unauthorized <--------|
     |       "Acesso negado: Perímetro não autorizado!"     |
```

### 🧪 Script de Pentest SecQA (Newman Automation)
Integrado na pipeline, valida se o filtro bloqueia requisições cruzadas:

```javascript
// Cenário 1: Happy Path (João lendo João)
pm.test("Status deve ser 200 - Usuário acessou os próprios dados", function () {
    pm.response.to.have.status(200);
});

// Cenário 2: Ataque Lateral BOLA (João lendo Maria)
pm.test("Segurança IP: Status deve ser 403 Forbidden para manipulação lateral de email", function () {
    pm.expect(pm.response.code).to.be.oneOf([401, 403]);
});

pm.test("Segurança IP: Resposta não deve expor cadastro sensível de terceiros", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.not.have.property('user');
});
```

---

## 🛠️ Como Executar os Projetos Localmente

### Pré-requisitos
Certifique-se de ter o **Node.js** instalado em seu computador.

### 1. Clonar o Repositório
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instalar Dependências
```bash
npm install
```

### 3. Rodar os testes de Automação Front-End (Playwright)
```bash
# Executa os testes no modo headless
npx playwright test

# Executa e abre o relatório visual do Playwright
npx playwright show-report
```

### 4. Rodar a Suite de APIs e Security QA via CLI (Newman)
Instale o runner globalmente ou use o `npx`:
```bash
# Rodar testes funcionais das APIs
npx newman run postman/collections/ecommerce_api_validation.json -e postman/environments/production.postman_environment.json

# Rodar testes de segurança (BOLA Pentest)
npx newman run security-qa/bola_tampering_test.json
```

---

## 🏆 Habilidades & Ferramentas Demonstradas
* **Linguagens & Frameworks**: TypeScript, JavaScript, Node.js.
* **Automação de Testes**: Playwright, POM (Page Object Model), Assertions estruturados.
* **Inspeção de APIs**: Postman Collections, Chaining Requests, Dynamic Environments.
* **Segurança de Software (SecQA)**: OWASP Top 10 API Security, BOLA Prevention, Newman CLI execution.
* **Boas Práticas de Engenharia**: Testes determinísticos, relatórios automatizados, integração com pipelines CI/CD.

---
Desenvolvido com foco absoluto em qualidade estrita de software por **JHOSEVEL**.
