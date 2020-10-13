// import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="footer" className={`
    border-b border-white
    flex flex-col-reverse sm:flex-row 
    `}>
      <style jsx>{`
      `}</style>
      <div className="flex-1 border-r border-gray5 relative">
        <img className="absolute bottom-0 left-0" src="/FooterMoon.png" alt="footer moon" />
        {/* leave blank for space */}
      </div>
      <div className="flex-1 flex flex-col">
        <div className="p-16 border-b border-gray5">

          <h2 className="text-3xl font-bold mb-4">Temporal Cloud</h2>
          <p className="w-56 mb-8">Sign up for Temporal Cloud updates and early access:</p>

          <form action="https://temporal.us17.list-manage.com/subscribe/post?u=2334a0f23e55fd1840613755d&amp;id=bbbbd4709f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate="novalidate" className="validate">
            <div id="mc_embed_signup_scroll" className="signup_controls">
              <div className="email_wrap">
                <input className="bg-spaceblack w-full py-2 text-gray-500 border-b border-white" type="email" 
                // value=""
                 name="EMAIL" id="mce-EMAIL" placeholder="email" required="required" />
              </div>
              <span className="cta_text" style={{ display: "none" }}>You are in the waitlist!</span>
              {/* <div className="spacer" style="display:none;"></div> */}
              <input type="submit" 
              // value=""
               name="waitlist" id="mc-embedded-waitlist" className="tt-button tt-button--lightblue tt-button--outline tt-button--block@xs button-email" style={{ display: "none" }} />
            </div>
          </form>
        </div>
        <div className="p-16 relative flex">
          <div className="mr-32">
            <h3 className="mb-4 font-light text-gray-500">Community</h3>
            <ul>
              <li className="mb-2"><a href="https://github.com/temporalio/temporal">GitHub</a></li>
              <li className="mb-2"><a href="https://community.temporal.io/">Community</a></li>
              <li className="mb-2"><a href="https://twitter.com/temporaltech">Twitter</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-light text-gray-500">Docs</h3>
            {/* todo: fix these links */}
            <ul>
              <li className="mb-2"><a href="https://github.com/temporalio/temporal">Guides</a></li>
              <li className="mb-2"><a href="https://community.temporal.io/">Tutorials</a></li>
              <li className="mb-2"><a href="https://twitter.com/temporaltech">API</a></li>
              <li className="mb-2"><a href="https://twitter.com/temporaltech">Quickstarts</a></li>
              <li className="mb-2"><a href="https://twitter.com/temporaltech">REPL</a></li>
            </ul>
          </div>
          <img className="absolute bottom-0 right-0 mb-8 mr-8" src="/logos/temporal-white-mark.png" alt="logo" />
        </div>
      </div>
    </footer>
  )
}