import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import classes from './DarkModeCheckbox.module.css';


const DarkModeCheckbox = ({ value, isDark }) => {
    return (
        <label className={classes.Switch}>
            <input type="checkbox" value={value}/>
            <span className={[classes.Slider, classes.Round].join(' ')}>
                {
                    isDark
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