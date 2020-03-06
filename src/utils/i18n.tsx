import {I18nManager} from 'react-native';
import I18n from 'react-native-i18n';

import ar from "../components/localization/ar";

I18n.defaultLocale = 'ar'
I18n.fallbacks = true;
I18n.translations = {
    ar
};

I18nManager.allowRTL(I18n.locale in I18n.translations === 'ar');

I18n.start  = I18nManager.isRTL ? 'right' : 'left';
I18n.end    = I18nManager.isRTL ? 'left' : 'right';

export default I18n;
