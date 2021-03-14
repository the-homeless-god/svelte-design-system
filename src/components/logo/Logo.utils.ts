import { Sizes } from '../types'
import { IconSizes, Logo } from './Logo.types'

export const getLogo = (): Logo => ({
  src: '/assets/img/logo.svg',
  alt: 'logo',
  ...IconSizes.get(Sizes.big),
})
