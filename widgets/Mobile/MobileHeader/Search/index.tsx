import { IGame } from 'models/game.model';
import React, { ReactElement } from 'react';
import { colors } from 'helpers/colors';
import { SearchIcon } from 'ui/Icon/SearchIcon';
import styled from 'styled-components';
import { Button, IButton } from 'ui/Button';

interface ISearch {
    onClick: () => void;
    game?: IGame;
}

const ButtonContainer = styled(Button)<IButton>`
    width: 45px;
    button {
        height: 40px;
        border-bottom: 1px solid ${colors.yellow};
    }
`;
const Search = ({ onClick, game }: ISearch): ReactElement => {
    return (
        <ButtonContainer onClick={onClick} color={colors.yellow}>
            {game ? <img src={game.mobileImage} alt={game.mobileImage} /> : <SearchIcon color={colors.dark} />}
        </ButtonContainer>
    );
};

export { Search };
