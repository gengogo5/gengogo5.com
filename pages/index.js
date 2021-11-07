import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>gengogo5.com</title>
      </Head>
      <section className="">
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li className="border-t-2 border-indigo-100" key={id}>
              <Link href={`/posts/${id}`}>
                <a className="block pb-6">
                  <div className="text-gray-400 text-sm">
                    <Date dateString={date} />
                  </div>
                  <span className="text-lg">{title}</span>
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
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
