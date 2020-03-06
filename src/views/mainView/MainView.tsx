import React, { FunctionComponent } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, I18nManager } from 'react-native';
import { Button, Icon} from 'native-base';

import {styles} from './styles';
import {MENU_IMG, MENU_SECTIONS, DISHES} from '../../components/constants';
import {Dish} from '../../components/dish/Dish';
import I18n from "../../utils/i18n";
import {TabBar} from '../../components/tabBar/TabBar'

type MainViewProps = {}

export const MainView: FunctionComponent<MainViewProps> = ({ }) => {

return (
  <View>
    <View style={styles.mainView}>
            <View style={styles.topBar}>
                <TouchableOpacity>
                    <Icon name='ios-arrow-forward'/>
                </TouchableOpacity>
                <Text style={styles.app_name}>{I18n.t("appName")}</Text>
                <TouchableOpacity>
                    <Icon name='md-menu'/>
                </TouchableOpacity>
            </View>
            <View style={styles.menuSection}>
                <View style={styles.menu}>
                    <Text style={{...styles.menu_title, writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr'}}>{I18n.t("menu")}</Text>
                    <Text style={{...styles.menu_descr, writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr'}}>{I18n.t("menu_description")}</Text>
                </View>
                <Image style={styles.menu_img} source={{uri: MENU_IMG}}/>
            </View>
            <View>
              <TouchableOpacity style={styles.location}>
                      <Icon style={styles.location_icon} name='ios-pin'/>
                      <Text style={styles.location_city}>{I18n.t("city")}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.menu_main}>
              <TabBar/>
            </View>
        </View>
        <View style={styles.bottom_bar}>
            <View>
              <Text style={{...styles.bottom_bar_descr, writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr'}}>Lorem ipsum</Text>
              <Text style={{...styles.bottom_bar_price, writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr'}}>1200</Text>
            </View>
            <View style={styles.bottom_bar_devider}></View>
            <TouchableOpacity >
                <Button style={styles.bottom_bar_button}><Text style={styles.bottom_bar_button_text}>Some Btn</Text></Button>
            </TouchableOpacity>
        </View>
    </View>
  )
}
