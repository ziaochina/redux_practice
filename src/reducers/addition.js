//a+b=c
const addition = (state = { a: 1, b: 1, c: 2 }, action) => {
    console.log(action)
  
    switch (action.type) {
        
        case 'ADDITION_A_CHANGE':
            return {
                ...state,
                a: action.value,
                c: Number(action.value) + state.b
            }
        default:
            return state
    }
}

export default addition
