import {appSchema, tableSchema} from '@nozbe/watermelondb';

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'users',
      columns: [
        {name: 'name', type: 'string'},
        {name: 'pinyin_name', type: 'string', isOptional: true},
        {name: 'birthday', type: 'string'},
        {name: 'is_male', type: 'boolean'},
      ],
    }),
    tableSchema({
      name: 'comments',
      columns: [
        {name: 'body', type: 'string', isOptional: true},
        {name: 'user_id', type: 'string', isIndexed: true},
      ],
    }),
  ],
});
