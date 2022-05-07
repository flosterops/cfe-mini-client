import React, { FunctionComponent, PropsWithChildren, ReactElement } from 'react';
import { AlignItemsTypes, JustifyContentTypes } from 'models/layout.model';
import { Column, Row, NavLink, Logo, Container } from 'ui';
import { ILayout } from 'ui/Layout';
import { colors } from 'helpers/colors';
import styled from 'styled-components';

const StyledContainer = styled(Container)<ILayout & { bgImage: string }>`
    background: url(${(props) => props.bgImage});
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: cover;
    & section {
        flex-direction: row-reverse;
    }
`;

interface ILoginLayout extends PropsWithChildren<{ bgImage: string }> {}

const LoginLayout: FunctionComponent<ILoginLayout> = ({ children, bgImage }: ILoginLayout): ReactElement => {
    return (
        <StyledContainer
            padding="0 40px"
            ai={AlignItemsTypes.center}
            jc={JustifyContentTypes.center}
            componentHeight="100%"
            bgImage={bgImage}
        >
            <Column
                jc={JustifyContentTypes.center}
                componentWidth="650px"
                padding="0 105px"
                componentHeight="100%"
                bg={colors.dark}
            >
                <Row jc={JustifyContentTypes.center} mbottom="50px">
                    <NavLink href="/">
                        <Logo />
                    </NavLink>
                </Row>
                {children}
            </Column>
        </StyledContainer>
    );
};

export { LoginLayout };
