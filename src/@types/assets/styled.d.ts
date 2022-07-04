import 'styled-components'
import Styles from '@/constants'

declare module 'styled-components' {
  export interface DefaultTheme {
    textColor: Styles.TextColor,
    bgColor: Styles.BgColor,
    size: Styles.Size,
    spaces: number[],
    fontSizes: number[]
  }
}

/*
* import 'styled-components'
import * as Styles from '../../constants'

declare module 'styled-components' {
  export interface DefaultTheme {
    textColor: Styles.TextColor,
    bgColor: Styles.BgColor,
    size: Styles.Size,
    spaces: number[],
    fontSizes: number[]
  }
}*/
