/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Exceptions } from '../internalisation/internalisation.types'
import type { Widgets } from './widget.types'

export const getWidget = (App: any, widget: Widgets): unknown | null => {
  const target = document.querySelector(widget)

  if (target) {
    return new App({ target })
  }

  throw new Error(Exceptions.WIDGET_TARGET_NOT_FOUND)
}
