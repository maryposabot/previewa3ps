/* =======================================================
   A&L SOLUÇÕES INDUSTRIAIS — main.js
   Versão: 2.1.0
   Organização: Config → WhatsApp → Formulário → Comportamentos
   ======================================================= */

'use strict';

/* -------------------------------------------------------
   01. CONFIGURAÇÃO CENTRAL DA EMPRESA
   ------------------------------------------------------- */
const CONFIG = {
  company: {
    name: 'A&L Soluções Industriais',
    legalName: 'A&L Soluções Industriais Ltda.',
    slogan: 'Engenharia aplicada às necessidades da sua operação.',
    tagline: 'Engenharia, Manutenção Industrial, Inspeções, Perícias e Materiais MRO',
    phone: '+55 11 94004-7722',
    phoneDisplay: '(11) 94004-7722',
    whatsapp: '5511940047722',
    email: 'aelsolucoes@outlook.com',
    city: 'São Paulo / SP',
    hours: 'Segunda a Sexta, das 8h às 18h',
  },
};

/* -------------------------------------------------------
   02. WHATSAPP — Mensagens Contextuais
   ------------------------------------------------------- */
const WA = {
  general: () => 
    `Olá! Vim pelo site da A&L Soluções Industriais e gostaria de solicitar um atendimento técnico para minha operação.`,
  
  service: (name) => 
    `Olá! Vim pelo site da A&L Soluções Industriais e gostaria de saber mais sobre a solução de *${name}*.`,
  
  mro: () => 
    `Olá! Vim pelo site da A&L Soluções Industriais e gostaria de solicitar uma cotação de materiais MRO para minha empresa.`,

  parceria: () =>
    `Olá! Vim pelo site da A&L Soluções Industriais e gostaria de conversar sobre parceria técnica para fabricantes.`,

  pericia: () =>
    `Olá! Vim pelo site da A&L Soluções Industriais e gostaria de solicitar uma análise técnica / suporte pericial.`,

  form: (data, actionType) => {
    const header = actionType === 'cotacao' 
      ? `*SOLICITAÇÃO DE COTAÇÃO (MRO / SERVIÇOS)*`
      : `*SOLICITAÇÃO DE ATENDIMENTO TÉCNICO*`;

    return `${header}\n\n` +
      `*Nome:* ${data.nome}\n` +
      `*Empresa:* ${data.empresa}\n` +
      `*Telefone:* ${data.telefone}\n` +
      `*E-mail:* ${data.email}\n` +
      `*Tipo de Necessidade:* ${data.tipo}\n` +
      `*Descrição da Solicitação:*\n${data.descricao}\n\n` +
      `_Enviado através do site oficial da A&L Soluções Industriais_`;
  },

  url: (msg) => `https://wa.me/${CONFIG.company.whatsapp}?text=${encodeURIComponent(msg)}`,
};

/* -------------------------------------------------------
   03. COMPORTAMENTO GLOBAL DO WHATSAPP
   ------------------------------------------------------- */
window.openWhatsApp = function(type, param) {
  type = type || 'general';
  param = param || '';

  let msg;
  if (type === 'service') {
    msg = WA.service(param);
  } else if (type === 'mro') {
    msg = WA.mro();
  } else if (type === 'parceria') {
    msg = WA.parceria();
  } else if (type === 'pericia') {
    msg = WA.pericia();
  } else {
    msg = WA.general();
  }

  window.open(WA.url(msg), '_blank', 'noopener,noreferrer');
};

/* -------------------------------------------------------
   04. FORMULÁRIO DE CONTATO (Transparente e Funcional)
   ------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  const btnCotacao = document.getElementById('btn-submit-cotacao');

  if (!form) return;

  function handleSubmission(actionType) {
    const nome = form.querySelector('#form-nome').value.trim();
    const empresa = form.querySelector('#form-empresa').value.trim();
    const telefone = form.querySelector('#form-telefone').value.trim();
    const email = form.querySelector('#form-email').value.trim();
    const tipo = form.querySelector('#form-tipo') ? form.querySelector('#form-tipo').value : 'Não informado';
    const descricao = form.querySelector('#form-descricao').value.trim();

    if (!nome || !empresa || !telefone || !email || !descricao) {
      if (feedback) {
        feedback.className = 'form-feedback form-feedback--error';
        feedback.textContent = 'Por favor, preencha todos os campos obrigatórios (*) para prosseguir.';
      }
      return;
    }

    const data = { nome, empresa, telefone, email, tipo, descricao };
    const waMessage = WA.form(data, actionType);
    const waUrl = WA.url(waMessage);

    // Confirmação transparente ao usuário
    if (feedback) {
      feedback.className = 'form-feedback form-feedback--success';
      feedback.innerHTML = `
        <strong>Solicitação registrada com sucesso!</strong><br>
        Abrindo canal de atendimento pelo WhatsApp oficial da A&L com os dados preenchidos.
        <br><span style="font-size:0.85em; opacity:0.85;">Caso a janela não abra automaticamente, <a href="${waUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--c-white); text-decoration:underline;">clique aqui para abrir</a>.</span>
      `;
    }

    // Abre o WhatsApp com a mensagem estruturada
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    handleSubmission('atendimento');
  });

  if (btnCotacao) {
    btnCotacao.addEventListener('click', function(e) {
      e.preventDefault();
      handleSubmission('cotacao');
    });
  }
}

/* -------------------------------------------------------
   05. HEADER SCROLL & VISIBILIDADE
   ------------------------------------------------------- */
function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  let lastY = 0;
  let ticking = false;

  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        const y = window.scrollY;
        if (y > 60) {
          header.classList.add('is-scrolled');
        } else {
          header.classList.remove('is-scrolled');
        }

        if (y > 300) {
          if (y > lastY + 5) {
            header.classList.add('is-hidden');
          } else if (y < lastY - 5) {
            header.classList.remove('is-hidden');
          }
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

/* -------------------------------------------------------
   06. MENU MOBILE
   ------------------------------------------------------- */
function initMobileMenu() {
  const toggle   = document.getElementById('menu-toggle');
  const nav      = document.getElementById('mobile-nav');
  const overlay  = document.getElementById('menu-overlay');
  const closeBtn = document.getElementById('menu-close');

  if (!toggle || !nav) return;

  function openMenu() {
    nav.classList.add('is-open');
    if (overlay) overlay.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    nav.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-visible');
    document.body.style.overflow = '';
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function() {
    if (nav.classList.contains('is-open')) closeMenu();
    else openMenu();
  });

  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);

  nav.querySelectorAll('.mobile-nav-link, .mobile-nav-cta a, .mobile-nav-cta button').forEach(function(el) {
    el.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) closeMenu();
  });
}

/* -------------------------------------------------------
   07. ANIMAÇÕES POR INTERSECTION OBSERVER
   ------------------------------------------------------- */
function initAnimations() {
  const animatedElements = document.querySelectorAll('[data-animate]');
  if (!animatedElements.length) return;

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.style.getPropertyValue('--delay')) || 0;
        setTimeout(function() {
          entry.target.classList.add('is-visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  animatedElements.forEach(function(el) {
    observer.observe(el);
  });
}

/* -------------------------------------------------------
   08. BOTÃO FLUTUANTE WHATSAPP
   ------------------------------------------------------- */
function initFloatingWA() {
  const btn = document.getElementById('wa-float');
  if (!btn) return;

  btn.addEventListener('click', function() {
    openWhatsApp('general');
  });

  window.addEventListener('scroll', function() {
    if (window.scrollY > 400) {
      btn.classList.add('is-visible');
    } else {
      btn.classList.remove('is-visible');
    }
  }, { passive: true });
}

/* -------------------------------------------------------
   09. NAVEGAÇÃO ATIVA CONFORME SCROLL
   ------------------------------------------------------- */
function initActiveNav() {
  const navLinks = document.querySelectorAll('.nav-link');
  if (!navLinks.length) return;

  const sections = Array.from(navLinks)
    .map(function(link) {
      const id = link.getAttribute('href');
      return id && id.startsWith('#') ? document.querySelector(id) : null;
    })
    .filter(Boolean);

  if (!sections.length) return;

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        navLinks.forEach(function(l) { l.classList.remove('is-active'); });
        const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add('is-active');
      }
    });
  }, { threshold: 0.25 });

  sections.forEach(function(s) {
    observer.observe(s);
  });
}

/* -------------------------------------------------------
   10. ANO DO RODAPÉ
   ------------------------------------------------------- */
function initFooterYear() {
  const yr = document.getElementById('footer-year');
  if (yr) {
    yr.textContent = new Date().getFullYear();
  }
}

/* =======================================================
   INICIALIZAÇÃO DO DOM
   ======================================================= */
document.addEventListener('DOMContentLoaded', function() {
  initFooterYear();
  initHeader();
  initMobileMenu();
  initAnimations();
  initFloatingWA();
  initActiveNav();
  initContactForm();
});
