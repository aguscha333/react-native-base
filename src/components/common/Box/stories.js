/* eslint-disable react/no-multi-comp */
import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Box from './index';

export const defaultColor = () => <Box />;
export const blueColor = () => <Box backgroundColor="#00F" />;

storiesOf('Design System/Box', module)
  .add('default color', defaultColor)
  .add('blue color', blueColor);
