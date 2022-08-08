import { getCookie } from 'cookies-next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import WithSideBar from '../components/layouts/withSidebar'
import Sidebar from '../components/sidebar'
import authorizedFetch from '../lib/authorizedFetch'
import withAuthentication from '../lib/withAuthentication'
import styles from '../styles/Home.module.css'

export default function Goals(props) {
    console.log(props)
    return (
        <WithSideBar>
            <div class="w-full h-full p-5 bg-slate-200" id="sidebar">
                <div class="w-24 h-24 absolute bottom-0 right-0">FAB</div>
            </div>
        </WithSideBar>

    )
}

export const getServerSideProps = withAuthentication(async (ctx) => {
    try {
        const response = await authorizedFetch(`${process.env.APP_URL}/api/goals`, ctx);
        const body = await response.json()
        return {
            props: {
                goals: body.goals
            }
        }
    }
    catch(e) {
        console.log(e)
    }
  })
  