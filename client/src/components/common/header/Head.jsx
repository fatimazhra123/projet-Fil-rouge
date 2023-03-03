import React from "react"
import logo from "../../assets/images/PANNEAU-60X45-WEB-removebg-preview.png"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            {/* <h1>Cours SOutiens</h1> */}
            <div className='logo'>
            <img src={logo} alt='logo' width='130px' />
          </div>
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
