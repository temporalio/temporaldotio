export default function TemporalVs() {
  return (
    <section
      id="temporal-vs"
      className={`
    container mx-auto
    text-white
    min-h-screen
    px-2 sm:px-8 py-16
    `}>
      <h1 className=" text-60 leading-60 lg:text-144 lg:leading-144 uppercase mb-4 lg:mb-16">
        Temporal Vs.
      </h1>
      <h2 className="font-light italic text-md sm:text-2xl mb-4">
        What's the difference between Temporal and...
      </h2>
      <ul className="border-t border-l border-r border-white mb-32 container">
        <VSItem header="Homegrown Scripts and Queues" defaultState>
          <h2 className="font-bold">
            Most developers hand-write async flows using queues and job processors.
          </h2>
          <p>
            This often requires requisitioning new infrastructure, and hand-writing often buggy,
            not-well-distributed and hard-to-test code with a lot of ad hoc code to review that has
            nothing to do with the business logic. Temporal offers a battle tested framework to
            organize all async business logic, running it atop a single set of infrastructure at
            massive scale.
          </p>
        </VSItem>
        <VSItem header="DAG-based Workflow Engines">
          <h2 className="font-bold mb-3">
            DAG-based Workflow Engines like Airflow/Prefect/Luigi are pipeline solutions aimed at
            data scientists running at a small-medium scale.
          </h2>
          <p className="mb-3">
            Whereas Temporal provides a code-first development environment which can be used to
            build data pipelines, orchestrate microservices, provision resources and much more. Code
            written with Temporal is executed directly which enables users to use the development,
            debugging and testing processes they already know and love.
          </p>
          <p className="mb-3">
            While Temporal is a great option for data pipelines, we are not a data pipeline
            framework. Temporal enables the development of apps of all shapes, sizes and scales.
          </p>
          <p className="mb-3">
            Temporal targets developers and all code written with Temporal runs directly instead of
            compiling a intermediate DAG. This gives you flexibility which is impossible to achieve
            with more rigid DAG based systems.
          </p>
        </VSItem>
        <VSItem header="BPM Engines">
          <h2 className="font-bold mb-4">
            BPM Engines like Camunda Zeebe help orchestrate microservices at a large scale with
            BPMN.
          </h2>
          <p className="mb-3">
            Temporal provides a strongly-consistent code-first development environment which can be
            used for orchestrating microservices, building data pipelines, provisioning resources
            and much more. Code written with Temporal is executed directly which enables users to
            use the development, debugging and testing processes they already know and love.{' '}
          </p>
          <p className="mb-3">
            Temporal targets developers and all code written with Temporal runs directly instead of
            being translated to an intermediate representation. This gives you flexibility which is
            impossible to achieve with DSL approaches.
          </p>
        </VSItem>
        <VSItem header="JSON-based Workflow Engines">
          <h2 className="font-bold mb-4">
            JSON-based Workflow Engines like AWS Step Functions are aimed at high scale, light
            complexity applications.{' '}
          </h2>
          <p className="mb-3">
            Whereas Temporal provides a code-first development environment which can be used to
            build data pipelines, orchestrate microservices, provision resources and much more. Code
            written with Temporal is executed directly which enables users to use the development,
            debugging and testing processes they already know and love.
          </p>
          <p className="mb-3">
            Step Functions can be a great service for non-developers or technical managers to define
            business logic without writing code. While Step Functions is a great service there is no
            open source implementation provided which puts it into a much different class compared
            to Temporal.
          </p>
          <p className="mb-3">
            Temporal is an open source system which enables developers to test locally, deploy to
            their own hardware and more. Step Functions is only available as a service from AWS
            which puts you at the mercy of their decisions.
          </p>
          <p className="mb-3">
            Temporal targets developers and all code written with Temporal runs directly instead of
            being translated from a DSL. This gives you flexibility which is impossible to achieve
            with more rigid DSL based systems.
          </p>
          <p className="mb-3">
            Step Functions does not support signaling and other complex "actor" features. This
            drastically restricts the potential use cases for Step Functions.
          </p>
        </VSItem>
      </ul>
    </section>
  );
}

// this looks very similar to VSItem in UseCases.js
// but we keep it separate to keep it agile and customizable without affecting usecases.js
function VSItem({ header, children, defaultState = false }) {
  const [state, setState] = React.useState(defaultState);
  return (
    <li className="border-b border-white">
      <div
        className={
          (state ? ' bg-gray5 text-spaceblack' : '') + ' p-4 border-b border-spaceblack text-2xl'
        }>
        <button
          onClick={() => setState(!state)}
          className={
            'w-full cursor-pointer flex items-center justify-between ' +
            (state ? 'hover:text-teal-700' : 'hover:text-temporalblue')
          }>
          <span>{header}</span>
          <span>
            {state ? (
              // - icon
              <svg
                className="w-8 sm:w-12 h-8 sm:h-12"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            ) : (
              // plus icon
              <svg
                className="w-8 sm:w-12 h-8 sm:h-12"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            )}
          </span>
        </button>
      </div>
      {state && (
        <div className={(state ? 'bg-white text-spaceblack' : '') + ' p-4'}>{children}</div>
      )}
    </li>
  );
}
