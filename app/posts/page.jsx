import { Suspense } from 'react'
import { ListOfPosts } from './ListOfPosts'

export default async function PostsPage () {
  return (
    <section>
      <Suspense fallback={<p>CARGANDO LISTA DE POSTS</p>}>
        <ListOfPosts />
      </Suspense>
    </section>
  )
}
