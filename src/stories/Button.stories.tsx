import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button, { ButtonType } from '../components/atoms/button/Button';

import MailIcon from '../components/icons/MailIcon';

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
  type: ButtonType.OUTLINED,
  onClick: () => {
    alert('You clicked the outlined button');
  },
};

export const Underlined = Template.bind({});
Underlined.args = {
  text: 'Underlined Button',
  type: ButtonType.UNDERLINED,
  onClick: () => {
    alert('You clicked the underlined button');
  },
};

export const Text = Template.bind({});
Text.args = {
  text: 'Text Button',
  type: ButtonType.TEXT,
  onClick: () => {
    alert('You clicked the text button');
  },
};

export const ButtonWithRightIcon = Template.bind({});
ButtonWithRightIcon.args = {
  text: 'Right Icon Button',
  type: ButtonType.SOLID,
  iconRight: (
    <>
      <MailIcon fill='#fff' />
    </>
  ),
};

export const ButtonWithLeftIcon = Template.bind({});
ButtonWithLeftIcon.args = {
  text: 'Left Icon Button',
  type: ButtonType.SOLID,
  iconLeft: (
    <>
      <MailIcon fill='#fff' />
    </>
  ),
};

export const Customizable = Template.bind({});
Customizable.args = {
  text: 'Customizable Button',
  type: ButtonType.SOLID,
  iconLeft: (
    <>
      <MailIcon fill='#fff' />
    </>
  ),
  bgColor: '#000',
  hoverBgColor: 'orange',
  hoverColor: '#fff',
  color: '#fff',
  customizeVariantProps: true,
  index: 0,
};

export const CustomizableDirectional = Template.bind({});
CustomizableDirectional.args = {
  text: 'Customizable Button With Icons',
  type: ButtonType.SOLID,
  iconLeft: (
    <>
      <MailIcon fill='#fff' />
    </>
  ),
  iconRight: (
    <>
      <MailIcon fill='#fff' />
    </>
  ),
  bgColor: '#000',
  hoverBgColor: 'blue',
  hoverColor: '#fff',
  color: '#fff',
  customizeVariantProps: true,
  index: 0,
};
