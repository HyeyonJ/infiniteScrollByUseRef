<img width="100%" src="https://github.com/HyeyonJ/infiniteScrollByUseRef/assets/113879120/0cbbc721-6264-48f1-b310-9fe63e92862f.png">

<div align="center">
<h2>무한 스크롤(Infinite Scroll) 구현</h2>
  채팅 프로젝트를 구현하면서, 무한 스크롤 기능에 대해서 공부한 기록입니다.
</div>

## 목차
  - [Infinite Scroll?](#Infinite-Scroll?)
  - [구현 방법 구분](#구현-방법-구분)
  - [Intersection Observer API](#Intersection-Observer-API)
  - [아키텍처](#아키텍처)
  - [구현 화면](#구현-화면)
  - [구현 코드 설명](#구현-코드-설명)
  - [Reference](#Reference)

## Infinite Scroll?
  - Infinite scroll은 한 번에 모든 컨텐츠를 렌더링 하지 않고, 스크롤을 하면 새로운 컨텐츠를 덧붙여서 렌더링 하는 방식이다. 이는 한 번에 모든 컨텐츠를 로딩할 시 과부화 등의 비효율을 줄이기 위한 퍼포먼스로 사용할 수 있습니다.

## 구현 방법 구분
  - Infinite Scroll 구현 방법은 크게 두 가지로 나뉩니다.
  - onScroll event
  - Interection Observer API
  - 이 곳에선 Interection Observer API로 구현했습니다.

## Intersection Observer API
  - MDN의 정의 : Intersection Observer 인터페이스는 대상 요소와 상위 요소, 또는 대상 요소와 최상위 문서의 뷰포트가 서로 교차하는 영역이 달라지는 경우 이를 비동기적으로 감지할 수 있는 수단을 제공합니다.
  - onScroll event 와 Intersection Observer API 둘 다 사용해 본 결과, 직관적으로 바로 이해 가능한 것은 onScroll event로 무한스크롤을 구현하는 것이었습니다. Intersection Observer API는 onScroll event 보다 값싼 비용으로 사용할 수 있다고 하는데, 이 부분에 대해서는 체감이 되지 않았습니다. 다만, onScroll event는 빈번한 이벤트 발생으로 성능 최적화를 위하서 throttle과 같은 처리가 필요하므로 Observer API가 유지보수 측면에서 편리하다고 생각합니다.

## 아키텍처

## 구현 화면
|![image](https://github.com/HyeyonJ/infiniteScrollByUseRef/assets/113879120/2a9e92cb-0916-4f17-bcea-9a2ceecde483)
|![image](https://github.com/HyeyonJ/infiniteScrollByUseRef/assets/113879120/f0cc2fbd-8c19-4f44-b2f9-8368d2e0e2fb)|
|---|---|
|시작 화면|검색 데이터|


## 구현 코드 설명

## Reference
- https://www.youtube.com/watch?v=NZKUirTtxcg&t=691s
- https://velog.io/@doondoony/IntersectionObserver
- https://y0c.github.io/2019/06/30/react-infinite-scroll/
- https://medium.com/suyeonme/react-how-to-implement-an-infinite-scroll-749003e9896a

