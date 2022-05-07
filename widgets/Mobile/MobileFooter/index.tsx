import React, { ReactElement } from 'react';
import { Locales } from 'widgets/index';
import { Column, Description, Logo, NavLink, Row } from 'ui';
import { AlignItemsTypes, JustifyContentTypes } from 'models/layout.model';
import styled from 'styled-components';
import { ILayout } from 'ui/Layout';
import { media } from 'helpers/theme';
import { BreakPoints } from 'helpers/responsive';
import { IFooterConfig, IFooterLink, ISocialConfig } from 'widgets/Footer';
import config from 'widgets/Footer/config.json';
import i18n from 'i18n';
import { IDescription } from 'ui/Description';
import { INavLink } from 'ui/NavLink';
import { StyledLocales } from 'widgets/Locales';

const { useTranslation } = i18n;

const StyledMobileFooter = styled(Column)<ILayout>`
    display: none;
    ${media.lessThan(BreakPoints.phone)} {
        display: flex;
    }
`;

const LinksContainer = styled(Row)<ILayout>`
    flex-wrap: wrap;
`;

const StyledMobileLicense = styled(Description)<IDescription>`
    font-size: 10px;
`;

const StyledNavLink = styled(NavLink)<INavLink>`
    font-size: 12px;
    margin-bottom: 5px;
`;

const StyledLocalesContainer = styled(Row)<ILayout>`
    & ${StyledLocales} {
        height: auto;
        margin: 0;
    }
`;

const MobileFooter = (): ReactElement => {
    const { links, social } = config as IFooterConfig;
    const { t } = useTranslation('footer');
    return (
        <StyledMobileFooter padding="33px 0 40px">
            <Row ai={AlignItemsTypes.center} componentHeight="40px" jc={JustifyContentTypes.spaceBetween}>
                <Logo />
                <Row componentWidth="auto" ai={AlignItemsTypes.center}>
                    {social.map(
                        ({ src }: ISocialConfig): ReactElement => {
                            return (
                                <Row key={src} mleft="13px" componentWidth="auto">
                                    <NavLink href="https://www.google.com/">
                                        <img src={src} alt={src} />
                                    </NavLink>
                                </Row>
                            );
                        }
                    )}
                </Row>
            </Row>
            <StyledLocalesContainer margin="25px 0 30px" jc={JustifyContentTypes.flexEnd}>
                <Locales footer />
            </StyledLocalesContainer>
            <LinksContainer>
                {links.map(
                    (link: IFooterLink): ReactElement => {
                        return (
                            <Row key={link.text} componentWidth="50%">
                                <StyledNavLink href={link.href}>{t(link.text)}</StyledNavLink>
                            </Row>
                        );
                    }
                )}
            </LinksContainer>
            <Column mtop="30px">
                <StyledMobileLicense>{t('license')}</StyledMobileLicense>
            </Column>
        </StyledMobileFooter>
    );
};

export { MobileFooter };
