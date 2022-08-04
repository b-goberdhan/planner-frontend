import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import styles from '../styles/Home.module.css'

function Goals({ data }) {
    console.log(data)
    return (

            <div class="w-full h-full p-5 bg-slate-200" id="sidebar">
                <div class="w-24 h-24 absolute bottom-0 right-0">FAB</div>
            </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:4000/goal/1`);
    const data = await res.json();
    return { props: {data}}
}

export default Goals;
