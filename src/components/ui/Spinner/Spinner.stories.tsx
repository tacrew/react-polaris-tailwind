import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Spinner } from './Spinner'

const meta: ComponentMeta<typeof Spinner> = {
  title: 'ui/Spinner',
  component: Spinner,
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Large: ComponentStoryObj<typeof Spinner> = {
  args: {
    size: 'large',
    a11yLabel: 'Large spinner sample',
  },
}

export const Small: ComponentStoryObj<typeof Spinner> = {
  args: {
    size: 'small',
    a11yLabel: 'Small spinner sample',
  },
}

// TODO: add focus management story after created more components
// export const WithFocus: ComponentStoryObj<typeof Spinner> = {
//   args: {
//     size: 'small',
//     a11yLabel: 'Small spinner sample',
//   },
// }
