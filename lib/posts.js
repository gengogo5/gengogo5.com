import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm'
import remark2rehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import remarkPrism from 'remark-prism'
import remarkUnwrapImages from 'remark-unwrap-images';

const postsDirectory = path.join(process.cwd(), 'posts')

const getAllPostData = async () => {
  const fileNames = fs.readdirSync(postsDirectory)

  return Promise.all(
    fileNames.map(async (fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '')
  
      return await getPostData(id)
    })
  )
}

export async function getSortedPostsData() {
  const allPostsData = await getAllPostData()

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkPrism)
    .use(remarkUnwrapImages)
    .use(remark2rehype)
    .use(rehypeStringify)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // 最初の一文を抜粋として取得する
  // 末尾スペース×2を入れると</p>が出力されないので<br>で拾う
  const firstParagraph = contentHtml.match(/<p>(.+)?(<\/p>|<br>)/)
  const summary = firstParagraph == null ? '' : firstParagraph[1].replace(/<[^>]*>/g, '')

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    summary,
    ...matterResult.data
  }
}
