import Head from '../components/head'
import Markdown from '../components/Markdown'
import readMe from './../README.md'
import { PageWrapper } from '../styles/components'

export default function About() {
  return (
    <>
      <Head title={'About'} />
      <PageWrapper>
        <Markdown markdown={readMe}/>
      </PageWrapper> 
    </>
  )
}
