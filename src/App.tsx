import React from 'react';
import HomeLayout from './pages/homeLayout'
interface ObjectProps {
  [key: string]: any
}
interface RowDataProps {
  key: string,
  name: string,
  age: number,
  address: string
}
const dataSource: RowDataProps[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 49,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 22,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 37,
    address: 'London No. 2 Lake Park',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',

  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    sort: true
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },{
    title: 'wonder',
    dataIndex: 'wonder',
    key: 'wonder'
  }
];
const paddingStyle ={
  paddingBottom: 10
}
const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins',
  'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']
const defaultInfo = ['liben']
const info = [
  {
    value: 'liben',
    label: 'liben',
    children: [
      {
        value: 'lishuangyu',
        label: 'lishuangyu'
      },
      {
        value: 'menghuacheng',
        label: 'menghuacheng',
        children: [
          {
            value: 'dedede'
          },
          {
            value: 'd'
          },
          {
            value: 'ded'
          }
        ]
      }
    ]
  },
  {
    value: 'lishuangyu',
    label: 'lishuangyu',
    children: [
      {
        value: 'li',
        label: 'lishuangyu'
      },
      {
        value: 'meng',
        label: 'menghuacheng'
      }
    ]
  },
  {
    value: 'menghuacheng',
    label: 'menghuacheng'
  }
]
const infoSimple = [
  {
    value: 'liben',
    label: 'liben',
  },
  {
    value: 'lishuangyu',
    label: 'lishuangyu',
  },
  {
    value: 'menghuacheng',
    label: 'menghuacheng'
  }
]
function App() {

  const handleFetch = (query: string) => {
    return fetch('https://api.github.com/search/users?q='+ query)
        .then(res => res.json())
        .then((data) => {
          if (data.items) {
            return data.items.slice(0, 4).map((item: any) => ({ value: item.login, ...item}))
          } else {
            return []
          }

        })
  }
  return (
      <div className="App">
        <HomeLayout/>
      </div>
  )
}

export default App;
