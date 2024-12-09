import React from 'react'

function About() {
  return (
    <div className="container w-screen flex p-10">
        <img className='w-1/2 rounded-2xl' src="/wce_acm_team.jpg" alt="" />

        <div className="content w-1/2 text-white ml-10">
            <h2 className='font-extrabold text-6xl'>WHO ARE WE?</h2>
            <p className='mt-10 text-xl'>WCE ACM Student Chapter is an
 esteemed auxiliary of ACM, dedicated to
 advancing Computer Science since 2016.
 As a distinguished technical chapter, we
 foster co-curricular activities that
 promote overall development, shaping
 students into responsible adults with
 strong core values. This is an institute
 club driven by CSE department.</p>
        </div>
        
    </div>
  )
}

export default About