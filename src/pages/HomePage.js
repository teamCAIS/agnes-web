import { useState } from "react";
import { getSchools } from "../api/schools";
import useInfiniteScroll from 'react-infinite-scroll-hook';

const initialStatus = {
  loading: false,
  hasNextPage: true,
  page: 1,
  error: false,
  items: [],
  hasStarted: false,
}

const HomePage = () => {

  const [loadingStatus, setLoadingStatus] = useState(initialStatus)

  console.log(loadingStatus);

  const loadSchools = async (currentItems=loadingStatus.items, page=loadingStatus.page) => {
    console.log("*** loadSchools ***");
    if(loadingStatus.loading) return;
    setLoadingStatus({...loadingStatus, loading: true, items: currentItems})
    try {
      console.log("*** starting new load ***");
      const result = await getSchools(page)
      setLoadingStatus({
        ...loadingStatus,
        loading: false,
        error: false,
        hasNextPage: result.data.hasNextPage,
        page: page + 1,
        items: [...currentItems, ...result.data.docs],
        hasStarted: true,
      })
    } catch(error) {
      console.warn(error);
      setLoadingStatus({...loadingStatus, loading: false, error: true})
    }
  }

  const onSearch = async () => {
    setLoadingStatus({...initialStatus})
    loadSchools([], 1);
  }

  const [sentryRef] = useInfiniteScroll({
    loading: loadingStatus.loading,
    hasNextPage: loadingStatus.hasNextPage,
    onLoadMore: loadSchools,
    // When there is an error, we stop infinite loading.
    // It can be reactivated by setting "error" state as undefined.
    disabled: !!loadingStatus.error,
    // `rootMargin` is passed to `IntersectionObserver`.
    // We can use it to trigger 'onLoadMore' when the sentry comes near to become
    // visible, instead of becoming fully visible on the screen.
    //rootMargin: '0px 0px 400px 0px',
  });

  return (
    <main>
      <header>
      <h1>
        Bem-vinde ao projeto AGNES
      </h1>
      <p>
        Nós queremos ajudar você e outros estudantes
      </p>
      </header>
      <button onClick={onSearch}>Buscar</button>
      <ul>
        {loadingStatus.items.map(school => (
          <li key={`school-${school._id}`}>
            <h2>{school.name}</h2>
          </li>
        ))}
      </ul>
      {(loadingStatus.loading || loadingStatus.hasStarted) && (
        <p ref={sentryRef}>Carregando...</p>
      )}
    </main>
  )

}

export default HomePage;