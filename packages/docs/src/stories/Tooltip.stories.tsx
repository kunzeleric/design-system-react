import { StoryObj, Meta } from '@storybook/react'
import { Text, Tooltip, TooltipProps } from '@kunzel-ignite-ui/react'

export default {
  title: 'Misc/Tooltip',
  component: Tooltip,
  args: {
    triggerElement: <Text>Trigger</Text>,
    content: 'Tooltip content',
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
