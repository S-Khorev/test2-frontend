import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  number: DS.attr('string'),
  phoneType: DS.belongsTo('i-i-s-test2-phone-type', { inverse: null, async: false }),
  contact: DS.belongsTo('i-i-s-test2-contact', { inverse: 'phone', async: false })
});

export let ValidationRules = {
  number: {
    descriptionKey: 'models.i-i-s-test2-phone.validations.number.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  phoneType: {
    descriptionKey: 'models.i-i-s-test2-phone.validations.phoneType.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  contact: {
    descriptionKey: 'models.i-i-s-test2-phone.validations.contact.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('PhoneE', 'i-i-s-test2-phone', {
    number: attr('Number', { index: 0 }),
    phoneType: belongsTo('i-i-s-test2-phone-type', 'Phone type', {
      typeName: attr('Type name', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'typeName' })
  });
};
