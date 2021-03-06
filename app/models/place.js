import Model, { attr, hasMany } from '@ember-data/model';
import { validator, buildValidations } from 'ember-cp-validations';
import { filterBy } from '@ember/object/computed';

const Validations = buildValidations({
  name: validator('presence', true),
  rent: validator('presence', true)
})

export default class Place extends Model.extend(Validations) {
  @attr('string') name
  @attr('number') rent

  @hasMany('user') users
  @hasMany('bill') bills
  @hasMany('payment') payments

  @filterBy('users', 'payer', false)
  dwellers
}
