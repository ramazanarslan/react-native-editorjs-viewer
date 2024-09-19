import { useCallback } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import type { ViewProps, TextProps, ListRenderItemInfo } from 'react-native';

export type ITableProps = {
  data: {
    content: string[][];
    withHeadings: boolean;
  };
  containerStyle?: ViewProps['style'];
  rowStyle?: ViewProps['style'];
  cellStyle?: ViewProps['style'];
  headerCellStyle?: ViewProps['style'];
  cellTextStyle?: TextProps['style'];
  headerCellTextStyle?: TextProps['style'];
};

const Table = ({
  data,
  containerStyle,
  cellStyle,
  headerCellStyle,
  cellTextStyle,
  headerCellTextStyle,
}: ITableProps) => {
  const { content, withHeadings } = data;

  const renderItem = useCallback(
    ({ item, index }: ListRenderItemInfo<string[]>) => (
      <View style={styles.row}>
        {item.map((cell, cellIndex) => (
          <View
            key={cellIndex}
            style={[
              styles.cell,
              cellStyle,
              index === 0 && withHeadings && styles.headerCell,
              index === 0 && withHeadings && headerCellStyle,
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
    ]
  );

  return (
    <FlatList
      data={content}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
      style={[styles.container, containerStyle]}
      scrollEnabled={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
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
