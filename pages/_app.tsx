import '../styles/global.css'
import { AppProps } from 'next/app'
import { GeistProvider, CssBaseline, GeistUIThemes, Themes } from '@geist-ui/react'

const myTheme: GeistUIThemes = Themes.createFromLight({
    type: "Custom",
    palette: {
        // accents_1: '#ebd988',
        accents_2: "#e3e1de",
        accents_3: "#71458d",
        accents_4: "#4e1670",
        accents_5: "#3e125a",
        accents_6: "#3e125a",
        accents_7: "#3e125a",
        accents_8: "#ffffff",
        background: "#f1f0ef",
        foreground: "#000000",
        selection: "#9573a9",
        code: "#817e79",
        border: "#3e125a",
        error: "#8a1325",
        errorDark: "#6e0f1e",
        link: "#8a1325",
    }
});

export default function App({Component, pageProps} : AppProps) {
    return (
        <GeistProvider themes={[myTheme]} themeType="Custom">
            <CssBaseline />
            <Component {...pageProps} />
        </GeistProvider>
    )
}