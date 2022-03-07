import {} from 'react'
import clsx from 'clsx'

import { useIsAfterInitialMount } from '@/hooks/utils'

import type { SpinnerProps } from './type'
import { sizes } from './const'
import { VisuallyHidden } from '@/components/ui'

export const Spinner = ({
  size = 'large',
  a11yLabel,
  hasFocusableParent,
}: SpinnerProps) => {
  const { isAfterInitialMount } = useIsAfterInitialMount()

  const spanAttributes = {
    ...(!hasFocusableParent && { role: 'status' }),
  }

  return (
    <>
      <div
        className={clsx(
          'animate-spin rounded-full border-2 border-highlight border-t-transparent',
          sizes[size]
        )}
      />
      <span {...spanAttributes}>
        {(isAfterInitialMount || !hasFocusableParent) && (
          <VisuallyHidden>{a11yLabel}</VisuallyHidden>
        )}
      </span>
    </>
  )
}
