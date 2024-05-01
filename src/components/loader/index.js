import React from 'react'
import loaderImg from '../../assets/images/loader.svg'
import './index.scss'

const Loader = ({type}) => {
  return (
    <div className={`loader ${type}`}>
        <img src={loaderImg} alt='loader'/>
    </div>
  )
}

export default Loader