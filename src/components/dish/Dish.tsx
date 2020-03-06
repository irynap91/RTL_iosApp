import React, {FunctionComponent} from 'react';
import {View, Text, Image, I18nManager, TouchableOpacity } from 'react-native';

import {styles} from './styles';

type Props = {
  img: string,
  dish: string,
  descr: string,
  price: number
}

export const Dish: FunctionComponent<Props> = ({img, dish, descr, price}) => {
    return (
        <TouchableOpacity style={styles.dish}>
            <View style={styles.dish_content}>
                <Image style={styles.dish_img} source={img}/>
                <View style={styles.dish_text}>
                    <Text style={{writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr'}}>{dish}</Text>
                    <Text style={{writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr'}}>{descr}</Text>
                </View>
            </View>
            <Text style={styles.dish_price}>{price}</Text>
        </TouchableOpacity>
    )
}
