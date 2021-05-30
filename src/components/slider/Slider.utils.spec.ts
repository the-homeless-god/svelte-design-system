import { expect } from 'chai'
import { touchFixture } from './Slider.fixture'

import { Coordinates, KeyboardKeys, SwipeDirections } from './Slider.types'
import {
  isLeftSwipeDirection,
  isDownSwipeDirection,
  isUpSwipeDirection,
  isRightSwipeDirection,
  isVerticalSwipeDirection,
  getSwiperDirectionByKeyboardClick,
  DEFAULT_SECTION_BACKGROUND_COLOR,
  getSectionBackgroundColor,
  generateTouchConfiguration,
  isNotMovableTouch,
  getAnimatedSections,
  isHorizontalSwipeDirection,
  getVerticalAnimatedSections,
  getHorizontalAnimatedSections,
} from './Slider.utils'

describe('Unit: Slider.utils', () => {
  describe('isRightSwipeDirection', () => {
    it('returns true when direction of swipe was a right', () => {
      // Arrange
      const swipe = SwipeDirections.right
      const expected = true

      // Actual
      const actual = isRightSwipeDirection(swipe)

      // Assert
      expect(actual).equal(expected)
    })

    it('returns false when direction of swipe was a left', () => {
      // Arrange
      const swipe = SwipeDirections.left
      const expected = false

      // Actual
      const actual = isRightSwipeDirection(swipe)

      // Assert
      expect(actual).equal(expected)
    })

    it('returns false when direction of swipe was a down', () => {
      // Arrange
      const swipe = SwipeDirections.down
      const expected = false

      // Actual
      const actual = isLeftSwipeDirection(swipe)

      // Assert
      expect(actual).equal(expected)
    })

    it('returns false when direction of swipe was a up', () => {
      // Arrange
      const swipe = SwipeDirections.up
      const expected = false

      // Actual
      const actual = isLeftSwipeDirection(swipe)

      // Assert
      expect(actual).equal(expected)
    })
  })

  describe('isUpSwipeDirection', () => {
    it('returns false when direction of swipe was a right', () => {
      // Arrange
      const swipe = SwipeDirections.right
      const expected = false

      // Actual
      const actual = isUpSwipeDirection(swipe)

      // Assert
      expect(actual).equal(expected)
    })

    it('returns false when direction of swipe was a left', () => {
      // Arrange
      const swipe = SwipeDirections.left
      const expected = false

      // Actual
      const actual = isUpSwipeDirection(swipe)

      // Assert
      expect(actual).equal(expected)
    })

    it('returns false when direction of swipe was a down', () => {
      // Arrange
      const swipe = SwipeDirections.down
      const expected = false

      // Actual
      const actual = isUpSwipeDirection(swipe)

      // Assert
      expect(actual).equal(expected)
    })

    it('returns true when direction of swipe was a up', () => {
      // Arrange
      const swipe = SwipeDirections.up
      const expected = true

      // Actual
      const actual = isUpSwipeDirection(swipe)

      // Assert
      expect(actual).equal(expected)
    })
  })

  describe('isDownSwipeDirection', () => {
    it('returns false when direction of swipe was a right', () => {
      // Arrange
      const swipe = SwipeDirections.right
      const expected = false

      // Actual
      const actual = isDownSwipeDirection(swipe)

      // Assert
      expect(actual).equal(expected)
    })

    it('returns false when direction of swipe was a left', () => {
      // Arrange
      const swipe = SwipeDirections.left
      const expected = false

      // Actual
      const actual = isDownSwipeDirection(swipe)

      // Assert
      expect(actual).equal(expected)
    })

    it('returns true when direction of swipe was a down', () => {
      // Arrange
      const swipe = SwipeDirections.down
      const expected = true

      // Actual
      const actual = isDownSwipeDirection(swipe)

      // Assert
      expect(actual).equal(expected)
    })

    it('returns false when direction of swipe was a up', () => {
      // Arrange
      const swipe = SwipeDirections.up
      const expected = false

      // Actual
      const actual = isDownSwipeDirection(swipe)

      // Assert
      expect(actual).equal(expected)
    })
  })

  describe('isLeftSwipeDirection', () => {
    it('returns true when direction of swipe was a left', () => {
      // Arrange
      const swipe = SwipeDirections.left
      const expected = true

      // Actual
      const actual = isLeftSwipeDirection(swipe)

      // Assert
      expect(actual).equal(expected)
    })

    it('returns false when direction of swipe was a right', () => {
      // Arrange
      const swipe = SwipeDirections.right
      const expected = false

      // Actual
      const actual = isLeftSwipeDirection(swipe)

      // Assert
      expect(actual).equal(expected)
    })

    it('returns false when direction of swipe was a down', () => {
      // Arrange
      const swipe = SwipeDirections.down
      const expected = false

      // Actual
      const actual = isLeftSwipeDirection(swipe)

      // Assert
      expect(actual).equal(expected)
    })

    it('returns false when direction of swipe was a up', () => {
      // Arrange
      const swipe = SwipeDirections.up
      const expected = false

      // Actual
      const actual = isLeftSwipeDirection(swipe)

      // Assert
      expect(actual).equal(expected)
    })
  })

  describe('isVerticalSwipeDirection', () => {
    it('returns false when direction of swipe was a left', () => {
      // Arrange
      const swipe = SwipeDirections.left
      const expected = false

      // Actual
      const actual = isVerticalSwipeDirection(swipe)

      // Assert
      expect(actual).equal(expected)
    })

    it('returns false when direction of swipe was a right', () => {
      // Arrange
      const swipe = SwipeDirections.right
      const expected = false

      // Actual
      const actual = isVerticalSwipeDirection(swipe)

      // Assert
      expect(actual).equal(expected)
    })

    it('returns true when direction of swipe was a down', () => {
      // Arrange
      const swipe = SwipeDirections.down
      const expected = true

      // Actual
      const actual = isVerticalSwipeDirection(swipe)

      // Assert
      expect(actual).equal(expected)
    })

    it('returns true when direction of swipe was a up', () => {
      // Arrange
      const swipe = SwipeDirections.up
      const expected = true

      // Actual
      const actual = isVerticalSwipeDirection(swipe)

      // Assert
      expect(actual).equal(expected)
    })
  })

  describe('isHorizontalSwipeDirection', () => {
    it('returns true when direction of swipe was a left', () => {
      // Arrange
      const swipe = SwipeDirections.left
      const expected = true

      // Actual
      const actual = isHorizontalSwipeDirection(swipe)

      // Assert
      expect(actual).equal(expected)
    })

    it('returns true when direction of swipe was a right', () => {
      // Arrange
      const swipe = SwipeDirections.right
      const expected = true

      // Actual
      const actual = isHorizontalSwipeDirection(swipe)

      // Assert
      expect(actual).equal(expected)
    })

    it('returns false when direction of swipe was a down', () => {
      // Arrange
      const swipe = SwipeDirections.down
      const expected = false

      // Actual
      const actual = isHorizontalSwipeDirection(swipe)

      // Assert
      expect(actual).equal(expected)
    })

    it('returns false when direction of swipe was a up', () => {
      // Arrange
      const swipe = SwipeDirections.up
      const expected = false

      // Actual
      const actual = isHorizontalSwipeDirection(swipe)

      // Assert
      expect(actual).equal(expected)
    })
  })

  describe('getSwiperDirectionByKeyboardClick', () => {
    it('returns left when left arrow pressed', () => {
      // Arrange
      const event = { key: KeyboardKeys.left, code: KeyboardKeys.left }
      const expected = SwipeDirections.left

      // Actual
      const actual = getSwiperDirectionByKeyboardClick(event)

      // Assert
      expect(actual).equal(expected)
    })

    it('returns right when right arrow pressed', () => {
      // Arrange
      const event = { key: KeyboardKeys.right, code: KeyboardKeys.right }
      const expected = SwipeDirections.right

      // Actual
      const actual = getSwiperDirectionByKeyboardClick(event)

      // Assert
      expect(actual).equal(expected)
    })

    it('returns down when down arrow pressed', () => {
      // Arrange
      const event = { key: KeyboardKeys.down, code: KeyboardKeys.down }
      const expected = SwipeDirections.down

      // Actual
      const actual = getSwiperDirectionByKeyboardClick(event)

      // Assert
      expect(actual).equal(expected)
    })

    it('returns up when up arrow pressed', () => {
      // Arrange
      const event = { key: KeyboardKeys.up, code: KeyboardKeys.up }
      const expected = SwipeDirections.up

      // Actual
      const actual = getSwiperDirectionByKeyboardClick(event)

      // Assert
      expect(actual).equal(expected)
    })
  })

  describe('getSectionBackgroundColor', () => {
    it('returns color from list when colors exist', () => {
      // Arrange
      const colors = ['red', 'blue']
      const index = 0
      const expected = 'red'

      // Actual
      const actual = getSectionBackgroundColor(colors, index)

      // Assert
      expect(actual).equal(expected)
    })

    it('returns default color when colors empty', () => {
      // Arrange
      const colors: string[] = []
      const index = 0
      const expected = DEFAULT_SECTION_BACKGROUND_COLOR

      // Actual
      const actual = getSectionBackgroundColor(colors, index)

      // Assert
      expect(actual).equal(expected)
    })

    it('returns default color when required color by index not exists', () => {
      // Arrange
      const colors = ['blue']
      const index = 1
      const expected = DEFAULT_SECTION_BACKGROUND_COLOR

      // Actual
      const actual = getSectionBackgroundColor(colors, index)

      // Assert
      expect(actual).equal(expected)
    })
  })

  describe('generateTouchConfiguration', () => {
    it('returns touch configuration with empty fields', () => {
      // Arrange
      const expected = {
        startX: null,
        startY: null,
        endX: null,
        endY: null,
        differenceX: null,
        differenceY: null,
      }

      // Actual
      const actual = generateTouchConfiguration()

      // Assert
      expect(actual).to.deep.equal(expected)
    })
  })

  describe('isNotMovableTouch', () => {
    it('returns true when startX is null', () => {
      // Arrange
      const expected = true
      const touch = {
        ...touchFixture,
        startX: null,
      }

      // Actual
      const actual = isNotMovableTouch(touch)

      // Assert
      expect(actual).equal(expected)
    })

    it('returns true when startY is null', () => {
      // Arrange
      const expected = true
      const touch = {
        ...touchFixture,
        startY: null,
      }

      // Actual
      const actual = isNotMovableTouch(touch)

      // Assert
      expect(actual).equal(expected)
    })

    it('returns true when startY and startX are null', () => {
      // Arrange
      const expected = true
      const touch = {
        ...touchFixture,
        startX: null,
        startY: null,
      }

      // Actual
      const actual = isNotMovableTouch(touch)

      // Assert
      expect(actual).equal(expected)
    })

    it('returns false when startY and startX are not null', () => {
      // Arrange
      const expected = false
      const touch = {
        ...touchFixture,
        startX: 1,
        startY: 2,
      }

      // Actual
      const actual = isNotMovableTouch(touch)

      // Assert
      expect(actual).equal(expected)
    })
  })

  describe('getAnimatedSections', () => {
    it('returns sections with changed transform property for Y coordinate', () => {
      // Arrange
      const sectionTranslate = 200
      const coordinate = Coordinates.Y
      const firstSection = document.createElement('div')
      const secondSection = document.createElement('div')

      const sections = [firstSection, secondSection]

      const expected = [
        {
          ...firstSection,
          style: {
            ...firstSection.style,
            transform: 'translateY(200%)',
          },
        },
        {
          ...secondSection,
          style: {
            ...secondSection.style,
            transform: 'translateY(200%)',
          },
        },
      ]

      // Actual
      // @ts-expect-error
      const actual = getAnimatedSections(sections, sectionTranslate, coordinate)

      // Assert
      expect(actual).to.deep.equal(expected)
    })

    it('returns sections with changed transform property for X coordinate', () => {
      // Arrange
      const sectionTranslate = 200
      const coordinate = Coordinates.X
      const firstSection = document.createElement('div')
      const secondSection = document.createElement('div')

      const sections = [firstSection, secondSection]

      const expected = [
        {
          ...firstSection,
          style: {
            ...firstSection.style,
            transform: 'translateX(200%)',
          },
        },
        {
          ...secondSection,
          style: {
            ...secondSection.style,
            transform: 'translateX(200%)',
          },
        },
      ]

      // Actual
      // @ts-expect-error
      const actual = getAnimatedSections(sections, sectionTranslate, coordinate)

      // Assert
      expect(actual).to.deep.equal(expected)
    })
  })

  describe('getVerticalAnimatedSections', () => {
    it('returns sections with changed transform property for Y coordinate', () => {
      // Arrange
      const sectionTranslate = 200
      const firstSection = document.createElement('div')
      const secondSection = document.createElement('div')

      const sections = [firstSection, secondSection]

      const expected = [
        {
          ...firstSection,
          style: {
            ...firstSection.style,
            transform: 'translateY(200%)',
          },
        },
        {
          ...secondSection,
          style: {
            ...secondSection.style,
            transform: 'translateY(200%)',
          },
        },
      ]

      // Actual
      // @ts-expect-error
      const actual = getVerticalAnimatedSections(sections, sectionTranslate)

      // Assert
      expect(actual).to.deep.equal(expected)
    })
  })

  describe('getHorizontalAnimatedSections', () => {
    it('returns sections with changed transform property for Y coordinate', () => {
      // Arrange
      const sectionTranslate = 200
      const firstSection = document.createElement('div')
      const secondSection = document.createElement('div')

      const sections = [firstSection, secondSection]

      const expected = [
        {
          ...firstSection,
          style: {
            ...firstSection.style,
            transform: 'translateX(200%)',
          },
        },
        {
          ...secondSection,
          style: {
            ...secondSection.style,
            transform: 'translateX(200%)',
          },
        },
      ]

      // Actual
      // @ts-expect-error
      const actual = getHorizontalAnimatedSections(sections, sectionTranslate)

      // Assert
      expect(actual).to.deep.equal(expected)
    })
  })
})
