import Nav from '../components/nav'
import React from 'react'

export default function CareersPage() {
  const [text, setText] = React.useState('')
  React.useEffect(() => {
    setText(`
    <script type='text/javascript'>window.leverJobsOptions = {accountName: 'temporal', includeCss: true};</script>
    <script type='text/javascript' src='https://andreasmb.github.io/lever-jobs-embed/index.js'></script>
    `)
  })
  return (
    <div>
      <Nav />
      <div id='lever-jobs-container'></div>
      <div dangerouslySetInnerHTML={{__html: text}}/>
    </div>
  )
}