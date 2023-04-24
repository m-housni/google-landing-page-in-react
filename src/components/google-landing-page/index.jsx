import React from 'react'
import Nav from './partials/Nav'
import Logo from './partials/Logo'
import SearchForm from './partials/SearchForm'
import Footer from './partials/Footer'

import './styles.css'

const GoogleLandingPage = () => { 
  return (
    <div className='body'>
      <Nav />
      <div className='main'>
        <Logo />
        <SearchForm />
      </div>
      <Footer />
    </div>
  )
}

export default GoogleLandingPage