import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import markdownToHtml from "zenn-markdown-html";

const postsDirectory = path.join(process.cwd(), 'posts')

const getAllPostData = async () => {
  const fileNames = fs.readdirSync(postsDirectory)
  return Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, '')
      return await getPostData(id)
    })
  )
}

export async function getSortedPostsData(category = null) {
  var allPostsData = await getAllPostData()

  // カテゴリが指定された場合はカテゴリで絞り込む
  if (category !== null) {
    allPostsData = allPostsData.filter(post => post.category == category)
  }

  // 記事は日付降順にソートする
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

export async function getAllCategories() {
  const allPostsData = await getAllPostData()
  const categories = [...new Set(allPostsData.map( p => p.category))]

  return categories.map(c => {
    return {
      params: {
        category: c
      }
    }
  })
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const contentHtml = markdownToHtml(matterResult.content);

  // 最初の一文を抜粋として取得する
  // 末尾スペース×2を入れると</p>が出力されないので<br>で拾う
  const firstParagraph = contentHtml.match(/<p>(.+)?(<\/p>|<br>)/)
  const summary = firstParagraph == null ? '' : firstParagraph[1].replace(/<[^>]*>/g, '')

  return {
    id,
    contentHtml,
    summary,
    ...matterResult.data
  }
}
