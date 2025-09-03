import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleTypeTabs } from 'entities/Article/ui/ArticleTypeTabs/ArticleTypeTabs';

export default {
  title: 'entities/Article/ArticleTypeTabs',
  component: ArticleTypeTabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => (
  <ArticleTypeTabs {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
