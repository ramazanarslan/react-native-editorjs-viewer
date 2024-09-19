import { StyleSheet, Text, type TextProps } from 'react-native';
import type { ReactNode } from 'react';

export type IItalicProps = {
  children?: ReactNode;
  style?: TextProps['style'];
};

const Italic = ({ children, style }: IItalicProps) => {
  return (
    <Text allowFontScaling={true} style={[styles.italic, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  italic: {
    fontStyle: 'italic',
  },
});

export default Italic;
