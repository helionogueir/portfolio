import '@testing-library/jest-dom/vitest'
import { afterEach } from 'vitest'
import { cleanup } from '@app/configs/test/testing-library/react'

afterEach(() => {
  cleanup()
})
