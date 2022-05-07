import React, { FunctionComponent, ReactElement } from 'react';
import { Column, Description, Logo, NavLink, Row } from 'ui';
import { IGame } from 'models/game.model';
import { colors } from 'helpers/colors';
import styled from 'styled-components';
import { AlignItemsTypes, ComponentSizesTypes, FontSizeTypes, JustifyContentTypes } from 'models/layout.model';
import { Form, Field } from 'widgets/index';
import { IFieldProps } from 'widgets/Form/FieldWrap';
import { IconTypes } from 'helpers/icons';
import { IDescription } from 'ui/Description';

interface MobileSearch {
    games: IGame[];
}

const GameImage = styled.img`
    width: 20px;
    height: 20px;
`;

const StyledField = styled(Field)<IFieldProps>`
    & input {
        height: 30px;
        border-color: transparent;
        background: #130923;
        font-size: 12px;
    }
`;

const Category = styled(Description)<IDescription>`
    white-space: nowrap;
`;

const MobileSearch: FunctionComponent<MobileSearch> = ({ games }: MobileSearch): ReactElement => {
    return (
        <Column>
            <Row componentHeight="50px" componentWidth="auto" mtop="36px" padding="0 15px">
                <Logo />
            </Row>
            <Row mtop="30px" padding="0 15px">
                <NavLink href="/">
                    <Description color={colors.yellow} uppercase>
                        glyph store
                    </Description>
                </NavLink>
            </Row>
            <Form initialValues={{ search: '' }}>
                {(): ReactElement => {
                    return (
                        <StyledField
                            margin="10px 0 0"
                            componentSize={ComponentSizesTypes.full}
                            name="search"
                            type="search"
                            icon={IconTypes.search}
                        />
                    );
                }}
            </Form>
            <Column mtop="20px">
                {games.map(
                    (game: IGame): ReactElement => {
                        return (
                            <Row
                                componentHeight="30px"
                                key={game.id}
                                mbottom="15px"
                                padding="0 15px"
                                ai={AlignItemsTypes.center}
                                jc={JustifyContentTypes.spaceBetween}
                            >
                                <Row componentWidth="auto">
                                    <NavLink href={{ pathname: '/[channel]', query: { channel: game.channel } }}>
                                        <GameImage src={game.mobileImage} alt={game.mobileImage} />
                                        <Description mleft="15px" fontSize={FontSizeTypes.xs}>
                                            {game.name}
                                        </Description>
                                    </NavLink>
                                </Row>
                                <Category color={colors.yellow} fontSize={FontSizeTypes.xs} uppercase>
                                    {game.category}
                                </Category>
                            </Row>
                        );
                    }
                )}
            </Column>
        </Column>
    );
};

export { MobileSearch };
