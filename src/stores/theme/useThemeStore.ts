import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  const theme = ref<'light' | 'dim'>(
    (localStorage.getItem('theme') as 'light' | 'dim') || (prefersDark ? 'dim' : 'light'),
  )

  const applyTheme = () => {
    document.documentElement.setAttribute('data-theme', theme.value)
    localStorage.setItem('theme', theme.value)
  }

  const switchTheme = () => {
    theme.value = theme.value === 'light' ? 'dim' : 'light'
  }

  const toggleTheme = () => {
    document.startViewTransition ? document.startViewTransition(() => switchTheme()) : switchTheme()
  }

  watch(theme, applyTheme, { immediate: true })

  return { theme, toggleTheme }
})
