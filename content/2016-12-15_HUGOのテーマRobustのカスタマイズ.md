+++
date = "2016-12-15"
lastmod = "2019-08-19"
title = "HUGO のテーマ Robust のカスタマイズ"
slug = "customize_hugo_theme"
tags = [
  "hugo"
]
thumbnail = "images/logo_hugo.png"
toc = false
draft = false
+++

※この記事は、2016年12月10日時点でダウンロードした hugo_theme_robust を使用しています。
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
{{% img src="images/customize_hugo_theme2.jpg" w="500" h="325" %}}
`themes/hugo_theme_robust/layouts/partials/sidebar.html`を  `layouts/partials/sidebar.html`にコピーして、以下を追記。

```
<section>
  <header>about</header>
  <div>
    <div class="row">
      {{ range first 1 .Site.Pages.ByDate }}
      <div class="col-md-12 col-sm-6 col-xs-12">
        <article class="li sm">
          <a href="{{ .Permalink }}" class="thumb"{{ with .Params.thumbnail }} style="background-image: url({{ $.Site.BaseURL }}{{ . }});"{{ end }}></a>
        <header>
          <div class="title"><a href="{{ .Permalink }}">{{ .Title }}</a></div>
        </header>
        </article>
       </div>
       {{ end }}
    </div>
  </div>
</section>
```
とりあえず、投稿日時が早い最初の1件をABOUT以下に表示するようにしました。  
表示記事数を変えたい時は`range first 1`の数字を変更。

### カテゴリの非表示
{{% img src="images/customize_hugo_theme1.jpg" w="500" h="333" %}}
`config.toml`に以下を追記。

```
[taxonomies]
tag = "tags"
```
デフォルトでカテゴリとタグが用意されいますが、カテゴリは使わないのでタグだけの表示にしました。

## 記事
`themes/hugo_theme_robust/layouts/_default/summary.html`を`layouts/_default/summary.html`にコピーして、以下のように修正。

### 更新日の表示
{{% img src="images/customize_hugo_theme3.jpg" w="500" h="325" %}}
``` 
<ul class="p-facts">
  <li><i class="fa fa-calendar" aria-hidden="true"></i><time datetime="{{ .Date.Format "2006-01-02T15:04:05JST" }}">{{ .Date.Format ( .Site.Params.dateformat | default "Jan 2, 2006") }}</time></li>
  <li><i class="fa fa-refresh" aria-hidden="true"></i><time datetime="{{ .Lastmod.Format "2006-01-02T15:04:05JST" }}">{{ .Lastmod.Format ( .Site.Params.dateformat | default "Jan 2, 2006") }}</time></li>
  <!-- 略 -->
</ul>
``` 
`Date`はカレンダーアイコンで、`Lastmod`は更新アイコンで別々に表示するようにしました。  
記事のFront Matterで`Date`と`Lastmod`をそれぞれ設定すると反映されます。


## スタイルの調整
`themes/hugo_theme_robust/layouts/partials/style.css`を`layouts/partials/styles.css`にコピーして、以下のように修正。

### リスト内の行間

``` 
ul,ol {
  margin: 0;
  padding: 0;
  line-height: 1.5rem;  /* 追加 */
}
```

リスト内の行間が狭かったので、他の箇所と同じ1.5remに設定しました。

### ヘッダーロゴ

``` 
.p-logo {
  display: inline-block;
  /* text-transform: uppercase; */
}
```

強制的に大文字に変更されるようになっていたのを消しました。

### figure

``` 
.article-body figure {
  margin: 1.5rem 0; 
  display: block;
  text-align:center; /* 追加 */
}

.article-body figcaption {
  padding: .5rem 0;
  font-size: .8rem;
  /* text-align: center; */
}
```

figure要素に関して、画像は左寄せ、キャプションは中央寄せになっていたので、全て中央寄せになるようにしました。

以上です。


