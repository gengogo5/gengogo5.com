import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import Layout from '../components/layout'
import markdownToHtml from "zenn-markdown-html"

export default function Description({ content }) {
  return (
    <Layout>
      <Head>
        <title>gengogo5.com</title>
      </Head>
      <section className="znc pt-2">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'pages/fixedPages')
  const fullPath = path.join(postsDirectory, `about.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const contentHtml = markdownToHtml(fileContents)

  return { props: { content: contentHtml } }
}
