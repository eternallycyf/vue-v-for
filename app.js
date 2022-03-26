import { createReative } from './reactive.js'
import { compileTemplate } from './compileTemplate.js'

const domNodePool = [];

export function createApp(options) {
  for (let option in options) {
    switch (option) {
      case 'components':
        initComponent(options[option])
        break;
      default:
        break;
    }
  }

  return {
    mount
  }
}

function initComponent(components) {
  for (let component of components) {
    let [template, state] = component()
    const node = compileTemplate(template, state)
    domNodePool.push(node)
  }

}

function mount(el) {
  const app = document.querySelector(el)
  const oFlag = document.createDocumentFragment()

  domNodePool.forEach(node => {
    oFlag.appendChild(node)
  })

  app.appendChild(oFlag)
}
