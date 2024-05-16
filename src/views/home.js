import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>District Operations Analyst</title>
        <meta property="og:title" content="District Operations Analyst" />
      </Helmet>
    </div>
  )
}

export default Home
