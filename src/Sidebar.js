import React from 'react'

const list = [
  { id: 1, strong: 'Build better habits ', text: 'by surrounding yourself with productive makers.', icon: 'ship' },
  { id: 2, strong: 'Get advice & feedback ', text: 'from experienced bootstrappers.', icon: 'chat' },
  { id: 3, strong: 'Stay accountable ', text: 'by publicly sharing your progress.', icon: 'checked' },
]

export const Sidebar = () => {
  return (
    <div className='col-12 col-md-6 col-lg-4 p-4 aside'>
      <h1 className='title h3'>Join a community of makers shipping together.</h1>
      <div className='subtitle my-3'>From first-ti,e entrepreneurs to solo-founders bootstrapping $300,000/year companies.</div>
      <ul className='list m-2'>
        {list.map(item => (
          <li className='d-flex mb-2 pb-2' key={item.id}>
            <span className='icon'><img src={`${item.icon}.png`} alt='' /></span>
            <div className='pl-2'>
              <p className='font-size-md mb-0'>
                <strong>{item.strong}</strong>
                {item.text}
              </p>
            </div>
          </li>
        ))}
      </ul>
      {/* <small className='text-muted'>By signing up you agree to our <a href='#' className='text-muted'>terms.</a></small> */}
    </div>
  )
}