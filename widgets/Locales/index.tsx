import React, { FunctionComponent, ReactElement, useRef, useState } from 'react';
import styled from 'styled-components';
import { BorderBottomAnimationWrapper, Column, Description, Icon, Layout, Row } from 'ui';
import { LocaleArrow } from 'widgets/Locales/LocaleArrow';
import { getLocalesBg } from 'widgets/Locales/helpers';
import { AlignItemsTypes, DirectionTypes, JustifyContentTypes } from 'models/layout.model';
import { IconTypes } from 'helpers/icons';
import { IDescription } from 'ui/Description';
import { media } from 'helpers/theme';
import { BreakPoints } from 'helpers/responsive';
import { IIcon } from 'ui/Icon';
import { ILayout } from 'ui/Layout';
import { useOnClickOutside } from 'helpers/useOnClickOutside';
import { colors } from 'helpers/colors';
import { useDropDownAnimation } from 'helpers/useDropDownAnimation';
import locales from './config.json';

import i18next from 'i18n';

const { i18n } = i18next;

interface ILocalesText extends IDescription {
    short: boolean;
}

interface IStyledLanguages extends ILayout {
    animationType: string;
}

const LocalesText = styled(Description)<ILocalesText>`
    display: ${({ short }: ILocalesText): string => (short ? 'none' : 'flex')};
`;

export const StyledLocales = styled(Layout)<ILayout>`
    height: 60px;
    padding: 0 10px 0 20px;
    cursor: pointer;
    ${media.lessThan(BreakPoints.desktop)} {
        margin: 0 10px;
    }
`;

const LocaleIcon = styled(Icon)<IIcon>`
    ${media.lessThan(BreakPoints.phone)} {
        width: 18px;
        height: 18px;
    }
`;

export const StyledLanguages = styled(Column)<IStyledLanguages>`
    ${({ animationType }: IStyledLanguages): string => animationType}
    position: absolute;
    z-index: 5;
    top: 60px;
    left: 0;
`;

interface ISelectLanguage extends ILayout {
    color: string;
}

const SelectLanguage = styled(Row)<ISelectLanguage>`
    color: ${({ color }: ISelectLanguage): string => color};
    text-transform: uppercase;
    &:first-of-type {
        margin-top: 20px;
    }
    cursor: pointer;
    &:hover {
        color: ${colors.yellow};
    }
`;

export interface ILocales {
    short?: boolean;
    footer?: boolean;
}

const Locales: FunctionComponent<ILocales> = ({ short = true, footer = false }: ILocales): ReactElement => {
    const [visible, setVisible] = useState<boolean>(false);
    const animationType = useDropDownAnimation(visible);
    const ref = useRef(null);
    useOnClickOutside(ref, (): void => setVisible(false));

    const changeLocale = async (locale: string): Promise<void> => {
        await i18n.changeLanguage(locale);
        setVisible(false);
    };

    const localesBg = getLocalesBg(visible, footer);
    return (
        <Row componentWidth="auto">
            <BorderBottomAnimationWrapper removeBorder={visible}>
                <StyledLocales
                    bg={localesBg}
                    ai={AlignItemsTypes.center}
                    componentWidth="auto"
                    onClick={(): void => setVisible(!visible)}
                    layoutRef={ref}
                    direction={DirectionTypes.row}
                >
                    <LocaleIcon alt="locale" icon={IconTypes.languages} />
                    {!short && (
                        <LocalesText short={short} margin="0 15px 0 10px" uppercase>
                            languages
                        </LocalesText>
                    )}
                    <LocaleArrow short={short} />
                    <StyledLanguages bg={colors.dark} animationType={animationType}>
                        {animationType &&
                            locales.map(
                                (locale: string): ReactElement => {
                                    const selected = i18n.language === locale;
                                    const color = selected ? colors.yellow : colors.lightText;

                                    return (
                                        <SelectLanguage
                                            key={locale}
                                            mbottom="30px"
                                            jc={JustifyContentTypes.center}
                                            ai={AlignItemsTypes.center}
                                            onClick={(): Promise<void> => changeLocale(locale)}
                                            color={color}
                                        >
                                            {locale}
                                        </SelectLanguage>
                                    );
                                }
                            )}
                    </StyledLanguages>
                </StyledLocales>
            </BorderBottomAnimationWrapper>
        </Row>
    );
};

export { Locales };
