import fs from 'fs'
import { resolve, normalize } from 'path'
import type { ResolvedConfig, PluginOption } from 'vite'

const fileRegex = /\.(css)$/
const injectCode = (code: string) => {
  return "window.styleInject = function styleInject(e,t){void 0===t&&(t={});var d=t.insertAt;if(e&&'undefined'!=typeof document){var n=document.head||document.getElementsByTagName('head')[0],c=document.createElement('style');c.type='text/css','top'===d&&n.firstChild?n.insertBefore(c,n.firstChild):n.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e))}}; styleInject(''.concat('" + code + "'));"
}
const template = `console.warn("__INJECT__")`

let viteConfig: ResolvedConfig
const css: string[] = []

export default function cssInject(): PluginOption {
  return {
    name: 'css-inject',

    apply: 'build',

    configResolved(resolvedConfig: ResolvedConfig) {
      viteConfig = resolvedConfig
    },

    transform(code: string, id: string) {
      id = normalize(id);

      if (fileRegex.test(id)) {
        css.push(code)
        return {
          code: '',
        }
      }
      if (id.includes(viteConfig.build.lib.entry)) {
        return {
          code: `${code}
          ${template}`,
        }
      }
      return null
    },

    async writeBundle(_: unknown, bundle: unknown) {
      for (const file of Object.entries(bundle)) {
        const { root } = viteConfig
        const outDir: string = viteConfig.build.outDir || 'dist'
        const fileName: string = file[0]
        const filePath: string = resolve(root, outDir, fileName)

        try {
          let data: string = fs.readFileSync(filePath, {
            encoding: 'utf8',
          })

          if (data.includes(template)) {
            data = data.replace(template, injectCode(css.join('\n')))
          }

          fs.writeFileSync(filePath, data)
        } catch (e) {
          console.error(e)
        }
      }
    },
  }
}

