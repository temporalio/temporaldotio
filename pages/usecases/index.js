import Layout from './_mdxprovider';
import { Nav } from '../../components/Nav';
import { Banner } from '../../components/Banner';
import Orchestration from './orchestration.mdx';
import Transactions from './transactions.mdx';
import Provisioning from './provisioning.mdx';
import Monitoring from './monitoring.mdx';
import Pipelines from './pipelines.mdx';
import Processes from './long-running-processes.mdx';
import DSL from './dsl.mdx';
import Actors from './actors.mdx';
import Footer from '../../components/Footer';
export default function Page() {
  return (
    <Layout>
      <Banner />
      <section id="usecases-group" className={`container mx-auto justify-evenly px-8 py-16`}>
        <Nav />
      </section>
      <section id="usecases-group" className={`container mx-auto justify-evenly px-8 py-16`}>
        <h1 className="sm:mb-4 text-4xl sm:text-60 leading-48 sm:leading-72 font-bold">
          Use Cases
        </h1>
        <h2 className="text-xl sm:w-800 leading-lg sm:text-2xl sm:leading-2xl mb-8">
          There are many applications for a highly scalable, fault-oblivious system like Temporal.
          Here are just some of the most popular, to jog your imagination.
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left mb-12">
          <li>
            <a className="hover:underline text-blue-300 hover:text-blue-200" href="#orchestration">
              Microservices Orchestration
            </a>
          </li>
          <li>
            <a className="hover:underline text-blue-300 hover:text-blue-200" href="#transactions">
              Distributed Transactions
            </a>
          </li>
          <li>
            <a className="hover:underline text-blue-300 hover:text-blue-200" href="#provisioning">
              Infrastructure Provisioning
            </a>
          </li>
          <li>
            <a className="hover:underline text-blue-300 hover:text-blue-200" href="#Monitoring">
              Monitoring and Polling
            </a>
          </li>
          <li>
            <a className="hover:underline text-blue-300 hover:text-blue-200" href="#Pipelines">
              Data Processing Pipelines
            </a>
          </li>
          <li>
            <a className="hover:underline text-blue-300 hover:text-blue-200" href="#Processes">
              Long Running Processes
            </a>
          </li>
          <li>
            <a className="hover:underline text-blue-300 hover:text-blue-200" href="#DSL">
              DSL Workflows
            </a>
          </li>
          <li>
            <a className="hover:underline text-blue-300 hover:text-blue-200" href="#Actors">
              Scalable Actors
            </a>
          </li>
        </ul>
        <section className="grid grid-cols-1 md:grid-cols-usecases gap-4 auto-cols-min ">
          <Header id="orchestration">Microservices Orchestration</Header>
          <Orchestration slugPrefix="orchestration" />
          <Header id="transactions">Distributed Transactions</Header>
          <Transactions slugPrefix="transactions" />
          <Header id="provisioning">Infrastructure Provisioning</Header>
          <Provisioning slugPrefix="provisioning" />
          <Header id="Monitoring">Monitoring and Polling</Header>
          <Monitoring slugPrefix="Monitoring" />
          <Header id="Pipelines">Data Processing Pipelines</Header>
          <Pipelines slugPrefix="Pipelines" />
          <Header id="Processes">Long Running Processes</Header>
          <Processes slugPrefix="Processes" />
          <Header id="DSL">DSL Workflows</Header>
          <DSL slugPrefix="DSL" />
          <Header id="Actors">Scalable Actors</Header>
          <Actors slugPrefix="Actors" />
        </section>
      </section>
      <Footer />
    </Layout>
  );
}

function Header({ id, children }) {
  return (
    <div
      className="self-start sticky top-0 
    bg-spaceblack w-full mb-4 py-4 md:pt-12
    ">
      <h2
        className="text-2xl font-bold 
    leading-lg sm:text-3xl sm:leading-2xl ">
        <a className="hover:underline text-blue-300 hover:text-blue-200" href={`#${id}`}>
          {children}
        </a>
      </h2>
      <a
        className="font-italic hover:underline text-blue-600 hover:text-blue-500"
        href="#usecases-group">
        back to top
      </a>
    </div>
  );
}
