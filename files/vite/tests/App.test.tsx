import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../src/App'

test('increments count', async () => {
  render(<App />)

  const initialCountText = screen.getByText(/count is 0/i)
  expect(initialCountText).toBeInTheDocument()

  userEvent.click(initialCountText)

  const updatedCountText = await screen.findByText(/count is 1/i)
  expect(updatedCountText).toBeInTheDocument()
})


test('intentionally fails due to missing text', async () => {
  render(<App />)

  const createdWithVolzText = screen.getByText(/created with volz/i)
  expect(createdWithVolzText).toBeInTheDocument()
})
