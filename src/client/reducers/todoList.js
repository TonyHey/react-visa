export default (state = {}, action) => {
    switch (action.type) {
    case "ADD_TODO":
        return {
            id: action.id,
            text: action.text,
            completed: false // 刚传入的待办项未完成
        }
    case "TOGGLE_TODO":
        if (state.id !== action.id) {
            return state
        }
        return Object.assign({}, state, {
            completed: !state.completed
        })
    default:
        return state
    }
}
