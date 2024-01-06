import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Navlink from '../components/atoms/navlink/navlink';

export default {
  title: 'Components/Atoms/Navlink',
  component: Navlink,
} as ComponentMeta<typeof Navlink>;

const Template: ComponentStory<typeof Navlink> = (args) => <Navlink {...args} />;

export const Solid = Template.bind({});
Solid.args = {
  label: 'Eldrige',
  to: 'https://eldrige.github.io/Portfolio/',
};
