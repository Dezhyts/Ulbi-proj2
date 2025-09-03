import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleSortSelector } from 'entities/Article/ui/ArticleSortSelector/ArticleSortSelector';

export default {
  title: 'entities/Article/ArticleSortSelector',
  component: ArticleSortSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleSortSelector>;

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => (
  <ArticleSortSelector {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
