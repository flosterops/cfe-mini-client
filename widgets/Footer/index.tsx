import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Column, Description, Logo, NavLink, Row } from 'ui';
import { ILayout, LayoutTags } from 'ui/Layout';
import { colors } from 'helpers/colors';
import { AlignItemsTypes, FontSizeTypes, JustifyContentTypes } from 'models/layout.model';
import { useTranslation } from 'react-i18next';
import { withDefaultNamespaces } from 'i18n/helpers';
import { fontSize, media } from 'helpers/theme';
import { BreakPoints } from 'helpers/responsive';
import { Locales } from 'widgets';
import config from './config.json';
import { StyledLanguages, StyledLocales } from 'widgets/Locales';
import { INavLink } from 'ui/NavLink';
import { IDescription } from 'ui/Description';

export interface ISocialConfig {
    id: string;
    src: string;
}

export interface IFooterLink {
    id: string;
    href: string;
    text: string;
}

export interface IFooterConfig {
    social: ISocialConfig[];
    links: IFooterLink[];
}

// transform-authOrigin to change the animation direction from bottom to top
const StyledSocialLocaleContainer = styled(Row)`
    max-width: 310px;
    & ${StyledLocales} {
        height: 40px;
        & ${StyledLanguages} {
            top: auto;
            bottom: 100%;
            padding: 0;
            transform-origin: bottom center;
            border: 1px solid ${colors.darkText};
        }
    }
`;

const StyledFooter = styled(Column)<ILayout>`
    max-width: 1600px;
    margin: 0 auto;
    min-height: 325px;
    padding: 40px 0 80px;
    ${media.lessThan(BreakPoints.phone)} {
        display: none;
    }
`;

const StyledSocialImg = styled.img`
    width: 40px;
    height: 40px;
`;

const StyledHelpLink = styled(NavLink)<INavLink>`
    white-space: nowrap;
    ${fontSize({ fontSize: FontSizeTypes.s })}
    text-transform: uppercase;
    &:first-of-type {
        &:before {
            padding: 0;
            content: '';
        }
    }
    &:before {
        padding: 0 8px 0;
        content: '|';
    }
`;

const StyledLicense = styled(Description)<IDescription>`
    letter-spacing: 0px;
    line-height: inherit;
`;

const Footer = (): ReactElement => {
    const { links, social } = config;
    const { t } = useTranslation(withDefaultNamespaces());
    return (
        <StyledFooter bg={colors.purpleMain} jc={JustifyContentTypes.spaceBetween} tagName={LayoutTags.footer}>
            <Row jc={JustifyContentTypes.spaceBetween} mbottom="50px">
                <Row componentWidth="auto">
                    <NavLink href="https://glyph.net/">
                        <Logo />
                    </NavLink>
                </Row>
                <StyledSocialLocaleContainer
                    mtop="15px"
                    ai={AlignItemsTypes.center}
                    jc={JustifyContentTypes.spaceBetween}
                >
                    <Locales footer />
                    <Row componentWidth="auto" ai={AlignItemsTypes.center}>
                        {social.map(
                            ({ id, src }: ISocialConfig): ReactElement => {
                                return (
                                    <Row key={id} mleft="13px" componentWidth="auto">
                                        <NavLink href="https://www.google.com/">
                                            <StyledSocialImg src={src} alt={src} />
                                        </NavLink>
                                    </Row>
                                );
                            }
                        )}
                    </Row>
                </StyledSocialLocaleContainer>
            </Row>
            <Row jc={JustifyContentTypes.spaceBetween}>
                <Row componentWidth="50%" mright="30px">
                    {links.map(
                        (link: IFooterLink): ReactElement => {
                            return (
                                <StyledHelpLink key={link.id} href={link.href}>
                                    {t(link.text)}
                                </StyledHelpLink>
                            );
                        }
                    )}
                </Row>
                <Row componentWidth="50%">
                    <StyledLicense fontSize={FontSizeTypes.s}>{t('footer:license')}</StyledLicense>
                </Row>
            </Row>
        </StyledFooter>
    );
};

export { Footer };
