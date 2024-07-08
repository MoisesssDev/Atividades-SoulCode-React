import styles from './App.module.css'
import Post from './components/Post'

function App() {
  const posts = [
    { title: 'Post 1', body: 'Corpo do post 1', likes: 0 },
    { title: 'Post 2', body: 'Corpo do post 2', likes: 4 },
    { title: 'Post 3', body: 'Corpo do post 3', likes: 2 },
  ]

  return (
    <>
      <main className={styles.postsContainer}>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </main>
    </>
  )
}

export default App
