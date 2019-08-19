+++
date = "2017-09-03"
lastmod = "2019-08-19"
title = "HUGO のテーマ Robust のカスタマイズver2"
slug = "customize_hugo_theme2"
tags = [
  "hugo"
]
thumbnail = "images/logo_hugo.png"
toc = false
draft = false
+++

※この記事は、2017年9月3日時点でダウンロードした hugo_theme_robust を使用しています。
カスタマイズ内容も古いです。最新のカスタマイズ内容は[Github](https://github.com/zzzmisa/blog/)を見てください。

---

このブログは、静的サイトジェネレータ[HUGO](http://gohugo.io/)  
で作っていて、[Robust](https://github.com/dim0627/hugo_theme_robust/)
 というテーマをちょっぴりカスタマイズして使用してます。  
この記事はカスタマイズ内容のメモです。

## 全体の設定

### 基本的な設定
`config.toml`でbaseurl、title、googleAnalyticsを設定。

### アイキャッチのデフォルト画像を変更
任意の画像を用意して`static/images/default.jpg`を作成。

## サイドバー

### ABOUTの追加
ABOUTを追加しました。
{{% img src="images/customize_hugo_theme22.png" w="500" h="384" %}}

### タグの横に記事数を追加
タグの横にタグに紐付けられている記事数を表示するようにしました。
{{% img src="images/customize_hugo_theme24.png" w="500" h="384" %}}

サイドバーは、`layouts/partials/sidebar.html` 新しく作成して既存のサイドバーが上書きされるようにしました。
LATESTSとCTEGORYは表示しないようにして、最終的に以下のようなコードにしました。

```
<aside class="l-sidebar">

  <div class="sections sidebar">
    <section class="sidebar">
      <header>ABOUT</header>
      <div style="font-size:small; height:128px">
    <img border="0" src="{{ $.Site.BaseURL}}/images/about.png" width="128" height="128" align="left" style="margin-right: 10px;">
    ブログというものを試してみたくて作ったブログです。詳しくは<a href="{{ $.Site.BaseURL}}/about">こちら</a>。
    </div>
    </section>

    {{ range $key, $value := .Site.Taxonomies }}
    <section class="sidebar">
      <header>{{ $key | upper }}</header>
      <div>
        <ul class="terms">
      {{ range first 100 $value.ByCount }}<li><a href="{{ $.Site.BaseURL}}{{ $key }}/{{ .Name | urlize }}">{{ .Name }} * {{ .Count }}</span></a></li>{{ end }}
        </ul>
      </div>
    </section>
    {{ end }}
  </div>

</aside>
```

## 記事

### 更新日の表示

投稿日（`Date`）はカレンダーアイコンで、更新日（`Lastmod`)はリフレッシュアイコンで別々に表示するようにしました。  
記事のFront Matterで`Date`と`Lastmod`をそれぞれ設定すると反映されます。

{{% img src="images/customize_hugo_theme23.png" w="500" h="384" %}}

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

### 記事の表示順を変更
記事の表示順を `Lastmod` 順から `Date` 順に変更しました。

`themes/hugo_theme_robust/layouts/_default/li_sm.html`を`layouts/_default/li_sm.html`にコピーして、以下のように修正。

```
$ diff themes/hugo_theme_robust/layouts/_default/li_sm.html layouts/_default/li_sm.html
9c9
<         <li><i class="fa fa-calendar" aria-hidden="true"></i><time datetime="{{ .Lastmod.Format "2006-01-02T15:04:05JST" }}">{{ .Lastmod.Format ( .Site.Params.dateformat | default "Jan 2, 2006") }}</time></li>
---
>         <li><i class="fa fa-calendar" aria-hidden="true"></i><time datetime="{{ .Date.Format "2006-01-02T15:04:05JST" }}">{{ .Date.Format ( .Site.Params.dateformat | default "Jan 2, 2006") }}</time></li>
```

以上です。


