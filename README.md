## Sketchy Kitchen

### URL
- [https://sketchy-kitchen.com/](https://sketchy-kitchen.com/)

### システムの概要
レシピ投稿サイトです。以下の機能があります。
- キーワードで検索
- レシピを全て一覧表示
- レシピ投稿

アクセシビリティに考慮しました。(2020/05/30 更新)


### 詳細
- キーワード検索

レシピをCloud Firestoreに保存する時にタグ(keyword)を1つ以上登録してもらって、それをもとに検索します。検索結果ページより画像をクリックする事でレシピの詳細ページに遷移します。

- 一覧表示

Cloud Firestoreから全て表示します。画像をクリックする事でレシピの詳細ページに遷移します。

- 投稿

画像をCloud Storageに保存して、ダウンロードURLを取得し、それと共に、料理名、材料などの情報をCloud Firestoreに保存します。


### 利用した技術
- React + TypeScript
    - Material UI
    - react-hook-form
    - react-router
    - react-loader-spinner
    - react-axe
- Firebase
    - Cloud Firestore
    - Cloud Storage
    - Hosting



### Image
![スクリーンショット 2020-06-01 22 18 17](https://user-images.githubusercontent.com/45593212/83413139-4df0f080-a456-11ea-9423-7bf992f83369.png)

<br />

![スクリーンショット 2020-06-01 22 18 30](https://user-images.githubusercontent.com/45593212/83413184-5f39fd00-a456-11ea-919c-51b3442d64f2.png)
