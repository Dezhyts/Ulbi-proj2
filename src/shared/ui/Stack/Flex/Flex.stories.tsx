import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Flex } from './Flex';

export default {
  title: 'shared/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
  children: (
    <>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </>
  ),
};
export const Row4 = Template.bind({});
Row4.args = {
  gap: '4',
  children: (
    <>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </>
  ),
};
export const Row8 = Template.bind({});
Row8.args = {
  gap: '8',
  children: (
    <>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </>
  ),
};
export const Row16 = Template.bind({});
Row16.args = {
  gap: '16',
  children: (
    <>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </>
  ),
};

export const Row32 = Template.bind({});
Row32.args = {
  gap: '32',
  children: (
    <>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </>
  ),
};

export const Column = Template.bind({});
Column.args = {
  direction: 'column',
  children: (
    <>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </>
  ),
};
export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
  gap: '16',
  direction: 'column',
  children: (
    <>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </>
  ),
};
export const ColumnAlignEnd = Template.bind({});
ColumnAlignEnd.args = {
  align: 'end',
  direction: 'column',
  children: (
    <>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </>
  ),
};
