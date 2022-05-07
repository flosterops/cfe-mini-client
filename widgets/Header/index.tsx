import React, { FunctionComponent, ReactElement, ReactNode } from 'react';
import { Account, DownloadGlyph, Locales, RenderLinks } from 'widgets';
import { Layout, Logo, NavLink, Row } from 'ui';
import { AlignItemsTypes, JustifyContentTypes } from 'models/layout.model';
import { BreakPoints } from 'helpers/responsive';
import styled from 'styled-components';
import { ILayout } from 'ui/Layout';
import { media } from 'helpers/theme';
import { IHeaderLink } from 'models/headerLinks.model';
import { TChannelTypes } from 'models/channels.model';

const StyledHeader = styled(Row)<ILayout>`
    ${media.lessThan(BreakPoints.phone)} {
        padding-left: 0;
        display: none;
        height: 40px;
    }
    ${media.moreThan(BreakPoints.phone)} {
        display: flex;
    }
`;

export interface HeaderElements {
    logo?: boolean;
    menu?: boolean;
    locales?: boolean;
    account?: boolean;
    downloadButton?: boolean;
}

export interface IHeader {
    channel: TChannelTypes;
    links: IHeaderLink[];
    title?: ReactNode;
    show?: HeaderElements;
}

const Header: FunctionComponent<IHeader> = ({ links, title, show, channel }: IHeader): ReactElement => {
    const { logo = true, menu = true, locales = true, account = true, downloadButton = true } = show || {};

    let leftWidth = 'auto';
    let centerWidth = '';
    let rightWidth = '100%';
    // to put title in center we should give left and right components same width, it's not necessary 33% but it's not clear how to calculate it more precise
    if (title) {
        leftWidth = centerWidth = rightWidth = '33%';
    }

    return (
        <StyledHeader ai={AlignItemsTypes.center} componentHeight="60px" jc={JustifyContentTypes.spaceBetween}>
            <Row componentWidth={leftWidth} componentHeight="100%" ai={AlignItemsTypes.center}>
                {logo && (
                    <NavLink href="/">
                        <Logo padding="8px 0 4px" />
                    </NavLink>
                )}
                {menu && <RenderLinks config={links} channel={channel} />}
            </Row>
            {title && (
                <Layout componentWidth={centerWidth} ai={AlignItemsTypes.center}>
                    {title}
                </Layout>
            )}
            <Row componentWidth={rightWidth} ai={AlignItemsTypes.center} jc={JustifyContentTypes.flexEnd}>
                {locales && <Locales />}
                {account && (
                    <Row componentWidth="auto">
                        <Account />
                    </Row>
                )}
                {downloadButton && <DownloadGlyph />}
            </Row>
        </StyledHeader>
    );
};

export { Header };
