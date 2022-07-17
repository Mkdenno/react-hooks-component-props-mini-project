import React from 'react'

function About({about, image = "https://via.placeholder.com/215"}) {
  return (
    <aside>
        <img src={image} placeholder="https://via.placeholder.com/215" alt='blog logo'/>
        <p>{about}</p>
    </aside>
  )
}

export default About