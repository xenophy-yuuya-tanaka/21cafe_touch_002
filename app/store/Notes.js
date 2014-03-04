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
 * メモ帳内の各メモデータを保持するためのストアクラス
 */
Ext.define('App.store.Notes', {

    /**
     * ストアクラスの場合、特殊なことをしなければ
     * 基本継承するのはExt.data.Storeクラスになります
     */
    extend: 'Ext.data.Store',

    /**
     * このクラスで必要となるクラスがあった場合
     * このプロパティに各クラスのフルパスを記載
     * することで、このクラスが生成されるタイミングで
     * requiresプロパティに定義したクラスが
     * 読み込まれていなかったら、自動で読み込んでくれる
     */
    requires: [
        'App.model.Note'
    ],

    /**
     * コンフィグオプションと呼ばれるものは
     * configプロパティ内に定義を行う
     */
    config: {

        /**
         * このストアがインスタンス化されたタイミングで
         * 設定されたproxyを元に、データを取得する
         *
         * 良くアプリケーション初期表示時のストアで
         * このプロパティをtrueに設定せず、何も表示されない！
         * と言ってる人を見かけます
         */
        autoLoad: true,

        /**
         * このストアで利用するモデルクラス
         * 指定方法は、クラスのフルパスになります
         */
        model: 'App.model.Note',

        /**
         * 基本は設定する必要はありません
         *
         * MVC構造に基づいて(Ext.application)アプリケーションを
         * 構築している場合は、自動的にクラス名がIDとして利用
         * されますが、何らかの理由により単体で（Ext.onReady）
         * 利用するとなると、バインド設定を行っている各コンポーネントが
         * 動かなくなってしまうので、基本クラス名と同じものを
         * 設定しておくと安全です
         */
        storeId: 'Notes'
    },

    /**
     * メモリ上で保持している固定データ
     */
    data: [
        {text: 'TESTTEST', update: '2013/08/01 13:00'},
        {text: 'TESTTEST', update: '2013/08/02 13:00'},
        {text: 'TESTTEST', update: '2013/08/03 13:00'},
        {text: 'TESTTEST', update: '2013/08/01 13:00'},
        {text: 'TESTTEST', update: '2013/08/01 13:00'},
        {text: 'TESTTEST', update: '2013/08/01 13:00'},
        {text: 'TESTTEST', update: '2013/08/01 13:00'},
        {text: 'TESTTEST', update: '2013/08/01 13:00'},
        {text: 'TESTTEST', update: '2013/08/01 13:00'},
        {text: 'TESTTEST', update: '2013/08/01 13:00'},
        {text: 'TESTTEST', update: '2013/08/01 13:00'},
        {text: 'TESTTEST', update: '2013/08/01 13:00'},
        {text: 'TESTTEST', update: '2013/08/01 13:00'},
        {text: 'TESTTEST', update: '2013/08/01 13:00'},
        {text: 'TESTTEST', update: '2013/08/01 13:00'},
        {text: 'TESTTEST', update: '2013/08/01 13:00'},
        {text: 'TESTTEST', update: '2013/08/01 13:00'},
        {text: 'TESTTEST', update: '2013/08/01 13:00'},
        {text: 'TESTTEST', update: '2013/08/01 13:00'},
        {text: 'TESTTEST', update: '2013/08/01 13:00'},
        {text: 'TESTTEST', update: '2013/08/01 13:00'}
    ]
});
