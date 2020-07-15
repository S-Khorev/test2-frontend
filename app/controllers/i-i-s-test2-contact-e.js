import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-test2-contact-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-test2-phone+phoneType':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'typeName',
            required: true,
            relationName: 'phoneType',
            projection: 'PhoneTypeL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
