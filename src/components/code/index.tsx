import { View, StyleSheet } from 'react-native';
import CodeHighlighter from 'react-native-code-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import type { ViewProps, TextProps } from 'react-native';
import { type CodeHighlighterProps } from 'react-native-code-highlighter/src/lib/CodeHighlighter';

export type ICodeProps = {
  data: {
    code: string;
    language?: string;
  };
  containerStyle?: ViewProps['style'];
  codeContainerStyle?: ViewProps['style'];
  codeTextStyle?: TextProps['style'];
} & Omit<
  CodeHighlighterProps,
  'containerStyle' | 'textStyle' | 'language' | 'style'
>;

const Code = ({
  data,
  containerStyle,
  codeContainerStyle,
  codeTextStyle,
  hljsStyle,
  ...props
}: ICodeProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <CodeHighlighter
        {...props}
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
