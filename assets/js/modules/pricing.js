const pricingData = {
    adulte: [
        { duration: '1 Mois', price: 49, monthly: '49€/mois', saving: '' },
        { duration: '3 Mois', price: 135, monthly: '45€/mois', saving: 'Économisez 8%' },
        { duration: '6 Mois', price: 260, monthly: '43€/mois', saving: 'Économisez 12%', featured: true },
        { duration: '12 Mois', price: 440, monthly: '37€/mois', saving: 'Économisez 25%' }
    ],
    junior: [
        { duration: '1 Mois', price: 40, monthly: '40€/mois', saving: '' },
        { duration: '3 Mois', price: 105, monthly: '35€/mois', saving: 'Économisez 12%' },
        { duration: '6 Mois', price: 200, monthly: '33€/mois', saving: 'Économisez 17%', featured: true },
        { duration: '12 Mois', price: 390, monthly: '32,50€/mois', saving: 'Économisez 19%' }
    ],
    fitness: [
        { duration: '1 Mois', price: 20, monthly: '20€/mois', saving: '' },
        { duration: '3 Mois', price: 55, monthly: '18€/mois', saving: 'Économisez 8%' },
        { duration: '6 Mois', price: 115, monthly: '19€/mois', saving: 'Économisez 4%', featured: true },
        { duration: '12 Mois', price: 235, monthly: '19,50€/mois', saving: 'Économisez 2%' }
    ]
};

export function initPricingTabs() {
    const pricingTabs = document.querySelectorAll('.pricing-tabs .tab-btn');
    const pricingGrid = document.getElementById('pricingGrid');

    if (!pricingTabs.length || !pricingGrid) return;

    pricingTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            pricingTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const type = tab.dataset.pricing;
            const data = pricingData[type];
            if (!data) return;

            pricingGrid.innerHTML = data.map((item, index) => `
                <div class="pricing-card ${item.featured ? 'featured' : ''} reveal reveal-delay-${index + 1} active">
                    <p class="pricing-duration">${item.duration}</p>
                    <div class="pricing-price">
                        <p class="pricing-amount"><sup>€</sup>${item.price}</p>
                        <p class="pricing-period">engagement ${item.duration.toLowerCase()}</p>
                    </div>
                    <p class="pricing-monthly">${item.monthly} ${item.saving ? '• ' + item.saving : ''}</p>
                    <ul class="pricing-features">
                        <li>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="20 6 9 17 4 12"/>
                            </svg>
                            Accès illimité aux cours
                        </li>
                        <li>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="20 6 9 17 4 12"/>
                            </svg>
                            ${index === 0 ? 'Sans engagement long' : 'Suivi personnalisé'}
                        </li>
                        ${index >= 2 ? `<li>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="20 6 9 17 4 12"/>
                            </svg>
                            ${index === 2 ? 'Meilleur rapport qualité/prix' : 'Économie maximale'}
                        </li>` : ''}
                    </ul>
                    <a href="https://suppia.be/davincifighting" target="_blank" class="btn ${item.featured ? 'btn-primary' : 'btn-outline'}">S'inscrire</a>
                </div>
            `).join('');
        });
    });
}
