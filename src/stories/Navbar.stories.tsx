import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Navbar from '../components/organisms/navbar/navbar';

export default {
  title: 'Components/Organisms/Navbaar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Solid = Template.bind({});
Solid.args = {
  text: 'Solid Button',
};
