export function initScheduleAccordion() {
    const scheduleCards = document.querySelectorAll('.schedule-day-card');
    if (!scheduleCards.length) return;

    scheduleCards.forEach(card => {
        const header = card.querySelector('.schedule-day-header');
        if (!header) return;

        header.addEventListener('click', () => {
            scheduleCards.forEach(otherCard => {
                if (otherCard !== card && otherCard.classList.contains('active')) {
                    otherCard.classList.remove('active');
                }
            });

            card.classList.toggle('active');
        });
    });

    const today = new Date().getDay();
    const dayNames = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const todayName = dayNames[today];

    scheduleCards.forEach(card => {
        const dayTitle = card.querySelector('.schedule-day-title');
        if (dayTitle && dayTitle.textContent === todayName) {
            scheduleCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        }
    });
}

// Highlight current and next class
export function initScheduleHighlight() {
    const dayNames = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

    function parseTime(timeStr) {
        // Parse "18h00" or "18h30" format
        const match = timeStr.match(/(\d{1,2})h(\d{2})/);
        if (!match) return null;
        return parseInt(match[1]) * 60 + parseInt(match[2]);
    }

    function parseTimeRange(timeRangeStr) {
        // Parse "18h00 - 19h15" or "18h00 - 19h15 • GRATUIT"
        const cleanStr = timeRangeStr.split('•')[0].trim();
        const parts = cleanStr.split('-').map(s => s.trim());
        if (parts.length !== 2) return null;

        const start = parseTime(parts[0]);
        const end = parseTime(parts[1]);

        if (start === null || end === null) return null;
        return { start, end };
    }

    function highlightClasses() {
        const now = new Date();
        const currentDay = dayNames[now.getDay()];
        const currentMinutes = now.getHours() * 60 + now.getMinutes();

        // Clear previous highlights
        document.querySelectorAll('.schedule-item.is-current, .schedule-item.is-past').forEach(el => {
            el.classList.remove('is-current', 'is-past');
            const badge = el.querySelector('.schedule-badge');
            if (badge) badge.remove();
        });

        document.querySelectorAll('.schedule-mobile-item.is-current, .schedule-mobile-item.is-past').forEach(el => {
            el.classList.remove('is-current', 'is-past');
            const badge = el.querySelector('.schedule-badge');
            if (badge) badge.remove();
        });

        // Find today's row in desktop table
        const tableRows = document.querySelectorAll('.schedule-table tbody tr');
        let todayRow = null;

        tableRows.forEach(row => {
            const dayCell = row.querySelector('.schedule-day');
            if (dayCell && dayCell.textContent.trim() === currentDay) {
                todayRow = row;
            }
        });

        // Find today's card in mobile accordion
        const mobileCards = document.querySelectorAll('.schedule-day-card');
        let todayCard = null;

        mobileCards.forEach(card => {
            const dayTitle = card.querySelector('.schedule-day-title');
            if (dayTitle && dayTitle.textContent.trim() === currentDay) {
                todayCard = card;
            }
        });

        let currentClass = null;

        // Process desktop table
        if (todayRow) {
            const items = todayRow.querySelectorAll('.schedule-item');

            items.forEach(item => {
                // Skip Fitness - it's not a real structured class
                if (item.classList.contains('fitness')) return;

                const timeEl = item.querySelector('.schedule-item-time');
                if (!timeEl) return;

                const timeRange = parseTimeRange(timeEl.textContent);
                if (!timeRange) return;

                // Check if class has already ended (past)
                if (currentMinutes >= timeRange.end) {
                    item.classList.add('is-past');
                    addBadge(item, 'Terminé', 'past');
                }
                // Check if class is currently happening
                else if (currentMinutes >= timeRange.start && currentMinutes < timeRange.end) {
                    currentClass = item;
                    item.classList.add('is-current');
                    addBadge(item, 'En cours', 'current');
                }
            });
        }

        // Process mobile accordion
        if (todayCard) {
            const mobileItems = todayCard.querySelectorAll('.schedule-mobile-item');

            mobileItems.forEach(item => {
                // Skip Fitness - it's not a real structured class
                if (item.classList.contains('fitness')) return;

                const timeEl = item.querySelector('.schedule-mobile-time');
                if (!timeEl) return;

                const timeRange = parseTimeRange(timeEl.textContent);
                if (!timeRange) return;

                // Check if class has already ended (past)
                if (currentMinutes >= timeRange.end) {
                    item.classList.add('is-past');
                    addBadge(item, 'Terminé', 'past');
                }
                // Check if class is currently happening
                else if (currentMinutes >= timeRange.start && currentMinutes < timeRange.end) {
                    item.classList.add('is-current');
                    addBadge(item, 'En cours', 'current');
                }
            });
        }
    }

    function addBadge(element, text, type) {
        const badge = document.createElement('span');
        badge.className = `schedule-badge schedule-badge--${type}`;

        if (type === 'current') {
            // Add spinning loader icon for "En cours"
            badge.innerHTML = `<svg class="schedule-badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>${text}`;
        } else {
            badge.textContent = text;
        }

        element.appendChild(badge);
    }

    // Run immediately
    highlightClasses();

    // Update every minute
    setInterval(highlightClasses, 60000);
}
