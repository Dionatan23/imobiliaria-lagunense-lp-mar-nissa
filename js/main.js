(() => {
  const wa = (message) => `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  document.querySelectorAll('.js-wa').forEach(el => {
    const msg = el.dataset.message || 'Olá! Gostaria de informações sobre o Mar Di Nizza Residencial.';
    el.href = wa(msg); el.target = '_blank'; el.rel = 'noopener noreferrer';
    el.addEventListener('click', () => track('click_whatsapp', {origin: el.closest('section')?.id || el.className}));
  });
  const menu = document.querySelector('.menu-toggle');
  menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); document.querySelector('.main-nav').classList.toggle('open', open); menu.textContent = open ? '×' : '☰'; });
  document.querySelectorAll('.main-nav a').forEach(a => a.addEventListener('click', () => { document.querySelector('.main-nav').classList.remove('open'); menu.setAttribute('aria-expanded','false'); menu.textContent='☰'; }));
  const plans = [
    {n:'01', area:'92,09', rooms:3, file:'planta-final-01.jpg'},
    {n:'02', area:'87,98', rooms:3, file:'planta-final-02.jpg'},
    {n:'03', area:'65,89', rooms:2, file:'planta-final-03.jpg'},
    {n:'04', area:'87,84', rooms:3, file:'planta-final-04.jpg'},
    {n:'05', area:'90,78', rooms:3, file:'planta-final-05.jpg'},
    {n:'06', area:'66,51', rooms:2, file:'planta-final-06.jpg'}
  ];
  const grid = document.getElementById('plans-grid');
  function render(filter='all') {
    grid.innerHTML = plans.filter(p => filter==='all' || String(p.rooms)===filter).map(p => `
      <article class="plan-card"><div class="plan-visual"><img src="assets/plans/${p.file}" alt="Planta técnica final ${p.n}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><div class="plan-placeholder"><span>PLANTA FINAL ${p.n}</span><small>IMAGEM TÉCNICA OFICIAL</small></div><span class="plan-tag">${p.rooms} DORM.</span></div><div class="plan-info"><div><span>FINAL ${p.n}</span><h3>${p.area} <small>m²</small></h3><p>${p.rooms} dormitórios · 1 suíte</p></div><a class="plan-cta" href="${wa(`Olá! Acessei a página do Mar Di Nizza e gostaria de receber informações sobre a planta final ${p.n}, com ${p.area} m² e ${p.rooms} dormitórios.`)}" target="_blank" rel="noopener" aria-label="Consultar planta final ${p.n}">↗</a></div></article>`).join('');
  }
  render();
  document.querySelectorAll('.filter').forEach(btn => btn.addEventListener('click', () => { document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); render(btn.dataset.filter); track('click_view_plans',{filter:btn.dataset.filter}); }));
  document.querySelectorAll('[data-filter-link]').forEach(a => a.addEventListener('click', () => { const f=a.dataset.filterLink; document.querySelectorAll('.filter').forEach(b=>b.classList.toggle('active',b.dataset.filter===f)); render(f); }));
  const phone = document.querySelector('input[name="phone"]');
  phone.addEventListener('input', () => { let v=phone.value.replace(/\D/g,'').slice(0,11); if(v.length>10) v=v.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3'); else if(v.length>6) v=v.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3'); else if(v.length>2) v=v.replace(/^(\d{2})(\d{0,5})/, '($1) $2'); else if(v.length) v='('+v; phone.value=v; });
  document.getElementById('lead-form').addEventListener('submit', e => { e.preventDefault(); const f=new FormData(e.currentTarget); const msg=[`Olá! Gostaria de receber informações sobre o Mar Di Nizza Residencial.`,`Nome: ${f.get('name')}`,`WhatsApp: ${f.get('phone')}`,`Interesse: ${f.get('interest')}`,`Objetivo: ${f.get('goal')}`,`Planta: ${f.get('plan')}`,f.get('message')?`Mensagem: ${f.get('message')}`:''].filter(Boolean).join('\n'); track('form_submit'); window.open(wa(msg),'_blank','noopener'); });
  function track(name, params={}) { if(typeof window.gtag==='function') window.gtag('event',name,params); if(typeof window.fbq==='function') window.fbq('trackCustom',name,params); }
  if(SITE_CONFIG.gaMeasurementId) { const s=document.createElement('script'); s.async=true; s.src=`https://www.googletagmanager.com/gtag/js?id=${SITE_CONFIG.gaMeasurementId}`; document.head.appendChild(s); window.dataLayer=window.dataLayer||[]; window.gtag=function(){dataLayer.push(arguments)}; gtag('js',new Date()); gtag('config',SITE_CONFIG.gaMeasurementId); }
  if(SITE_CONFIG.metaPixelId) { /* Inserir o snippet oficial do Meta Pixel após configurar o ID e consentimento. */ }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target);} }),{threshold:.12});
  document.querySelectorAll('.section, .final-cta').forEach(el=>observer.observe(el));
})();
