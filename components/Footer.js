export default function Footer() {
  return (
    <footer
      id="footer"
      className={`
    border-t border-lightgray
    flex flex-col-reverse sm:flex-row sm:mt-16
    `}>
      <div className="flex-1 border-r border-lightgray relative">
        <img className="absolute bottom-0 left-0" src="/FooterMoon.png" alt="footer moon" />
      </div>
      <div className="flex-1 flex flex-col ">
        <div className="p-8 sm:p-16 sm:border-b border-lightgray">
          <h2 className="text-3xl font-bold mb-4">Temporal Cloud</h2>
          <p className="w-56 lg:w-700 mb-8">
            Temporal Cloud is coming soon. Sign up for waitlist and updates.
          </p>

          <form
            action="https://temporal.us17.list-manage.com/subscribe/post?u=2334a0f23e55fd1840613755d&amp;id=bbbbd4709f"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank"
            noValidate="novalidate"
            className="validate">
            <div id="mc_embed_signup_scroll" className="signup_controls">
              <div className="email_wrap">
                <label htmlFor="mce-EMAIL" className="sr-only">
                  Email:
                </label>
                <input
                  className="bg-spaceblack w-full py-2 text-gray-500 border-b border-white"
                  type="email"
                  name="EMAIL"
                  id="mce-EMAIL"
                  placeholder="Your email"
                  required="required"
                />
              </div>
              <span className="cta_text" style={{ display: 'none' }}>
                You are in the waitlist!
              </span>
              <input
                type="submit"
                name="waitlist"
                id="mc-embedded-waitlist"
                className="tt-button tt-button--lightblue tt-button--outline tt-button--block@xs button-email"
                style={{ display: 'none' }}
              />
            </div>
          </form>
        </div>
        <div className="p-8 sm:p-16 pb-32 relative flex">
          <div className="mr-32">
            <h3 className="mb-4 font-bold underline text-gray-200 sm:text-gray-500">Community</h3>
            <ul>
              <li className="mb-2 font-light">
                <a href="https://github.com/temporalio/temporal">GitHub</a>
              </li>
              <li className="mb-2 font-light">
                <a href="https://community.temporal.io/">Community</a>
              </li>
              <li className="mb-2 font-light">
                <a href="https://join.slack.com/t/temporalio/shared_invite/zt-onhti57l-J0bl~Tr7MqSUnIc1upjRkw">
                  Slack
                </a>
              </li>
              <li className="mb-2 font-light">
                <a href="https://twitter.com/temporalio">Twitter</a>
              </li>
              <li className="mb-2 font-light">
                <a href="/press">Press/Brand Assets</a>
              </li>
            </ul>
          </div>
          <div className="mr-16 sm:mr-32">
            <h3 className="mb-4 font-bold underline text-gray-200 sm:text-gray-500">Docs</h3>
            <ul>
              <li className="mb-2 font-light">
                <a href="https://docs.temporal.io/docs/get-started">Get started</a>
              </li>
              <li className="mb-2 font-light">
                <a href="https://docs.temporal.io/docs/server-introduction">Server</a>
              </li>
              <li className="mb-2 font-light">
                <a href="https://docs.temporal.io/docs/sdks-introduction">API</a>
              </li>
              <li className="mb-2 font-light">
                <a href="https://docs.temporal.io/docs/concept-overview">Concepts</a>
              </li>
              <li className="mb-2 font-light">
                <a href="https://docs.temporal.io/security">Security</a>
              </li>
              <li className="mb-2 font-light">
                <a href="https://docs.temporal.io/privacy-policy/">Privacy Policy</a>
              </li>
              <li className="mb-2 font-light">
                <a href="https://docs.temporal.io/pdf/temporal-tos-2021-01-19.pdf">Terms of Service</a>
              </li>
            </ul>
          </div>
          <img
            // className="presetTransition hover:scale-110 h-16 w-16 sm:h-32 sm:w-32 object-cover"
            // className="h-16 w-16 sm:h-32 sm:w-32 object-cover"
            className="absolute bottom-0 sm:relative sm:bottom-auto left-1 mb-6 mr-6 h-16 w-16 sm:h-32 sm:w-32"
            src="/logos/logo-soc2.png"
            aria-label="SOC2 logo"
            alt="SOC2 logo"
          />
          <img
            className="absolute bottom-0 right-0 mb-8 mr-8"
            src="/logos/temporal-white-mark.png"
            alt="logo"
          />
        </div>
      </div>
    </footer>
  );
}
