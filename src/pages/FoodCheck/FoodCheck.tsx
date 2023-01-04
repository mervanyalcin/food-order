import React from 'react'
import { Link } from 'react-router-dom'
import { store } from 'store'

const FoodCheck: React.FC = () => {
  const { selectedFood } = store
  return (
    <div className='px-2'>
      <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg max-w-xl h-full w-full " src={`${process.env.PUBLIC_URL}/images/${selectedFood?.categoryName + "/" + selectedFood?.image}`} alt="" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{selectedFood?.name}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{selectedFood?.description}</p>
          <h3 className='dark:text-white text-lg'>Şefe bir notunuz var mı?</h3>
          <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg">
            Add Order
          </button>
          <Link to="/menu" className="self-end text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"> Back </Link>
        </div>
      </div >
    </div >
  )
}

export default FoodCheck