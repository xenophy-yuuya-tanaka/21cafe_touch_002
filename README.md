# README STEP2

## 保持しているメモデータをMemory上からLocalStorageに変更する

現在`App.store.Notes`の`dataプロパティ`に直接定義をしてしまっているメモデータを、LocalStorageに変更します

### 変更するファイル

- app/store/Notes.js
- app/model/Note.js
- app/controller/Edit.js


#### app/store/Notes.js

データを保存する際に必要な固有の`id`用のフィールド定義を追加し

    fields: [
        {
            name: 'id',
            type: 'string'
        },
        ....
    ],

固定データを定義している`dataプロパティ`を削除します


#### app/model/Note.js

現在定義されている

    proxy: {
        type: 'memory'
    }

を

    proxy: {
        type: 'localstorage'
    }

に変更するだけ

#### app/controller/Edit.js

現在各メモデータでユニークなIDを持っていないので、新規メモデータ追加時にユニークなIDを与えてあげます

    onSave: function(val) {
        ...
        
        if (isNew) {
            record.set('id', Ext.String.format('memo{0}', Ext.Date.now()));
            store.add(record);
        }
        
        ...
    }

以上で、アプリケーションのLocalStorage対応は完了です。