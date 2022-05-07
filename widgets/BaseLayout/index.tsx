import { ReactNode, ReactNodeArray, useRef } from 'react';
import styled from 'styled-components';
import { Footer, Header, MobileFooter, MobileHeader } from 'widgets';
import { Column, Container, Row } from 'ui';
import { ILayout, LayoutTags } from 'ui/Layout';
import { colors } from 'helpers/colors';
import { BreakPoints } from 'helpers/responsive';
import { IContainer } from 'ui/Container';
import { media } from 'helpers/theme';
import { IGame } from 'models/game.model';
import { useRouter } from 'next/router';
import { Category } from 'models/category.model';
import { HeaderElements } from 'widgets/Header';
import { getMainHeight } from 'widgets/BaseLayout/helpers';
import config from './config.json';
import { IHeaderLink } from 'models/headerLinks.model';
import { TChannelTypes } from 'models/channels.model';

interface IBaseLayout {
    children: ReactNode | ReactNodeArray;
    withFooter?: boolean;
    withHeader?: boolean;
    title?: ReactNode;
    games?: IGame[];
    showOnHeader?: HeaderElements;
    categories?: Category[];
}

interface IStyledMain extends ILayout {
    full: boolean;
    footer: boolean;
}

const FocusedOpacity = styled(Row)<ILayout>`
    top: 0;
    left: 0;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100vh;
    opacity: 0;
    transition: 0.3s opacity ease;
    position: fixed;
`;

const StyledMain = styled(Column)<IStyledMain>`
    min-height: ${({ full, footer }: IStyledMain): string => getMainHeight(full, footer).minHeight};
    height: ${({ full, footer }: IStyledMain): string => getMainHeight(full, footer).height};
    background: ${(props: IStyledMain): string => (props.full ? 'transparent' : colors.purpleMain)};
`;

const StyledHeaderContainer = styled(Row)<ILayout>`
    @keyframes slowDown {
        0% {
            margin: -60px auto 0;
        }
        100% {
            margin: 0 auto;
        }
    }
    ${media.moreThan(BreakPoints.smallDesktop)} {
        margin: -60px auto 0;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 20;
        animation: slowDown 100ms ease-in-out forwards;
        animation-delay: 300ms;
        transform-origin: top center;
    }
    border-bottom: 1px solid ${colors.darkText};
    padding: 0 0 0 55px;
    ${media.lessThan(BreakPoints.lgDesktop)} {
        padding-left: 35px;
    }
    ${media.lessThan(BreakPoints.phone)} {
        padding: 0;
    }
`;

const FooterContainer = styled(Container)<IContainer>`
    padding: 0 35px;
    ${media.lessThan(BreakPoints.phone)} {
        padding: 0 15px;
    }
`;

const BaseLayout = ({
    children,
    title,
    showOnHeader,
    withFooter = true,
    withHeader = true,
    games = [],
    categories,
}: IBaseLayout) => {
    const channel = useRouter().query.channel as TChannelTypes;
    const full = !withFooter && !withHeader;
    const links = config as IHeaderLink[];

    const headerRef = useRef(null);
    useOpacityHover(headerRef.current, '20');

    return (
        <>
            {withHeader && (
                <StyledHeaderContainer layoutRef={headerRef} bg={colors.dark}>
                    <MobileHeader games={games} channel={channel} categories={categories || []} />
                    <Header links={links} channel={channel} title={title} show={showOnHeader} />
                </StyledHeaderContainer>
            )}
            <FocusedOpacity htmlId="opacity-hover" />
            <StyledMain footer={withFooter} tagName={LayoutTags.main} full={full}>
                {children}
            </StyledMain>
            {withFooter && (
                <FooterContainer color={colors.purpleMain}>
                    <Footer />
                    <MobileFooter />
                </FooterContainer>
            )}
        </>
    );
};

export { BaseLayout };
