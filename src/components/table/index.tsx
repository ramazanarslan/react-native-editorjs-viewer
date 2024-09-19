import { useCallback } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import type { ViewProps, TextProps, ListRenderItemInfo } from 'react-native';

export type ITableProps = {
  data: {
    content: string[][];
    withHeadings: boolean;
  };
  containerStyle?: ViewProps['style'];
  contentContainerStyle?: ViewProps['style'];
  rowStyle?: ViewProps['style'];
  cellStyle?: ViewProps['style'];
  headerCellStyle?: ViewProps['style'];
  cellTextStyle?: TextProps['style'];
  headerCellTextStyle?: TextProps['style'];
  separatorStyle?: ViewProps['style'];
};

const Table = ({
  data,
  containerStyle,
  cellStyle,
  headerCellStyle,
  cellTextStyle,
  headerCellTextStyle,
  contentContainerStyle,
  rowStyle,
  separatorStyle,
}: ITableProps) => {
  const { content, withHeadings } = data;

  const renderItem = useCallback(
    ({ item, index }: ListRenderItemInfo<string[]>) => (
      <View style={[styles.row, rowStyle]}>
        {item.map((cell, cellIndex) => (
          <View
            key={cellIndex}
            style={[
              styles.cell,
              cellStyle,
              index === 0 && withHeadings && styles.headerCell,
              index === 0 && withHeadings && headerCellStyle,
              cellIndex === 0 && styles.headerCell,
              index === 0 && cellIndex === 0 && withHeadings && headerCellStyle,
            ]}
          >
            <Text
              style={[
                styles.cellText,
                cellTextStyle,
                index === 0 && withHeadings && styles.headerCellText,
                index === 0 && withHeadings && headerCellTextStyle,
              ]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {cell}
            </Text>
          </View>
        ))}
      </View>
    ),
    [
      cellStyle,
      headerCellStyle,
      cellTextStyle,
      headerCellTextStyle,
      withHeadings,
      rowStyle,
    ]
  );

  return (
    <FlatList
      data={content}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
      style={[styles.container, containerStyle]}
      contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
      ItemSeparatorComponent={() => (
        <View style={[styles.separator, separatorStyle]} />
      )}
      scrollEnabled={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  contentContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#000',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    padding: 8,
    justifyContent: 'center',
    flex: 1,
  },
  headerCell: {
    backgroundColor: '#f5f5f5',
  },
  cellText: {
    fontSize: 14,
  },
  headerCellText: {
    fontWeight: 'bold',
  },
});

export default Table;
