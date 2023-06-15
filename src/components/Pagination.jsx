import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
    const {page,totalPages,handlePageChange,loading} = useContext(AppContext)
  return (
    <div className='w-full pb-6 border-3 fixed bottom-0 bg-white p-10 h-[50px] border'>
    {
        loading===false && totalPages>0 &&
        (<div className='flex justify-between absolute top-3 w-full left-0 p-2'>
            <div className='flex gap-x-4'>
                {
                    page>1 && (<button className='rounded-md border px-4 py-1 border-black' onClick={()=>handlePageChange(page-1)}>
                        Previous
                    </button>)
                }
                {
                    page<totalPages && (<button className='rounded-md border px-4 py-1 border-black' onClick={()=>handlePageChange(page+1)}>
                        Next
                    </button>)
                }
            </div>
            <p className='font-bold text-sm'>
                Page {page} of {totalPages}
            </p>
        </div>)
    }
        
    </div>
  )
}

export default Pagination