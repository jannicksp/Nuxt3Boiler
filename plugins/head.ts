import { createHead } from '@vueuse/head'
import { UserPlugin } from '~/types'

// vueuse/head https://github.com/vueuse/head
export const install: UserPlugin = ({ app }) => {
  const head = createHead()
  app.use(head)
}
