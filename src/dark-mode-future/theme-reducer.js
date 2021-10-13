export const theme = 'light';

export const themeReducer = (state = theme, action) => {
    if (action.type === 'darken') {
        return 'dark'
    }

    return 'light'
}