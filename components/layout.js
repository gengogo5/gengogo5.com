import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const siteName = 'gengogo5.com'

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta
          name="description"
          content="gengogo5の日記"
        />
        <meta
          property="og:image"
          content="/images/site-ogp.png"
        />
        <meta name="og:title" content={siteName} />
        <meta name="twitter:card" content="summary" />
      </Head>
      <header className="pl-5 tablet:pl-3 pt-1 sticky top-0 border-b border-indigo-50 bg-white z-10">
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
      <div className="py-20 px-6 tablet:p-0 text-gray-700 bg-indigo-50">
        <div className="max-w-[840px] mx-auto justify-center pt-0 p-12 tablet:px-4 rounded-xl tablet:rounded-none bg-white">
          <main>{children}</main>
          {!home && (
            <div>
              <br/>
              <Link href="/">
                <a className="underline">&lt;&lt; 記事一覧へ</a>
              </Link>
            </div>
          )}
        </div>
      </div>
      <footer className="border-t border-indigo-50 bg-white text-center">
        <div className="text-gray-500 text-sm underline pb-1"><Link href="/about">About</Link></div>
        <div className="text-gray-500 text-sm">© 2021 {siteName}</div>
      </footer>
    </>
  )
}
