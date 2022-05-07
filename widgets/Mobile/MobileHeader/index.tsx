import React, { FunctionComponent, ReactElement, useState } from 'react';
import styled from 'styled-components';
import { colors } from 'helpers/colors';
import { Column, Logo, NavLink, Row } from 'ui';
import { IGame } from 'models/game.model';
import { AlignItemsTypes, JustifyContentTypes } from 'models/layout.model';
import { MenuDrawer, MobileMenu, MobileSearch, MobileStoreMenu } from 'widgets/index';
import { MenuPosition } from 'widgets/Mobile/MobileMenu';
import { ILayout } from 'ui/Layout';
import { media } from 'helpers/theme';
import { BreakPoints } from 'helpers/responsive';
import { Category } from 'models/category.model';
import { Search } from 'widgets/Mobile/MobileHeader/Search';
import { Burger } from 'widgets/Mobile/MobileHeader/Burger';

interface MobileHeader {
    games: IGame[];
    channel?: string;
    categories: Category[];
}

const LogoContainer = styled(Row)<ILayout>`
    & a {
        border: 0;
    }
`;

const StyledMobileHeader = styled(Column)<ILayout>`
    ${media.lessThan(BreakPoints.phone)} {
        display: flex;
    }
    ${media.moreThan(BreakPoints.phone)} {
        display: none;
    }
`;

const MobileHeader: FunctionComponent<MobileHeader> = ({ games, channel, categories }: MobileHeader): ReactElement => {
    const [menu, setMenu] = useState<boolean>(false);
    const [search, setSearch] = useState<boolean>(false);
    const currentGame = games.find((game: IGame): boolean => game.channel === channel);

    return (
        <StyledMobileHeader componentHeight="40px">
            <Row
                componentHeight="40px"
                bg={colors.dark}
                ai={AlignItemsTypes.center}
                jc={JustifyContentTypes.spaceBetween}
            >
                <Row componentWidth="auto" componentHeight="100%">
                    <Search onClick={(): void => setSearch(true)} game={currentGame} />
                </Row>
                <LogoContainer
                    componentHeight="40px"
                    padding="8px 0"
                    jc={JustifyContentTypes.center}
                    ai={AlignItemsTypes.center}
                >
                    <NavLink href="/">
                        <Logo />
                    </NavLink>
                </LogoContainer>
                <Row componentWidth="auto" componentHeight="100%">
                    <Burger onClick={(): void => setMenu(true)} />
                </Row>
            </Row>
            {search && (
                <MenuDrawer position={MenuPosition.left} onClose={(): void => setSearch(false)}>
                    {channel ? (
                        <MobileStoreMenu categories={categories} currentGame={currentGame as IGame} />
                    ) : (
                        <MobileSearch games={games} />
                    )}
                </MenuDrawer>
            )}
            {menu && (
                <MenuDrawer position={MenuPosition.right} onClose={(): void => setMenu(false)}>
                    <MobileMenu games={games} />
                </MenuDrawer>
            )}
        </StyledMobileHeader>
    );
};

export { MobileHeader };
