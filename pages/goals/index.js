import { useRouter } from 'next/router'
import FloatingActionButton from '../../components/floating-action-button'
import WithSideBar from '../../components/layouts/withSidebar'
import authorizedClientFetch from '../../lib/authorizedClientFetch'
import authorizedServerFetch from '../../lib/authorizedServerFetch'
import withAuthentication from '../../lib/withAuthentication'

export default function Goals({goals}) {
    console.log(goals)
    const router = useRouter()
    const createGoal =  async () => {
        const response = await authorizedClientFetch('/api/goals/new', {
            method: 'POST',
            body: {
                name: `New Goal ${goals.length + 1}`
            }
        });
        if (response.status === 200) {
            if (response.status === 200) {
                router.push(`/goals/${goal.id}`)
            }
        }
        
    };  
    return (
        <WithSideBar>
            <div class="w-full h-full p-5 bg-slate-200" id="sidebar">
                {goals.map(goal => goal.name + ", ")}
                <div class="w-24 h-24 absolute bottom-0 right-0">
                    <FloatingActionButton onClick={createGoal}/>
                </div>
            </div>
        </WithSideBar>

    )
}

export const getServerSideProps = withAuthentication(async (ctx) => {
    const { data } = await authorizedServerFetch(`${process.env.APP_URL}/api/goals`, ctx);
    return {
        props: {
            goals: data.goals,
        }
    }
})
  