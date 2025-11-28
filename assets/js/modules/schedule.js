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
        document.querySelectorAll('.schedule-item.is-current, .schedule-item.is-next, .schedule-item.is-ending').forEach(el => {
            el.classList.remove('is-current', 'is-next', 'is-ending');
            const badge = el.querySelector('.schedule-badge');
            if (badge) badge.remove();
        });

        document.querySelectorAll('.schedule-mobile-item.is-current, .schedule-mobile-item.is-next, .schedule-mobile-item.is-ending').forEach(el => {
            el.classList.remove('is-current', 'is-next', 'is-ending');
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
        let nextClass = null;
        let nextClassTime = Infinity;

        // Process desktop table
        if (todayRow) {
            const items = todayRow.querySelectorAll('.schedule-item');
            let currentClassEndTime = null;

            items.forEach(item => {
                // Skip Fitness - it's not a real structured class
                if (item.classList.contains('fitness')) return;

                const timeEl = item.querySelector('.schedule-item-time');
                if (!timeEl) return;

                const timeRange = parseTimeRange(timeEl.textContent);
                if (!timeRange) return;

                // Check if class is currently happening
                if (currentMinutes >= timeRange.start && currentMinutes < timeRange.end) {
                    currentClass = item;
                    currentClassEndTime = timeRange.end;
                }
                // Check if this is the next upcoming class
                else if (timeRange.start > currentMinutes && timeRange.start < nextClassTime) {
                    nextClassTime = timeRange.start;
                    nextClass = item;
                }
            });

            // Apply highlights to desktop
            if (currentClass) {
                // Check if class is almost finished (less than 10 minutes remaining)
                const remainingMinutes = currentClassEndTime - currentMinutes;
                if (remainingMinutes <= 10) {
                    currentClass.classList.add('is-ending');
                    addBadge(currentClass, 'Bientôt fini', 'ending');
                } else {
                    currentClass.classList.add('is-current');
                    addBadge(currentClass, 'En cours', 'current');
                }
            }
            // Show "Prochain" if no class happening OR if current class is ending soon
            const showNext = !currentClass || (currentClass && currentClassEndTime - currentMinutes <= 10);
            if (nextClass && showNext) {
                nextClass.classList.add('is-next');
                addBadge(nextClass, 'Prochain', 'next');
            }
        }

        // Process mobile accordion
        if (todayCard) {
            const mobileItems = todayCard.querySelectorAll('.schedule-mobile-item');
            let mobileCurrentClass = null;
            let mobileNextClass = null;
            let mobileNextTime = Infinity;
            let mobileCurrentEndTime = null;

            mobileItems.forEach(item => {
                // Skip Fitness - it's not a real structured class
                if (item.classList.contains('fitness')) return;

                const timeEl = item.querySelector('.schedule-mobile-time');
                if (!timeEl) return;

                const timeRange = parseTimeRange(timeEl.textContent);
                if (!timeRange) return;

                if (currentMinutes >= timeRange.start && currentMinutes < timeRange.end) {
                    mobileCurrentClass = item;
                    mobileCurrentEndTime = timeRange.end;
                }
                else if (timeRange.start > currentMinutes && timeRange.start < mobileNextTime) {
                    mobileNextTime = timeRange.start;
                    mobileNextClass = item;
                }
            });

            if (mobileCurrentClass) {
                // Check if class is almost finished (less than 10 minutes remaining)
                const remainingMinutes = mobileCurrentEndTime - currentMinutes;
                if (remainingMinutes <= 10) {
                    mobileCurrentClass.classList.add('is-ending');
                    addBadge(mobileCurrentClass, 'Bientôt fini', 'ending');
                } else {
                    mobileCurrentClass.classList.add('is-current');
                    addBadge(mobileCurrentClass, 'En cours', 'current');
                }
            }
            // Show "Prochain" if no class happening OR if current class is ending soon
            const showMobileNext = !mobileCurrentClass || (mobileCurrentClass && mobileCurrentEndTime - currentMinutes <= 10);
            if (mobileNextClass && showMobileNext) {
                mobileNextClass.classList.add('is-next');
                addBadge(mobileNextClass, 'Prochain', 'next');
            }
        }
    }

    function addBadge(element, text, type) {
        const badge = document.createElement('span');
        badge.className = `schedule-badge schedule-badge--${type}`;
        badge.textContent = text;
        element.appendChild(badge);
    }

    // Run immediately
    highlightClasses();

    // Update every minute
    setInterval(highlightClasses, 60000);
}
