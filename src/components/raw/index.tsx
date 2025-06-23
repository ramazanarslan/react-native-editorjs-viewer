import { View, StyleSheet, useWindowDimensions } from 'react-native';
import RenderHtml, { type RenderHTMLProps } from 'react-native-render-html';
import type { ViewProps, TextProps } from 'react-native';

export type IRawProps = {
  data: {
    html: string;
  };
  containerStyle?: ViewProps['style'];
  textProps?: Omit<TextProps, 'style' | 'children'>;
} & Omit<RenderHTMLProps, 'source' | 'contentWidth'>;

const Raw = ({ data, containerStyle, textProps, ...props }: IRawProps) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, containerStyle]}>
      <RenderHtml
        {...props}
        contentWidth={width}
        source={{ html: data.html }}
        defaultTextProps={textProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
});

export default Raw;
