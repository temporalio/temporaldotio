import Nav from '../components/nav'
import Footer from '../components/Footer'
import React from 'react'
import Head from 'next/head';

export default function CareersPage() {
  return (
    <div>
      <Nav />
      <div className="ml-16">

      <Head>
        <title>Temporal.io Careers</title>
        <script dangerouslySetInnerHTML={{
              __html: `window.leverJobsOptions = {accountName: 'temporal', includeCss: true};` }} 
          />
       <script async type='text/javascript' src='https://andreasmb.github.io/lever-jobs-embed/index.js'></script>
      </Head>
      <h1 className="text-60 leading-60 sm:text-144 sm:leading-144 font-bold">Work with Temporal</h1>
      <h2 className="text-2xl">If none of these positions are a fit, email careers@temporal.io describing your dream job.</h2>
      </div>
      <div className="container ml-16 bg-gray-300 p-8 rounded-lg my-16" >
      <div id='lever-jobs-container'></div>
      </div>
      <hr />
      <Footer/>
    </div>
  )
}