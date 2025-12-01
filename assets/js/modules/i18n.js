/**
 * Davinci Fighting - Module i18n ES6
 * Uses global translations from translations.js
 */

class I18n {
    constructor() {
        this.translations = window.davinciTranslations || {};
        this.currentLang = this.detectLanguage();
    }

    detectLanguage() {
        // 1. User's explicit choice (localStorage)
        const saved = localStorage.getItem('davinci-lang');
        if (saved && this.translations[saved]) return saved;

        // 2. Browser language detection
        const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
        if (browserLang.startsWith('nl')) return 'nl';
        if (browserLang.startsWith('en')) return 'en';

        // 3. Default: French
        return 'fr';
    }

    init() {
        this.applyLanguage(false);
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('.lang-btn');
            const dropdownItem = e.target.closest('.lang-dropdown-item');
            const langCurrent = e.target.closest('.lang-current');
            const selector = document.querySelector('.lang-selector');

            if (btn) {
                e.preventDefault();
                e.stopPropagation();
                const lang = btn.getAttribute('data-lang');
                if (lang && lang !== this.currentLang) this.setLanguage(lang);
                return;
            }

            if (dropdownItem) {
                e.preventDefault();
                e.stopPropagation();
                const lang = dropdownItem.getAttribute('data-lang');
                if (lang && lang !== this.currentLang) this.setLanguage(lang);
                selector?.classList.remove('active');
                return;
            }

            if (langCurrent) {
                e.stopPropagation();
                selector?.classList.toggle('active');
                return;
            }

            if (selector && !selector.contains(e.target)) {
                selector.classList.remove('active');
            }
        });
    }

    setLanguage(lang) {
        if (!this.translations[lang]) lang = 'fr';
        this.currentLang = lang;
        localStorage.setItem('davinci-lang', lang);
        this.applyLanguage(true);
    }

    applyLanguage(animate) {
        document.documentElement.lang = this.currentLang;
        this.translateElements(animate);
        this.updateSelectors();
        this.updateMetaTags();
    }

    translateElements(animate) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const text = this.t(el.getAttribute('data-i18n'));
            if (!text) return;

            if (animate) {
                el.style.opacity = '0';
                el.style.transform = 'translateY(3px)';
                setTimeout(() => {
                    el.textContent = text;
                    el.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, 50);
            } else {
                el.textContent = text;
            }
        });
    }

    t(key) {
        const keys = key.split('.');
        let value = this.translations[this.currentLang];

        for (const k of keys) {
            if (value?.[k] !== undefined) {
                value = value[k];
            } else {
                // Fallback to FR
                value = keys.reduce((v, fk) => v?.[fk], this.translations['fr']);
                break;
            }
        }

        return typeof value === 'string' ? value : null;
    }

    updateSelectors() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === this.currentLang);
        });

        const currentText = document.querySelector('.lang-current-text');
        if (currentText) currentText.textContent = this.currentLang.toUpperCase();

        document.querySelectorAll('.lang-dropdown-item').forEach(item => {
            item.classList.toggle('active', item.getAttribute('data-lang') === this.currentLang);
        });
    }

    updateMetaTags() {
        const meta = this.translations[this.currentLang]?.meta;
        if (!meta) return;

        if (meta.title) document.title = meta.title;

        const selectors = {
            'meta[name="description"]': meta.description,
            'meta[property="og:title"]': meta.title,
            'meta[property="og:description"]': meta.description
        };

        Object.entries(selectors).forEach(([sel, content]) => {
            const el = document.querySelector(sel);
            if (el && content) el.content = content;
        });

        const ogLocale = document.querySelector('meta[property="og:locale"]');
        if (ogLocale) {
            const localeMap = { fr: 'fr_BE', en: 'en_GB', nl: 'nl_BE' };
            ogLocale.content = localeMap[this.currentLang] || 'fr_BE';
        }
    }
}

const i18n = new I18n();
i18n.init();

export default i18n;
