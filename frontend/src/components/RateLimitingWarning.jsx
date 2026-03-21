import React from 'react'

const RateLimitingWarning = () => {
  return (
    <div>
      <div className='p-8 bg-cyan-300/10 rounded-4xl m-6' >
        <h1 className='font-bold '>RATE-LIMITING WARNING</h1>
        <p>You can only refresh and send requests for 100 requests fro  every 60mins we have controlled it by using upstash rate-limiting</p>
      </div>
    </div>
  )
}

export default RateLimitingWarning;