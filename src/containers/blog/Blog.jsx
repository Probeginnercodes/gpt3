import React from 'react'
import './blog.css'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05} from './imports'
const Blog = () => {
  return (
    <div className='gpt3__blog section__padding'id='blog'>
     <div className='gpt3__blog-heading'>
     <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
     </div>
     <div className='gpt3__blog-container'> 
    <div className='gpt3__blog-container_groupA'>
      <Article imgurl={blog01}  date='August 31st 2023'/>
    </div> 
    <div className='gpt3__blog-container_groupB'>
     <Article imgurl={blog03} date = 'August 31st 2023'/>
     <Article imgurl={blog04} date = 'August 31st 2023'/> 
     <Article imgurl={blog05} date = 'August 31st 2023'/> 
     <Article imgurl={blog02} date = 'August 31st 2023'/>
    </div>
    </div>
    </div>
  )
}

export default Blog
