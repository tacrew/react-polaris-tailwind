import clsx from 'clsx'

import type { VisuallyHiddenProps } from './type'

export const VisuallyHidden = ({ children }: VisuallyHiddenProps) => {
  return (
    <span
      className={clsx(
        'absolute top-0 m-0 hidden h-[1px] w-[1px] whitespace-nowrap border-0 p-0'
      )}
    >
      {children}
    </span>
  )
}
