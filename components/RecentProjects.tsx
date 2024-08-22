import { projects } from '@/data';
import React from 'react'

const RecentProjects = () => {
  return (
    <div  className='py-20'>
     <h1 className="heading">
        A small selection of {' '}
        <span className=''>recent projects</span>
     </h1>
     <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
      {
        projects.map(({id, title, des, img, iconLists, link})=> (
          <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w[80vw]" key={id}>
            { 
              title
            }
          </div>
        ))
       }
     </div>
    </div>
  )
}

export default RecentProjects;

