import { View, StyleSheet, useWindowDimensions } from 'react-native';
import RenderHtml, { type RenderHTMLProps } from 'react-native-render-html';
import type { ViewProps } from 'react-native';

export type IRawProps = {
  data: {
    html: string;
  };
  containerStyle?: ViewProps['style'];
} & Omit<RenderHTMLProps, 'source' | 'contentWidth'>;

const Raw = ({ data, containerStyle, ...props }: IRawProps) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, containerStyle]}>
      <RenderHtml
        {...props}
        contentWidth={width}
        source={{ html: data.html }}
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
