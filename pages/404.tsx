import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Column, Description, NavLink } from 'ui';
import { ILayout } from 'ui/Layout';
import { AlignItemsTypes, FontSizeTypes, JustifyContentTypes } from 'models/layout.model';
import { colors } from 'helpers/colors';
import { Namespaces } from 'i18n/helpers';
import { useTranslation } from 'react-i18next';
import { BaseLayout } from '../widgets/BaseLayout';

const StyledColumn = styled(Column)<ILayout>`
    max-width: 650px;
`;

const Page404 = (): ReactElement => {
    const { t } = useTranslation(Namespaces.error);
    return (
        <BaseLayout withFooter withHeader>
            <Column componentHeight="70vh" bg={colors.dark} jc={JustifyContentTypes.center} ai={AlignItemsTypes.center}>
                <StyledColumn ai={AlignItemsTypes.center} componentWidth="50%" bg={colors.yellow} padding="40px 20px">
                    <Description color={colors.dark} fontSize={FontSizeTypes.xxl}>
                        {t('error404')}
                    </Description>
                    <Description mtop="40px" color={colors.dark} fontSize={FontSizeTypes.l}>
                        {t('pageNotFound')}
                    </Description>
                    <NavLink href="/">
                        <Description color={colors.dark}> {t('backToHomePage')}</Description>
                    </NavLink>
                </StyledColumn>
            </Column>
        </BaseLayout>
    );
};

export default Page404;
