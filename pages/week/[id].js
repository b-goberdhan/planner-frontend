import { useState } from 'react'
import PrimaryButton from '../../components/buttons/primary-button'
import authorizedServerFetch from '../../lib/authorizedServerFetch'
import withAuthentication from '../../lib/withAuthentication'

export default function Week({
    week
}) {

    const [weekName, setWeekName] = useState(week.name)
    return (<div className='flex flex-col max-w-7xl w-full h-full p-5 bg-slate-200'>
        <input className={`
            m-5 text-lg font-bold
            h-10 mr-5 p-2 bg-transparent 
            border-b-2 
            ${weekName === '' && 'border-red-500' || 'border-blue-500' } 
            focus:outline-0`} 
            value={weekName}
            onChange={(e) => setWeekName(e.target.value)}
            />
        <div className="p-10 flex items-center">
            <PrimaryButton text='Create Objective'/>
        </div>
    </div>)
}

export const getServerSideProps = withAuthentication(async (ctx) => {

    const weekId = ctx.params.id;
    const { status, data } = await authorizedServerFetch(`${process.env.APP_URL}/api/week/${weekId}`, ctx);
    if (status === 404) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            week: data
        }
    }
})
  