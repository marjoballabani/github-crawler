
let initState = {
    status: "completed",
    selected: "",
    list: []
}
export default (state = initState, action) => {
    switch (action.type) {
        case 'GET_REPO_PENDING':
            return {
                ...state,
                status: "pending"
            }
        case 'GET_REPO_FULFILLED':
            return {
                ...state,
                status: "completed",
                list: action.payload.data
            }
        case 'SELECT_REPO':
            return {
                ...state,
                selected: action.selected
            }
        default:
            return state
    }
}
