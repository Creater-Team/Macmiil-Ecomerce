import React from 'react'
import { useSelector } from 'react-redux';

const   Post = ({ post }) => {
    const {user} = useSelector((state) => state.auth);
  return (
    <div>post
      
      


           {/* BODY AND TITLE */}

      <div className=''>
        <div className=''>
          <div className=''>
            <h2>{post?.product?.product?.title}</h2>
          </div>
          <div className=''>{post?.product?.product?.Price}</div>
        </div>
        {post?.src ? (
          <div className=''>
            <img src={post?.product?.product?.title} alt='' />
          </div>
        ) : (
          ''
        )}
      </div>
      
    </div>
  )
}

export default Post