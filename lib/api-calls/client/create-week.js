import authorizedClientFetch from "../../authorizedClientFetch";

const createWeek = async (goalId) => {
    const currentDate = new Date(Date.now()).toISOString();
    await authorizedClientFetch(`/api/goals/${goalId}/week/new`, {
        name: 'New Week',
        startDate: currentDate
    }, {
        method: 'POST'
    })
}

export default createWeek;