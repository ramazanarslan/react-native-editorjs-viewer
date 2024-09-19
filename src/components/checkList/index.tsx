import { View, Text, StyleSheet, FlatList } from 'react-native';
import type { ViewProps, TextProps } from 'react-native';

type CheckListItem = {
  text: string;
  checked: boolean;
};

export type ICheckListProps = {
  data: {
    items: CheckListItem[];
  };
  containerStyle?: ViewProps['style'];
  itemContainerStyle?: ViewProps['style'];
  textStyle?: TextProps['style'];
  checkboxStyle?: ViewProps['style'];
  checkboxCheckedStyle?: ViewProps['style'];
  checkboxUncheckedStyle?: ViewProps['style'];
};

const CustomCheckbox = ({
  checked,
  style,
  checkedStyle,
  uncheckedStyle,
}: {
  checked: boolean;
  style?: ViewProps['style'];
  checkedStyle?: ViewProps['style'];
  uncheckedStyle?: ViewProps['style'];
}) => (
  <View
    style={[styles.checkbox, style, checked ? checkedStyle : uncheckedStyle]}
  >
    {checked && <View style={styles.checkmark} />}
  </View>
);

const CheckList = ({
  data,
  containerStyle,
  itemContainerStyle,
  textStyle,
  checkboxStyle,
  checkboxCheckedStyle,
  checkboxUncheckedStyle,
}: ICheckListProps) => {
  const renderItem = ({ item }: { item: CheckListItem }) => (
    <View style={[styles.itemContainer, itemContainerStyle]}>
      <CustomCheckbox
        checked={item.checked}
        style={checkboxStyle}
        checkedStyle={checkboxCheckedStyle}
        uncheckedStyle={checkboxUncheckedStyle}
      />
      <Text style={[styles.itemText, textStyle]}>{item.text}</Text>
    </View>
  );

  return (
    <FlatList
      data={data.items}
      scrollEnabled={false}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
      style={[styles.container, containerStyle]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#000',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#000',
  },
  itemText: {
    fontSize: 16,
    flex: 1,
  },
});

export default CheckList;
