import classes from './Input.module.css';
import { ErrorMessage } from '../../../Utilities';

const Input = ({ type, label, name, id, value, error, onChange, onFocus, onBlur }) => {
    let display;
    switch (type) {
        case 'text': {
            display = (
                <>
                    <label htmlFor={id}>{label}</label>
                    <ErrorMessage>{error}</ErrorMessage>
                    <input
                        name={name}
                        id={id}
                        type="text"
                        value={value}
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                    />
                </>
            )
            break
        }
        case 'file': {
            display = (
                <>
                    <label htmlFor={id}>{label}</label>
                    <ErrorMessage>{error}</ErrorMessage>
                    <input
                        name={name}
                        id={id}
                        type="file"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                    />
                </>
            )
        }
        break
    }
    return (
        <div className={classes.Input}>
            {display}
        </div>
    )
}

export { Input }