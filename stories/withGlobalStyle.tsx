import { makeDecorator } from '@storybook/addons';
import React, { ReactElement } from 'react';
import { GlobalStyle } from '../helpers/theme';
import { Column } from '../ui/Layout';

export const withGlobalStyle = makeDecorator({
    name: 'GlobalStyle',
    parameterName: 'globalStyle',
    wrapper(getStory: any, context: any, settings: any): ReactElement {
        return (
            <>
                <GlobalStyle />
                <Column>{getStory(context)}</Column>
            </>
        );
    },
});
