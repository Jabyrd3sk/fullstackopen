import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BlogForm from './BlogForm'

test('calls event handler with right details when a new blog is created', async () => {
  const createBlog = vi.fn() // (vitest’s version of jest.fn)

  const user = userEvent.setup()
  render(<BlogForm createBlog={createBlog} />)

  const titleInput = screen.getByPlaceholderText('enter title')
  const authorInput = screen.getByPlaceholderText('enter author')
  const urlInput = screen.getByPlaceholderText('enter url')
  const createButton = screen.getByText('create')

  await user.type(titleInput, 'React testing is cool')
  await user.type(authorInput, 'Hassan Muhd')
  await user.type(urlInput, 'https://reacttesting.com')
  await user.click(createButton)

  expect(createBlog).toHaveBeenCalledTimes(1)
  expect(createBlog).toHaveBeenCalledWith({
    title: 'React testing is cool',
    author: 'Hassan Muhd',
    url: 'https://reacttesting.com'
  })
})
