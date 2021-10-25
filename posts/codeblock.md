---
title: "コードブロックの動作確認"
date: "2021-10-25"
---

技術系のブログではしばしばソースコードや設定ファイルを記事に載せる。  
その際にマークダウンのコードブロック（3連バッククォート）を使うが、Next.jsを入れたばかりだと表示に反映されない。

今後技術系記事を書いていくにあたり、コードブロック表示を有効にしておきたい。

## コードブロック例

### Ruby

```ruby
greet = 'Good morning!'
name = 'Takeshi'

puts "Hi, #{name}. #{greet}"

```

### JavaScript

```javascript

let age = 21;

// 条件(三項)演算子
let result = (age >= 20) ? "大人" : "子ども";
console.log(result); // 大人

```
