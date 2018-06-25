import linkHeader from 'parse-link-header'

export const API_SEARCH_USER_BASE_URL = 'https://api.github.com/search/users'

export const fetchUsers = ({ nextUrl, query }) => {
  const url = nextUrl || `${API_SEARCH_USER_BASE_URL}?q=${query}&sort=followers`

  return fetch(url).then(response => {
    const link = linkHeader(response.headers.get('Link'))
    return response.json().then(users => ({
      nextUrl: link.next.url,
      users
    }))
  })
}
