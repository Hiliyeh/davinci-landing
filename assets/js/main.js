import { initHeaderScroll } from './modules/header.js';
import { initMenuToggle } from './modules/menu.js';
import { initDisciplineFilters } from './modules/disciplines.js';
import { initPricingTabs } from './modules/pricing.js';
import { initRevealOnScroll } from './modules/reveal.js';
import { initSmoothScroll } from './modules/smoothScroll.js';
import { initScheduleAccordion, initScheduleHighlight } from './modules/schedule.js';
import i18n from './modules/i18n.js';

// Initialize all modules
initHeaderScroll();
initMenuToggle();
initDisciplineFilters();
initPricingTabs();
initRevealOnScroll();
initSmoothScroll();
initScheduleAccordion();
initScheduleHighlight();

// i18n is auto-initialized on import
// Make i18n available globally for debugging
window.i18n = i18n;
