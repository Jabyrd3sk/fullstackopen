import { render, screen } from '@testing-library/react'
import Blog from './Blog'

describe('<Blog />', () => {
  const blog = {
    title: 'React patterns',
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/',
    likes: 7
  }

  test('renders title and author but not url or likes', () => {
    render(<Blog blog={blog} />)

    const element = screen.getByText('React patterns Michael Chan')
    expect(element).toBeDefined()

    const url = screen.queryByText('https://reactpatterns.com/')
    const likes = screen.queryByText('likes 7')

    expect(url).toBeNull()
    expect(likes).toBeNull()
  })
})
