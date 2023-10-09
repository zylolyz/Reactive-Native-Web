import {Model} from '@nozbe/watermelondb';
import {field, relation} from '@nozbe/watermelondb/decorators';

export default class Comment extends Model {
  static table = 'comments';
  static associations = {
    users: {type: 'belongs_to', key: 'user_id'},
  };

  @field('body') body;
  @relation('users', 'user_id') post;
}
