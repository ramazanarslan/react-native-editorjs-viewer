import { View, Text, StyleSheet } from 'react-native';
import type { ViewProps, TextProps } from 'react-native';

export type IWarningProps = {
  data: {
    title: string;
    message: string;
  };
  containerStyle?: ViewProps['style'];
  titleTextStyle?: TextProps['style'];
  messageTextStyle?: TextProps['style'];
};

const Warning = ({
  data,
  containerStyle,
  titleTextStyle,
  messageTextStyle,
}: IWarningProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleTextStyle]}>{data.title}</Text>
      <Text style={[styles.message, messageTextStyle]}>{data.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF3CD',
    borderColor: '#FFEEBA',
    borderWidth: 1,
    borderRadius: 4,
    padding: 12,
    marginVertical: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#856404',
    marginBottom: 4,
  },
  message: {
    fontSize: 14,
    color: '#856404',
  },
});

export default Warning;
