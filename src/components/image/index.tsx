import {
  type ImageProps,
  StyleSheet,
  Text,
  type TextProps,
  View,
  type ViewProps,
} from 'react-native';
import { AspectImage } from '../../subComponents';

export type IImageProps = {
  data: {
    caption: string;
    file: {
      url: string;
    };
  };
  containerStyle?: ViewProps['style'];
  imageStyle?: ImageProps['style'];
  textStyle?: TextProps['style'];
};

const Image = ({
  data,
  containerStyle,
  textStyle,
  imageStyle,
}: IImageProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <AspectImage
        accessible
        accessibilityRole="image"
        accessibilityHint={`${data.caption} image`}
        uri={data.file.url}
        source={{ uri: data.file.url }}
        imageStyle={imageStyle}
      />

      {data.caption && (
        <Text aria-hidden style={[styles.caption, textStyle]}>
          {data.caption}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 8,
    alignItems: 'center',
  },
  caption: {
    width: '100%',
    marginTop: 4,
    fontSize: 12,
    color: '#292929',
    textAlign: 'center',
  },
});

export default Image;
