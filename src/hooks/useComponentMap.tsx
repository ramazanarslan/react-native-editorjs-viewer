import { useMemo } from 'react';
import type {
  EditorJsViewerProps,
  IComponentBlockProps,
  IComponentObject,
} from '../types';
import {
  ParagraphComponent,
  HeaderComponent,
  DelimiterComponent,
  ImageComponent,
  LinkToolComponent,
  QuoteComponent,
  ListComponent,
  TableComponent,
  WarningComponent,
  CheckListComponent,
  CodeComponent,
  RawComponent,
} from '../components';

function useComponentMap(
  components: EditorJsViewerProps['components'],
  componentStyles: EditorJsViewerProps['componentStyles'],
  customComponents: EditorJsViewerProps['customComponents'],
  componentProps: EditorJsViewerProps['componentProps']
): IComponentObject {
  return useMemo(() => {
    const Paragraph = components?.Paragraph || ParagraphComponent;
    const Header = components?.Header || HeaderComponent;
    const Delimiter = components?.Delimiter || DelimiterComponent;
    const Image = components?.Image || ImageComponent;
    const LinkTool = components?.Link || LinkToolComponent;
    const Quote = components?.Quote || QuoteComponent;
    const List = components?.List || ListComponent;
    const Table = components?.Table || TableComponent;
    const Warning = components?.Warning || WarningComponent;
    const CheckList = components?.CheckList || CheckListComponent;
    const Code = components?.Code || CodeComponent;
    const Raw = components?.Raw || RawComponent;

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
      checklist: ({ block, containerStyle }: IComponentBlockProps) => {
        return (
          <CheckList
            data={block.data}
            containerStyle={[
              containerStyle,
              componentStyles?.checklist?.containerStyle,
            ]}
            itemContainerStyle={componentStyles?.checklist?.itemContainerStyle}
            textStyle={componentStyles?.checklist?.textStyle}
            checkboxStyle={componentStyles?.checklist?.checkboxStyle}
            checkboxCheckedStyle={
              componentStyles?.checklist?.checkboxCheckedStyle
            }
            checkboxUncheckedStyle={
              componentStyles?.checklist?.checkboxUncheckedStyle
            }
          />
        );
      },
      code: ({ block, containerStyle }: IComponentBlockProps) => {
        return (
          <Code
            data={block.data}
            containerStyle={[
              containerStyle,
              componentStyles?.code?.containerStyle,
            ]}
            codeContainerStyle={componentStyles?.code?.codeContainerStyle}
            codeTextStyle={componentStyles?.code?.codeTextStyle}
            {...componentProps?.code}
          />
        );
      },
      raw: ({ block, containerStyle }: IComponentBlockProps) => {
        return (
          <Raw
            data={block.data}
            containerStyle={[
              containerStyle,
              componentStyles?.raw?.containerStyle,
            ]}
            {...componentProps?.raw}
          />
        );
      },
      ...customComponents,
    };
  }, [
    components,
    componentStyles,
    customComponents,
    componentProps,
  ]) as IComponentObject;
}

export default useComponentMap;
