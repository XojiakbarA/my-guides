import {createTheme, useMediaQuery} from "@mui/material";
import {useState} from "react";

export function useTheme() {
    const lsIsDark = localStorage.getItem("dark")
    const sysIsDark = useMediaQuery('(prefers-color-scheme: dark)')

    const initIsDark = lsIsDark === null ? sysIsDark : lsIsDark === "true"

    const [isDark, setDark] = useState(initIsDark)

    const handleModeChange = (isDark) => {
        localStorage.setItem("dark", String(isDark))
        setDark(isDark)
    }

    const theme = createTheme({
        palette: {
            mode: isDark ? "dark" : "light"
        }
    })

    return { theme, isDark, setDark: handleModeChange }
}