+++
date = "2017-12-02"
lastmod = "2017-12-02"
title = "HUGO のテーマ Robust のカスタマイズver3"
slug = "customize_hugo_theme3"
tags = [
  "hugo"
]
thumbnail = "images/logo_hugo.png"
toc = true
draft = false
+++

※この記事では、~~2017年12月2日~~2019年1月12日時点でダウンロードした hugo_theme_robustを使用しています。

【2019年1月12日追記】  
2019年1月12日時点のhugo_theme_robustにアップデートしました。  
（HUGOの対応バージョンがv0.20.2からv0.42.2に上がっているので、HUGOのバージョンアップも必要）。  
Youtubeショートコードの追加を追記しました。

---

このブログは、静的サイトジェネレータ [HUGO](http://gohugo.io/) 
で作っていて、 [Robust](https://github.com/dim0627/hugo_theme_robust/)
 というテーマをちょっぴりカスタマイズして使用してます。  
この記事はカスタマイズ内容のメモです。

## config.toml
`config.toml`でbaseurl、title、googleAnalyticsを設定します。他はデフォルトのままです。

## アイキャッチのデフォルト画像の変更
任意の画像を用意して`static/images/default.jpg`を作成します。

## Authorの設定
hugo_theme_robustは9月にAuthorが設定できるようになったみたいです。やったー！  
これまで自分でサイドバーにプロフィール画像を追加していましたが、今回はhugo_theme_robustのAuthor機能を使って表示してみます。

その前に、SNS表示がfacebookとtwitterとgithubにしか対応していないみたいです。
私はメールも追加したいので、少しカスタマイズしておきます。

`themes/hugo_theme_robust/layouts/partials/author.html`を`layouts/partials/author.html`にコピーし、`<ul class="author-facts">`の中に以下のコードを追加します。

```
{{ with .mail }}<li><a href="{{ . }}" rel="nofollow" target="_blank"><i class="fa fa-envelope-o" aria-hidden="true"></i></a></li>{{ end }}
```

`fa-envelope-o`はメールのアイコンを表しています。  
他のアイコンを使いたい場合は[Font Awesome](http://fontawesome.io/icons/)から探すことができます。
私は後でTumblrやSkypeを追加しても良いなあと思っています。

後は`config.toml`の`[params.author]`を設定するだけです！

```
[params.author]
  thumbnail = "images/author.jpg"
  name = "ミサ"
  description = "xxxx。</p>"
  twitter = "xxxx"
  mail = "xxxx"
```

{{% img src="images/customize_hugo_theme31.png" w="500" h="379" %}}


## LATESTの削除
中身は空で、`layouts/partials/latests.html`ファイルを作成しておきます。  

## 更新日の表示

投稿日（`Date`）はカレンダーアイコンで、更新日（`Lastmod`)はリフレッシュアイコンで別々に表示するようにしました。  
記事のFront Matterで`Date`と`Lastmod`をそれぞれ設定すると反映されます。

{{% img src="images/customize_hugo_theme32.png" w="500" h="379" %}}

`themes/hugo_theme_robust/layouts/_default/summary.html`を`layouts/_default/summary.html`にコピーして、以下のように修正。

``` 
$ diff themes/hugo_theme_robust/layouts/_default/summary.html layouts/_default/summary.html
9c9,11
<       <li><i class="fa fa-calendar" aria-hidden="true"></i><time datetime="{{ .Lastmod.Format "2006-01-02T15:04:05JST" }}">{{ .Lastmod.Format ( .Site.Params.dateformat | default "Jan 2, 2006") }}</time></li>
---
> 	  <li><i class="fa fa-calendar" aria-hidden="true"></i><time datetime="{{ .Date.Format "2006-01-02T15:04:05JST" }}">{{ .Date.Format ( .Site.Params.dateformat | default "Jan 2, 2006") }}</time></li>
>       <li><i class="fa fa-refresh" aria-hidden="true"></i><time datetime="{{ .Lastmod.Format "2006-01-02T15:04:05JST" }}">{{ .Lastmod.Format ( .Site.Params.dateformat | default "Jan 2, 2006") }}</time></li>
> 		
```

## Google Adsenseの追加

まずは、普通のページ用の広告を設定します。

更新日の表示で作成した`layouts/_default/summary.html`にGoogle Adsenseの広告コードを追加します。  
どこに追加しても良いですが、私は`</footer>`の前に追加しました。  
`data-ad-client`と`data-ad-slot`は広告固有の値です。値は自分のGoogle Adsense管理ページから確認できます。

```
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- 広告1 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="xxxxx"
     data-ad-slot="xxxxx"
     data-ad-format="auto"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

次に、AMPページ用の広告を設定します。
先程のlayouts/_default/summary.htmlをコピーして、layouts/_default/summary.amp.htmlを作ります。
上記の広告コードを消して、代わりに以下のコードを追加します。

```
<amp-ad
layout="responsive"
width=300
height=250
type="adsense"
data-ad-client="xxxxx"
data-ad-slot="xxxxx">
</amp-ad>
```

## Youtubeショートコードの追加

hugo_theme_robustでは、専用のショートコードがimgしか用意されていないので、Youtube用のショートコードを追加して使います。  
なお、HUGOには元々[Youtubeのショートコード](https://gohugo.io/content-management/shortcodes/#youtube)が用意されているので、今回はAMP用のショートコードのみ追加します。

まず、`themes/hugo_theme_robust/layouts/_default/baseof.amp.html`を`layouts/_default/baseof.amp.html`にコピーします。  
head内のAMP関係のCDNが記載されている箇所の一番下に、[amp-youtube](https://www.ampproject.org/docs/reference/components/amp-youtube)用のCDNを追加します。

```
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
    <!-- 以下を追加 -->
    <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
```

次に、以下のような`layouts/shortcodes/youtube.amp.html`を作成します。

```
<amp-youtube data-videoid={{ index .Params 0 }} width="480" height="270" layout="responsive"></amp-youtube>
```

これで、Youtubeのショートコードを書くと、通常のページにはデフォルトのアウトプットが、AMPページには新しく作成したAMP用のHTMLがアウトプットされます。

以上です。ソースは[こちら](https://github.com/zzzmisa/blog)。
