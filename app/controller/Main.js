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
 * 一覧と編集画面を内包するMainコンポーネントのコントローラー
 */
Ext.define('App.controller.Main', {

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
            '.app-list': {
                'select': 'onSelect'
            },
            /**
             * 通常のxtypeのみの指定ではなく、App.view.ListおよびApp.view.Edit
             * コンポーネント内のボタンに設定していたactionプロパティを利用して
             * イベントバインディングの絞りを行う事が可能
             */
            '.app-list button[action=new]': {
                'tap': 'onAdd'
            }
        }
    },

    /**
     * app-listコンポーネント内のactionにnewが設定されている
     * ボタンコンポーネントのタップイベントが起きた際の処理
     *
     * メモ帳の新規追加
     */
    onAdd: function() {
        var me    = this,
            // 新規追加なので、空のメモデータを作成します
            model = Ext.create('App.model.Note'),
            // refsで定義したgetterを利用
            view  = me.getMain(),
            edit  = me.getEdit();

        /**
         * 編集画面のフォームコンポーネントに空のメモデータを
         * 読み込ませます
         */
        edit.setRecord(model);
        /**
         * App.view.Mainはcardレイアウトに設定されているので
         * setActiveItemメソッドを利用して、表示する画面を切り替えます
         */
        view.setActiveItem(1); // 引数はインデックス
    },

    /**
     * app-listコンポーネントの一覧が選択された際の処理
     * 各イベント発火時の引数はAPIリファレンスを参照するか
     * console.log(arguments)などで渡ってきている値を確認します
     *
     * メモ帳の既存データの編集
     */
    onSelect: function(comp, record) {
        var me   = this,
            view = me.getMain(),
            edit = me.getEdit();

        /**
         * 編集画面のフォームコンポーネントに既存のメモデータを
         * 読み込ませます
         */
        edit.setRecord(record);
        /**
         * App.view.Mainはcardレイアウトに設定されているので
         * setActiveItemメソッドを利用して、表示する画面を切り替えます
         */
        view.setActiveItem(1);
    }

});
