import authorizedClientFetch from "../../authorizedClientFetch";

const getGoal = async (goalId) => {
    return await authorizedClientFetch(`/api/goals/${goalId}`, null , {
        method: 'GET'
    });
}

export default getGoal;