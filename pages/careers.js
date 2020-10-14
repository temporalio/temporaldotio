import Nav from '../components/nav'
import Footer from '../components/Footer'
import React from 'react'
import Head from 'next/head';

export default function CareersPage() {
  return (
    <div>
      <style jsx>{` 
      #lever-jobs-container {
        color: white
      }
      `}</style>
      <Nav />
      <div className="ml-4 sm:ml-16">

        <Head>
          <title>Temporal.io Careers</title>
          <script dangerouslySetInnerHTML={{
            __html: `window.leverJobsOptions = {accountName: 'temporal', includeCss: true};`
          }}
          />
          <script async type='text/javascript' src='https://andreasmb.github.io/lever-jobs-embed/index.js'></script>
        </Head>
        <h1 className="text-3xl sm:w-800 leading-lg sm:text-4xl sm:leading-4xl font-bold mb-4">Help us deliver a new way to build scalable and reliable applications!</h1>
        <h2 className="text-xl leading-tight">If none of these positions are a fit, email careers@temporal.io describing your dream job.</h2>
      </div>
      <div className="container p-8 rounded-lg my-16 sm:ml-16" >
        <div id='lever-jobs-container'></div>
      </div>
      <hr />
      <Footer />
    </div>
  )
}