import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const siteName = 'gengogo5.com'

export default function Layout({ children, home }) {
  return (
    <div className="max-w-[840px] mx-auto justify-center pt-0 p-12 tablet:px-4 rounded-xl tablet:rounded-none bg-white">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="gengogo5の雑記帳"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteName
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteName} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="py-3 sticky top-0 bg-white z-10">
        <div className="inline-flex">
          <Link href="/">
            <a className="block">
              <Image
                priority
                src="/images/profile.jpg"
                className="rounded-full"
                height={32}
                width={32}
              />
              <Image
                priority
                src="/images/sitelogo.png"
                height={32}
                width={180}
              />
            </a>
          </Link>
        </div>
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>&lt;&lt; 記事一覧へ</a>
          </Link>
        </div>
      )}
    </div>
  )
}
