## Sketchy Kitchen


### システムの概要
レシピ投稿サイトです。
キーワードで検索、レシピを全て一覧表示、レシピ投稿の3つの機能があります。

### 機能
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


### URL
- [https://sketchy-kitchen.com/](https://sketchy-kitchen.com/)


### Image
![スクリーンショット 2020-05-14 22 44 41](https://user-images.githubusercontent.com/45593212/81942066-9cb82100-9634-11ea-89f9-575432f12d6a.png)

<br />

![スクリーンショット 2020-05-14 22 42 17](https://user-images.githubusercontent.com/45593212/81942115-aa6da680-9634-11ea-8d75-d3933a1fb519.png)
