import { StyleSheet, Text, type TextProps } from 'react-native';
import type { ReactNode } from 'react';

export type IBoldProps = {
  children?: ReactNode;
  style?: TextProps['style'];
};

const Bold = ({ children, style }: IBoldProps) => {
  return (
    <Text allowFontScaling={true} style={[styles.bold, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: '700',
  },
});

export default Bold;
