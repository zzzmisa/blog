+++
date = "2017-11-20"
lastmod = "2017-11-20"
title = "brew linkappsのdeprecated対応"
slug = "brew-linkapps-deprecated"
tags = [
  "macos",
  "vim"
]
thumbnail = "images/logo_homebrew.png"
toc = false
draft = false
+++


`brew linkapps` は、/Applications フォルダにシンボリックリンクを貼るコマンドですが、いつの間にか deprecated の Warning がでるようになりました。  

```
$ brew linkapps macvim

Warning: `brew linkapps` has been deprecated and will eventually be removed!

Unfortunately `brew linkapps` cannot behave nicely with e.g. Spotlight using
either aliases or symlinks and Homebrew formulae do not build "proper" `.app`
bundles that can be relocated. Instead, please consider using `brew cask` and
migrate formulae using `.app`s to casks.
Linking: /usr/local/opt/macvim/MacVim.app
Linked 1 app to /Applications
```

どうやら廃止されて無くなるようです。残念なことに、このコマンドはナイスな動きをしないとのこと。


一旦linkappsを解除します。

```
$ brew unlinkapps macvim
Warning: `brew unlinkapps` has been deprecated and will eventually be removed!

Unfortunately `brew linkapps` cannot behave nicely with e.g. Spotlight using either aliases or symlinks and Homebrew formulae do not build "proper" `.app` bundles that can be relocated. Instead, please consider using `brew cask` and migrate formulae using `.app`s to casks.
Unlinking: /Applications/MacVim.app
Unlinked 1 app from /Applications
```

他にも解除したいアプリがあって、まとめて解除したい場合は、`brew unlinkapps` とだけ打てば良いです。

MacVim は Homebrew でインストールせず、dmg でインストールするとこにしました。  
Warningの文章を見る限り、`brew cask` を使っても良さそうです。  
MacVimのdmgファイルは[公式サイト](http://macvim-dev.github.io/macvim/)からダウンロードできます。

Homebrew でインストールした MacVim はアンインストールしておきます。

```
$ brew uninstall macvim
Uninstalling /usr/local/Cellar/macvim/8.0-137... (2,142 files, 34.9MB)
```

以上です。
