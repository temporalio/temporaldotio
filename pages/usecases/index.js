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
      <Nav />
      <section id="usecases-group" className={`container mx-auto justify-evenly px-8 py-16`}>
        <h1 className="sm:mb-4 text-4xl sm:text-60 leading-48 sm:leading-72 font-bold">
          Use Cases
        </h1>
        <h2 className="text-xl sm:w-800 leading-lg sm:text-2xl sm:leading-2xl mb-4">
          There are many applications for a highly scalable, fault-oblivious system like Temporal.
          Here are just some of the most popular, to jog your imagination.
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left">
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
              Monitoring
            </a>
          </li>
          <li>
            <a className="hover:underline text-blue-300 hover:text-blue-200" href="#Pipelines">
              Data Pipelines
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
        <section className="wrapper my-8 flex flex-col md:flex-row justify-center">
          <Header id="orchestration">Microservices Orchestration</Header>
          <Orchestration slugPrefix="orchestration" />
        </section>
        <section className="wrapper my-8 flex flex-col md:flex-row justify-center">
          <Header id="transactions">Distributed Transactions</Header>
          <Transactions slugPrefix="transactions" />
        </section>
        <section className="wrapper my-8 flex flex-col md:flex-row justify-center">
          <Header id="provisioning">Infrastructure Provisioning</Header>
          <Provisioning slugPrefix="provisioning" />
        </section>
        <section className="wrapper my-8 flex flex-col md:flex-row justify-center">
          <Header id="Monitoring">Monitoring</Header>
          <Monitoring slugPrefix="Monitoring" />
        </section>
        <section className="wrapper my-8 flex flex-col md:flex-row justify-center">
          <Header id="Pipelines">Data Pipelines</Header>
          <Pipelines slugPrefix="Pipelines" />
        </section>
        <section className="wrapper my-8 flex flex-col md:flex-row justify-center">
          <Header id="Processes">Long Running Processes</Header>
          <Processes slugPrefix="Processes" />
        </section>
        <section className="wrapper my-8 flex flex-col md:flex-row justify-center">
          <Header id="DSL">DSL Workflows</Header>
          <DSL slugPrefix="DSL" />
        </section>
        <section className="wrapper my-8 flex flex-col md:flex-row justify-center">
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
    bg-spaceblack w-full
    md:w-300 md:mr-4 md:mt-12 mb-4 py-4 md:py-0
    ">
      <h2
        id={id}
        className="text-2xl font-bold 
    leading-lg sm:text-3xl sm:leading-2xl ">
        <a className="hover:underline text-blue-300 hover:text-blue-200" href={`#${id}`}>
          {children}
        </a>
      </h2>
    </div>
  );
}
