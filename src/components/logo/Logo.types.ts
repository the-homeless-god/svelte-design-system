import { Size, Sizes } from '../types'

export interface Logo extends Size {
  src: string
  alt: string
}

export const IconSizes: Map<Sizes, Size> = new Map([
  [
    Sizes.small,
    {
      width: 250,
      height: 250,
    },
  ],
  [
    Sizes.big,
    {
      width: 500,
      height: 500,
    },
  ],
])
