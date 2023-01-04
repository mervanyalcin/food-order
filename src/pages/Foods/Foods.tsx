import React from 'react'
import datas from "datas.json"
import { observer } from 'mobx-react-lite'
import { store } from 'store'
import { Link } from 'react-router-dom'

interface IFoodsProps { }
const Foods: React.FC<IFoodsProps> = observer(() => {

  const { setSelectedFood, selectedCategory } = store

  const newDatas = datas.filter((data) => {
    return data.categoryName === selectedCategory?.categoryName
  })

  return (
    <div>
      <div className='max-w-xl flex m-auto flex-col'>
        <h1 className='text-3xl capitalize mb-4'>{selectedCategory?.name}</h1>
        <div className='flex flex-wrap' style={{ boxSizing: "border-box" }}>
          {
            newDatas.map((data, index) => (
              <Link to="/menu/order" className="flex mb-4 items-center bg-white border rounded-lg shadow-md flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full cursor-pointer aganigi:hover:hidden" key={data.id} onClick={() => {
                setSelectedFood(data)
              }}>
                <img className="rounded-t-lg max-w-[200px] md:hidden h-full" src={`${process.env.PUBLIC_URL}/images/${data.categoryName + "/" + data.image}`} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal pb-10">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.name}</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.description}</p>
                </div>
              </Link>
            ))
          }
          
          <Link to="/" className="self-end text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"> Back </Link>
        </div>
      </div>
    </div>
  )
})

export default Foods