import { projects } from "@util/source"
import { slugify } from "@util/helperFn"
import Info from "@src/components/project/info"
import Features from "@src/components/project/feature"
import Head from "next/head"

export default function Project(props) {
  return (<>
    <Head>
      <title>{props.name} - Jonathan Lam</title>
    </Head>
    <div>
      <Info {...props}/>
      <Features {...props}/>
    </div>
  </>)
}

export async function getStaticPaths() {
  return {
    paths: projects.map(({name}) => ({ params: { project: slugify(name)}})),
    fallback: false
  }
}

export async function getStaticProps({params: {project}}) {
  const _project = projects.find(p => slugify(p.name) === project)
  return {
    props: {
      ..._project,
      slug: project
    }
  }
}