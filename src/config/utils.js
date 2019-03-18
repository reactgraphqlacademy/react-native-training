import { Dimensions, Platform } from 'react-native'
import { Header } from 'react-navigation'

const X_WIDTH = 375
const X_HEIGHT = 812
const XMAX_HEIGHT = 896
const { height: D_HEIGHT, width: D_WIDTH } = Dimensions.get('window')
export const isIPhoneX =
Platform.OS === 'ios' &&
!Platform.isPad &&
!Platform.isTVOS &&
((D_HEIGHT === X_HEIGHT || D_WIDTH === X_HEIGHT) || (D_HEIGHT === XMAX_HEIGHT || D_WIDTH === XMAX_HEIGHT))
const notchHeight = isIPhoneX ? 24 : 0

const isSmallDevice = D_WIDTH < 326

export const Layout = {
  window: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  notchHeight,
  isSmallDevice,
  headerHeight:
    Platform.OS === 'android' ? Header.HEIGHT : Header.HEIGHT + notchHeight,
}

export const Colors = {
  brand: {
    primary: '#73CFEF',
  },
  light: '#FFFFFF',
  lightgrey: 'lightgrey',
  dark: '#000000',
}

export const Icons = {
  back: `arrow-left`,
  rt: 'refresh-cw',
  likes: 'heart',
  open: 'share',
  close: 'x',
}

export const FontSizes = {
  title: isSmallDevice ? 16 : 18,
  subtitle: isSmallDevice ? 14 : 16,
  bodyLarge: 14,
  bodyTitle: isSmallDevice ? 14 : 15,
  normalButton: isSmallDevice ? 15 : 16,
}

export const PROFILE_AVATAR_SIZE = 84
