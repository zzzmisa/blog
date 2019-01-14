+++
date = "2017-11-29"
lastmod = "2017-11-29"
title = "Bootstrap4をRails5に導入"
slug = "bootstrap4-with-rails5"
tags = [
  "rails",
  "bootstrap"
]
thumbnail = "images/logo_rails.png"
toc = false
draft = false
+++

Bootstrap4をRuby on Rails5に導入します。

基本的な作業はBootstrapの[こちらのドキュメント](https://github.com/twbs/bootstrap-rubygem)を参考に作業していきます。
今回使ったバージョンは、Railsがv5.1.4、Bootstrapがv4.0.0-alpha.6です。

まずは、Gemfileに以下を追記し`bundle install`します。

```
$ vim Gemfile
+ gem 'bootstrap', '4.0.0.alpha6'
```

```
$ bundle install
```

`~>`と書くことで、4.0.0以上、4.1.0未満の最新のバージョンのBootstrapを入れることができます。  
他のバージョンを入れたい場合は、[こちらのページ](https://rubygems.org/gems/bootstrap/) でgemとして提供されているバージョンを確認します。

次に、application.scss に Bootstrapのimport文を書きます。
拡張子がcssになっている場合はscssに変えておきます。cssファイルが残っているとscssの代わりに読み込まれてしまいます。  
また、`*= require`文は削除しておきます。

```
$ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
$ vim app/assets/stylesheets/application.scss

- *= require_tree .
- *= require_self

+ @import "bootstrap";

```

そして、Rails 5.1以降を使用している場合はjquery-railsもGemfile に追記しておきます。

```
$ vim Gemfile
+ gem 'jquery-rails'
```

```
$ bundle install
```

最後に、japascriptにrequire文を追記します。  
bootstrap-sprockets、jquery3に加え、Bootstrapのツールチップとポップオーバーが依存している、popperもrequireしておきます。

```
vim app/assets/javascripts/application.js
+ //= require jquery3
+ //= require popper
+ //= require bootstrap-sprockets
```

以上で、Bootstrap4が使えるようになったはずです！


