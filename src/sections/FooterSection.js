import React from 'react'
import ExtarnalLinkIcon from '../components/ExtarnalLinkIcon'

const FooterSection = () => {
    return (
        <footer>
            <div className="socialmedia">
                <ExtarnalLinkIcon link="http://facebook.com" icon="fa-brands fa-facebook-f" />
                <ExtarnalLinkIcon link="http://instagram.com" icon="fa-brands fa-instagram" />
                <ExtarnalLinkIcon link="http://twitter.com" icon="fa-brands fa-twitter" />
                <ExtarnalLinkIcon link="http://google.com" icon="fa-brands fa-google" />
                <ExtarnalLinkIcon link="http://linkedin.com" icon="fa-brands fa-linkedin" />
            </div>
            <div>© 2022 Fixxo. All Rights Reserved.</div>
        </footer>
    )
}

export default FooterSection