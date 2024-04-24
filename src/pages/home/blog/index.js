import React from 'react'
import './index.scss'
import TitleBox from '../../../components/titleBox'
const blogArr = [
  {
    img: require('../../../assets/images/blog1.jpg'),
    title: 'New Warehouses in Australia',
    comment: '2',
    like: '5',
    link: ''
  },
  {
    img: require('../../../assets/images/blog2.jpg'),
    title: 'New Warehouses in Australia',
    comment: '2',
    like: '5',
    link: ''
  },
  {
    img: require('../../../assets/images/blog3.jpg'),
    title: 'New Warehouses in Australia',
    comment: '2',
    like: '5',
    link: ''
  },
]
const Blog = () => {
  return (
    <div className='pb-[100px]'>
      <div className="container">
        <TitleBox title1='FRESH NEWS' title2='FROM THE BLOG' detail="In our blog, you can learn more about the company, the staff, corporate terms & policy changes, as well as important logistic news from all over the world." />
        <div className="flex gap-y-4 justify-between flex-wrap blogWrap">
          {
            blogArr.map((blogData, index) => (
              <div key={index} className='py-9 px-10 bannerBox w-full before:bg-[#333537] before:opacity-90' style={{ backgroundImage: `url(${blogData.img})`}}>
                <h4 className='text-white text-[24px] font-semibold cursor-pointer hover:text-[#f0b913] duration-300 transition-colors'>{blogData.title}</h4>
                <div className="flex justify-between items-center mt-8 mb-5">
                  <div className="flex gap-1 items-center">
                    <i className="far fa-folder text-white fsSm"></i>
                    <p className='fsSm text-white fw600 uppercase cursor-pointer hover:text-[#f0b913] duration-300 transition-colors'>News & Updates</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <i className="far fa-comment-alt text-white fsSm"></i>
                    <p className='fsSm text-white cursor-pointer hover:text-[#f0b913] duration-300 fw600'>{blogData.comment}</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <i className="far fa-heart text-white fsSm"></i>
                    <p className='fsSm text-white cursor-pointer hover:text-[#f0b913] transition-colors duration-300 fw600'>{blogData.like}</p>
                  </div>
                </div>
                <a href={blogData.link} className='cursor-pointer hover:text-[#f0b913] uppercase fsSm fw600 text-white flex items-center gap-2'>Read more <i className="fas fa-arrow-right text-[12px]"></i></a>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default Blog
