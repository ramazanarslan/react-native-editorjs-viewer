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
  defaultStyles: EditorJsViewerProps['defaultStyles'],
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
            style={[
              containerStyle,
              defaultStyles?.textStyle,
              componentStyles?.paragraph?.textStyle,
            ]}
            otherStyles={{
              boldTextStyle: [
                defaultStyles?.textStyle,
                defaultStyles?.boldTextStyle,
                componentStyles?.paragraph?.boldTextStyle,
              ],
              italicTextStyle: [
                defaultStyles?.textStyle,
                defaultStyles?.italicTextStyle,
                componentStyles?.paragraph?.italicTextStyle,
              ],
              underlineTextStyle: [
                defaultStyles?.textStyle,
                defaultStyles?.underlineTextStyle,
                componentStyles?.paragraph?.underlineTextStyle,
              ],
              codeTextStyle: [
                defaultStyles?.codeTextStyle,
                componentStyles?.paragraph?.codeTextStyle,
              ],
              markTextStyle: [
                defaultStyles?.textStyle,
                defaultStyles?.markTextStyle,
                componentStyles?.paragraph?.markTextStyle,
              ],
              linkTextStyle: [
                defaultStyles?.textStyle,
                defaultStyles?.linkTextStyle,
                componentStyles?.paragraph?.linkTextStyle,
              ],
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
            textStyle={[
              defaultStyles?.textStyle,
              componentStyles?.delimiter?.textStyle,
            ]}
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
            textStyle={[
              defaultStyles?.textStyle,
              componentStyles?.image?.textStyle,
            ]}
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
            titleTextStyle={[
              defaultStyles?.textStyle,
              componentStyles?.link?.titleTextStyle,
            ]}
            descriptionTextStyle={[
              defaultStyles?.textStyle,
              componentStyles?.link?.descriptionTextStyle,
            ]}
            linkTextStyle={[
              defaultStyles?.textStyle,
              defaultStyles?.linkTextStyle,
              componentStyles?.link?.linkTextStyle,
            ]}
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
            textStyle={[
              defaultStyles?.textStyle,
              componentStyles?.quote?.textStyle,
            ]}
            captionTextStyle={[
              defaultStyles?.textStyle,
              componentStyles?.quote?.captionTextStyle,
            ]}
            otherStyles={{
              boldTextStyle: [
                defaultStyles?.textStyle,
                defaultStyles?.boldTextStyle,
                componentStyles?.quote?.boldTextStyle,
              ],
              italicTextStyle: [
                defaultStyles?.textStyle,
                defaultStyles?.italicTextStyle,
                componentStyles?.quote?.italicTextStyle,
              ],
              underlineTextStyle: [
                defaultStyles?.textStyle,
                defaultStyles?.underlineTextStyle,
                componentStyles?.quote?.underlineTextStyle,
              ],
              codeTextStyle: [
                defaultStyles?.textStyle,
                defaultStyles?.codeTextStyle,
                componentStyles?.quote?.codeTextStyle,
              ],
              markTextStyle: [
                defaultStyles?.textStyle,
                defaultStyles?.markTextStyle,
                componentStyles?.quote?.markTextStyle,
              ],
              linkTextStyle: [
                defaultStyles?.textStyle,
                defaultStyles?.linkTextStyle,
                componentStyles?.quote?.linkTextStyle,
              ],
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
              numberTextStyle: [
                defaultStyles?.textStyle,
                componentStyles?.list?.listItem?.numberTextStyle,
              ],
            }}
            contentContainerStyle={componentStyles?.list?.contentContainerStyle}
            otherStyles={{
              boldTextStyle: [
                defaultStyles?.textStyle,
                defaultStyles?.boldTextStyle,
                componentStyles?.list?.listItem?.boldTextStyle,
              ],
              italicTextStyle: [
                defaultStyles?.textStyle,
                defaultStyles?.italicTextStyle,
                componentStyles?.list?.listItem?.italicTextStyle,
              ],
              underlineTextStyle: [
                defaultStyles?.textStyle,
                defaultStyles?.underlineTextStyle,
                componentStyles?.list?.listItem?.underlineTextStyle,
              ],
              codeTextStyle: [
                defaultStyles?.textStyle,
                defaultStyles?.codeTextStyle,
                componentStyles?.list?.listItem?.codeTextStyle,
              ],
              markTextStyle: [
                defaultStyles?.textStyle,
                defaultStyles?.markTextStyle,
                componentStyles?.list?.listItem?.markTextStyle,
              ],
              linkTextStyle: [
                defaultStyles?.textStyle,
                defaultStyles?.linkTextStyle,
                componentStyles?.list?.listItem?.linkTextStyle,
              ],
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
            cellTextStyle={[
              defaultStyles?.textStyle,
              componentStyles?.table?.cellTextStyle,
            ]}
            headerCellTextStyle={[
              defaultStyles?.textStyle,
              componentStyles?.table?.headerCellTextStyle,
            ]}
            contentContainerStyle={
              componentStyles?.table?.contentContainerStyle
            }
            separatorStyle={componentStyles?.table?.separatorStyle}
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
            titleTextStyle={[
              defaultStyles?.textStyle,
              componentStyles?.warning?.titleTextStyle,
            ]}
            messageTextStyle={[
              defaultStyles?.textStyle,
              componentStyles?.warning?.messageTextStyle,
            ]}
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
            textStyle={[
              defaultStyles?.textStyle,
              componentStyles?.checklist?.textStyle,
            ]}
            checkboxStyle={componentStyles?.checklist?.checkboxStyle}
            checkboxCheckedStyle={
              componentStyles?.checklist?.checkboxCheckedStyle
            }
            checkboxUncheckedStyle={
              componentStyles?.checklist?.checkboxUncheckedStyle
            }
            contentContainerStyle={
              componentStyles?.checklist?.contentContainerStyle
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
            codeTextStyle={[
              defaultStyles?.textStyle,
              componentStyles?.code?.codeTextStyle,
            ]}
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
    defaultStyles,
  ]) as IComponentObject;
}

export default useComponentMap;
