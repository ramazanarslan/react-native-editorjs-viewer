import { StyleSheet, Text, type TextProps } from 'react-native';
import type { ReactNode } from 'react';

export type IMarkProps = {
  children?: ReactNode;
  style?: TextProps['style'];
};

const Mark = ({ children, style }: IMarkProps) => {
  return (
    <Text allowFontScaling={true} style={[styles.mark, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  mark: {
    backgroundColor: '#FFFBCB',
  },
});

export default Mark;
