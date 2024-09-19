import { View, StyleSheet } from 'react-native';
import CodeHighlighter from 'react-native-code-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import type { ViewProps, TextProps } from 'react-native';
import type { ReactStyle } from 'react-native-code-highlighter/dist/typescript/utils/styles';

export type ICodeProps = {
  data: {
    code: string;
    language?: string;
  };
  containerStyle?: ViewProps['style'];
  codeContainerStyle?: ViewProps['style'];
  codeTextStyle?: TextProps['style'];
  hljsStyle?: ReactStyle;
};

const Code = ({
  data,
  containerStyle,
  codeContainerStyle,
  codeTextStyle,
  hljsStyle,
}: ICodeProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <CodeHighlighter
        hljsStyle={hljsStyle ?? atomOneDarkReasonable}
        containerStyle={[styles.codeContainer, codeContainerStyle]}
        textStyle={codeTextStyle}
        language={data.language}
      >
        {data.code}
      </CodeHighlighter>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
  },
  codeContainer: {
    flex: 1,
    padding: 8,
  },
});

export default Code;
