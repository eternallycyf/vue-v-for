import { createReative } from '../../reactive.js'

const template = `
  <ul class='list'>
    <h1>{{ title }}</h1>
    {{ dateTime }}
    <for data="list" tag="li" class="item">
      <span>姓名：{ name }</span>
    </for>
  </ul>
`

function TestB() {
  const state = createReative({
    title: '测试标题B',
    dateTime: '2012-12-12 12:12',
    list: [
      {
        id: 1,
        name: 'zs',
        age: 11
      },
      {
        id: 2,
        name: 'ls',
        age: 22
      },
      {
        id: 3,
        name: 'ww',
        age: 33
      },
    ]
  })

  return [template, state]
}


export default TestB