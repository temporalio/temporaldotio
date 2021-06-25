import Link from 'next/link';

const Stack = ({ content, link, title }) => (
  <div className="stack after:transition-all text-white relative">
    <div className="stack__content transition-all h-full w-full p-4 bg-black relative border-2 flex flex-col">
      <span className="text-lg font-bold">{title}</span>
      <p className="flex-grow font-light my-4">{content}</p>
      <Link href={link}>
        <a className="nav-link text-center text-temporalblue">Learn More</a>
      </Link>
    </div>
  </div>
);

const USE_CASES = [
  {
    link: '/usecases#orchestration',
    content: 'Temporal is a perfect fit for orchestrating microservices.',
    title: 'Microservices Orchestration'
  },
  {
    content:
      "For software that interacts with money (especially someone else's), reliability and consistency are top priorities.",
    link: '/usecases#transactions',
    title: 'Financial Transactions'
  },
  {
    content:
      'Provisioning resources depends on a series of potentially long-running operations with many possibilities for intermittent failures.',
    link: '/usecases#provisioning',
    title: 'Resource Provisioning'
  },
  {
    content:
      'Temporal provides guaranteed execution with exactly-once semantics with automatic retries.',
    link: '/usecases#monitoring',
    title: 'Monitoring'
  }
];

const StackedUseCases = () => (
  <section
    id="use-cases"
    className={`
    container mx-auto
    px-8 py-16
    `}>
    <div className="grid gap-6 md:grid-cols-2 lg:w-800 mx-auto">
      {USE_CASES.map((useCase) => (
        <Stack
          content={useCase.content}
          link={useCase.link}
          title={useCase.title}
          key={useCase.link}
        />
      ))}
    </div>
  </section>
);

export default StackedUseCases;
