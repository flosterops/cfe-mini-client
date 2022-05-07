import { ReactElement } from 'react';
import styled from 'styled-components';
import { Column, Description, NavLink } from 'ui';
import { ILayout } from 'ui/Layout';
import { AlignItemsTypes, FontSizeTypes, JustifyContentTypes } from 'models/layout.model';
import { colors } from 'helpers/colors';
import { Namespaces, withDefaultNamespaces } from 'i18n/helpers';
import { useTranslation } from 'react-i18next';
import { BaseLayout } from 'widgets';
import { capitalizeFirst } from 'helpers/capitalize.helper';

const StyledColumn = styled(Column)<ILayout>`
    max-width: 650px;
`;

const ErrorPage = (): ReactElement => {
    const { t } = useTranslation(Namespaces.error);
    return (
        <BaseLayout>
            <Column componentHeight="70vh" bg={colors.dark} jc={JustifyContentTypes.center} ai={AlignItemsTypes.center}>
                <StyledColumn ai={AlignItemsTypes.center} componentWidth="50%" bg={colors.yellow} padding="40px 20px">
                    <Description color={colors.dark} fontSize={FontSizeTypes.xxl}>
                        {capitalizeFirst(t('error'))}
                    </Description>
                    <Description mtop="20px" color={colors.dark} fontSize={FontSizeTypes.l}>
                        {capitalizeFirst(t('something went wrong'))}
                    </Description>
                    <NavLink href="/">
                        <Description color={colors.dark}> {t('backToHomePage')}</Description>
                    </NavLink>
                </StyledColumn>
            </Column>
        </BaseLayout>
    );
};

interface IInitialProps {
    namespacesRequired: string[];
}

ErrorPage.getInitialProps = async (): Promise<IInitialProps> => {
    return {
        namespacesRequired: withDefaultNamespaces(Namespaces.error),
    };
};

export default ErrorPage;
