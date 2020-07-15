import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISTest2ContactLForm from './forms/i-i-s-test2-contact-l';
import IISTest2ContactTypeLForm from './forms/i-i-s-test2-contact-type-l';
import IISTest2PhoneTypeLForm from './forms/i-i-s-test2-phone-type-l';
import IISTest2ContactEForm from './forms/i-i-s-test2-contact-e';
import IISTest2ContactTypeEForm from './forms/i-i-s-test2-contact-type-e';
import IISTest2PhoneTypeEForm from './forms/i-i-s-test2-phone-type-e';
import IISTest2ContactTypeModel from './models/i-i-s-test2-contact-type';
import IISTest2ContactModel from './models/i-i-s-test2-contact';
import IISTest2PhoneTypeModel from './models/i-i-s-test2-phone-type';
import IISTest2PhoneModel from './models/i-i-s-test2-phone';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test2-contact-type': IISTest2ContactTypeModel,
    'i-i-s-test2-contact': IISTest2ContactModel,
    'i-i-s-test2-phone-type': IISTest2PhoneTypeModel,
    'i-i-s-test2-phone': IISTest2PhoneModel
  },

  'application-name': 'Test project',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Test project',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test project',
          title: 'Test project'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'test-project': {
          caption: 'TestProject',
          title: 'TestProject',
          'i-i-s-test2-contact-type-l': {
            caption: 'Contact type',
            title: ''
          },
          'i-i-s-test2-phone-type-l': {
            caption: 'Phone type',
            title: ''
          },
          'i-i-s-test2-contact-l': {
            caption: 'Contact',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-test2-contact-l': IISTest2ContactLForm,
    'i-i-s-test2-contact-type-l': IISTest2ContactTypeLForm,
    'i-i-s-test2-phone-type-l': IISTest2PhoneTypeLForm,
    'i-i-s-test2-contact-e': IISTest2ContactEForm,
    'i-i-s-test2-contact-type-e': IISTest2ContactTypeEForm,
    'i-i-s-test2-phone-type-e': IISTest2PhoneTypeEForm
  },

});

export default translations;
