import { useReducer } from 'react';
import classes from './DarkModeCheckbox.module.css';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { themeColor, themeReducer } from '../../../dark-mode-future/theme-reducer';

const DarkModeCheckbox = ({ isDark }) => {
    const [theme, dispatch] = useReducer(themeReducer, themeColor)

    const onChangeHandler = e => {
        if(theme === 'light') {
            return dispatch({type: 'darken'})
        }

        dispatch({type: 'lighten'})
    }

    // console.log(theme)

    return (
        <label className={classes.Switch}>
            <input type="checkbox" value={theme} onChange={onChangeHandler} />
            <span className={[classes.Slider, classes.Round].join(' ')}>
                {
                    theme === 'dark'
                    ?
                    <span className={classes.Moon}>
                        <BsFillMoonFill />
                    </span>
                    :
                    <span className={classes.Sun}>
                        <BsFillSunFill />
                    </span>
                }
            </span>
        </label>
    )
}

export { DarkModeCheckbox }