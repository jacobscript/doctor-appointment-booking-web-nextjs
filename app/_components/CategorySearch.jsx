'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import GlobalApi from '../_utils/GlobalApi'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function CategorySearch() {
  const [categoryList, setCategoryList] = useState([])

  useEffect(() => {
    getCategoryList()
  }, [])

  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      console.log(resp.data.data)
      setCategoryList(resp.data.data)
    })
  }

  return (
    <div className='mb-10 items-center flex flex-col gap-2 px-5 text-center text-balance'>
      <h2 className='font-bold text-4xl tracking-wide'>
        Search <span className='text-primary'>Doctors</span>
      </h2>
      <h2 className='text-gray-500 text-xl'>
        Search your Doctor and Book Appointment in one click
      </h2>

      <div className='flex w-full max-w-sm items-center space-x-2 mt-3'>
        <Input type='text' placeholder='Search...' />
        <Button type='submit'>
          <Search className='h-4 w-4 mr-2' />
          Search
        </Button>
      </div>

      {/* display list of category */}
      <div className='grid grid-cols-3 mt-5 md:grid-cols-4 lg:grid-cols-6'>
        {categoryList.length > 0
          ? categoryList.map(
              (item, index) =>
                index < 6 && (
                  <Link
                    href={'/search/' + item.attributes.Name}
                    key={index}
                    className='flex flex-col text-center gap-2 items-center p-5 bg-blue-50 m-2 rounded-lg hover:scale-110 transition-all ease-in-out cursor-pointer'
                  >
                    <Image
                      src={item.attributes?.Icon?.data.attributes?.url}
                      width={40}
                      height={40}
                      alt='icon'
                    />
                    <label className='text-blue-600 text-sm'>
                      {item?.attributes?.Name}
                    </label>
                  </Link>
                )
            )
          : [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div className='h-[120px] m-2 w-[120px] bg-slate-200 animate-pulse rounded-lg'></div>
            ))}
      </div>
    </div>
  )
}
export default CategorySearch
