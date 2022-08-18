import { useRouter } from 'next/router'
import WithSideBar from '../../components/layouts/withSidebar'
import authorizedServerFetch from '../../lib/authorizedServerFetch'
import withAuthentication from '../../lib/withAuthentication'

export default function Goal({
    goal
}) {
    console.log(goal)
    const router = useRouter()
    return (
        <WithSideBar>
            <div class="w-full h-full p-5 bg-slate-200" id="sidebar">
                {goal.name}
            </div>
        </WithSideBar>

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
  