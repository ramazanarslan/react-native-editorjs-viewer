import { useMemo } from 'react';
import type { ComponentType } from 'react';
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
  componentConfigs: EditorJsViewerProps['componentConfigs']
): IComponentObject {
  return useMemo(() => {
    const defaultComponents = {
      Paragraph: ParagraphComponent,
      Header: HeaderComponent,
      Delimiter: DelimiterComponent,
      Image: ImageComponent,
      Link: LinkToolComponent,
      Quote: QuoteComponent,
      List: ListComponent,
      Table: TableComponent,
      Warning: WarningComponent,
      CheckList: CheckListComponent,
      Code: CodeComponent,
      Raw: RawComponent,
    };

    const componentWrapperFactory =
      (Component: ComponentType<any>, styles: any) =>
      ({ block, containerStyle }: IComponentBlockProps) => (
        <Component
          data={block.data}
          containerStyle={[containerStyle, styles?.containerStyle]}
          {...styles}
          {...(['raw', 'code'].includes(block.type.toLowerCase())
            ? componentConfigs?.[
                block.type.toLowerCase() as keyof typeof componentConfigs
              ]
            : {})}
        />
      );

    const mappedComponents = {
      paragraph: componentWrapperFactory(
        components?.Paragraph || defaultComponents.Paragraph,
        componentStyles?.paragraph
      ),
      header: componentWrapperFactory(
        components?.Header || defaultComponents.Header,
        componentStyles?.header
      ),
      delimiter: componentWrapperFactory(
        components?.Delimiter || defaultComponents.Delimiter,
        componentStyles?.delimiter
      ),
      image: componentWrapperFactory(
        components?.Image || defaultComponents.Image,
        componentStyles?.image
      ),
      linktool: componentWrapperFactory(
        components?.Link || defaultComponents.Link,
        componentStyles?.link
      ),
      quote: componentWrapperFactory(
        components?.Quote || defaultComponents.Quote,
        componentStyles?.quote
      ),
      list: componentWrapperFactory(
        components?.List || defaultComponents.List,
        componentStyles?.list
      ),
      table: componentWrapperFactory(
        components?.Table || defaultComponents.Table,
        componentStyles?.table
      ),
      warning: componentWrapperFactory(
        components?.Warning || defaultComponents.Warning,
        componentStyles?.warning
      ),
      checklist: componentWrapperFactory(
        components?.CheckList || defaultComponents.CheckList,
        componentStyles?.checklist
      ),
      code: componentWrapperFactory(
        components?.Code || defaultComponents.Code,
        componentStyles?.code
      ),
      raw: componentWrapperFactory(
        components?.Raw || defaultComponents.Raw,
        componentStyles?.raw
      ),
    };

    return { ...mappedComponents, ...customComponents };
  }, [components, componentStyles, customComponents, componentConfigs]);
}

export default useComponentMap;
