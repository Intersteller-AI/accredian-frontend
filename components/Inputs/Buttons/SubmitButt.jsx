import React from 'react'
import "./style.css"


const SubmitButt = ({ label }) => {
  return (
    <div className='w-full max-w-[400px] mt-5'>
      <button class="learn-more">
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
        <span class="button-text">{label}</span>
      </button>
    </div>
  )
}

export default SubmitButt