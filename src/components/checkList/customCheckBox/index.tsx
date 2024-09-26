import { StyleSheet, View, type ViewProps } from 'react-native';

type ICustomCheckboxProps = {
  checked: boolean;
  style?: ViewProps['style'];
  checkedStyle?: ViewProps['style'];
  uncheckedStyle?: ViewProps['style'];
};

const CustomCheckbox = ({
  checked,
  style,
  checkedStyle,
  uncheckedStyle,
}: ICustomCheckboxProps) => (
  <View
    style={[styles.checkbox, style, checked ? checkedStyle : uncheckedStyle]}
  >
    {checked && <View style={styles.checkmark} />}
  </View>
);

const styles = StyleSheet.create({
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
});

export default CustomCheckbox;
