import React, { memo } from 'react';
import { View } from 'react-native';
import { string } from 'prop-types';

import styles from './styles';

const Box = ({ backgroundColor }) => {
  return <View style={[styles.container, { backgroundColor }]} />;
};

Box.propTypes = {
  backgroundColor: string,
};

Box.defaultProps = {
  backgroundColor: '#F00',
};

export default memo(Box);
