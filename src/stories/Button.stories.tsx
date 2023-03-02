import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button, { ButtonType } from '../components/atoms/button/Button';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Solid = Template.bind({});
Solid.args = {
  text: 'Solid Button',
  type: ButtonType.SOLID,
  onClick: () => {
    alert('You clicked the solid button');
  },
};

export const Outlined = Template.bind({});
Outlined.args = {
  text: 'Outlined Button',
  type: ButtonType.SOLID,
  onClick: () => {
    alert('You clicked the outlined button');
  },
};
