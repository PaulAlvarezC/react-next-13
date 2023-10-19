const fetchComments = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 3000))
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { next: { revalidate: 60 } }).then(res => res.json())
}

export default async function Comments ({ params }) {
  const { id } = params
  const comments = await fetchComments(id)

  return (
    <ul style={{ background: '#444', padding: 20, marginTop: 20, borderRadius: 10, fontSize: 12 }}>
      <h2 style={{ marginBottom: 20 }}>Comentarios</h2>
      {comments.map(comment => (
        <li key={comment.id}>
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  )
}
