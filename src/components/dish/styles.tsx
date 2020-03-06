import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    dish_img: {
        borderRadius: 10,
        width: 75,
        height: 75,
        marginRight: 15
    },
    dish: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#ebeef6',
        borderBottomWidth: 1,
        paddingTop: 15,
        paddingBottom: 10
    },
    dish_content: {
        display: 'flex',
        flexDirection: 'row',
    },
    dish_text: {
      display: 'flex',
      alignSelf: 'center'
    },
    dish_price: {
      display: 'flex',
      alignSelf: 'center'
    }
  });
