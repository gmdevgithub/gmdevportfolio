import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DesktopApp from '../DesktopApp';

export default {
  title: 'Components/DesktopApp',
  component: DesktopApp,
  parameters: {
    docs: {
      description: {
        component: 'This is the DesktopApp component, which provides the main desktop experience.',
      },
    },
  },
} as Meta<typeof DesktopApp>;

const Template: StoryFn = (args) => <DesktopApp {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    description: {
      story: 'This is the default state of the DesktopApp component.',
    },
  },
};