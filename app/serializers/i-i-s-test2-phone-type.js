import { Serializer as PhoneTypeSerializer } from
  '../mixins/regenerated/serializers/i-i-s-test2-phone-type';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(PhoneTypeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
