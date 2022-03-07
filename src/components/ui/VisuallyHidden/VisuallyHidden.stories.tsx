import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { VisuallyHidden } from './VisuallyHidden'

const meta: ComponentMeta<typeof VisuallyHidden> = {
  title: 'ui/VisuallyHidden',
  component: VisuallyHidden,
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

// TODO: add sample component when we have more components
export const Default: ComponentStoryObj<typeof VisuallyHidden> = {
  args: {
    children: <div>hi</div>,
  },
}
