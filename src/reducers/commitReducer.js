
let initState = {
    status: "completed",
    display: false,
    list: []
}
export default (state = initState, action) => {
    switch (action.type) {
        case 'GET_COMMITS_PENDING':
            return {
                ...state,
                status: "pending"
            }
        case 'GET_COMMITS_FULFILLED':
            return {
                ...state,
                status: "completed",
                display: true,
                list: [...state.list, ...action.payload.data]
            }
        case 'COMMIT_DISPLAY':
            return {
                ...state,
                display: false
            }
        default:
            return state
    }
}
