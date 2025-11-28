export function initDisciplineFilters() {
    const filterBtns = document.querySelectorAll('.disciplines-tabs .tab-btn');
    const disciplineCards = document.querySelectorAll('.discipline-card');

    // Make cards with data-href clickable (always run this)
    disciplineCards.forEach(card => {
        if (card.dataset.href) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => {
                window.location.href = card.dataset.href;
            });
        }
    });

    if (!filterBtns.length || !disciplineCards.length) return;

    const applyFilter = (filter) => {
        disciplineCards.forEach(card => {
            if (card.dataset.category === filter) {
                card.style.display = '';
                setTimeout(() => card.classList.add('active'), 10);
            } else {
                card.classList.remove('active');
                setTimeout(() => { card.style.display = 'none'; }, 300);
            }
        });
    };

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyFilter(btn.dataset.filter);
        });
    });

    const defaultBtn = document.querySelector('.disciplines-tabs .tab-btn[data-filter="adulte"]') || filterBtns[0];
    if (defaultBtn) {
        filterBtns.forEach(b => b.classList.remove('active'));
        defaultBtn.classList.add('active');
        applyFilter(defaultBtn.dataset.filter);
    }
}
