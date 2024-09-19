import React, { type ReactElement } from 'react';
import type { ImageProps, TextProps, ViewProps } from 'react-native';
import type { IParagraphProps } from './components/paragraph';
import type { IHeaderProps } from './components/header';
import type { IDelimiterProps } from './components/delimiter';
import type { IImageProps } from './components/image';
import type { ILinkToolProps } from './components/linkTool';
import type { IQuoteProps } from './components/quote';
import type { IListProps } from './components/list';
import type { ITableProps } from './components/table';
import type { IWarningProps } from './components/warning';
import type { ICheckListProps } from './components/checkList';
import type { ICodeProps } from './components/code';
import type { ReactStyle } from 'react-native-code-highlighter/dist/typescript/utils/styles';

export interface IEditorJsData {
  version?: string;
  time?: number;
  blocks: OutputBlockData[];
}

export interface OutputBlockData<
  Type extends string = string,
  T extends object = any,
> {
  id?: string;
  type: Type;
  data: BlockToolData<T>;
  tunes?: { [name: string]: BlockTuneData };
}

export type BlockToolData<T extends object = any> = T;

export type BlockTuneData = any;

export type IUseParseHtmlTags = {
  styles?: {
    boldTextStyle?: TextProps['style'];
    italicTextStyle?: TextProps['style'];
    underlineTextStyle?: TextProps['style'];
    markTextStyle?: TextProps['style'];
    codeTextStyle?: TextProps['style'];
    textStyle?: TextProps['style'];
    linkTextStyle?: TextProps['style'];
  };
};

export type EditorJsViewerProps = {
  data: IEditorJsData;
  showFallback?: boolean;
  components?: {
    Paragraph?: React.ComponentType<IParagraphProps>;
    Header?: React.ComponentType<IHeaderProps>;
    Delimiter?: React.ComponentType<IDelimiterProps>;
    Image?: React.ComponentType<IImageProps>;
    Link?: React.ComponentType<ILinkToolProps>;
    Quote?: React.ComponentType<IQuoteProps>;
    List?: React.ComponentType<IListProps>;
    Table?: React.ComponentType<ITableProps>;
    Warning?: React.ComponentType<IWarningProps>;
    CheckList?: React.ComponentType<ICheckListProps>;
    Code?: React.ComponentType<ICodeProps>;
  };
  customComponents?: IComponentObject;
  style?: ViewProps['style'];
  componentStyles?: {
    paragraph?: IUseParseHtmlTags['styles'];
    header?: {
      textStyle?: TextProps['style'];
    };
    delimiter?: {
      containerStyle?: ViewProps['style'];
      textStyle?: TextProps['style'];
    };
    image?: {
      textStyle?: TextProps['style'];
      imageStyle?: ImageProps['style'];
      containerStyle?: ViewProps['style'];
    };
    link?: {
      wrapperStyle?: ViewProps['style'];
      containerStyle?: ViewProps['style'];
      imageContainerStyle?: ViewProps['style'];
      dataContainerStyle?: ViewProps['style'];
      titleTextStyle?: TextProps['style'];
      descriptionTextStyle?: TextProps['style'];
      linkTextStyle?: TextProps['style'];
      imageStyle?: ImageProps['style'];
    };
    quote?: {
      containerStyle?: ViewProps['style'];
      captionTextStyle?: TextProps['style'];
    } & IUseParseHtmlTags['styles'];
    fallback?: {
      containerStyle?: ViewProps['style'];
      textStyle?: TextProps['style'];
    };
    list?: {
      containerStyle?: ViewProps['style'];
      listItem?: {
        containerStyle?: ViewProps['style'];
        textStyle?: TextProps['style'];
        dotStyle?: ViewProps['style'];
        numberTextStyle?: TextProps['style'];
      } & IUseParseHtmlTags['styles'];
    };
    table?: {
      containerStyle?: ViewProps['style'];
      cellStyle?: ViewProps['style'];
      headerCellStyle?: ViewProps['style'];
      cellTextStyle?: TextProps['style'];
      headerCellTextStyle?: TextProps['style'];
      rowStyle?: ViewProps['style'];
    };
    warning?: {
      containerStyle?: ViewProps['style'];
      titleTextStyle?: TextProps['style'];
      messageTextStyle?: TextProps['style'];
    };
    checklist?: {
      containerStyle?: ViewProps['style'];
      itemContainerStyle?: ViewProps['style'];
      textStyle?: TextProps['style'];
      checkboxStyle?: ViewProps['style'];
      checkboxCheckedStyle?: ViewProps['style'];
      checkboxUncheckedStyle?: ViewProps['style'];
    };
    code?: {
      containerStyle?: ViewProps['style'];
      codeContainerStyle?: ViewProps['style'];
      codeTextStyle?: TextProps['style'];
      hljsStyle?: ReactStyle;
    };
  };
};

export interface IComponentBlockProps<T extends object = any> {
  block: OutputBlockData<string, T>;
  containerStyle: ViewProps['style'];
}

export type IComponentObject = {
  [key: string]: (param: IComponentBlockProps) => ReactElement;
};
