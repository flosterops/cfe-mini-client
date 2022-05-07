import styled from 'styled-components';
import { Button, IButton } from 'ui/Button';
import { colors } from 'helpers/colors';
import React, { ReactElement } from 'react';
import { Icon } from 'ui/Icon';
import { IconTypes } from 'helpers/icons';

interface IBurger {
    onClick: () => void;
}

const ButtonContainer = styled(Button)<IButton>`
    width: 45px;
    button {
        height: 40px;
        border-bottom: 1px solid ${colors.yellow};
    }
`;

const Burger = ({ onClick }: IBurger): ReactElement => {
    return (
        <ButtonContainer onClick={onClick} color={colors.yellow}>
            <Icon alt={IconTypes.burger} icon={IconTypes.burger} />
        </ButtonContainer>
    );
};

export { Burger };
