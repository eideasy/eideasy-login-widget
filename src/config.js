import viewNames from './views/viewNames';
import {iconNames} from './icons/icons';

export const allMethods = Object.freeze({
  mobileId: {
    name: 'mobileId',
    viewName: viewNames.MobileIdAuth,
    iconName: iconNames.IconMobileId,
    titleTranslationKey: 'mobileIdViewTitle',
  },
  smartId: {
    name: 'smartId',
    viewName: viewNames.SmartIdAuth,
    iconName: iconNames.IconSmartId,
    titleTranslationKey: 'smartIdViewTitle',
  },
  idCard: {
    name: 'idCard',
    viewName: viewNames.MobileIdAuth,
    iconName: iconNames.IconIdCard,
    titleTranslationKey: 'mobileIdViewTitle',
  },
})

export const enabledMethodsByCountry = {
  EE: [
    allMethods.mobileId,
    allMethods.smartId,
    allMethods.idCard,
  ],
  LV: [
    allMethods.mobileId,
    allMethods.smartId,
    allMethods.idCard,
  ],
  LT: [
    allMethods.mobileId,
    allMethods.smartId,
    allMethods.idCard,
  ]
}

export const availableCountries = Object.keys(enabledMethodsByCountry);
