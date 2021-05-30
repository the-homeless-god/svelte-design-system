/* eslint-disable no-restricted-syntax */
/* eslint-disable no-new */
// @ts-ignore
import { InjectSlider } from './Slider'
import { Coordinates, KeyboardKeys, KeyCodeProvider, SwipeDirections, TouchConfiguration } from './Slider.types'

export const onError = (title: string, error: string | Error): void => {
  console.warn(`${title}: `, error)
}

export const DEFAULT_SECTION_BACKGROUND_COLOR = '#ffffff'

export const isRightSwipeDirection = (swipe: SwipeDirections): boolean => swipe === SwipeDirections.right

export const isLeftSwipeDirection = (swipe: SwipeDirections): boolean => swipe === SwipeDirections.left

export const isUpSwipeDirection = (swipe: SwipeDirections): boolean => swipe === SwipeDirections.up

export const isDownSwipeDirection = (swipe: SwipeDirections): boolean => swipe === SwipeDirections.down

export const isVerticalSwipeDirection = (swipe: SwipeDirections): boolean =>
  isUpSwipeDirection(swipe) || isDownSwipeDirection(swipe)

export const isHorizontalSwipeDirection = (swipe: SwipeDirections): boolean =>
  isLeftSwipeDirection(swipe) || isRightSwipeDirection(swipe)

export const setButtonCheck = (id: string): void => {
  const button = document.getElementById(id) as HTMLInputElement
  if (button) {
    button.checked = true
  }
}

export const getKeyboardClickDirection = (key: KeyboardKeys): Nullable<SwipeDirections> => {
  switch (key) {
    case KeyboardKeys.left:
      return SwipeDirections.left

    case KeyboardKeys.right:
      return SwipeDirections.right

    case KeyboardKeys.up:
      return SwipeDirections.up

    case KeyboardKeys.down:
      return SwipeDirections.down

    default:
      return null
  }
}

export const getSwiperDirectionByKeyboardClick = (event: KeyCodeProvider): Nullable<SwipeDirections> => {
  const keyDirection = getKeyboardClickDirection(event.key)
  const codeDirection = getKeyboardClickDirection(event.code)

  return keyDirection || codeDirection
}

export const getSectionBackgroundColor = (colors: string[], index: number): string =>
  colors[index] || DEFAULT_SECTION_BACKGROUND_COLOR

export const generateTouchConfiguration = (): TouchConfiguration => ({
  startX: null,
  startY: null,
  endX: null,
  endY: null,
  differenceX: null,
  differenceY: null,
})

export const isNotMovableTouch = (touch: TouchConfiguration): boolean => !touch.startX || !touch.startY

export const getAnimatedSections = (
  sections: HTMLCollectionOf<HTMLElement>,
  sectionTranslate: number,
  coordinate: Coordinates,
): HTMLCollectionOf<HTMLElement> => {
  // @ts-ignore
  for (const section of sections) {
    section.style.transform = `translate${coordinate}(${sectionTranslate}%)`
  }

  return sections
}

// Animate horizontal drag effect
export const getHorizontalAnimatedSections = (
  sections: HTMLCollectionOf<HTMLElement>,
  sectionTranslate: number,
): HTMLCollectionOf<HTMLElement> => getAnimatedSections(sections, sectionTranslate, Coordinates.X)

// Animate vertical drag effect
export const getVerticalAnimatedSections = (
  sections: HTMLCollectionOf<HTMLElement>,
  sectionTranslate: number,
): HTMLCollectionOf<HTMLElement> => getAnimatedSections(sections, sectionTranslate, Coordinates.Y)

export const initSlider = (id: string, sectionClass: string, pageClass: string): void => {
  new InjectSlider({
    containerId: id,
    sectionClass,
    pageClass,
    colors: ['deepskyblue', 'orange'],
    onError,
    isLeftSwipeDirection,
    isRightSwipeDirection,
    isVerticalSwipeDirection,
    isHorizontalSwipeDirection,
    isUpSwipeDirection,
    isDownSwipeDirection,
    getSwiperDirectionByKeyboardClick,
    getSectionBackgroundColor,
    generateTouchConfiguration,
    isNotMovableTouch,
    getVerticalAnimatedSections,
    getHorizontalAnimatedSections,
    setButtonCheck,
  })
}
