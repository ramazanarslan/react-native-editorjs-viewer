import { useCallback } from 'react';
import {
  Alert,
  Image,
  type ImageProps,
  Linking,
  StyleSheet,
  Text,
  type TextProps,
  TouchableOpacity,
  View,
  type ViewProps,
} from 'react-native';

export type ILinkToolProps = {
  data: {
    link?: string;
    meta: {
      title?: string;
      site_name?: string;
      description?: string;
      image?: {
        url?: string;
      };
    };
  };
  wrapperStyle?: ViewProps['style'];
  containerStyle?: ViewProps['style'];
  imageContainerStyle?: ViewProps['style'];
  dataContainerStyle?: ViewProps['style'];
  titleTextStyle?: TextProps['style'];
  descriptionTextStyle?: TextProps['style'];
  linkTextStyle?: TextProps['style'];
  imageStyle?: ImageProps['style'];
  titleTextProps?: Omit<TextProps, 'style'>;
  descriptionTextProps?: Omit<TextProps, 'style'>;
  linkTextProps?: Omit<TextProps, 'style'>;
  imageProps?: Omit<ImageProps, 'style' | 'source'>;
};

const LinkTool = ({
  data,
  containerStyle,
  wrapperStyle,
  dataContainerStyle,
  imageStyle,
  imageContainerStyle,
  titleTextStyle,
  descriptionTextStyle,
  linkTextStyle,
  titleTextProps,
  descriptionTextProps,
  linkTextProps,
  imageProps,
}: ILinkToolProps) => {
  const { meta } = data;

  const handleOpenLink = useCallback(async (link?: string) => {
    if (!link) {
      Alert.alert('Missing linkTool');
      return;
    }

    try {
      await Linking.openURL(link);
    } catch {
      Alert.alert(`Don't know how to open this URL: ${link}`);
    }
  }, []);

  return (
    <TouchableOpacity
      accessible
      accessibilityRole="link"
      accessibilityLabel="Bookmark"
      accessibilityHint="Click to open link"
      activeOpacity={0.2}
      style={[styles.container, containerStyle]}
      onPress={() => handleOpenLink(data.link)}
    >
      <View style={[styles.wrapper, wrapperStyle]}>
        <View style={[styles.dataContainer, dataContainerStyle]}>
          {(meta.title || meta.site_name) && (
            <Text
              style={[styles.title, titleTextStyle]}
              numberOfLines={1}
              ellipsizeMode="tail"
              {...titleTextProps}
            >
              {meta.title || meta.site_name}
            </Text>
          )}

          {meta.description && (
            <Text
              style={[styles.description, descriptionTextStyle]}
              numberOfLines={2}
              ellipsizeMode="tail"
              {...descriptionTextProps}
            >
              {meta.description}
            </Text>
          )}

          {data.link && (
            <Text
              style={[styles.link, linkTextStyle]}
              numberOfLines={1}
              ellipsizeMode="tail"
              {...linkTextProps}
            >
              {data.link}
            </Text>
          )}
        </View>

        <View style={[styles.imageContainer, imageContainerStyle]}>
          {meta?.image?.url && (
            <Image
              source={{
                uri: meta.image.url,
              }}
              style={[styles.image, imageStyle]}
              {...imageProps}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const MAX_IMAGE_SIZE = 104;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 8,
  },
  wrapper: {
    flexDirection: 'row',
    width: '100%',
    borderRadius: 4,
    borderColor: '#DFDFDE',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  dataContainer: {
    flex: 1,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 12,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    height: 18,
  },
  description: {
    color: '#7D7C78',
    marginTop: 4,
    fontSize: 14,
    height: 36,
  },
  link: {
    marginTop: 6,
    fontSize: 14,
    height: 16,
  },
  imageContainer: {
    width: MAX_IMAGE_SIZE,
    height: MAX_IMAGE_SIZE,
    marginLeft: 12,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: MAX_IMAGE_SIZE,
    resizeMode: 'cover',
  },
});

export default LinkTool;
