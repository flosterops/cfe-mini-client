import React, { FunctionComponent, ReactElement } from 'react';
import { Collapse, Column, Description, Logo, Row } from 'ui';
import styled from 'styled-components';
import { ILayout } from 'ui/Layout';
import { IGame } from 'models/game.model';
import { Locales } from 'widgets/index';
import { AlignItemsTypes, AlignTextTypes, FontSizeTypes, JustifyContentTypes } from 'models/layout.model';
import { IDescription } from 'ui/Description';
import { MobileAccount } from 'widgets/Mobile/MobileMenu/MobileAccount';
import { GameHeading } from 'widgets/Mobile/MobileMenu/GameHeading';
import { colors } from 'helpers/colors';

export const ListItem = styled(Row)<ILayout>`
    border-bottom: 1px solid ${colors.grayMedium};
`;

const GameList = styled(Row)<ILayout>`
    flex-wrap: wrap;
    max-height: 210px;
    overflow: auto;
`;

const GameName = styled(Description)<IDescription>`
    font-size: 12px;
`;

const Game = styled(Column)<ILayout>`
    width: calc(100% / 3);
`;

interface IMobileMenu {
    games: IGame[];
}

export enum MenuPosition {
    left = 'left',
    right = 'right',
}

const MobileMenu: FunctionComponent<IMobileMenu> = ({ games }: IMobileMenu): ReactElement => {
    return (
        <Column>
            <Row componentHeight="50px" componentWidth="auto" mtop="36px" padding="0 15px">
                <Logo />
            </Row>
            <Column mtop="30px">
                <Collapse
                    heading={(visible: boolean): ReactElement => <GameHeading visible={visible} />}
                    icon={(): false => false}
                >
                    <GameList padding="0 15px">
                        {games.map(
                            (game: IGame): ReactElement => {
                                return (
                                    <Game
                                        key={game.id}
                                        mtop="12px"
                                        componentHeight="80px"
                                        ai={AlignItemsTypes.center}
                                        jc={JustifyContentTypes.center}
                                    >
                                        <Column
                                            ai={AlignItemsTypes.center}
                                            componentHeight="50px"
                                            jc={JustifyContentTypes.center}
                                        >
                                            <img src={game.mobileImage} alt={game.mobileImage} />
                                        </Column>
                                        <Column componentHeight="35px" ai={AlignItemsTypes.center}>
                                            <GameName textAlign={AlignTextTypes.center} fontSize={FontSizeTypes.xs}>
                                                {game.name}
                                            </GameName>
                                        </Column>
                                    </Game>
                                );
                            }
                        )}
                    </GameList>
                </Collapse>
                <ListItem ai={AlignItemsTypes.center} padding="0 15px" componentHeight="40px">
                    <Description uppercase>store</Description>
                </ListItem>
                <ListItem ai={AlignItemsTypes.center} padding="0 15px" componentHeight="40px">
                    <Description uppercase>news</Description>
                </ListItem>
                <Row ai={AlignItemsTypes.center} padding="0 15px" componentHeight="40px">
                    <Description uppercase>support</Description>
                </Row>
            </Column>
            <Column mtop="50px" padding="0 15px">
                <MobileAccount />
                <Row jc={JustifyContentTypes.center} mtop="30px">
                    <Locales short={false} />
                </Row>
            </Column>
        </Column>
    );
};

export { MobileMenu };
