import {StyleSheet, Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    mainView: {
      backgroundColor: '#f6faff',
      width: deviceWidth,
      height: deviceHeight,
      padding: 25,
      display: 'flex',
      flexDirection: 'column',
    },
    app_name: {
      fontSize: 24,
      fontWeight: '700'
    },
    topBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#ebeef6',
        borderBottomWidth: 1,
        paddingBottom: 10
    },
    menu_img: {
      width: 100,
      height: 100,
      borderRadius: 10,
      marginHorizontal: 10
    },
    menu: {
        display: 'flex',
        flexShrink:1,
},
    menu_descr: {
      fontSize: 14,
      color: '#878891'
    },
    menu_title: {
      fontSize: 18,
      paddingBottom: 10,

    },
    location: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    location_icon: {
      color: '#62a9ce'
    },
    location_city: {
      color: '#878891',
      fontSize: 14,
      padding: 5
    },
    menuSection: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
      marginBottom: 10
    },
    dish_list: {
      display: 'flex',
      flexDirection: 'column'
    },
    bottom_bar: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: deviceWidth < 400 ? 100 : 150,
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#FFFFFF',
      width: '100%',
      justifyContent:'space-around',
      paddingTop: 20,
      paddingHorizontal: 20,
      borderTopColor: '#ebeef6',
      borderRadius: 5,
      shadowColor: 'rgba(0, 39, 75, 0.14)',
      shadowOffset: { width: 4, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 5,
    },
    bottom_bar_button: {
      backgroundColor: '#62a9ce',
      height: 50,
      width: 150,
      display: 'flex',
      alignContent: 'center',
      justifyContent:'center'
    },
    bottom_bar_button_text: {
      fontSize: 14,
      color: '#FFFFFF'
    },
    bottom_bar_devider: {
      borderLeftWidth: 1,
      borderLeftColor: '#ebeef6',
      height: 50
    },
    bottom_bar_price: {
      fontSize: 25,
      fontWeight: '700'
    },
    bottom_bar_descr: {
      fontSize: 16,
      color: '#878891'
    },
    menu_main: {
      height: 500,
      paddingBottom: 40
    }
  });
