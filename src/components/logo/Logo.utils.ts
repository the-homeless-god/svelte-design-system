import { Sizes } from '../types'
import { sizes } from '../utils'
import type { Logo } from './Logo.types'

export const getLogo = (): Logo => ({
  src: '/assets/img/logo.svg',
  alt: 'logo',
  width: 0,
  height: 0,
  ...sizes.get(Sizes.big),
})
