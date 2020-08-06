import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (item) => {
    const [someValue, setSomeValue] = useLocalStorage('doritos', item)

    return [someValue, setSomeValue]
}