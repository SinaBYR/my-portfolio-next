export const themeColor = 'light';

export const themeReducer = (theme, action) => {
    if (action.type === 'darken') {
        return 'dark'
    }

    return 'light'
}