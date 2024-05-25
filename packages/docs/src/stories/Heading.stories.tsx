import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate autem velit voluptas neque. Quam consequuntur repudiandae, beatae architecto, soluta ducimus ab saepe fugiat perferendis nulla unde temporibus quod quisquam aliquam.',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão, o heading sempre será h2. Mas podemos alterar isso com a propriedade `as`',
      },
    },
  },
}
