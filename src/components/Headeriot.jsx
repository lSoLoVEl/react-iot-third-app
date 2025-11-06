import React from 'react'

export default function Headeriot(props) {
    const {wow,woo} = props
  return (
    <div>
        <h1 className='text-center text-blue-600 text-3xl'>สวัสดี IoT SAU</h1>
        <hr style={{width:"80%"}} className='mb-5 mx-auto'/>
        <br />
        {wow}{woo}
    </div>
  )
}
