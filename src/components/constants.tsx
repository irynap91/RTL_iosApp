import I18n from "../utils/i18n";

export const RTL = true;
export const MENU_IMG = 'https://www.irishtimes.com/polopoly_fs/1.3965995.1563979842!/image/image.jpg_gen/derivatives/landscape_620/image.jpg';
export const DISHES = [{
                                  id: 1,
                                  name: I18n.t("dish1"),
                                  descr: I18n.t("dish_descr"),
                                  img: require('../assets/img/dish1.jpg'),
                                  price: 45
                              }, {
                                  id: 2,
                                  name: I18n.t("dish2"),
                                  descr: I18n.t("dish_descr"),
                                  img: require('../assets/img/dish2.jpeg'),
                                  price: 68
                              }, {
                                  id: 3,
                                  name: I18n.t("dish3"),
                                  descr: I18n.t("dish_descr"),
                                  img: require('../assets/img/dish3.jpeg'),
                                  price: 15
                              }, {
                                  id: 4,
                                  name: I18n.t("dish4"),
                                  descr: I18n.t("dish_descr"),
                                  img: require('../assets/img/dish4.jpg'),
                                  price: 50
                              }, {
                                  id: 5,
                                  name: I18n.t("dish5"),
                                  descr: I18n.t("dish_descr"),
                                  img: require('../assets/img/dish5.jpg'),
                                  price: 25
                              }, {
                                  id: 6,
                                  name: I18n.t("dish6"),
                                  descr: I18n.t("dish_descr"),
                                  img: require('../assets/img/dish6.jpg'),
                                  price: 33
                              }, {
                                  id: 7,
                                  name: I18n.t("dish7"),
                                  descr: I18n.t("dish_descr"),
                                  img: require('../assets/img/dish7.jpg'),
                                  price: 39
                              }, {
                                  id: 8,
                                  name: I18n.t("dish8"),
                                  descr: I18n.t("dish_descr"),
                                  img: require('../assets/img/dish8.jpg'),
                                  price: 23
                              }, {
                                  id: 9,
                                  name: I18n.t("dish9"),
                                  descr: I18n.t("dish_descr"),
                                  img: require('../assets/img/dish9.jpeg'),
                                  price: 29
                              }, {
                                  id: 10,
                                  name: I18n.t("dish0"),
                                  descr: I18n.t("dish_descr"),
                                  img: require('../assets/img/dish10.jpg'),
                                  price: 40
                              }, {
                                  id: 11,
                                  name: I18n.t("dish11"),
                                  descr: I18n.t("dish_descr"),
                                  img: require('../assets/img/dish4.jpg'),
                                  price: 40
                              }]
export const MENU_SECTIONS = [{
                                    id: 1,
                                    name: 'Soups',
                                    descr: 'Soup tab',
                                    dishes: DISHES
                                }, {
                                    id: 2,
                                    name: 'Burgers',
                                    descr: 'Burger tab',
                                    dishes: DISHES
                                }, {
                                    id: 3,
                                    name: 'Main Dishes',
                                    descr: 'Main dish tab',
                                    dishes: DISHES
                                }, {
                                    id: 4,
                                    name: 'Salads',
                                    descr: 'Salad tab',
                                    dishes: DISHES
                                }, {
                                    id: 5,
                                    name: 'Starters',
                                    descr: 'Starter tab',
                                    dishes: DISHES
                                }, {
                                    id: 6,
                                    name: 'Drinks',
                                    descr: 'Drink tab',
                                    dishes: DISHES
                                }];
