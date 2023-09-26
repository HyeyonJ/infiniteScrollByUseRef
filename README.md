<img width="100%" src="https://github.com/HyeyonJ/infiniteScrollByUseRef/assets/113879120/0cbbc721-6264-48f1-b310-9fe63e92862f.png">

<div align="center">
<h2>무한 스크롤(Infinite Scroll) 구현</h2>
  채팅 프로젝트를 구현하면서, 무한 스크롤 기능에 대해서 공부하게 되었습니다.
</div>

## 목차
  - [Infinite Scroll?](#Infinite-Scroll?)
  - [구현 방법 구분](#구현-방법-구분)
  - [Intersection Observer API](#Intersection-Observer-API)

## Infinite Scroll?
  - Infinite scroll은 한 번에 모든 컨텐츠를 렌더링 하지 않고, 스크롤을 하면 새로운 컨텐츠를 덧붙여서 렌더링 하는 방식이다. 이는 한 번에 모든 컨텐츠를 로딩할 시 과부화 등의 비효율을 줄이기 위한 퍼포먼스로 사용할 수 있다.

## 구현 방법 구분
  - Infinite Scroll 구현 방법은 크게 두 가지로 나뉜다.
  - onScroll event
  - Interection Observer API
  - 이 곳에선 Interection Observer API로 구현했다.

## Intersection Observer API
  - 

