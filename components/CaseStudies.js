// import Link from 'next/link'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function CaseStudies() {
  return (
    <div id="case-studies" className={`
    border-b border-spaceblack
     bg-purple
    flex flex-col
    min-h-screen text-spaceblack
    `}>
      <style jsx>{`

      `}</style>
      <div className="container sm:ml-16">
        <h1 className="bigH1 my-16">Case Studies</h1>
        <p className="text-3xl font-light">Relied on by the companies other companies rely on.</p>
      </div>
      <Tabs className="border-b border-spaceblack flex flex-col flex-1">
        <div className="relative h-64 flex-1 flex flex-col justify-end  border-spaceblack border-b">
          <TabPanel className="absolute p-16" selectedClassName="">
            <Quote img="todo" quote="todo lskdjlskjd lwkjdlwakjd lwakjdlkawjd lkajwldkjawlkdjalwkdjalwkjdw" name="sldkj sdlkj" title="CEO, sdlkjsd" />
          </TabPanel>
          <TabPanel className="absolute p-16" selectedClassName="">
            <Quote img="todo" quote="todo lskdjlskjd lwkjdlwakjd lwakjdlkawjd lkajwldkjawlkdjalwkdjalwkjdw" name="sldkj sdlkj" title="CEO, sdlkjsd" />
          </TabPanel>
          <TabPanel className="absolute p-16" selectedClassName="">
            <Quote img="todo" quote="todo lskdjlskjd lwkjdlwakjd lwakjdlkawjd lkajwldkjawlkdjalwkdjalwkjdw" name="sldkj sdlkj" title="CEO, sdlkjsd" />
          </TabPanel>
          <TabPanel className="absolute p-16" selectedClassName="">
            <Quote img="todo" quote="todo lskdjlskjd lwkjdlwakjd lwakjdlkawjd lkajwldkjawlkdjalwkdjalwkjdw" name="sldkj sdlkj" title="CEO, sdlkjsd" />
          </TabPanel>
        </div>
        <TabList className="flex bg-gray5">
          <Tab selectedClassName="bg-purple2" className="p-4 flex-1 grid place-items-center border-r border-spaceblack">
            <img className="h-32 w-32 object-contain grayscale" src="/logos/logo-Hashicorp.png" aria-label="todo" alt="slkdj" />
          </Tab>
          <Tab selectedClassName="bg-purple2" className="p-4 flex-1 grid place-items-center border-r border-spaceblack">
            <img className="h-32 w-32 object-contain grayscale" src="/logos/logo-Banzaicloud.png" aria-label="todo" alt="slkdj" />
          </Tab>
          <Tab selectedClassName="bg-purple2" className="p-4 flex-1 grid place-items-center border-r border-spaceblack">
            <img className="h-32 w-32 object-contain grayscale" src="/logos/logo-Masmovil.png" aria-label="todo" alt="slkdj" />
          </Tab>
          <Tab selectedClassName="bg-purple2" className="p-4 flex-1 grid place-items-center ">
            <img className="h-32 w-32 object-contain grayscale" src="/logos/logo-Vendasta.png" aria-label="todo" alt="slkdj" />
          </Tab>
        </TabList>
      </Tabs>

    </div>
  )
}

function Quote({ quote, name, title, img }) {
  return (
    <div className="">
      <style jsx>{`
@media (min-width: 640px) { 
  blockquote {
    font-size: 64px;
    line-height: 72px;
    width: 1032px;
  }
}
      `}</style>
      <blockquote className="sm:text-6xl flex-1">
        “{quote}”
      </blockquote>
      <div className="flex p-8">
        <img className="inline mr-4 rounded-full border border-spaceblack" src={img} alt="todo" />
        <span className="font-bold mr-1">{name} / </span>
        <span className="font-light">{title}</span>
      </div>
    </div>
  )
}