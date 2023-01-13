import React from 'react'
import { Link } from 'react-router-dom';

const BlogCard = () => {
  return (
        <div className='blog-card'>
            <div className='card-image'>
                <img src='images/blog-1.jpg' alt='blog' className='img-fluid w-100' />
                <div className='blog-content'>
                    <p className='date'>1 Dec, 2022</p>
                    <h5 className='title'>A Beautiful Sunday Morning Renaissance</h5>
                    <p className='desc'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                    <Link className='button' to='/blog/:id'>Read More</Link>
                </div>
            </div>
        </div>
  )
}

export default BlogCard