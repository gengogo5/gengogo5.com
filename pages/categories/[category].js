import Layout from '../../components/layout'
import { getAllCategories, getSortedPostsData } from '../../lib/posts'
import Head from 'next/head'
import React from 'react';
import IndexItem from '../../components/indexItem'

export default function Home({ allPostsMetaData }) {
  return (
    <Layout home>
      <Head>
        <title>gengogo5.com</title>
      </Head>
      <section className="pt-5">
        <ul>
          {allPostsMetaData.map(({ id, summary, date, title, category }) => (
            <IndexItem id={id} summary={summary} date={date} title={title} category={category}/>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = await getAllCategories()

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const allPostsData = await getSortedPostsData(params?.category)

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

