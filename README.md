# fe-sprint-coz-shopping

코드스테이츠 SEB FE 44기 솔로 과제를 위해 구현한 프로젝트입니다.

![cozShop](https://github.com/Jiwonp12/fe-sprint-coz-shopping/assets/124653132/1e911a24-1037-4d6f-a7f7-9c0f6f23cb12)

# Stack

# 배포 링크

https://jiwonp12.github.io/

배포 링크 데이터는 더미 데이터를 사용했습니다.

# 구조

`assets` : 정적인 이미지들을 담은 폴더입니다.
`pages` : 페이지 컴포넌트들을 나눈 폴더입니다.
`components` : 컴포넌트들을 모아둔 폴더이며 내부에서 한번더 폴더를 나누어주었습니다.
`items` : 각 페이지에서 사용되는 컴포넌트들을 모은 폴더입니다.
`UI` : 드롭다운, 모달, 토스트 컴포넌트를 담은 폴더입니다.

# 폴더구조

```
fe-sprint-coz-shopping
├
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ manifest.json
│  └─ robots.txt
├─ README.md
└─ src
   ├─ App.css
   ├─ App.js
   ├─ assets
   │  ├─ beesad.png
   │  ├─ hamburg.png
   │  ├─ img1.png
   │  ├─ img2.png
   │  ├─ img3.png
   │  ├─ img4.png
   │  ├─ img5.png
   │  └─ logo.png
   ├─ components
   │  ├─ items
   │  │  ├─ Category.js
   │  │  ├─ Category.module.css
   │  │  ├─ Error.js
   │  │  ├─ Error.module.css
   │  │  ├─ Item.js
   │  │  ├─ Item.module.css
   │  │  ├─ MainBookmarkItems.js
   │  │  ├─ MainBookmarkItems.module.css
   │  │  ├─ MainListItems.js
   │  │  └─ MainListItems.module.css
   │  └─ UI
   │     ├─ Dropdown.js
   │     ├─ Dropdown.module.css
   │     ├─ Modal.js
   │     ├─ Modal.module.css
   │     ├─ Notify.js
   │     └─ Notify.module.css
   ├─ Footer.js
   ├─ Footer.module.css
   ├─ Header.js
   ├─ Header.module.css
   ├─ index.css
   ├─ index.js
   └─ pages
      ├─ BookmarkPage.js
      ├─ BookmarkPage.module.css
      ├─ ItemListPage.js
      ├─ ItemListPage.module.css
      ├─ MainPage.js
      └─ MainPage.module.css

```

# 기능

1. Header 영역의 햄버거 버튼을 클릭하면 보이는 `Dropdwon.js` 구현.
2. 아이템을 클릭하면 보이는 `Modal.js` 구현.
3. 북마크 저장, 취소시 `Notify.js` 구현.
4. 로컬스토리지로 북마크를 저장하는 기능을 구현.
5. `Category.js` 별로 아이템을 렌더링 해주는 기능을 구현.
6. `ItemListPage.js` , `BookmarkPage.js` 에서 무한스크롤 구현.

# 문제해결과정

## 드롭다운

## 모달

## 토스트

## 북마크 / 로컬스토리지

## 무한스크롤

## 상태관리

# 궁금한 점

# 해결하지 못한 문제

## 😵‍💫 무한스크롤의 종료
