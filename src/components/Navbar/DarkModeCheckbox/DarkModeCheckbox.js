import { useContext } from 'react';
import classes from './DarkModeCheckbox.module.css';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { DispatchContext, ThemeContext } from '../../../dark-mode-future/theme-context';

const DarkModeCheckbox = () => {
    // const [dark, dispatch] = useReducer(themeReducer, isDark)
    const dark = useContext(ThemeContext)
    const dispatch = useContext(DispatchContext)

    const onChangeHandler = e => {
        if(!dark) {
            return dispatch({type: 'darken'})
        }

        dispatch({type: 'lighten'})
    }

    // console.log('dark: ', dark)
    // console.log('dispatch: ', dispatch)

    return (
        <label className={classes.Switch}>
            <input type="checkbox" value={dark} onChange={onChangeHandler} />
            <span className={[classes.Slider, classes.Round].join(' ')}>
                {
                    dark
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