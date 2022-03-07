import { sizes } from './const'

export type SpinnerProps = {
  /**
   * size of spinner
   * @default 'large'
   */
  size?: keyof typeof sizes
  /** Accessible label for the spinner */
  a11yLabel?: string
  /** Allows the component to apply the correct a11y roles based on */
  hasFocusableParent?: boolean
}
