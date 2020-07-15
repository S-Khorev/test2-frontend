import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('contact', 'Contacts');
inflector.irregular('phone', 'Phones');
inflector.irregular('type', 'Types');

export default {};
