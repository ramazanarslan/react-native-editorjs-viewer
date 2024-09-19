import { StyleSheet, View } from 'react-native';
import { useMemo } from 'react';
import {
  DelimiterComponent,
  FallbackComponent,
  HeaderComponent,
  ImageComponent,
  LinkToolComponent,
  ParagraphComponent,
  QuoteComponent,
  ListComponent,
  TableComponent,
  WarningComponent,
} from './components';
import type {
  EditorJsViewerProps,
  IComponentBlockProps,
  IComponentObject,
} from './types';

const EditorJsViewer = ({
  data,
  showFallback = false,
  components,
  customComponents,
  componentStyles,
  style,
}: EditorJsViewerProps) => {
  const componentMap: IComponentObject = useMemo(() => {
    const Paragraph = components?.Paragraph || ParagraphComponent;
    const Header = components?.Header || HeaderComponent;
    const Delimiter = components?.Delimiter || DelimiterComponent;
    const Image = components?.Image || ImageComponent;
    const LinkTool = components?.Link || LinkToolComponent;
    const Quote = components?.Quote || QuoteComponent;
    const List = components?.List || ListComponent;
    const Table = components?.Table || TableComponent;
    const Warning = components?.Warning || WarningComponent;

    return {
      paragraph: ({ block, containerStyle }: IComponentBlockProps) => {
        return (
          <Paragraph
            data={block.data}
            style={[containerStyle, componentStyles?.paragraph?.textStyle]}
            otherStyles={{
              boldTextStyle: componentStyles?.paragraph?.boldTextStyle,
              italicTextStyle: componentStyles?.paragraph?.italicTextStyle,
              underlineTextStyle:
                componentStyles?.paragraph?.underlineTextStyle,
              codeTextStyle: componentStyles?.paragraph?.codeTextStyle,
              markTextStyle: componentStyles?.paragraph?.markTextStyle,
              linkTextStyle: componentStyles?.paragraph?.linkTextStyle,
            }}
          />
        );
      },
      header: ({ block, containerStyle }: IComponentBlockProps) => {
        return (
          <Header
            data={block.data}
            style={[containerStyle, componentStyles?.header?.textStyle]}
          />
        );
      },
      delimiter: ({ block, containerStyle }: IComponentBlockProps) => {
        return (
          <Delimiter
            data={block.data}
            containerStyle={[
              containerStyle,
              componentStyles?.delimiter?.containerStyle,
            ]}
            textStyle={componentStyles?.delimiter?.textStyle}
          />
        );
      },
      image: ({ block, containerStyle }: IComponentBlockProps) => {
        return (
          <Image
            data={block.data}
            containerStyle={[
              containerStyle,
              componentStyles?.image?.containerStyle,
            ]}
            textStyle={componentStyles?.image?.textStyle}
            imageStyle={componentStyles?.image?.imageStyle}
          />
        );
      },
      linktool: ({ block, containerStyle }: IComponentBlockProps) => {
        return (
          <LinkTool
            data={block.data}
            containerStyle={[
              containerStyle,
              componentStyles?.link?.containerStyle,
            ]}
            wrapperStyle={componentStyles?.link?.wrapperStyle}
            imageContainerStyle={componentStyles?.link?.imageContainerStyle}
            dataContainerStyle={componentStyles?.link?.dataContainerStyle}
            titleTextStyle={componentStyles?.link?.titleTextStyle}
            descriptionTextStyle={componentStyles?.link?.descriptionTextStyle}
            linkTextStyle={componentStyles?.link?.linkTextStyle}
            imageStyle={componentStyles?.link?.imageStyle}
          />
        );
      },
      quote: ({ block, containerStyle }: IComponentBlockProps) => {
        return (
          <Quote
            data={block.data}
            containerStyle={[
              containerStyle,
              componentStyles?.quote?.containerStyle,
            ]}
            textStyle={componentStyles?.quote?.textStyle}
            captionTextStyle={componentStyles?.quote?.captionTextStyle}
            otherStyles={{
              boldTextStyle: componentStyles?.quote?.boldTextStyle,
              italicTextStyle: componentStyles?.quote?.italicTextStyle,
              underlineTextStyle: componentStyles?.quote?.underlineTextStyle,
              codeTextStyle: componentStyles?.quote?.codeTextStyle,
              markTextStyle: componentStyles?.quote?.markTextStyle,
              linkTextStyle: componentStyles?.quote?.linkTextStyle,
            }}
          />
        );
      },
      list: ({ block, containerStyle }: IComponentBlockProps) => {
        return (
          <List
            data={block.data}
            containerStyle={[
              containerStyle,
              componentStyles?.list?.containerStyle,
            ]}
            listItemStyle={{
              containerStyle: componentStyles?.list?.listItem?.containerStyle,
              textStyle: componentStyles?.list?.listItem?.textStyle,
              dotStyle: componentStyles?.list?.listItem?.dotStyle,
              numberTextStyle: componentStyles?.list?.listItem?.numberTextStyle,
            }}
            otherStyles={{
              boldTextStyle: componentStyles?.list?.listItem?.boldTextStyle,
              italicTextStyle: componentStyles?.list?.listItem?.italicTextStyle,
              underlineTextStyle:
                componentStyles?.list?.listItem?.underlineTextStyle,
              codeTextStyle: componentStyles?.list?.listItem?.codeTextStyle,
              markTextStyle: componentStyles?.list?.listItem?.markTextStyle,
              linkTextStyle: componentStyles?.list?.listItem?.linkTextStyle,
            }}
          />
        );
      },
      table: ({ block, containerStyle }: IComponentBlockProps) => {
        return (
          <Table
            data={block.data}
            containerStyle={[
              containerStyle,
              componentStyles?.table?.containerStyle,
            ]}
            rowStyle={componentStyles?.table?.rowStyle}
            cellStyle={componentStyles?.table?.cellStyle}
            headerCellStyle={componentStyles?.table?.headerCellStyle}
            cellTextStyle={componentStyles?.table?.cellTextStyle}
            headerCellTextStyle={componentStyles?.table?.headerCellTextStyle}
          />
        );
      },
      warning: ({ block, containerStyle }: IComponentBlockProps) => {
        return (
          <Warning
            data={block.data}
            containerStyle={[
              containerStyle,
              componentStyles?.warning?.containerStyle,
            ]}
            titleTextStyle={componentStyles?.warning?.titleTextStyle}
            messageTextStyle={componentStyles?.warning?.messageTextStyle}
          />
        );
      },
      ...customComponents,
    };
  }, [components, componentStyles, customComponents]);

  return (
    <View style={[styles.container, style]}>
      {data.blocks.map((block, index) => {
        const isFirstBlock = index === 0;
        const isLastBlock = index === data.blocks.length - 1;

        const overrideMarginIfIsFirstOrLastElement = {
          marginTop: isFirstBlock ? 0 : undefined,
          marginBottom: isLastBlock ? 0 : undefined,
        };

        const type = block.type.toLowerCase();

        if (type === 'image' && block.data?.file == null && block.data.url) {
          block.data.file = { url: block.data.url };
        }

        const Component = componentMap[type];

        if (Component) {
          return (
            <Component
              key={block.id || index}
              block={block}
              containerStyle={overrideMarginIfIsFirstOrLastElement}
            />
          );
        }

        return showFallback ? (
          <FallbackComponent
            key={block.id || index}
            blockType={block.type}
            containerStyle={[
              overrideMarginIfIsFirstOrLastElement,
              componentStyles?.fallback?.containerStyle,
            ]}
            textStyle={componentStyles?.fallback?.textStyle}
          />
        ) : null;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default EditorJsViewer;
