+++
date = "2017-09-18"
lastmod = "2018-12-19"
title = "HUGO + GitHub Pgesで複数ブログ管理"
slug = "hugo_github_pages_plural_blogs"
tags = [
  "hugo"
]
thumbnail = "images/logo_hugo.png"
toc = false
draft = false
+++

HUGOとGitHub Pagesで複数のブログを作って管理する方法のメモです。

## github.ioリポジトリの作成

基本的な流れは、[Host on GitHub](http://gohugo.io/hosting-and-deployment/hosting-on-github/)を参照します。

1個目のブログは、普通に{USERNAME}.github.ioを言う名前のリポジトリを作成して、ブログをアップします。
新しいリポジトリは、GitHubのWebサイトの右上のプラスボタンから、New repositoryで作れます。

2個目のブログは、GitHubに新しいOrganizationを作り、そこに{ORGANIZATIONNAME}.github.ioを言う名前のリポジトリを作成して、ブログをアップします。
新しいOrganizationは、GitHubのWebサイトの右上のプラスボタンから、New Organizationで作れます。


## 開発

フォルダ構成はこんな感じにしています。

```
$ tree -L 2
.
├── blog
│   ├── archetypes
│   ├── config.toml
│   ├── content
│   ├── layouts
│   ├── public
│   ├── static
│   ├── themes
│   └── tmp
├── odekake
│   ├── archetypes
│   ├── config.toml
│   ├── content
│   ├── layouts
│   ├── public
│   ├── static
│   └── themes
└── public_for_local
```

1個目のブログ開発用のblogフォルダ、2個目のブログ開発用のodekakeフォルダ、生成したブログをローカルで確認する用のpublic_for_localｄの3つのフォルダを使っています。

ローカルでサイトを確認したい時は、次のコマンドを打ちます。  
詳しくは、[HUGOサイトをMacのローカル環境に置いてLAN内から確認](/access_to_local_hugo_blog/)も参照のこと。

```
# ローカル用のサイト生成
$ cd blog/
$ hugo -b http://192.168.xx.xx/ -d ../public_for_local -t hugo_theme_robust -D
```

公開用のサイト生成は、次のコマンドを打ちます。
```
# 公開用のサイト生成
$ cd blog/
$ hugo -b http://blog.zzzmisa.com/ -d public -t hugo_theme_robust

# 独自ドメインでアップする場合にCNAME未作成なら作成
$ vim public/CNAME 
blog.zzzmisa.com

# GitHub Pagesに公開
$ cd public/
$ git commit -am "コメント"
$ git push

```

これは自分流のやり方なので、もっとスマートな方法があるかもかもしれません。  
同じテーマを使う場合は、themesフォルダやlayoutsフォルダは共通化しても良いかも。  

以上です。
