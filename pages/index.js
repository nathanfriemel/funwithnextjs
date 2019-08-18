import Head from 'next/head'
import Link from 'next/link'

// const DynamicComponent = dynamic(() => import('../components/hello'))

function Home() {
  return <div>
    <Head>
      <title>This is the home page!!!</title>
    </Head>
    <style global jsx>{`
      body {
        margin: 0;
        padding: 0;
      }
    `}</style>
    <style jsx>{`
      div {
        background: red;
      }
      h1 {
        color: white;
        margin: 0;
      }
    `}</style>
    <h1>Welcome to Next.js!</h1>
    <img src="/static/hak.jpg" alt="" />
    <Link href="/post/[pid]" as="/post/abc">
      <a>A Post</a>
    </Link>
  </div>
}

export default Home
