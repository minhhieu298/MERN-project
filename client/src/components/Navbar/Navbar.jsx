import React from 'react'
import NavWrap, { AuthWrapper, AvatarWrapper, Container, MenuArea, MenuWrapper } from './style'

const Navbar = ({
    headerType,
    mainMenu,
    authMenu,
    searchVisibility,
    isLogged,
    profile
}) => {
    const addAllClasses = ['navbar'];
    if (headerType) {
        addAllClasses.push(`is_${headerType}`)
    }
    return (
        <NavWrap className={addAllClasses.join(' ')}>
            <Container>
                <div>logo</div>
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