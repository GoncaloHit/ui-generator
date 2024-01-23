import ReactDOM from 'react-dom/client'
import { GlobalStyle, theme } from 'theme'
import { ThemeProvider } from 'styled-components'
import { App } from './app'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
)

