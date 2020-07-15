import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'test-project': {
          caption: 'test-project',
          title: 'test-project',
          'i-i-s-test2-contact-type-l': {
            caption: 'i-i-s-test2-contact-type-l',
            title: 'i-i-s-test2-contact-type-l'
          },
          'i-i-s-test2-phone-type-l': {
            caption: 'i-i-s-test2-phone-type-l',
            title: 'i-i-s-test2-phone-type-l'
          },
          'i-i-s-test2-contact-l': {
            caption: 'i-i-s-test2-contact-l',
            title: 'i-i-s-test2-contact-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
