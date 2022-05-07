import React, { ReactElement } from 'react';
import { Description, Layout } from 'ui';
import { colors } from 'helpers/colors';
import { AlignItemsTypes, FontSizeTypes, JustifyContentTypes } from 'models/layout.model';
import styled from 'styled-components';
import { ILayout } from 'ui/Layout';

const StyledError = styled(Layout)<ILayout>`
    border-radius: 4px;
`;

export interface IError {
    status: number;
    message: string | null;
}

// TODO if we can't prepare page in SSR phase we need to show error, here is generic error component, we need to create layout for it
export function Error({ status, message }: IError): ReactElement {
    return (
        <StyledError padding="30px 20px" bg={colors.dark} jc={JustifyContentTypes.center} ai={AlignItemsTypes.center}>
            <Description fontSize={FontSizeTypes.xl} color={colors.yellow}>
                {status}
            </Description>
            <Description mtop="40px" fontSize={FontSizeTypes.m}>
                {message}
            </Description>
        </StyledError>
    );
}
