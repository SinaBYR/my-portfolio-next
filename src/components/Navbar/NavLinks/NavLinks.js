import { SocialIcon } from 'react-social-icons';

const NavLinks = ({ mobile }) => {
    let links = (
        <>
            <li>
                <SocialIcon style={{width: '40px', height: '40px'}} url="https://github.com/SinaBYR"/>
            </li>
            <li>
                <SocialIcon style={{width: '40px', height: '40px'}} url="https://wwww.linkedin.com/sinabyr"/>
            </li>
            <li>
                <SocialIcon style={{width: '40px', height: '40px'}} url="https://wwww.twitter.com/sinabyr"/>
            </li>
        </>
    )

    if(mobile) {
        links = (
            <>
                <li>
                    <SocialIcon style={{width: '80px', height: '80px'}} url="https://github.com/SinaBYR"/>
                </li>
                <li>
                    <SocialIcon style={{width: '80px', height: '80px'}} url="https://wwww.linkedin.com/sinabyr"/>
                </li>
                <li>
                    <SocialIcon style={{width: '80px', height: '80px'}} url="https://wwww.twitter.com/sinabyr"/>
                </li>
            </>
        )
    }

    return links
}

export { NavLinks }