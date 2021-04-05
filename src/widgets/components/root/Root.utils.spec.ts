import { Messages } from '../../../internalisation/internalisation.types'
import { getRootContent } from './Root.utils'

describe('Unit: Root.utils', () => {
  describe('getRootContent', () => {
    it('returns greeting message', () => {
      // Arrange
      const expected = Messages.GREETING

      // Actaul
      const actual = getRootContent()

      // Assert
      expect(actual).equals(expected)
    })
  })
})
