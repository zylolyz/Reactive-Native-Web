import {Model} from '@nozbe/watermelondb';
import {field, text, children, lazy} from '@nozbe/watermelondb/decorators';

import {Q} from '@nozbe/watermelondb';

export default class User extends Model {
  static table = 'users';
  static associations = {
    comments: {type: 'has_many', foreignKey: 'user_id'},
  };

  @text('name') name;
  @text('birthday') birthday;
  @field('pinyin_name') pinyinName;
  @field('is_male') isMale;

  get isMale() {
    // in the last 7 days
    return this.isMale ? '男' : '女';
  }

  @children('comments') comments;
  @lazy commentsHaveContent = this.comments.extend(
    Q.where('body', Q.notEq(null)),
  );
}
