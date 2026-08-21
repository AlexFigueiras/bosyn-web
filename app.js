/* ==========================================================================
   BOSYN ECOSYSTEM - INTERACTIVE LOGIC & ANIMATIONS (2026)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. HERO NETWORK CANVAS ANIMATION (Nodes, Synapses & Glowing Mesh)
    initHeroNetworkCanvas();

    // 2. NAVBAR SCROLL EFFECT & MOBILE MENU
    initNavigation();

    // 3. SAAS PRODUCT SHOWCASE SWITCHER (Connectase vs Gestão Arq)
    initSaaSTabs();

    // 4. INTERACTIVE SIMULATION WIDGETS
    initProductSimulators();

    // 5. CONTACT FORM & WHATSAPP GENERATOR
    initContactWhatsAppForm();

    // 6. SCROLL REVEAL OBSERVER
    initScrollReveal();
});

/* --------------------------------------------------------------------------
   1. HERO NETWORK CANVAS (Interactive Tech Grid & Slices)
   -------------------------------------------------------------------------- */
function initHeroNetworkCanvas() {
    const canvas = document.getElementById('heroNetworkCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.parentElement.offsetWidth;
    let height = canvas.height = canvas.parentElement.offsetHeight;

    window.addEventListener('resize', () => {
        if (!canvas.parentElement) return;
        width = canvas.width = canvas.parentElement.offsetWidth;
        height = canvas.height = canvas.parentElement.offsetHeight;
    });

    const particles = [];
    const particleCount = Math.min(Math.floor((width * height) / 14000), 75);

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.6,
            vy: (Math.random() - 0.5) * 0.6,
            radius: Math.random() * 2 + 1.2,
            color: Math.random() > 0.4 ? '#20D5EF' : '#087E98',
            pulse: Math.random() * Math.PI
        });
    }

    let mouse = { x: null, y: null, maxDist: 150 };

    window.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 130) {
                    const alpha = (1 - dist / 130) * 0.28;
                    ctx.strokeStyle = `rgba(32, 213, 239, ${alpha})`;
                    ctx.lineWidth = 0.85;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        // Connect with mouse
        if (mouse.x !== null && mouse.y !== null) {
            for (let i = 0; i < particles.length; i++) {
                const dx = mouse.x - particles[i].x;
                const dy = mouse.y - particles[i].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < mouse.maxDist) {
                    const alpha = (1 - dist / mouse.maxDist) * 0.45;
                    ctx.strokeStyle = `rgba(32, 213, 239, ${alpha})`;
                    ctx.lineWidth = 1.2;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        }

        // Draw and update particles
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;

            p.pulse += 0.03;
            const currentRadius = p.radius + Math.sin(p.pulse) * 0.5;

            ctx.beginPath();
            ctx.arc(p.x, p.y, Math.max(0.5, currentRadius), 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.shadowBlur = 8;
            ctx.shadowColor = '#20D5EF';
            ctx.fill();
            ctx.shadowBlur = 0;
        }

        requestAnimationFrame(animate);
    }

    animate();
}

/* --------------------------------------------------------------------------
   2. NAVBAR & MOBILE NAVIGATION
   -------------------------------------------------------------------------- */
function initNavigation() {
    const navbar = document.getElementById('navbarHeader');
    const mobileToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-open');
            const isOpen = navLinks.classList.contains('mobile-open');
            mobileToggle.setAttribute('aria-expanded', isOpen);
            mobileToggle.innerHTML = isOpen 
                ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>'
                : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>';
        });

        // Close on nav link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('mobile-open');
                mobileToggle.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>';
            });
        });
    }
}

/* --------------------------------------------------------------------------
   3. SAAS PRODUCT SHOWCASE SWITCHER
   -------------------------------------------------------------------------- */
function initSaaSTabs() {
    const tabButtons = document.querySelectorAll('.saas-tab-btn');
    const productContainers = document.querySelectorAll('.saas-product-container');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            productContainers.forEach(prod => prod.classList.remove('active'));

            button.classList.add('active');
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.classList.add('active');
            }
        });
    });
}

/* --------------------------------------------------------------------------
   4. INTERACTIVE SIMULATION WIDGETS (Connectase & Gestão Arq)
   -------------------------------------------------------------------------- */
function initProductSimulators() {
    // Connectase Demo: Simulate Clinical Note addition
    const addNoteBtn = document.getElementById('demoAddClinicalNoteBtn');
    const clinicalList = document.getElementById('demoClinicalList');

    if (addNoteBtn && clinicalList) {
        const mockNotes = [
            { patient: "Ana Paula Silva", badge: "Prontuário Sincronizado", icon: "✓", time: "Hoje, 14:32", score: "Score Clínico: 98%" },
            { patient: "Roberto Mendes", badge: "Evolução Registrada", icon: "🩺", time: "Hoje, 15:10", score: "Score Clínico: 95%" },
            { patient: "Carla Takahashi", badge: "Continuidade Ativa", icon: "🔗", time: "Hoje, 16:05", score: "Score Clínico: 100%" }
        ];
        let noteIndex = 0;

        addNoteBtn.addEventListener('click', () => {
            const note = mockNotes[noteIndex % mockNotes.length];
            noteIndex++;

            const newRow = document.createElement('div');
            newRow.className = 'mock-interactive-row';
            newRow.style.animation = 'fadeInProduct 0.3s ease';
            newRow.innerHTML = `
                <div>
                    <strong style="color: #FFFFFF; display: block;">${note.patient}</strong>
                    <span style="font-size: 0.72rem; color: #93B5C6;">${note.time} • ${note.score}</span>
                </div>
                <span class="mock-status-tag active">${note.icon} ${note.badge}</span>
            `;

            clinicalList.insertBefore(newRow, clinicalList.firstChild);
            if (clinicalList.children.length > 3) {
                clinicalList.removeChild(clinicalList.lastChild);
            }
        });
    }

    // Gestão Arq Demo: Project Phase Switcher
    const phaseButtons = document.querySelectorAll('.arq-phase-btn');
    const phaseLabel = document.getElementById('arqCurrentPhase');
    const phaseProgress = document.getElementById('arqPhaseProgress');
    const budgetVariance = document.getElementById('arqBudgetVariance');

    if (phaseButtons.length && phaseLabel && phaseProgress) {
        const phaseData = {
            'ep': { name: 'Estudo Preliminar', progress: '100% Concluído', budget: '0.0% Desvio', class: 'green' },
            'ap': { name: 'Anteprojeto & Aprovação', progress: '78% Em Andamento', budget: '+1.2% Otimizado', class: 'cyan' },
            'ex': { name: 'Projeto Executivo & R.T.', progress: '42% Detalhamento', budget: 'Dentro da Meta', class: 'green' }
        };

        phaseButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                phaseButtons.forEach(b => {
                    b.style.background = 'rgba(255,255,255,0.05)';
                    b.style.color = '#D1E5EE';
                });
                btn.style.background = 'var(--color-primary)';
                btn.style.color = '#FFFFFF';

                const phaseKey = btn.getAttribute('data-phase');
                const data = phaseData[phaseKey];
                if (data) {
                    phaseLabel.textContent = data.name;
                    phaseProgress.textContent = data.progress;
                    if (budgetVariance) budgetVariance.textContent = data.budget;
                }
            });
        });
    }
}

/* --------------------------------------------------------------------------
   5. CONTACT FORM & DIRECT WHATSAPP INTEGRATION
   -------------------------------------------------------------------------- */
function initContactWhatsAppForm() {
    const form = document.getElementById('bosynLeadForm');
    const whatsappBtn = document.getElementById('bosynDirectWhatsAppBtn');

    if (form && whatsappBtn) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('leadName')?.value || 'Contato';
            const organization = document.getElementById('leadOrg')?.value || '';
            const interest = document.getElementById('leadInterest')?.value || 'BOSYN Group';
            const message = document.getElementById('leadMessage')?.value || '';

            const phone = "551881290642";
            let text = `Olá, me chamo *${name}*`;
            if (organization) text += ` da empresa/escritório *${organization}*`;
            text += `.\nTenho interesse em: *${interest}*.`;
            if (message) text += `\nMensagem: ${message}`;
            text += `\n(Contato via BOSYN Institutional 2026)`;

            const encoded = encodeURIComponent(text);
            const waUrl = `https://wa.me/${phone}?text=${encoded}`;

            window.open(waUrl, '_blank', 'noopener,noreferrer');
        });
    }
}

/* --------------------------------------------------------------------------
   6. SCROLL REVEAL OBSERVER
   -------------------------------------------------------------------------- */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    if (!revealElements.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealElements.forEach(el => observer.observe(el));
}
