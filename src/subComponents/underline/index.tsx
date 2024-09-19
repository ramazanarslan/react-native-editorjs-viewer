import { StyleSheet, Text, type TextProps } from 'react-native';
import type { ReactNode } from 'react';

export type IUnderlineProps = {
  children?: ReactNode;
  style?: TextProps['style'];
};

const Underline = ({ children, style }: IUnderlineProps) => {
  return (
    <Text allowFontScaling={true} style={[styles.underline, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  underline: {
    textDecorationLine: 'underline',
  },
});

export default Underline;
