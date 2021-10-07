import { SocialIcon } from 'react-social-icons';

const NavLinks = props => {
    return (
        <>
            <li>
                <SocialIcon style={{width: '40px', height: '40px'}} url="https://github.com/SinaBYR"/>
            </li>
            <li>
                <SocialIcon style={{width: '40px', height: '40px'}} url="https://wwww.linkedin.com/sinabyr"/>
            </li>
            <li>
                {/* <SocialIcon style={{width: '40px', height: '40px'}} url="https://wwww.twitter.com/sinabyr"/> */}
            </li>
        </>
    )
}

export { NavLinks }