import { SocialIcon } from 'react-social-icons';
import { useContext } from 'react/cjs/react.development';
import { ThemeContext } from '../../../dark-mode-future/theme-context';
import { colors } from '../../../color-palette/color-palette';

const NavLinks = ({ mobile }) => {
    const dark = useContext(ThemeContext)
    return (
        <>
            <li>
                <SocialIcon bgColor={dark ? colors.light.secondary : null} style={{width: mobile ? '80px' : '40px', height: mobile ? '80px' : '40px'}} url="https://www.github.com/SinaBYR"/>
            </li>
            <li>
                <SocialIcon bgColor={dark ? colors.light.secondary : null} style={{width: mobile ? '80px' : '40px', height: mobile ? '80px' : '40px'}} url="https://www.linkedin.com/in/sina-beyraghdar-7bb920162/"/>
            </li>
            <li>
                <SocialIcon bgColor={dark ? colors.light.secondary : null} style={{width: mobile ? '80px' : '40px', height: mobile ? '80px' : '40px'}} url="https://www.twitter.com/sinabyr"/>
            </li>
        </>
    )
}

export { NavLinks }