import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
    
  input, button, submit { border:none; outline: none; } 

  #root {
    width: 100%;
    height: 100%;
  }
`

export const theme = {
  surface: '#FBFBFB',
  surfaceLight: '#EEE',
  surfaceDark: '#373737',
  surfaceTransparent: '#FBFBFB',
  dividerLight: '#DDD',
  dividerMedium: '#CFCFCF',
  dividerTransparent: '#EEF0F3',
  white: '#fff',
  whiteLight: '#E9ECEF',
  yellow: '#FFFF00',
  error: '#D30E00',
  greyLight: '#CCC',
  greyMedium: '#777777',
  primary: '#246EE9',
  secondary: '#656565',
  success: '#0DAB1D',
  textActive: '#246EE9',
  purple: '#5762D5',
  purpleLight: '#F7F7FF',
  purpleMedium: '#5B7FC8',
  inputFocus: '#00A48F',
  muted: '#AAAAAA',
  icon: {
    main: '#373737'
  },
  text: {
    active: '#5762D5',
    secondary: '#656565'
  },
  babyBlue: {
    100: '#E2EEFF',
    500: '#86B3FF'
  }
}
