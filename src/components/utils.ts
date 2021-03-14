import { Sizes, Size } from './types'

export const defaultSize: Size = { width: 'max-content', height: 'max-content' }

export const sizes: Map<Sizes, Size> = new Map([
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
  [Sizes.max, defaultSize],
])

export const getSize = (sourceSize: Sizes): Size => {
  const size = sizes.get(sourceSize)
  return size || defaultSize
}
