import { useRouter } from 'next/router'
import Card from '../../components/card'
import FloatingActionButton from '../../components/floating-action-button'
import authorizedClientFetch from '../../lib/authorizedClientFetch'
import authorizedServerFetch from '../../lib/authorizedServerFetch'
import withAuthentication from '../../lib/withAuthentication'

export default function Goals({goals}) {
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
                router.push(`/goals/${goal.id}`);
            }
        }
        
    };  

    const openGoal = (goalId) => {
        router.push(`/goals/${goalId}`);
    }

    return (
        <div className="overflow-y flex max-w-7xl flex-wrap p-5 " id="sidebar">
            {
                goals.map(goal => (
                    <div onClick={() => openGoal(goal.id)}>
                        <Card 
                            name={goal.name} 
                            description={goal.description} 
                            numberOfWeeks={goal.weeks.length}/>
                    </div>)
                )
            }
            <div className="w-24 h-24 absolute bottom-0 right-0">
                <FloatingActionButton onClick={createGoal}/>
            </div>
        </div>

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
  