import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-test2-contact-l');
  this.route('i-i-s-test2-contact-e',
  { path: 'i-i-s-test2-contact-e/:id' });
  this.route('i-i-s-test2-contact-e.new',
  { path: 'i-i-s-test2-contact-e/new' });
  this.route('i-i-s-test2-contact-type-l');
  this.route('i-i-s-test2-contact-type-e',
  { path: 'i-i-s-test2-contact-type-e/:id' });
  this.route('i-i-s-test2-contact-type-e.new',
  { path: 'i-i-s-test2-contact-type-e/new' });
  this.route('i-i-s-test2-phone-type-l');
  this.route('i-i-s-test2-phone-type-e',
  { path: 'i-i-s-test2-phone-type-e/:id' });
  this.route('i-i-s-test2-phone-type-e.new',
  { path: 'i-i-s-test2-phone-type-e/new' });
});

export default Router;
