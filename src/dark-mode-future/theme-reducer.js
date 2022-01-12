export const initialState = localStorage.getItem('dark') === 'true' || false;

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'darken': {
            return true
        }
        case 'lighten': {
            return false
        }
        default: {
            return state
        }
    }
}