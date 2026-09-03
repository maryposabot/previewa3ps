/* =======================================================
   AEL SOLUÇÕES — main.js
   Versão: 1.0.0
   Organização: Config → Dados → Render → Comportamentos
   ======================================================= */

'use strict';

/* -------------------------------------------------------
   01. CONFIGURAÇÃO CENTRAL DO SITE
   ------------------------------------------------------- */
const CONFIG = {
  company: {
    name: 'A-3Ps',
    tagline: 'Suprimentos e Serviços para Empresas',
    description: 'Fornecimento de suprimentos, produtos e serviços para empresas que buscam qualidade, agilidade e confiança.',
    phone: '+55 11 94004-7722',
    whatsapp: '5511940047722',
    email: 'aelsolucoes@outlook.com',
    address: '[Endereço completo]',
    neighborhood: '[Bairro]',
    city: '[Cidade — SP]',
    cep: '[CEP]',
    instagram: '#',
    linkedin: '#',
    hours: 'Segunda a Sexta, das 8h às 18h',
    hoursWeekend: '[Sábado: informar horário ou retirar]',
  },
};

/* -------------------------------------------------------
   02. WHATSAPP — Mensagens contextuais centralizadas
   ------------------------------------------------------- */
const WA = {
  general:  ()     => `Olá! Vim pelo site da A-3Ps e gostaria de solicitar um orçamento para minha empresa.`,
  product:  (name) => `Olá! Vim pelo site da A-3Ps e tenho interesse no produto *${name}*. Gostaria de receber mais informações e um orçamento.`,
  service:  (name) => `Olá! Vim pelo site da A-3Ps e gostaria de saber mais sobre o serviço *${name}*.`,
  url:      (msg)  => `https://wa.me/${CONFIG.company.whatsapp}?text=${encodeURIComponent(msg)}`,
};

/* -------------------------------------------------------
   03. DADOS — Estatísticas de credibilidade
   ------------------------------------------------------- */
const STATS = [
  { number: '[XX]+',  label: 'Empresas Atendidas'    },
  { number: '[XXX]+', label: 'Produtos Disponíveis'  },
  { number: '[X]+',   label: 'Anos de Experiência'   },
  { number: '[XX]+',  label: 'Cidades Atendidas'     },
];

/* -------------------------------------------------------
   04. DADOS — Categorias de produtos
   ------------------------------------------------------- */
const CATEGORIES = [
  { slug: 'todos',       label: 'Todos'               },
  { slug: 'limpeza',     label: 'Higiene & Limpeza'   },
  { slug: 'escritorio',  label: 'Papelaria & Escritório' },
  { slug: 'epi',         label: 'EPI & Segurança'     },
  { slug: 'copa',        label: 'Copa & Cozinha'      },
  { slug: 'ti',          label: 'TI & Tecnologia'     },
  { slug: 'manutencao',  label: 'Manutenção'          },
];

/* -------------------------------------------------------
   05. DADOS — Produtos
   ------------------------------------------------------- */
const PRODUCTS = [
  {
    id: 1,
    name: 'Materiais de Limpeza Profissional',
    category: 'Higiene & Limpeza',
    categorySlug: 'limpeza',
    description: 'Linha completa de produtos de limpeza para ambientes corporativos: desinfetantes, detergentes, alvejantes e sanitizantes de alta performance.',
    image: 'images/product-limpeza.png',
    specs: ['Certificados ANVISA', 'Alta concentração', 'Galões e embalagens industriais'],
    available: true,
  },
  {
    id: 2,
    name: 'Descartáveis de Higiene',
    category: 'Higiene & Limpeza',
    categorySlug: 'limpeza',
    description: 'Papel toalha, papel higiênico, sabonete líquido, álcool gel e dispensers para escritórios e áreas comuns.',
    image: 'images/product-descartaveis.png',
    specs: ['Papel 100% celulose', 'Álcool 70%', 'Embalagens em caixa'],
    available: true,
  },
  {
    id: 3,
    name: 'Suprimentos de Escritório',
    category: 'Papelaria & Escritório',
    categorySlug: 'escritorio',
    description: 'Resmas de papel, canetas, grampeadores, pastas, arquivos e tudo que sua equipe precisa para trabalhar com eficiência.',
    image: 'images/product-escritorio.png',
    specs: ['Papel A4 e Ofício', 'Marcas reconhecidas', 'Pedidos por caixa'],
    available: true,
  },
  {
    id: 4,
    name: 'EPI — Equipamentos de Proteção',
    category: 'EPI & Segurança',
    categorySlug: 'epi',
    description: 'Capacetes, luvas, óculos, coletes e equipamentos homologados pelo MTE para garantir a segurança da sua equipe.',
    image: 'images/product-epi.png',
    specs: ['CA homologado MTE', 'Normas NR vigentes', 'Estoque disponível'],
    available: true,
  },
  {
    id: 5,
    name: 'Copa & Cozinha Corporativa',
    category: 'Copa & Cozinha',
    categorySlug: 'copa',
    description: 'Copos descartáveis, café, açúcar, filtros, guardanapos e utensílios para manter a copa sempre abastecida.',
    image: 'images/product-copa.png',
    specs: ['Copos 200ml e 500ml', 'Café premium', 'Kits mensais disponíveis'],
    available: true,
  },
  {
    id: 6,
    name: 'Suprimentos de TI',
    category: 'TI & Tecnologia',
    categorySlug: 'ti',
    description: 'Cartuchos, toners, cabos, mouses, teclados e periféricos para manter a operação do escritório sem interrupções.',
    image: 'images/product-ti.png',
    specs: ['Toners originais e compatíveis', 'Garantia de produto', 'Entregas rápidas'],
    available: true,
  },
  {
    id: 7,
    name: 'Materiais de Manutenção',
    category: 'Manutenção Geral',
    categorySlug: 'manutencao',
    description: 'Lâmpadas, fios elétricos, plugues, fixadores e materiais gerais para a manutenção das instalações da sua empresa.',
    image: 'images/product-manutencao.png',
    specs: ['Elétrica e hidráulica', 'Ferramentas manuais', 'Fixadores e abraçadeiras'],
    available: true,
  },
  {
    id: 8,
    name: 'Sinalização e Segurança',
    category: 'EPI & Segurança',
    categorySlug: 'epi',
    description: 'Placas de sinalização, cones, fitas zebradas e itens de segurança para manter sua empresa em conformidade.',
    image: 'images/product-sinalizacao.png',
    specs: ['Normas ABNT', 'Sinalização completa', 'Pronta entrega'],
    available: true,
  },
];

/* -------------------------------------------------------
   06. DADOS — Serviços
   ------------------------------------------------------- */
const SERVICES = [
  {
    number: '01',
    name: 'Fornecimento Continuado',
    description: 'Programas de fornecimento regular com reposição planejada, garantindo que sua empresa nunca fique sem os suprimentos essenciais para a operação diária.',
  },
  {
    number: '02',
    name: 'Atendimento Personalizado',
    description: 'Consultoria especializada para identificar as reais necessidades da sua empresa e montar um portfólio sob medida para o seu segmento.',
  },
  {
    number: '03',
    name: 'Gestão de Suprimentos',
    description: 'Apoio no controle e reposição de estoque, com planejamento de compras para otimizar os custos operacionais da sua empresa.',
  },
  {
    number: '04',
    name: 'Logística e Entrega',
    description: 'Entrega eficiente com prazo acordado. Garantimos que seus pedidos cheguem no momento certo, sem complicações.',
  },
];

/* -------------------------------------------------------
   07. DADOS — Segmentos atendidos
   ------------------------------------------------------- */
const SEGMENTS = [
  { name: 'Indústrias'           },
  { name: 'Comércio'             },
  { name: 'Escritórios'          },
  { name: 'Clínicas e Saúde'     },
  { name: 'Restaurantes'         },
  { name: 'Logística'            },
  { name: 'Construção Civil'     },
  { name: 'Instituições de Ensino' },
];

/* -------------------------------------------------------
   08. DADOS — Diferenciais
   ------------------------------------------------------- */
const DIFFERENTIALS = [
  {
    number: '01',
    title: 'Atendimento B2B Especializado',
    description: 'Cada empresa tem necessidades únicas. Trabalhamos com um atendimento exclusivo e consultivo, pensando na realidade do seu negócio.',
  },
  {
    number: '02',
    title: 'Agilidade na Entrega',
    description: 'Sabemos que sua empresa não pode parar. Cumprimos os prazos acordados com eficiência e total transparência.',
  },
  {
    number: '03',
    title: 'Qualidade Garantida',
    description: 'Trabalhamos com produtos de qualidade comprovada, de marcas reconhecidas e que atendem às normas vigentes.',
  },
  {
    number: '04',
    title: 'Ampla Variedade',
    description: 'Do escritório ao EPI — um único parceiro para todas as categorias de suprimentos da sua empresa.',
  },
  {
    number: '05',
    title: 'Compromisso e Confiança',
    description: 'Construímos relacionamentos de longo prazo. Sua satisfação é a nossa principal métrica de sucesso.',
  },
  {
    number: '06',
    title: 'Suporte Contínuo',
    description: 'Estamos sempre disponíveis para atender dúvidas, processar pedidos e garantir que tudo funcione da melhor forma.',
  },
];

/* -------------------------------------------------------
   09. DADOS — Como funciona
   ------------------------------------------------------- */
const STEPS = [
  {
    number: '01',
    title: 'Entre em Contato',
    description: 'Fale com nossa equipe pelo WhatsApp ou e-mail. O primeiro contato é rápido e sem compromisso.',
  },
  {
    number: '02',
    title: 'Informe sua Necessidade',
    description: 'Compartilhe quais produtos ou serviços sua empresa precisa. Podemos ajudá-lo a identificar e listar tudo.',
  },
  {
    number: '03',
    title: 'Receba seu Orçamento',
    description: 'Preparamos uma proposta personalizada, clara e detalhada, com prazo de entrega e condições.',
  },
  {
    number: '04',
    title: 'Aprove e Comece',
    description: 'Após a aprovação, entramos em ação para garantir que tudo chegue no prazo e com a qualidade esperada.',
  },
];

/* -------------------------------------------------------
   10. DADOS — Depoimentos (placeholders)
   ------------------------------------------------------- */
const TESTIMONIALS = [
  {
    name: '[Nome do Responsável]',
    company: '[Nome da Empresa]',
    role: '[Cargo]',
    comment: 'Depoimento real a ser inserido. Descreva a experiência com a AEL Soluções, o atendimento recebido e os resultados obtidos para sua empresa.',
    rating: 5,
    placeholder: true,
  },
  {
    name: '[Nome do Responsável]',
    company: '[Nome da Empresa]',
    role: '[Cargo]',
    comment: 'Depoimento real a ser inserido. Descreva a experiência com a AEL Soluções, o atendimento recebido e os resultados obtidos para sua empresa.',
    rating: 5,
    placeholder: true,
  },
  {
    name: '[Nome do Responsável]',
    company: '[Nome da Empresa]',
    role: '[Cargo]',
    comment: 'Depoimento real a ser inserido. Descreva a experiência com a AEL Soluções, o atendimento recebido e os resultados obtidos para sua empresa.',
    rating: 5,
    placeholder: true,
  },
];

/* -------------------------------------------------------
   11. DADOS — FAQ
   ------------------------------------------------------- */
const FAQ = [
  {
    question: 'Quais empresas vocês atendem?',
    answer: 'Atendemos empresas de todos os portes e segmentos: indústrias, comércio, escritórios, clínicas, restaurantes, construtoras, instituições de ensino e muito mais. Se a sua empresa precisa de suprimentos, podemos ajudá-la.',
  },
  {
    question: 'Quais produtos vocês fornecem?',
    answer: 'Trabalhamos com uma ampla gama de suprimentos corporativos: materiais de limpeza e higiene, papelaria e escritório, EPI e segurança, copa e cozinha, suprimentos de TI, materiais de manutenção, sinalização e muito mais. Entre em contato para saber sobre produtos específicos.',
  },
  {
    question: 'Posso solicitar um orçamento personalizado?',
    answer: 'Sim! Todos os nossos orçamentos são personalizados de acordo com as necessidades reais da sua empresa. Basta entrar em contato informando os produtos desejados e as quantidades.',
  },
  {
    question: 'Vocês realizam entregas?',
    answer: '[Informação a ser confirmada — ex: Sim, realizamos entregas. Verifique a disponibilidade para sua região entrando em contato com nossa equipe.]',
  },
  {
    question: 'Qual o prazo de atendimento?',
    answer: '[Informação a ser confirmada — ex: Nosso prazo de resposta é de até X horas úteis após o recebimento do pedido.]',
  },
  {
    question: 'Como posso solicitar um orçamento?',
    answer: 'Você pode solicitar um orçamento pelo nosso WhatsApp, pelo e-mail ou diretamente pelo botão "Solicitar Orçamento" presente em qualquer parte do site. Nossa equipe retornará no menor prazo possível.',
  },
  {
    question: 'Vocês atendem outras cidades?',
    answer: '[Informação a ser confirmada — ex: Atendemos a cidade de [cidade] e região. Entre em contato para verificar disponibilidade na sua localidade.]',
  },
  {
    question: 'Quais formas de pagamento são aceitas?',
    answer: '[Informação a ser confirmada — ex: Trabalhamos com boleto bancário, transferência e PIX. Condições de parcelamento mediante análise.]',
  },
];

/* =======================================================
   FUNÇÕES DE RENDERIZAÇÃO
   ======================================================= */

function renderStats() {
  const el = document.getElementById('stats-grid');
  if (!el) return;
  el.innerHTML = STATS.map((s) => `
    <div class="stat-item" data-animate="fade-up">
      <strong class="stat-number">${s.number}</strong>
      <span class="stat-label">${s.label}</span>
    </div>
  `).join('');
}

function renderCategories() {
  const el = document.getElementById('product-filters');
  if (!el) return;
  el.innerHTML = CATEGORIES.map((c, i) => `
    <button
      class="filter-btn${i === 0 ? ' active' : ''}"
      data-filter="${c.slug}"
      aria-pressed="${i === 0 ? 'true' : 'false'}"
    >${c.label}</button>
  `).join('');

  el.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    el.querySelectorAll('.filter-btn').forEach((b) => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
    renderProducts(btn.dataset.filter);
  });
}

function renderProducts(filter) {
  filter = filter || 'todos';
  const el = document.getElementById('products-grid');
  if (!el) return;

  const list = filter === 'todos'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.categorySlug === filter);

  el.innerHTML = list.map((p) => `
    <article class="product-card" data-category="${p.categorySlug}">
      <div class="product-img-wrap">
        <img
          src="${p.image}"
          alt="${p.name}"
          loading="lazy"
          onerror="this.parentElement.classList.add('no-img')"
        />
        <span class="product-cat-tag">${p.category}</span>
      </div>
      <div class="product-body">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.description}</p>
        <ul class="product-specs">
          ${p.specs.map((s) => '<li>' + s + '</li>').join('')}
        </ul>
      </div>
      <div class="product-footer">
        <button
          class="btn btn--product"
          onclick="openWhatsApp('product','${escapeAttr(p.name)}')"
          aria-label="Solicitar orçamento para ${p.name}"
        >
          Solicitar Orçamento
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </article>
  `).join('');

  requestAnimationFrame(() => {
    el.querySelectorAll('.product-card').forEach((card, i) => {
      card.style.transitionDelay = (i * 50) + 'ms';
      card.classList.add('is-visible');
    });
  });
}

function renderServices() {
  const el = document.getElementById('services-list');
  if (!el) return;
  el.innerHTML = SERVICES.map((s) => `
    <div class="service-item" data-animate="fade-up">
      <span class="service-num" aria-hidden="true">${s.number}</span>
      <div class="service-content">
        <h3 class="service-name">${s.name}</h3>
        <p class="service-desc">${s.description}</p>
        <button
          class="btn btn--ghost-red"
          onclick="openWhatsApp('service','${escapeAttr(s.name)}')"
        >
          Solicitar informações
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  `).join('');
}

function renderSegments() {
  const el = document.getElementById('segments-grid');
  if (!el) return;
  el.innerHTML = SEGMENTS.map((s) => `
    <div class="segment-item" data-animate="fade-up">
      <span class="segment-marker" aria-hidden="true"></span>
      <span class="segment-name">${s.name}</span>
    </div>
  `).join('');
}

function renderDifferentials() {
  const el = document.getElementById('differentials-grid');
  if (!el) return;
  el.innerHTML = DIFFERENTIALS.map((d) => `
    <div class="diff-item" data-animate="fade-up">
      <span class="diff-num" aria-hidden="true">${d.number}</span>
      <div class="diff-body">
        <h3 class="diff-title">${d.title}</h3>
        <p class="diff-desc">${d.description}</p>
      </div>
    </div>
  `).join('');
}

function renderSteps() {
  const el = document.getElementById('steps-list');
  if (!el) return;
  el.innerHTML = STEPS.map((s, i) => `
    <div class="step-item" data-animate="fade-up" style="--delay:${i * 100}ms">
      <div class="step-num">${s.number}</div>
      <h3 class="step-title">${s.title}</h3>
      <p class="step-desc">${s.description}</p>
    </div>
  `).join('');
}

function renderTestimonials() {
  const el = document.getElementById('testimonials-grid');
  if (!el) return;
  el.innerHTML = TESTIMONIALS.map((t) => `
    <div class="testimonial-card${t.placeholder ? ' is-placeholder' : ''}" data-animate="fade-up">
      <div class="testimonial-stars" aria-label="${t.rating} de 5 estrelas">
        ${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}
      </div>
      <p class="testimonial-text">"${t.comment}"</p>
      <footer class="testimonial-author">
        <strong class="t-name">${t.name}</strong>
        <span class="t-role">${t.role} — ${t.company}</span>
      </footer>
      ${t.placeholder ? '<span class="placeholder-tag">Aguardando depoimento real</span>' : ''}
    </div>
  `).join('');
}

function renderFAQ() {
  const el = document.getElementById('faq-list');
  if (!el) return;

  el.innerHTML = FAQ.map((item, i) => `
    <div class="faq-item">
      <button
        class="faq-question"
        aria-expanded="false"
        aria-controls="faq-body-${i}"
        id="faq-btn-${i}"
      >
        <span>${item.question}</span>
        <span class="faq-icon" aria-hidden="true">
          <svg class="icon-plus"  width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
          <svg class="icon-minus" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/></svg>
        </span>
      </button>
      <div
        class="faq-body"
        id="faq-body-${i}"
        role="region"
        aria-labelledby="faq-btn-${i}"
        hidden
      >
        <p>${item.answer}</p>
      </div>
    </div>
  `).join('');

  el.addEventListener('click', (e) => {
    const btn = e.target.closest('.faq-question');
    if (!btn) return;

    const isOpen = btn.getAttribute('aria-expanded') === 'true';

    el.querySelectorAll('.faq-question').forEach((b) => {
      b.setAttribute('aria-expanded', 'false');
      const body = document.getElementById(b.getAttribute('aria-controls'));
      if (body) body.hidden = true;
    });

    if (!isOpen) {
      btn.setAttribute('aria-expanded', 'true');
      const body = document.getElementById(btn.getAttribute('aria-controls'));
      if (body) body.hidden = false;
    }
  });
}

function fillContactData() {
  const c = CONFIG.company;

  document.querySelectorAll('[data-phone]').forEach((el) => {
    el.textContent = c.phone;
    if (el.tagName === 'A') el.href = 'tel:' + c.phone.replace(/\D/g, '');
  });
  document.querySelectorAll('[data-email]').forEach((el) => {
    el.textContent = c.email;
    if (el.tagName === 'A') el.href = 'mailto:' + c.email;
  });
  document.querySelectorAll('[data-address]').forEach((el) => {
    el.textContent = c.address + ', ' + c.neighborhood + ' — ' + c.city;
  });
  document.querySelectorAll('[data-hours]').forEach((el) => {
    el.textContent = c.hours;
  });
}

/* =======================================================
   COMPORTAMENTOS
   ======================================================= */

window.openWhatsApp = function(type, name) {
  type = type || 'general';
  name = name || '';
  var msg;
  if (type === 'product') msg = WA.product(name);
  else if (type === 'service') msg = WA.service(name);
  else msg = WA.general();
  window.open(WA.url(msg), '_blank', 'noopener,noreferrer');
};

function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  var lastY = 0;
  var ticking = false;

  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        var y = window.scrollY;
        if (y > 60) header.classList.add('is-scrolled');
        else header.classList.remove('is-scrolled');

        if (y > 300) {
          if (y > lastY + 5) header.classList.add('is-hidden');
          else if (y < lastY - 5) header.classList.remove('is-hidden');
        } else {
          header.classList.remove('is-hidden');
        }

        lastY = y;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

function initMobileMenu() {
  const toggle  = document.getElementById('menu-toggle');
  const nav     = document.getElementById('mobile-nav');
  const overlay = document.getElementById('menu-overlay');
  if (!toggle || !nav) return;

  function open() {
    nav.classList.add('is-open');
    if (overlay) overlay.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
    toggle.setAttribute('aria-expanded', 'true');
  }

  function close() {
    nav.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-visible');
    document.body.style.overflow = '';
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', open);
  if (overlay) overlay.addEventListener('click', close);
  nav.querySelectorAll('a, button').forEach(function(el) { el.addEventListener('click', close); });
  document.addEventListener('keydown', function(e) { if (e.key === 'Escape') close(); });
}

function initAnimations() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var delay = parseInt(entry.target.style.getPropertyValue('--delay')) || 0;
        setTimeout(function() { entry.target.classList.add('is-visible'); }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('[data-animate]').forEach(function(el) { observer.observe(el); });
}

function initFloatingWA() {
  const btn = document.getElementById('wa-float');
  if (!btn) return;

  btn.addEventListener('click', function() { openWhatsApp('general'); });

  window.addEventListener('scroll', function() {
    if (window.scrollY > 400) btn.classList.add('is-visible');
    else btn.classList.remove('is-visible');
  }, { passive: true });
}

function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (!sections.length || !navLinks.length) return;

  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        navLinks.forEach(function(l) { l.classList.remove('is-active'); });
        var active = document.querySelector('.nav-link[href="#' + entry.target.id + '"]');
        if (active) active.classList.add('is-active');
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(function(s) { obs.observe(s); });
}

function escapeAttr(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

/* =======================================================
   INICIALIZAÇÃO
   ======================================================= */
document.addEventListener('DOMContentLoaded', function() {
  renderStats();
  renderCategories();
  renderProducts();
  renderServices();
  renderSegments();
  renderDifferentials();
  renderSteps();
  renderTestimonials();
  renderFAQ();
  fillContactData();

  initHeader();
  initMobileMenu();
  initAnimations();
  initFloatingWA();
  initActiveNav();
});
