import 'styled-components'
import { theme } from 'theme'

declare module 'styled-components' {
  export type DefaultTheme = typeof theme;
}