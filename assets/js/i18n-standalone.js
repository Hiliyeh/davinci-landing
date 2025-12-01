/**
 * Davinci Fighting - i18n Standalone
 * Uses global translations from translations.js
 * Langues: FR (défaut), EN, NL
 */

(function() {
    'use strict';

    // Wait for translations to be loaded
    function init() {
        const translations = window.davinciTranslations;
        if (!translations) {
            console.warn('Translations not loaded');
            return;
        }

        const i18n = new I18n(translations);
        i18n.init();
        window.i18n = i18n;
    }

    class I18n {
        constructor(translations) {
            this.translations = translations;
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
                    if (lang && lang !== this.currentLang) {
                        this.setLanguage(lang);
                    }
                    return;
                }

                if (dropdownItem) {
                    e.preventDefault();
                    e.stopPropagation();
                    const lang = dropdownItem.getAttribute('data-lang');
                    if (lang && lang !== this.currentLang) {
                        this.setLanguage(lang);
                    }
                    if (selector) selector.classList.remove('active');
                    return;
                }

                if (langCurrent) {
                    e.stopPropagation();
                    if (selector) selector.classList.toggle('active');
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
        }

        translateElements(animate) {
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                const text = this.t(key);

                if (text) {
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
                }
            });
        }

        t(key) {
            const keys = key.split('.');
            let value = this.translations[this.currentLang];

            for (const k of keys) {
                if (value && value[k] !== undefined) {
                    value = value[k];
                } else {
                    // Fallback to FR
                    value = this.translations['fr'];
                    for (const fk of keys) {
                        value = value?.[fk];
                    }
                    break;
                }
            }

            return typeof value === 'string' ? value : null;
        }

        updateSelectors() {
            // Update all language buttons
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.toggle('active', btn.getAttribute('data-lang') === this.currentLang);
            });

            // Update mobile selector text
            const currentText = document.querySelector('.lang-current-text');
            if (currentText) {
                currentText.textContent = this.currentLang.toUpperCase();
            }

            // Update dropdown items
            document.querySelectorAll('.lang-dropdown-item').forEach(item => {
                item.classList.toggle('active', item.getAttribute('data-lang') === this.currentLang);
            });
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
