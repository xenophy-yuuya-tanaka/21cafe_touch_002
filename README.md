# README STEP3

## Themeを変更してみよう！

現在デフォルトのThemeを利用していますが、Sencha Touchには現在8種類のThemeがあります

### 各Theme

- base
    - 全ての根幹となるベーステーマ  
      0からテーマを作成する場合は、このテーマを継承して作成していく
- default
    - Sencha Touchのデフォルトテーマ
- bb10
    - BlackBerry 10のテーマ
- cupertino
    - iOS7系テーマ
- cupertino-classic
    - iOS7以前のiOS系テーマ
- mountainview
    - Android系テーマ
- tizen
    - Tizen系テーマ
- windows
    - WindowsPhone系テーマ
    

## Themeの変更方法

Themeの変更を行うには次のファイルを編集します。

    
    resources/sass/app.scss
    
このファイルを見てみると、次のようになっているので

    // The following two lines import the default Sencha Touch theme. If you are building
    // a new theme, remove them and the add your own CSS on top of the base CSS (which
    // is already included in your app.json file).
    @import 'sencha-touch/default';
    @import 'sencha-touch/default/all';
    
    // Custom code goes here..
    
    // Examples of using the icon mixin:
    // @include icon('user');

4〜5行目の`import`を次のように変更します。

    // The following two lines import the default Sencha Touch theme. If you are building
    // a new theme, remove them and the add your own CSS on top of the base CSS (which
    // is already included in your app.json file).
    //@import 'sencha-touch/default';
    //@import 'sencha-touch/default/all';
    @import 'sencha-touch/cupertino';
    @import 'sencha-touch/cupertino/all';
    
    // Custom code goes here..
    
    // Examples of using the icon mixin:
    // @include icon('user');
    
編集し終わったらcompassでコンパイルを行うか、sencha cmdでアプリケーションのビルドをしましょう！

### Compassでコンパイルする場合

    cd resources/sass
    compass compile
    
### Sencha Cmdでビルドを行う場合

    sencha app build
    
    
コンパイルもしくはビルドが完了したら、アプリケーションを表示させてみましょう！  
自分が設定したThemeが適応されているはずです！:)