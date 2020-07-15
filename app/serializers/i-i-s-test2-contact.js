import { Serializer as ContactSerializer } from
  '../mixins/regenerated/serializers/i-i-s-test2-contact';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ContactSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
