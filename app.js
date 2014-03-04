/**
 * アプリケーションの起動ポイントとなるファイル
 * ここからアプリが起動し、このアプリに必要なリソースの
 * 読み込み／起動時処理などを行う
 */
Ext.application({

    /**
     * アプリケーションの名前空間
     */
    name: 'App',

    /**
     * アプリケーションで必要となるクラスがあった場合
     * このプロパティに各クラスのフルパスを記載
     * することで、アプリケーションが起動するタイミングで
     * requiresプロパティに定義したクラスが
     * 読み込まれていなかったら、自動で読み込んでくれる
     */
    requires: [
        'Ext.MessageBox'
    ],

    /**
     * アプリケーションで利用するViewコンポーネントを
     * 定義するためのプロパティ
     *
     * requiresとは違い、クラスのフルパスではなく純粋な
     * クラス名のみを定義すれば良い
     *
     * 例：App.view.Main -> Main
     *
     * また、一覧・編集画面についてはMainクラス内で
     * 読み込んでいるため、ここで定義を行う必要はない
     */
    views: [
        'Main' // App.view.Main
    ],

    /**
     * アプリケーションで利用するStoreクラスを
     * 定義するためのプロパティ
     *
     * requiresとは違い、クラスのフルパスではなく純粋な
     * クラス名のみを定義すれば良い
     *
     * 例：App.store.Notes -> Notes
     */
    stores: [
        'Notes' // App.store.Notes
    ],

    /**
     * アプリケーションで利用するcontrollerクラスを
     * 定義するためのプロパティ
     *
     * requiresとは違い、クラスのフルパスではなく純粋な
     * クラス名のみを定義すれば良い
     *
     * 例：App.controller.Main -> Main
     */
    controllers: [
        'Main', // App.controller.Main
        'Edit'  // App.controller.Edit
    ],

    /**
     * アプリケーションをホーム画面等に登録した際に
     * 利用されるアイコン画像
     */
    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    /**
     * アプリケーションをホーム画面等に登録した際に
     * 利用されるアイコンの光沢の有無
     */
    isIconPrecomposed: true,

    /**
     * ホーム画面に登録したアプリケーションを起動した際に
     * 表示させることが出来るスプラッシュスクリーンの設定
     */
    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    /**
     * アプリケーション起動準備が完了して最初に実行されるメソッド
     */
    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('App.view.Main'));
    },

    /**
     * PRODUCTIONビルドを行った際のmanifestファイルに更新が入ると
     * 実行されるメソッド
     */
    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
