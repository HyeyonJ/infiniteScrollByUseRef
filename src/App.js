import React, { useState, useEffect, useRef, useCallback } from "react";

export default function App() {
  //사용자가 검색한 쿼리 문자열
  const [query, setQuery] = useState("");
  //현재 페이지 번호
  const [pageNumber, setPageNumber] = useState(1);
  //데이터를 불러오는 동안 로딩 상태
  const [loading, setLoading] = useState(true);
  //데이터 불러오기 중에 발생한 오류 상태
  const [error, setError] = useState(false);
  //현재까지 검색된 책 목록
  const [books, setBooks] = useState([]);
  //더 많은 책 데이터를 가져올 수 있는지 여부
  const [hasMore, setHasMore] = useState(false);

  //query 상태가 변경될 때마다 books 배열을 초기화
  useEffect(() => {
    setBooks([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    const timeout = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://openlibrary.org/search.json?q=${query}&page=${pageNumber}`
        );
        if (res.ok) {
          const data = await res.json();
          console.log("여기", data);
          setBooks((prevBooks) => [
            ...new Set([...prevBooks, ...data.docs.map((b) => b.title)])
          ]);
          setHasMore(data.docs.length > 0);
        }
      } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }, 3000);
    return () => clearInterval(timeout);
  }, [query, pageNumber]);

  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  return (
    <>
      <input type="text" value={query} onChange={handleSearch}></input>
      {books.map((book, index) => {
        if (books.length === index + 1) {
          return (
            <div ref={lastBookElementRef} key={book}>
              {book}
            </div>
          );
        } else {
          return <div key={book}>{book}</div>;
        }
      })}
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div>
    </>
  );
}
