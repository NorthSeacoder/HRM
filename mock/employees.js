import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [{
    name: 'name', // 姓名
    'status|1': ['trail', 'leave', 'regular'], // 状态:试用,离职,正式

    title: '@sentence(10, 20)',
    author: 'name',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})

export default [{
  url: '/table/list',
  type: 'get',
  response: config => {
    const items = data.items
    return {
      code: 20000,
      data: {
        total: items.length,
        items: items
      }
    }
  }
}]
