# study-materialui

importer.lessに下記のように書くとSailsのGruntタスクでmaterial-uiのcssファイルがimporter.cssとして出力される

```
@import "node_modules/material-ui/src/less/scaffolding.less";
@import "node_modules/material-ui/src/less/components.less";
```

material-uiを少し使った感じとしてはあくまでコンポーネントとして作られてるので、レイアウト調整などは都度必要になり、たとえばTextFieldをform-groupで囲うとか組み合わせが必要になってくる。サイト全体で統一感を出そうとするとカスタムも踏まえ、結局レイアウトまわりも合わせた上でそこそこ作る事になってしまうため、使えるコンポーネントをピンポイントで使うくらいに留めておいたほうが全体のバランス感としては良いかもしれない。全体的に使おうとすると隙間を埋めるのに苦労する気がした。

使えそうなコンポーネントは今のところ

* カレンダー
* スナックバー

くらいかな…。