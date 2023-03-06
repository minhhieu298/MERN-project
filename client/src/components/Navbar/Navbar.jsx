import React from 'react'
import NavWrap, { AuthWrapper, AvatarWrapper, Container, MenuArea, MenuWrapper } from './style'
import logo from '../../assets/logo.png'
import logo_2 from '../../assets/logo_2.png'
const Navbar = ({
    headerType,
    mainMenu,
    authMenu,
    searchVisibility,
    isLogged,
    profile,
    scroll
}) => {
    const addAllClasses = ['navbar'];
    if (headerType) {
        addAllClasses.push(`is_${headerType}`)
    }
    return (
        <NavWrap className={addAllClasses.join(' ')}>
            <Container>
                <div className='logo'>
                    {
                        headerType === 'transparent' && scroll ? <img src={logo} alt="" /> :
                            headerType === 'transparent' && !scroll ? <img src={logo_2} alt="" /> : <img src={logo} alt="" />
                    }
                </div>
                <MenuArea>
                    {
                        mainMenu && (
                            <MenuWrapper className='menu-wrap'>{mainMenu}</MenuWrapper>
                        )
                    }
                    {
                        isLogged ? (
                            <AvatarWrapper>
                                {profile}
                            </AvatarWrapper>
                        ) : (
                            authMenu && <AuthWrapper>{authMenu}</AuthWrapper>
                        )
                    }
                </MenuArea>
            </Container>
        </NavWrap>
    )
}

export default Navbar