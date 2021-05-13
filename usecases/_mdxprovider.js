import { MDXProvider as _MDXProvider } from '@mdx-js/react';
import Image from 'next/image';
import {
  H1,
  H2,
  Text,
  Pre,
  Code,
  Strong,
  Em,
  OL,
  UL,
  LI,
  A,
  Blockquote,
  Del,
  Hr,
  HX
} from '../components/elements';
// import {Banner} from '../../components/Banner'
// import {Nav} from '../../components/Nav'
import Head from 'next/head';

export default function MDXProvider(props) {
  const components = {
    img: (props) => (
      <div className="h-full relative">
        <Image layout="fill" {...props} />
      </div>
    ),
    h1: H1(props.slugPrefix),
    h2: H2(props.slugPrefix),
    h3: HX(props.slugPrefix),
    h4: HX(props.slugPrefix),
    h5: HX(props.slugPrefix),
    h6: HX(props.slugPrefix),
    p: Text,
    code: Pre,
    strong: Strong,
    em: Em,
    inlineCode: Code,
    ol: OL,
    ul: UL,
    li: LI,
    a: A,
    blockquote: Blockquote,
    del: Del,
    hr: Hr
  };
  return (
    <>
      <Head>
        <title>Temporal.io Home</title>
      </Head>
      {/* <Banner />
        <Nav /> */}
      <_MDXProvider components={components}>
        <main id={props.slugPrefix} className="text-xl flex-1" {...props} />
      </_MDXProvider>
    </>
  );
}
