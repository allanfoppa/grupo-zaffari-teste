import React from 'react'

import appLogo from '../../assets/images/logo.png'

import { Header, ImageLogo } from '../../styles';

class HeaderApp extends React.Component {
    render() {
        return (
            <Header>
                <ImageLogo src={appLogo} alt=""/>
            </Header>
        );
    }
}

export default HeaderApp