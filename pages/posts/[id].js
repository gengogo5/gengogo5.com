import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeReact from 'rehype-react';
import React from 'react';
import CustomImage from '../../components/customImage';
import CustomLink from '../../components/customLink';
import Link from 'next/link';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="markdown">
        <div className="text-gray-500 pt-5">
          <Date dateString={postData.date} />
        </div>
        <span className="ml-1 px-1 border rounded-lg border-solid bg-gray-100 hover:bg-gray-200">
          <Link href={`/categories/${postData.category}`}>
            <a className="text-sm text-gray-700">{postData.category}</a>
          </Link>
        </span>
        <h1 className="text-3xl pb-5 font-bold">{postData.title}</h1>
        {html2react(postData.contentHtml)}
      </article>
    </Layout>
  )
}

// LinkとImageを本文で使う為、HTML書き出しではなくreactコンポーネント書き出しにした
export function html2react(contentHtml) {
  const reactComponent = unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeReact, {
      createElement: React.createElement,
      components: {
        img: CustomImage,
        a: CustomLink,
      }
    })
    .processSync(contentHtml).result;
  return reactComponent
} 

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
