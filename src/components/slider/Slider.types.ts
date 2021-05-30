export type Swipe = {
  deltaY: number
  type: string
}

export type Click = string

export type SwipeClick = Swipe | Click

export type Options = {
  containerId?: string
  sectionClass?: string
  pageClass?: string
}

export enum SwipeDirections {
  right = 'right',
  left = 'left',
  up = 'up',
  down = 'down',
}

export enum KeyboardKeys {
  down = 'ArrowDown',
  up = 'ArrowUp',
  right = 'ArrowRight',
  left = 'ArrowLeft',
}

export type KeyCodeProvider = {
  key: KeyboardKeys
  code: KeyboardKeys
}

export type TouchConfiguration = {
  startX: Nullable<number>
  startY: Nullable<number>
  endX: Nullable<number>
  endY: Nullable<number>
  differenceX: Nullable<number>
  differenceY: Nullable<number>
}

export enum Coordinates {
  X = 'X',
  Y = 'Y',
}
