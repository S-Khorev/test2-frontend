import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  firName: DS.attr('string'),
  surName: DS.attr('string'),
  secName: DS.attr('string'),
  contactType: DS.belongsTo('i-i-s-test2-contact-type', { inverse: null, async: false }),
  phone: DS.hasMany('i-i-s-test2-phone', { inverse: 'contact', async: false })
});

export let ValidationRules = {
  firName: {
    descriptionKey: 'models.i-i-s-test2-contact.validations.firName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  surName: {
    descriptionKey: 'models.i-i-s-test2-contact.validations.surName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  secName: {
    descriptionKey: 'models.i-i-s-test2-contact.validations.secName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  contactType: {
    descriptionKey: 'models.i-i-s-test2-contact.validations.contactType.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  phone: {
    descriptionKey: 'models.i-i-s-test2-contact.validations.phone.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ContactE', 'i-i-s-test2-contact', {
    firName: attr('Fir name', { index: 0 }),
    surName: attr('Sur name', { index: 1 }),
    secName: attr('Sec name', { index: 2 }),
    contactType: belongsTo('i-i-s-test2-contact-type', 'Contact type', {
      typeName: attr('Type name', { index: 4 })
    }, { index: 3 }),
    phone: hasMany('i-i-s-test2-phone', 'Phone', {
      number: attr('Number', { index: 0 }),
      phoneType: belongsTo('i-i-s-test2-phone-type', 'Phone type', {
        typeName: attr('Type name', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'typeName' })
    })
  });

  modelClass.defineProjection('ContactL', 'i-i-s-test2-contact', {
    firName: attr('Fir name', { index: 0 }),
    surName: attr('Sur name', { index: 1 }),
    secName: attr('Sec name', { index: 2 }),
    contactType: belongsTo('i-i-s-test2-contact-type', 'Type name', {
      typeName: attr('Type name', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
