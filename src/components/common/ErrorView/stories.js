import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, text } from '@storybook/addon-knobs';

import ErrorView from './index';

export const defaultState = () => <ErrorView errors={{ test: text('test', 'testing') }} />;

storiesOf('Design System/ErrorView', module)
  .addDecorator(withKnobs)
  .add('default view', defaultState);
