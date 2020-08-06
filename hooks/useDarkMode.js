import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (item) => {
    const [someValue, setSomeValue] = useLocalStorage(item)

    return [someValue, setSomeValue]
}