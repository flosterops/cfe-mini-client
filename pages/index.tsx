import React, { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Column, Container, GameCart, HomePageGif, Row, Title } from 'ui';
import { ILayout } from 'ui/Layout';
import { colors } from 'helpers/colors';
import { IGame } from 'models/game.model';
import { withDefaultNamespaces } from 'i18n/helpers';
import { getChannels } from 'requests/getChannels';
import { IContainer } from 'ui/Container';
import { jc, media } from 'helpers/theme';
import { BreakPoints } from 'helpers/responsive';
import { FontSizeTypes, JustifyContentTypes } from 'models/layout.model';
import { constants } from 'helpers/constants';
import { fetchAccountInfo } from 'requests/fetchAccountInfo';
import { FavoriteLayout, BaseLayout, GameSubMenu } from 'widgets';
import { ITitle, TitleTags } from 'ui/Title';
import { useRouter } from 'next/router';
import { useAuth } from 'helpers/useAuth';
import { TChannelTypes } from 'models/channels.model';

const StyledCardList = styled(Row)<ILayout>`
    flex-wrap: wrap;
    ${media.lessThan(BreakPoints.smallDesktop)} {
        ${jc({ jc: JustifyContentTypes.center })}
    }
    ${media.lessThan(BreakPoints.tablet)} {
        ${jc({ jc: JustifyContentTypes.stretch })}
    }
`;

interface IHomePageProps {
    games: IGame[];
    favoriteChannels: string[];
}

const MainContainer = styled(Container)<IContainer>`
    max-width: ${constants.width.lgDesktop};
    margin: 0 auto;
`;

const Content = styled(Column)<ILayout>`
    padding: 0 35px 45px;
    background: ${colors.purpleMain};
    ${media.lessThan(BreakPoints.phone)} {
        padding: 0 15px 20px;
        background: transparent linear-gradient(0deg, #4b278a 0%, #2c1f42 100%) 0% 0% no-repeat padding-box;
    }
`;

const OurGame = styled(Title)<ITitle>`
    ${media.lessThan(BreakPoints.tablet)} {
        display: none;
    }
`;

const Homepage = ({ games, favoriteChannels }: IHomePageProps): ReactElement => {
    const { user } = useAuth();
    const [favorites, setFavorites] = useState<string[]>([]);
    const router = useRouter();

    useEffect((): void => {
        setFavorites(user ? favoriteChannels : []);
    }, [user]);

    const changeFavoriteChannel = (e: MouseEvent, channel: TChannelTypes): void => {
        e.stopPropagation();
        if (!user) {
            router.push('/login');
            return;
        }

        if (favorites.includes(channel)) {
            setFavorites(favorites.filter((favorite: string): boolean => favorite !== channel));
        } else {
            setFavorites([...favorites, channel]);
        }
    };

    const favoriteGames = games.filter((game: IGame): boolean => favorites.includes(game.channel));

    return (
        <BaseLayout games={games}>
            <HomePageGif />
            <GameSubMenu gameData={null} />
            <Content>
                <MainContainer>
                    {!!favorites.length && (
                        <FavoriteLayout
                            changeFavorite={changeFavoriteChannel}
                            favoriteGames={favoriteGames}
                            favorites={favorites}
                        />
                    )}
                    {!!favorites.length && (
                        <OurGame fontSize={FontSizeTypes.l} tagName={TitleTags.h2} uppercase>
                            our games
                        </OurGame>
                    )}
                    <StyledCardList>
                        {games.map(
                            (game: IGame): ReactElement => {
                                return (
                                    <GameCart
                                        favourite={favorites.includes(game.channel)}
                                        changeFavorite={changeFavoriteChannel}
                                        key={game.id}
                                        game={game}
                                    />
                                );
                            }
                        )}
                    </StyledCardList>
                </MainContainer>
            </Content>
        </BaseLayout>
    );
};

interface IInitialProps {
    props: {
        games: IGame[];
        namespacesRequired: string[];
        favoriteChannels: string[];
    };
}

export async function getServerSideProps(): Promise<IInitialProps> {
    const channels = await getChannels();
    const accountInfo = await fetchAccountInfo();
    return {
        props: {
            namespacesRequired: withDefaultNamespaces(),
            games: channels || [],
            favoriteChannels: accountInfo.favoriteChannels || [],
        },
    };
}

export default Homepage;
