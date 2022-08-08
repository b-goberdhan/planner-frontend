import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import WithSideBar from '../components/layouts/withSidebar'
import Sidebar from '../components/sidebar'
import withAuthentication from '../lib/withAuthentication'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <WithSideBar>
        <div class="w-full h-full bg-slate-200" id="sidebar">
            Overview
        </div>
      </WithSideBar>

  )
}

export const getServerSideProps = withAuthentication(async (ctx) => {
  return {
    props: {}
  }
})
