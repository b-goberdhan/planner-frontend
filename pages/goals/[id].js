import { useRouter } from 'next/router'
import authorizedServerFetch from '../../lib/authorizedServerFetch'
import withAuthentication from '../../lib/withAuthentication'
import { FaPlusCircle } from 'react-icons/fa';
import { useState } from 'react';
import WeekCard from '../../components/week-card';
import createWeek from '../../lib/api-calls/client/create-week';
import LoadingSpinner from '../../components/loading-spinner';
import getGoal from '../../lib/api-calls/client/get-goal';


export default function Goal({
    goal
}) {
    const router = useRouter();
    const [goalName, setGoalName] = useState(goal.name);
    const [weeks, setWeeks] = useState(goal.weeks)
    const [isCreatingWeek, setIsCreatingWeek] = useState(false);
    const onAddWeek = async () => {
        if (!isCreatingWeek) {
            setIsCreatingWeek(true);
            try {
                await createWeek(goal.id);
                const response = await getGoal(goal.id);
                setWeeks(response.data.weeks);
            }
            finally {
                setIsCreatingWeek(false);
            }
        }
    } 
    const goToWeek = (weekId) => {
        router.push(`/week/${weekId}`);
    }
    return (
        <div className="flex flex-col max-w-7xl w-full h-full p-5 bg-slate-200" id="sidebar">
             <input className={`
                        m-5 text-lg font-bold
                        h-10 mr-5 p-2 bg-transparent 
                        border-b-2 
                        ${goalName === '' && 'border-red-500' || 'border-blue-500' } 
                        focus:outline-0`} 
                        value={goalName}
                        onChange={(e) => setGoalName(e.target.value)}
                    />
            <div className="p-10 flex items-center">
                <div className='flex h-full flex-col w-1/4'>
                    <div className={`flex items-center 
                            ml-2 mb-2 bg-blue-500 p-4 h-10 
                            rounded
                            text-white
                            active:opacity-95
                            hover:opacity-80 

                            ${ isCreatingWeek && 'cursor-disabled' || 'cursor-pointer'  }`}
                        onClick={() => onAddWeek()}>
                        <FaPlusCircle className='mr-2'/>
                        <div className='flex w-full justify-between items-center'>
                            <p className='mr-24'>Add week</p>
                            {isCreatingWeek && <LoadingSpinner/>}
                        </div>
                       
                    </div>
                    {
                        weeks.map(week => (
                            <div className='mb-2'>
                                <WeekCard name={week.name} onClick={() => goToWeek(week.id)}/>
                            </div>
                        ))
                    }
                </div>
                <div className='flex w-3/4 items-center'>
                    Overview of goal stuff
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = withAuthentication(async (ctx) => {

    const goalId = ctx.params.id
    const { status, data } = await authorizedServerFetch(`${process.env.APP_URL}/api/goals/${goalId}`, ctx);

    if (status === 404) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            goal: data
        }
    }
})
  