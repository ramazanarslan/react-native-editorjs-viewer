import {
  StyleSheet,
  Text,
  type TextProps,
  View,
  type ViewProps,
} from 'react-native';
import { decode } from 'html-entities';

export type IDelimiterProps = {
  data: Record<string, never>;
  containerStyle?: ViewProps['style'];
  textStyle?: TextProps['style'];
};

const Delimiter = ({ containerStyle, textStyle }: IDelimiterProps) => {
  return (
    <View aria-hidden style={[styles.container, containerStyle]}>
      <Text style={[styles.delimiter, textStyle]}>{decode('&ast;')}</Text>
      <Text style={[styles.delimiter, textStyle]}>{decode('&ast;')}</Text>
      <Text style={[styles.delimiter, textStyle]}>{decode('&ast;')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 8,
    paddingVertical: 16,
  },
  delimiter: {
    marginHorizontal: 6,
    fontSize: 24,
    color: '#181819',
  },
});

export default Delimiter;
