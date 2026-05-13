/**
 * i18n COMPOSABLE
 * ================
 * Lightweight reactive locale state shared across the entire app.
 * Uses localStorage for persistence.
 */

import { ref, computed } from 'vue'
import { translations, type Locale } from './translations'

const STORAGE_KEY = 'zelva-locale'

function getInitialLocale(): Locale {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && (saved === 'en' || saved === 'de' || saved === 'tr')) {
      return saved as Locale
    }
    // Auto-detect from browser
    const browserLang = navigator.language.slice(0, 2)
    if (browserLang === 'de') return 'de'
    if (browserLang === 'tr') return 'tr'
  }
  return 'en'
}

// Shared reactive state (singleton)
const currentLocale = ref<Locale>(getInitialLocale())

export function useI18n() {
  function setLocale(locale: Locale) {
    currentLocale.value = locale
    localStorage.setItem(STORAGE_KEY, locale)
    document.documentElement.setAttribute('lang', locale)
  }

  function t(key: string): string {
    return translations[currentLocale.value]?.[key] ?? translations['en']?.[key] ?? key
  }

  const locale = computed(() => currentLocale.value)

  const locales: { code: Locale; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  ]

  return { locale, locales, setLocale, t }
}
