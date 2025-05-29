// do not use Enum, use 'as const' in TS

type myEvent = {
  type: 'my event'
}

function handleEvent(): myEvent {
  // The 'as const' assertion makes the object immutable, meaning its properties cannot be changed
  const tempEvent = {
    type: 'my event',
  } as const // type error without 'as const'
  return tempEvent
}

const getPostsUrl = (id: string) => {
  return `/posts/${id}`
}

// just a string, not a template literal
type PostsUrl = ReturnType<typeof getPostsUrl>

const getUserUrl = (id: string) => {
  return `/users/${id}` as const
}

// 'as const' makes the return type a string literal type, as strong as it possibly can not, just a string
type UserUrl = ReturnType<typeof getUserUrl>

// '/others/123' will be a type error
const example: UserUrl = '/users/123'
