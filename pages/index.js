import Hero from '../components/Hero'
import Industries from '../components/Industries'
import Container from '../components/Layout/Container'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Industries />
      </Layout>
    </>
  )
}
