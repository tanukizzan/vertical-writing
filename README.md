# 縦書き巻物風デザイン

mainタグの間に中身を書くことで縦書きになります。

normalize.cssとjQuery、jquery-mousewheelを使用しています。

また`vertical-writing.js`は、[こちらのサイト](https://www.webopixel.net/javascript/421.html)を参照して作成しました。

デモページ：https://app.tanukizzan.com/vertical-writing/

## 使い方

### CDN

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/tanukizzan/vertical-writing@master/vertical-writing.css">

<!-- Windowsにおいてマウスホイールでスクロールできるようにするスクリプト -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery-mousewheel@3.1.13/jquery.mousewheel.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/tanukizzan/vertical-writing@master/vertical-writing.js"></script>
```

### ローカルファイル

`vertical-writing.css`と`vertical-writing.js`をコピーしてお使いください。

## 文章中に使えるクラス

### .upright

英数字を縦に表示します。

### .upright2

2文字以上の英数字を1文字の幅に収めるように表示します。  
（2文字以上収めることもできますが、極端に細くなるので2文字までがおすすめです）

### .underline

文字の右横に線を表示します。
（Safariだと左になります）

### .overline

文字の左横に線を表示します。
（Safariだと右になります）

### .linethrough

文字を取り消すように中央に線を表示します。

## 注意事項

現在スマートフォンやタブレットのブラウザでは正常に表示できない場合があります。またSafariではアンダーライン等の表示が他ブラウザと異なります。

ブラウザによって挙動が異なるため、確認しながらご利用ください。

またアップデートによってデザインが変わる場合があります。使用される際は十分注意してください。

## ライセンス

[MIT License](https://github.com/tanukizzan/vertical-writing/blob/master/LICENSE)です。