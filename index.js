// Dados do conteúdo dos modais
const modalData = {
    procedure: {
        title: "Sobre a Abdominoplastia",
        content: `
            <div class="modal-section">
                <h3>O que é a Abdominoplastia?</h3>
                <p>A abdominoplastia é uma cirurgia que visa remodelar o abdômen, removendo o excesso de pele e gordura, além de corrigir a musculatura abdominal quando necessário.</p>
                <div class="info-alert">
                    <strong>Importante:</strong> O sucesso da cirurgia depende tanto do procedimento quanto dos cuidados pós-operatórios.
                </div>
            </div>
        `
    },
    cuidados: {
        title: "Cuidados Essenciais",
        content: `
            <div class="modal-section">
                <h3>Primeiros Dias</h3>
                <ul class="info-list">
                    <li>Repouso adequado com tronco elevado</li>
                    <li>Evitar esforços físicos por 15 dias</li>
                    <li>Movimentação suave e progressiva</li>
                    <li>Acompanhamento da cicatrização</li>
                </ul>
            </div>
            <div class="modal-section">
                <h3>Sinais de Alerta</h3>
                <div class="info-alert">
                    <p>Contate seu médico imediatamente se observar:</p>
                    <ul class="info-list">
                        <li>Sangramentos</li>
                        <li>Febre</li>
                        <li>Dor intensa e persistente</li>
                        <li>Vermelhidão ou inchaço anormal</li>
                    </ul>
                </div>
            </div>
        `
    },
    alimentacao: {
        title: "Alimentação Recomendada",
        content: `
            <div class="modal-section">
                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-icon">🥩</span>
                        <h3>Proteínas</h3>
                        <ul class="info-list">
                            <li>Carnes magras</li>
                            <li>Peixes</li>
                            <li>Ovos</li>
                            <li>Leguminosas</li>
                        </ul>
                    </div>
                    <div class="info-item">
                        <span class="info-icon">🥗</span>
                        <h3>Vegetais e Frutas</h3>
                        <ul class="info-list">
                            <li>Vegetais folhosos</li>
                            <li>Frutas ricas em vitamina C</li>
                            <li>Legumes variados</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="modal-section">
                <h3>Alimentos a Evitar</h3>
                <div class="info-alert">
                    <ul class="info-list">
                        <li>Alimentos processados e ricos em sódio</li>
                        <li>Açúcar e frituras</li>
                        <li>Álcool e cafeína</li>
                    </ul>
                </div>
            </div>
        `
    },
    // Adicione este objeto ao modalData existente
cinta: {
    title: "Uso Correto da Cinta Compressiva",
    content: `
        <div class="modal-section">
            <h3>Período de Uso</h3>
            <div class="info-grid">
                <div class="info-item">
                    <h4>Primeiro Mês</h4>
                    <ul class="info-list">
                        <li>Use 24 horas por dia</li>
                        <li>Retire apenas para o banho</li>
                        <li>Coloque novamente logo após secar-se</li>
                    </ul>
                </div>
                <div class="info-item">
                    <h4>Segundo e Terceiro Mês</h4>
                    <ul class="info-list">
                        <li>Uso conforme orientação médica</li>
                        <li>Geralmente mantido durante o dia</li>
                        <li>Possível liberação para dormir sem a cinta</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="modal-section">
            <h3>Cuidados com o Ajuste</h3>
            <div class="info-alert">
                <p>A cinta deve estar:</p>
                <ul class="info-list">
                    <li>Bem ajustada, mas não excessivamente apertada</li>
                    <li>Sem dobras ou rugas que possam marcar a pele</li>
                    <li>Cobrindo toda a região operada</li>
                </ul>
            </div>
        </div>

        <div class="modal-section">
            <h3>Benefícios do Uso Correto</h3>
            <div class="info-grid">
                <div class="info-item">
                    <span class="info-icon">✨</span>
                    <h4>Redução do Inchaço</h4>
                    <p>Ajuda a diminuir o edema pós-operatório</p>
                </div>
                <div class="info-item">
                    <span class="info-icon">🎯</span>
                    <h4>Melhor Cicatrização</h4>
                    <p>Auxilia na adesão dos tecidos</p>
                </div>
                <div class="info-item">
                    <span class="info-icon">💪</span>
                    <h4>Suporte Muscular</h4>
                    <p>Oferece apoio à musculatura operada</p>
                </div>
            </div>
        </div>

        <div class="modal-section">
            <h3>Higienização da Cinta</h3>
            <ul class="info-list">
                <li>Lave a cinta delicadamente com sabão neutro</li>
                <li>Não use alvejante ou produtos abrasivos</li>
                <li>Seque à sombra, evitando exposição direta ao sol</li>
                <li>Recomenda-se ter duas cintas para revezamento</li>
            </ul>
        </div>

        <div class="modal-section">
            <h3>Sinais de Ajuste Inadequado</h3>
            <div class="info-alert">
                <p>Observe se há:</p>
                <ul class="info-list">
                    <li>Dificuldade para respirar</li>
                    <li>Dormência excessiva</li>
                    <li>Marcas profundas na pele</li>
                    <li>Dobras ou enrugamento da cinta</li>
                </ul>
                <p>Em caso de desconforto excessivo, consulte seu cirurgião para ajustes.</p>
            </div>
        </div>

        <div class="modal-section">
            <h3>Meias de Compressão</h3>
            <div class="info-grid">
                <div class="info-item">
                    <h4>Período de Uso</h4>
                    <ul class="info-list">
                        <li>Use durante 14 a 28 dias</li>
                        <li>Pode ser retirada para dormir após a primeira semana</li>
                    </ul>
                </div>
                <div class="info-item">
                    <h4>Importância</h4>
                    <ul class="info-list">
                        <li>Previne trombose</li>
                        <li>Melhora a circulação</li>
                        <li>Reduz o risco de edema</li>
                    </ul>
                </div>
            </div>
        </div>
    `
},
    fisioterapia: {
        title: "Fisioterapia Pós-operatória",
        content: `
            <div class="modal-section">
                <div class="info-grid">
                    <div class="info-item">
                        <h3>Drenagem Linfática</h3>
                        <p>Técnica suave que ajuda a reduzir o inchaço e eliminar líquidos retidos, melhorando o conforto e acelerando a recuperação.</p>
                    </div>
                    <div class="info-item">
                        <h3>Carboxiterapia</h3>
                        <p>Tratamento que utiliza gás carbônico para melhorar a oxigenação local e contribuir para uma cicatrização mais uniforme.</p>
                    </div>
                </div>
            </div>
        `
    },
    resultados: {
        title: "Resultados e Recuperação",
        content: `
            <div class="modal-section">
                <h3>Evolução dos Resultados</h3>
                <div class="info-table">
                    <table>
                        <tr>
                            <th>Período</th>
                            <th>Evolução</th>
                        </tr>
                        <tr>
                            <td>1-2 semanas</td>
                            <td>Redução inicial do inchaço</td>
                        </tr>
                        <tr>
                            <td>1-2 meses</td>
                            <td>Retorno gradual às atividades</td>
                        </tr>
                        <tr>
                            <td>3-6 meses</td>
                            <td>Resultados finais visíveis</td>
                        </tr>
                    </table>
                </div>
            </div>
        `
    }
};

// Classe do Modal
class Modal {
    constructor() {
        this.createModal();
        this.bindEvents();
        this.activeModal = null;
    }

    createModal() {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-container">
                <div class="modal-header">
                    <h2 class="modal-title"></h2>
                    <button class="modal-close" aria-label="Fechar">×</button>
                </div>
                <div class="modal-content"></div>
            </div>
        `;
        document.body.appendChild(modal);
        
        this.modal = modal;
        this.overlay = modal.querySelector('.modal-overlay');
        this.container = modal.querySelector('.modal-container');
        this.closeBtn = modal.querySelector('.modal-close');
        this.title = modal.querySelector('.modal-title');
        this.content = modal.querySelector('.modal-content');
    }

    bindEvents() {
        this.closeBtn.addEventListener('click', () => this.close());
        this.overlay.addEventListener('click', () => this.close());
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.activeModal) {
                this.close();
            }
        });

        // Prevenir scroll do body quando modal estiver aberto
        this.modal.addEventListener('wheel', (e) => {
            if (!this.container.contains(e.target)) {
                e.preventDefault();
            }
        });
    }

    open(id) {
        const data = modalData[id];
        if (!data) return;

        this.activeModal = id;
        this.title.textContent = data.title;
        this.content.innerHTML = data.content;
        
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Reset scroll position
        this.container.scrollTop = 0;

        // Animação de entrada
        requestAnimationFrame(() => {
            this.container.style.opacity = '1';
            this.container.style.transform = 'translateY(0)';
        });
    }

    close() {
        if (!this.activeModal) return;

        this.container.style.opacity = '0';
        this.container.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            this.modal.classList.remove('active');
            document.body.style.overflow = '';
            this.activeModal = null;
        }, 200);
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    const modal = new Modal();

    // Adiciona listeners aos botões de informação
    document.querySelectorAll('[data-modal]').forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.dataset.modal;
            modal.open(modalId);
        });
    });

    // Observer para animações de entrada
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        },
        { threshold: 0.1 }
    );

    // Observa elementos para animação
    document.querySelectorAll('.care-card, .step, .stat-box').forEach(el => {
        observer.observe(el);
    });
});

// Sistema de Analytics (opcional)
const trackModalOpen = (modalId) => {
    if (window.gtag) {
        gtag('event', 'modal_open', {
            'modal_id': modalId
        });
    }
};