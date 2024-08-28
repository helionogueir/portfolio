import '@testing-library/jest-dom/vitest'
import { afterEach } from 'vitest'
import { cleanup } from '@app/application/Test/testing-library/react'

afterEach(() => {
  cleanup()
})
