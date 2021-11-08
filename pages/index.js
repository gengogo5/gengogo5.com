import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsMetaData }) {
  return (
    <Layout home>
      <Head>
        <title>gengogo5.com</title>
      </Head>
      <section className="pt-5">
        <ul>
          {allPostsMetaData.map(({ id, summary, date, title }) => (
            <li className="border-b border-indigo-100 pt-1" key={id}>
              <Link href={`/posts/${id}`}>
                <a className="block pb-6 hover:opacity-60">
                  <div className="text-gray-400 text-sm">
                    <Date dateString={date} />
                  </div>
                  <span className="text-lg font-semibold">{title}</span>
                  <div className="text-sm text-gray-500">{summary}</div>
                </a>
              </Link>
            </li>
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
