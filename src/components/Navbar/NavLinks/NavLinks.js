import { SocialIcon } from 'react-social-icons';
import { useContext } from 'react/cjs/react.development';
import { ThemeContext } from '../../../dark-mode-future/theme-context';
import { colors } from '../../../color-palette/color-palette';

const NavLinks = ({ mobile }) => {
    const dark = useContext(ThemeContext)
    return (
        <>
            <li>
                <SocialIcon bgColor={dark ? colors.primary : null} style={{width: mobile ? '80px' : '40px', height: mobile ? '80px' : '40px'}} url="https://github.com/SinaBYR"/>
            </li>
            <li>
                <SocialIcon bgColor={dark ? colors.primary : null} style={{width: mobile ? '80px' : '40px', height: mobile ? '80px' : '40px'}} url="https://wwww.linkedin.com/sinabyr"/>
            </li>
            <li>
                <SocialIcon bgColor={dark ? colors.primary : null} style={{width: mobile ? '80px' : '40px', height: mobile ? '80px' : '40px'}} url="https://wwww.twitter.com/sinabyr"/>
            </li>
        </>
    )
}

export { NavLinks }