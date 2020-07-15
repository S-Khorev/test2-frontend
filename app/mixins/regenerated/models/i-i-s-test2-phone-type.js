import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  typeName: DS.attr('string')
});

export let ValidationRules = {
  typeName: {
    descriptionKey: 'models.i-i-s-test2-phone-type.validations.typeName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('PhoneTypeE', 'i-i-s-test2-phone-type', {
    typeName: attr('Type name', { index: 0 })
  });

  modelClass.defineProjection('PhoneTypeL', 'i-i-s-test2-phone-type', {
    typeName: attr('Type name', { index: 0 })
  });
};
