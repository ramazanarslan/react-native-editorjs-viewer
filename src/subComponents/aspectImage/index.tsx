import {
  Image,
  type ImageProps,
  type LayoutChangeEvent,
  StyleSheet,
  View,
} from 'react-native';
import { useCallback, useState } from 'react';

export type IAspectImageProps = {
  uri: string;
  imageStyle?: ImageProps['style'];
} & ImageProps;

const AspectImage = ({ uri, imageStyle, ...props }: IAspectImageProps) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [hasErrorOnSize, setHasErrorOnSize] = useState(false);

  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      const containerWidth = event.nativeEvent.layout.width;

      Image.getSize(
        uri,
        (w, h) => {
          setWidth(containerWidth);
          setHeight((containerWidth * h) / w);
        },
        () => {
          setHasErrorOnSize(true);
        }
      );
    },
    [uri]
  );

  return (
    <View onLayout={onLayout} style={styles.container}>
      {hasErrorOnSize || !width || !height ? (
        <Image {...props} style={[styles.defaultImage, imageStyle]} />
      ) : (
        <Image {...props} style={[{ width, height }, imageStyle]} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  defaultImage: {
    height: 180,
    width: '100%',
    resizeMode: 'contain',
  },
});

export default AspectImage;
