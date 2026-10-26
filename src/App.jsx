
import { useEffect, useReducer, useState } from 'react'
import { fetchPosts } from './api/postsApi.js'
import PostList from './components/PostList.jsx'
import FilterForm from './components/FilterForm.jsx'
import { initialState, postsReducer } from './reducer/postsReducer.js'
import './App.css'

function App() {
  const [state, dispatch] = useReducer(postsReducer, initialState)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadPosts() {
      dispatch({ type: 'FETCH_START' })

      try {
        const posts = await fetchPosts(controller.signal)
        dispatch({ type: 'FETCH_SUCCESS', payload: posts })
      } catch (error) {
        if (error.name !== 'AbortError') {
          dispatch({ type: 'FETCH_ERROR', payload: error.message })
        }
      }
    }

    loadPosts()

    return () => controller.abort()
  }, [])

  const searchText = filter.trim().toLowerCase()
  const filteredPosts = state.posts.filter((post) =>
    post.title.toLowerCase().includes(searchText),
  )

  return (
    <main className="app">
      <header className="page-header">
        <h1>Post Dashboard</h1>
        <p>Browse and filter posts loaded from an API.</p>
      </header>

      <FilterForm filter={filter} onFilterChange={setFilter} />

      {state.loading && <p role="status">Loading posts...</p>}

      {state.error && (
        <p role="alert">Unable to load posts: {state.error}</p>
      )}

      {!state.loading && !state.error && state.posts.length === 0 && (
        <p>No posts found.</p>
      )}

      {!state.loading &&
        !state.error &&
        state.posts.length > 0 &&
        filteredPosts.length === 0 && <p>No posts match your filter.</p>}

      {!state.loading && !state.error && filteredPosts.length > 0 && (
        <PostList posts={filteredPosts} />
      )}
    </main>
  )
}

export default App
