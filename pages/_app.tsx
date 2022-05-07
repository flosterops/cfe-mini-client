import React, { ReactElement, useLayoutEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import App, { AppProps } from 'next/app';
import { wrapper } from 'stores';
import { AppContextType } from 'next/dist/next-server/lib/utils';
import { Router, useRouter } from 'next/router';
import { Column, Description, Preloader as PreloaderUI } from 'ui';
import { ILayout } from 'ui/Layout';
import { GlobalStyle } from 'helpers/theme';
import { AuthProvider } from 'widgets/AuthProvider';
import i18next from 'i18n';
import { ErrorNotification } from '../helpers/useNotification.helper';

const { appWithTranslation } = i18next;

const StyledPage = styled(Column)<ILayout>`
    height: 100%;
`;

interface IApplication extends AppProps {}

const Application = ({ Component, pageProps }: IApplication): ReactElement => {
    useLayoutEffect((): void => {
        ErrorNotification.init();
    }, []);

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://use.typekit.net/gcy7xxe.css" />
            </Head>
            <GlobalStyle />
            <AuthProvider>
                <PreloaderUI />
                <StyledPage>
                    <Component {...pageProps} />
                </StyledPage>
            </AuthProvider>
        </>
    );
};

interface InitialProps {
    pageProps: any;
}

Application.getInitialProps = async (appContext: AppContextType<Router>): Promise<InitialProps> => {
    return { ...(await App.getInitialProps(appContext)) };
};

export default wrapper.withRedux(appWithTranslation(Application));
