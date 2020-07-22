/* eslint-disable react/no-multi-comp */
import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Box from './index';

export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const defaultColor = () => <Box />;
export const blueColor = () => <Box backgroundColor="#00F" />;

storiesOf('Design System/Box', module)
  .add('default color', defaultColor)
  .add('blue color', blueColor);
