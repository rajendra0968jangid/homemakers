import React from 'react'
import { NavLink } from 'react-router-dom'

const skilldev = () => {
  return (
    <div>
      <div className="flex flex-col px-[3rem] bg-#F5F5F5 h-auto">
      <h1 className="text-5xl font-semibold w-full text-center py-[3rem]">
        Skill Development
      </h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-[3rem]'>
      <div className="w-full">
        <NavLink to="https://upflairs.com/courses/full-stack-web-development-in-jaipur/">
              <div className="service-box shadow-md">
                <div className='img-dimensions'>
                  <img src="/services.jpg" alt="" />
                </div>
                <div className="service-content">
                  <h2 className="s-title">Responsive Design</h2>
                  <p className="s-description text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni adipisci eaque autem fugiat! Quia, provident vitae!
                    Magni tempora perferendis eum non provident.
                  </p>
                </div>
              </div>
              </NavLink>
            </div>
            <div className="w-full">
              <div className="service-box shadow-md">
                <div className='img-dimensions'>
                  <img src="/services.jpg" alt="" />
                </div>
                <div className="service-content">
                  <h2 className="s-title">Responsive Design</h2>
                  <p className="s-description text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni adipisci eaque autem fugiat! Quia, provident vitae!
                    Magni tempora perferendis eum non provident.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="service-box shadow-md">
                <div className='img-dimensions'>
                  <img src="/services.jpg" alt="" />
                </div>
                <div className="service-content">
                  <h2 className="s-title">Responsive Design</h2>
                  <p className="s-description text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni adipisci eaque autem fugiat! Quia, provident vitae!
                    Magni tempora perferendis eum non provident.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="service-box shadow-md">
                <div className='img-dimensions'>
                  <img src="/services.jpg" alt="" />
                </div>
                <div className="service-content">
                  <h2 className="s-title">Responsive Design</h2>
                  <p className="s-description text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni adipisci eaque autem fugiat! Quia, provident vitae!
                    Magni tempora perferendis eum non provident.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
            <div className="service-box shadow-md">
            <div className='img-dimensions'>
                  <img src="/services.jpg" alt="" />
                </div>
                <div className="service-content">
                  <h2 className="s-title">Graphic Design</h2>
                  <p className="s-description text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni adipisci eaque autem fugiat! Quia, provident vitae!
                    Magni tempora perferendis eum non provident.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="service-box shadow-md">
              <div className='img-dimensions'>
                  <img src="/services.jpg" alt="" />
                </div>
                <div className="service-content">
                  <h2 className="s-title">Marketing Services</h2>
                  <p className="s-description text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni adipisci eaque autem fugiat! Quia, provident vitae!
                    Magni tempora perferendis eum non provident.
                  </p>
                </div>
              </div>
            </div>
            </div>
      </div>
    </div>
  )
}

export default skilldev
