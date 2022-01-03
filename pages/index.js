import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import IndexItem from '../components/indexItem'

export default function Home({ allPostsMetaData }) {
  return (
    <Layout home>
      <Head>
        <title>gengogo5.com</title>
      </Head>
      <section className="pt-5">
        <ul>
          {allPostsMetaData.map(({ id, summary, date, title, category }) => (
            <IndexItem id={id} summary={summary} date={date} title={title} category={category} key={id}/>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData()

  const allPostsMetaData = allPostsData.map((data) => {
    const { contentHtml, ...metaData } = data
    return metaData
  })

  return {
    props: {
      allPostsMetaData
    }
  }
}
