/**
 * Ext.defineは、Senchaフレームワークにおけるクラス定義用の
 * メソッドになります
 *
 * 第1引数：クラス名
 * 第2引数：コンフィグオブジェクト
 *
 * 第1引数にクラス名を定義し、独自プロパティおよびメソッドや
 * 既存クラスのプロパティの上書きなどは、第2引数のコンフィグ
 * プロパティに定義を行っていきます。
 *
 * 編集画面（App.view.Edit）のコントローラー
 */
Ext.define('App.controller.Edit', {

    /**
     * コントローラーも原則 Ext.app.Controller を継承します
     * ただ、コントローラーの場合良く共通処理などを基底クラスに
     * まとめることが多々あります。
     *
     * 例：App.controller.Abstractなど
     */
    extend: 'Ext.app.Controller',

    /**
     * コンフィグオプションと呼ばれるものは
     * configプロパティ内に定義を行う
     *
     * controllerのconfigプロパティには次に紹介する
     * 少し特殊なプロパティが存在します
     */
    config: {
        /**
         * 指定したコンポーネントを取得するためのgetterを
         * 自動生成してくれるrefsプロパティ
         *
         * key：getter生成時に利用される文字
         * value: コンポーネントを取得するためのComponentQuery式
         *
         * ComponentQuery式については、リファレンスを参照
         *
         * 例：
         *  - refs定義
         *    - main: '.app-main'
         *  
         *  - 生成されるgetter
         *    - getMain() // 実行するとアプリケーション上のxtype: 'app-main'
         *                   コンポーネントを取得することが出来る
         */
        refs: {
            main: '.app-main',
            edit: '.app-edit'
        },
        /**
         * コンポーネントを指定し、更にネストしたオブジェクトリテラル内で
         * 指定したコンポーネントに対してのイベントバインディングを行える
         *
         * 例：
         *  - control定義
         *  '.app-list': {
         *      'select': 'onSelect'
         *  }
         *
         *  xtype: 'app-list'コンポーネントが発火したイベントをキャッチし
         *  このコントローラのonSelectメソッドを実行する
         */
        control: {
            '.app-edit': {
                'app-memo-save': 'onSave'
            },
            /**
             * 通常のxtypeのみの指定ではなく、App.view.ListおよびApp.view.Edit
             * コンポーネント内のボタンに設定していたactionプロパティを利用して
             * イベントバインディングの絞りを行う事が可能
             */
            '.app-edit button[action=back]': {
                'tap': 'onBack'
            }
        }
    },

    /**
     * app-editコンポーネント内のactionにbackが設定されている
     * ボタンコンポーネントのタップイベントが起きた際の処理
     *
     * メモ帳一覧へ戻る
     */
    onBack: function() {
        var me = this,
            view = me.getMain();

        /**
         * App.view.Mainはcardレイアウトに設定されているので
         * setActiveItemメソッドを利用して、表示する画面を切り替えます
         */
        view.setActiveItem(0);
    },

    /**
     * app-editで発火している独自イベント
     * - イベント名：app-memo-save
     * が発火された際に実行される処理
     *
     * メモデータを保存する
     */
    onSave: function(val) {
        var me = this,
            // アプリケーションに登録されているストア（ここではNotesストア）
            // を取得する - Ext.getStore(ストア名)
            store = Ext.getStore('Notes'),
            edit = me.getEdit(),
            // Formに設定されているレコードを取得する
            record = edit.getRecord(),
            // 設定されているレコードが新規レコードかチェック
            isNew = Ext.isEmpty(record.get('update'));

        console.log(record.data);

        /**
         * 独自イベントから渡されたフォームの入力データの
         * updateプロパティを更新
         */
        val.update = Ext.Date.format(new Date(), 'Y/m/d H:m');
        /**
         * フォームに設定されているレコードに、フォームの
         * 入力データを反映
         *
         * 既存メモデータであれば、setメソッドを実行した時点で
         * ストア内のレコードが更新され、メモ一覧の表示にも反映される
         */
        record.set(val);

        /**
         * 新規メモデータの場合は、まだストア内にレコードがないため
         * ストアのaddメソッドを利用して、ストア内に新規レコードを追加する
         */
        if (isNew) {
            store.add(record);
        }

        /**
         * 現在proxyのタイプはmemoryなので意味はないが、実際にバックエンドと
         * 繋ぎ込みを行った場合、追加・編集・削除などをバックエンドに通知する
         * ためにsyncメソッドを利用する
         */
        store.sync();

        // 一覧画面へ戻るためonBackメソッドを実行
        me.onBack();
    }

});
