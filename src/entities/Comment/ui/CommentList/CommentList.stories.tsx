import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentList } from '../../ui/CommentList/CommentList';

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  comments: [
    {
      id: '1',
      text: 'hello',
      user: { id: '1', username: 'ulbi' },
    },
    {
      id: '2',
      text: 'hello2',
      user: { id: '2', username: 'ulbi2' },
    },
  ],
};
export const Loading = Template.bind({});
Loading.args = {
  comments: [],
  isLoading: true,
};
