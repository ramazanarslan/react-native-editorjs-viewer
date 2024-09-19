import { useMemo } from 'react';
import { StyleSheet, Text, type TextProps } from 'react-native';

export type IHeaderProps = {
  data: {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    text: string;
  };
  style?: TextProps['style'];
};

const Header = ({ data, style }: IHeaderProps) => {
  const headingStyleByLevel = useMemo(
    () => styles[`h${data.level}`],
    [data.level]
  );

  return (
    <Text
      accessible
      accessibilityRole="header"
      allowFontScaling={true}
      style={[styles.header, headingStyleByLevel, style]}
    >
      {data.text}
    </Text>
  );
};

export const styles = StyleSheet.create({
  header: {
    marginVertical: 8,
    color: '#181819',
  },
  h1: {
    fontWeight: '700',
    fontSize: 28,
  },
  h2: {
    fontWeight: '700',
    fontSize: 24,
  },
  h3: {
    fontWeight: '600',
    fontSize: 20,
  },
  h4: {
    fontWeight: '600',
    fontSize: 18,
  },
  h5: {
    fontWeight: '600',
    fontSize: 16,
  },
  h6: {
    fontWeight: '500',
    fontSize: 16,
  },
});

export default Header;
