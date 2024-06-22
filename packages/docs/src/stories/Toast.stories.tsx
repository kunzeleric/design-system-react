import { StoryObj, Meta } from '@storybook/react'
import { Box, Toast, ToastProps } from '@kunzel-ignite-ui/react'
import { useState } from 'react'

export default {
  title: 'Misc/Toast',
  component: Toast,
  args: {
    title: 'Sucesso!',
    description: 'Toast exibido com sucesso!',
  },
  decorators: [
    (_, { args }) => {
      const [open, setOpen] = useState(false)
      return (
        <>
          <Box>
            <button onClick={() => setOpen(true)}>Show Toast</button>
            <Toast {...args} open={open} onOpenChange={setOpen} />
          </Box>
        </>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    title: 'Sucesso!',
    description: 'Toast exibido com sucesso!',
  },
}
