import DirectionalControl from './DirectionalControl';
import MoonScape from './MoonScape';

export default function Footer() {
  return (
    <footer
      id="footer"
      className={`
      overflow-hidden
    border-t border-lightgray
    flex flex-col-reverse sm:flex-row sm:mt-16
    `}>
      <div className="flex-1 border-r border-lightgray relative">
        <MoonScape />
      </div>
      <div className="flex-1 flex flex-col ">
        <div className="p-8 sm:p-16 sm:border-b border-lightgray">
          <h2 className="text-3xl font-bold mb-4">Temporal Cloud</h2>
          <p className="w-56 lg:w-700 mb-8">
            Temporal Cloud is a fully managed cloud offering of the open-source Server.{' '}
            <a
              className="hover:underline text-blue-400 hover:text-blue-300"
              href="https://docs.temporal.io/#cloud">
              See features
            </a>{' '}
            and sign up for the waitlist.
          </p>
          <div className="mt-4 flex">
            <DirectionalControl
              secondary
              href="https://us17.list-manage.com/survey?u=2334a0f23e55fd1840613755d&id=f1895b6f4a">
              Book your place
            </DirectionalControl>
          </div>
        </div>
        <div className="p-8 sm:p-16 pb-32 relative flex">
          <div className="mr-32">
            <ul>
              <li className="mb-2 font-light">
                <a
                  className="hover:text-blue-200 hover:underline"
                  href="https://github.com/temporalio/temporal">
                  GitHub
                </a>
              </li>
              <li className="mb-2 font-light">
                <a
                  className="hover:text-blue-200 hover:underline"
                  href="https://community.temporal.io/">
                  Community
                </a>
              </li>
              <li className="mb-2 font-light">
                <a
                  className="hover:text-blue-200 hover:underline"
                  href="https://join.slack.com/t/temporalio/shared_invite/zt-onhti57l-J0bl~Tr7MqSUnIc1upjRkw">
                  Slack
                </a>
              </li>
              <li className="mb-2 font-light">
                <a className="hover:text-blue-200 hover:underline" href="https://lu.ma/temporal">
                  Signup for Office Hours
                </a>
              </li>
              <li className="mb-2 font-light">
                <a
                  className="hover:text-blue-200 hover:underline"
                  href="https://twitter.com/temporalio">
                  Twitter
                </a>
              </li>
              <li className="mb-2 font-light">
                <a
                  className="hover:text-blue-200 hover:underline"
                  href="https://www.youtube.com/channel/UCGovZyy8OfFPNlNV0i1fI1g">
                  YouTube
                </a>
              </li>
              <li className="mb-2 font-light">
                <a className="hover:text-blue-200 hover:underline" href="/press">
                  Press/Brand Assets
                </a>
              </li>
            </ul>
          </div>
          <div className="mr-16 sm:mr-32">
            <ul>
              <li className="mb-2 font-light">
                <a
                  className="hover:text-blue-200 hover:underline"
                  href="https://docs.temporal.io/docs/get-started">
                  Get started
                </a>
              </li>
              <li className="mb-2 font-light">
                <a
                  className="hover:text-blue-200 hover:underline"
                  href="https://docs.temporal.io/docs/server-introduction">
                  Server
                </a>
              </li>
              <li className="mb-2 font-light">
                <a
                  className="hover:text-blue-200 hover:underline"
                  href="https://docs.temporal.io/docs/sdks-introduction">
                  API
                </a>
              </li>
              <li className="mb-2 font-light">
                <a
                  className="hover:text-blue-200 hover:underline"
                  href="https://docs.temporal.io/docs/concept-overview">
                  Concepts
                </a>
              </li>
              <li className="mb-2 font-light">
                <a
                  className="hover:text-blue-200 hover:underline"
                  href="https://docs.temporal.io/security">
                  Security
                </a>
              </li>
              <li className="mb-2 font-light">
                <a
                  className="hover:text-blue-200 hover:underline"
                  href="https://docs.temporal.io/privacy-policy/">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2 font-light">
                <a
                  className="hover:text-blue-200 hover:underline"
                  href="https://docs.temporal.io/pdf/temporal-tos-2021-01-19.pdf">
                  Terms of Service
                </a>
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
