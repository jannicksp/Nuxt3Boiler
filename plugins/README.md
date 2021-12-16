## Plugins

A custom user plugin system. Place a `.ts` file with the following template, it will be installed automatically.

```ts
import { UserPlugin } from '~/types'

export const install: UserPlugin = ({ app, router }) => {
  // do something
}
```
