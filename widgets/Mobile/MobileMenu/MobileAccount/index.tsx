import React, { ReactElement } from 'react';
import { Button, Column, Description } from 'ui';
import { ListItem } from 'widgets/Mobile/MobileMenu';
import { colors } from 'helpers/colors';
import { ComponentSizesTypes } from 'models/layout.model';
import styled from 'styled-components';
import { IButton } from 'ui/Button';
import { useAuth } from 'helpers/useAuth';

const LoginButton = styled(Button)<IButton>`
    border: 1px solid ${colors.yellow};
    button {
        height: 33px;
    }
`;

const RegisterButton = styled(Button)<IButton>`
    border: 1px solid ${colors.yellow};
    button {
        height: 33px;
    }
`;

const MobileAccount = (): ReactElement => {
    const { user, routerPush } = useAuth();

    if (!user) {
        return (
            <Column>
                <LoginButton
                    onClick={(): void => routerPush('/login')}
                    componentSize={ComponentSizesTypes.full}
                    color={colors.yellow}
                >
                    <Description color={colors.dark} uppercase>
                        login
                    </Description>
                </LoginButton>
                <RegisterButton
                    onClick={(): void => routerPush('/login')}
                    componentSize={ComponentSizesTypes.full}
                    mtop="20px"
                    color={colors.dark}
                >
                    <Description uppercase>register</Description>
                </RegisterButton>
            </Column>
        );
    }

    return (
        <Column>
            <ListItem pbottom="10px">
                <Description>{user?.email}</Description>
            </ListItem>
            <LoginButton
                color={colors.yellow}
                mtop="20px"
                componentSize={ComponentSizesTypes.full}
                onClick={(): void => routerPush('/account/dashboard')}
            >
                <Description color={colors.dark} uppercase>
                    my account
                </Description>
            </LoginButton>
        </Column>
    );
};

export { MobileAccount };
