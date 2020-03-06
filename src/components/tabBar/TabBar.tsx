import React, { FunctionComponent, useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';

import {MENU_SECTIONS} from '../../components/constants';
import {Dish} from '../dish/Dish';
import {styles} from './styles';

type Props = {}

export const TabBar: FunctionComponent<Props> = ({}) => {

  const [menuTab, setMenuTab] = useState(MENU_SECTIONS[0].descr);

  const renderTabs = () => {
    return MENU_SECTIONS.map(tab => {
      return <TouchableOpacity
                key = {tab.id}
                onPress={() => selectTab(tab)}
                style={{...styles.tab_wrap, borderBottomWidth: tab.descr === menuTab ? 1 : 0}}
                >
                  <Text style={{...styles.tab, color: tab.descr === menuTab ? '#62a9ce' : '#878891'}}>{tab.name}</Text>
              </TouchableOpacity>
    })
  }

  const renderDishes = (dishes:Array<object>) => {
    return dishes.map(dish => {
      return <Dish key={dish.id} dish = {dish.name} descr={dish.descr} img={dish.img} price={dish.price}/>
    })
  }

  const [dishes, setDishes] = useState(renderDishes(MENU_SECTIONS[0].dishes))

  const selectTab = (tab) => {
    setMenuTab(tab.descr);
    setDishes(renderDishes(tab.dishes));
  }

return (
  <View>
    <ScrollView horizontal style={styles.tabBar}>
        {renderTabs()}
    </ScrollView>
    <Text style={styles.tab_name}>{menuTab}</Text>
    <ScrollView>{dishes}</ScrollView>
  </View>
  )
}
