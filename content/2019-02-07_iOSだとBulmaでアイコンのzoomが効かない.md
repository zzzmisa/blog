+++
date = "2019-02-07"
lastmod = "2019-02-07"
title = "Bulma使用時にiOSだとzoomプロパティがアイコンに効かない"
slug = "zoom"
tags = [
  "frontend",
  "bulma"
]
thumbnail = "images/zoom3.png"
toc = true
draft = false
+++

表題に関する調査ログです。

## 環境
* iPhone iOS v12.1.3 Safari
* Bulma v0.7.2

## 起こっていた問題

Bulmaを使っている時に、iOSだと、CSSの`zoom`プロパティがWebフォントのアイコンに効かない。  
一方、PCのChromeやSafari、AndroidのChromeで確認すると、きちんと反映されている。

## 調査
### 効かないのはアイコンだけ？

色々試してみたところ、`<i class="far fa-smile"></i>`のようにWebフォントを指定した時だけでなく、`<i>Hello</i>`のようにiタグに文字列を入れても効きませんでした。  
また、Webフォントを`<span class="far fa-smile"></span>`のようにspanタグに設定してみても効きませんでした。  
ですが、`<span>Hello</span>`とspanタグに文字列を入れた場合は効きます。  
状況によって、効く場合と効かない場合があるみたいです。

### 原因は？

結論から言うと、Bulmaで`<html>`に設定されていた、`-webkit-text-size-adjust: 100%;`が原因でした。  
webインスペクタで、該当プロパティを無効にしたら、きちんとズームされるようになりました。  
また、デフォルト値は`auto`のようだったので、Bulmaに設定されているプロパティを打ち消す形で、`-webkit-text-size-adjust: auto;`を追記することで、ズームを有効にすることもできました。

{{% img src="images/zoom1.png" w="400" h="187" caption="iOS 12.1.3 Safari" %}}
{{% img src="images/zoom2.png" w="401" h="179" caption="PC Chrome" %}}

これはiOS Safariのバグ？仕様？なのかしら。

* 今回のテストコードは[こちら](https://github.com/zzzmisa/playground/blob/master/bulma/zoom.html)


