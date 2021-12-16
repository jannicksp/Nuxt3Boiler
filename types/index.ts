// Import all interfaces
// Please don't import classes since they will be global and impact bundle size
import { App } from 'vue'
import { HeadClient } from '@vueuse/head'

interface AppContext {
  app: App<Element>
  head: HeadClient | undefined
}

export type UserPlugin = (ctx: AppContext) => void

