import classes from './DarkModeCheckbox.module.css';
import { useContext } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { DispatchContext, ThemeContext } from '../../../dark-mode-future/theme-context';

const DarkModeCheckbox = () => {
    const dark = useContext(ThemeContext)
    const dispatch = useContext(DispatchContext)

    const onChangeHandler = e => {
        if(!dark) {
            dispatch({type: 'darken'})
            localStorage.setItem('dark', true)
            return
        }

        dispatch({type: 'lighten'})
        localStorage.setItem('dark', false)
    }

    // console.log('dark: ', dark)
    // console.log('dispatch: ', dispatch)

    return (
        <label className={classes.Switch}>
            <input type="checkbox" checked={dark} onChange={onChangeHandler} />
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