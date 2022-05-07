import React, { FunctionComponent, ReactElement } from 'react';
import { Button, Column, Description, Icon, Row } from 'ui';
import { createPortal } from 'react-dom';
import {
    AlignItemsTypes,
    ComponentSizesTypes,
    FontSizeTypes,
    JustifyContentTypes,
    WeightTypes,
} from 'models/layout.model';
import { colors } from 'helpers/colors';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { ILayout } from 'ui/Layout';
import { IconTypes } from 'helpers/icons';
import { TChannelTypes } from 'models/channels.model';

const StyledMobileGoToCart = styled(Column)<ILayout>`
    position: fixed;
    top: 0;
`;

interface IMobileGoToCart {
    channel: TChannelTypes;
}

const MobileGoToCart: FunctionComponent<IMobileGoToCart> = ({ channel }: IMobileGoToCart): ReactElement => {
    const router = useRouter();
    const root = document.getElementsByTagName('body')[0];
    const href = { pathname: '/[channel]/cart', query: { channel } };
    return createPortal(
        <StyledMobileGoToCart componentHeight="130px">
            <Row componentHeight="70px" padding="0 15px" bg={colors.purpleMain} ai={AlignItemsTypes.center}>
                <Row>
                    <Description fontSize={FontSizeTypes.m}>Successfully Added to cart!</Description>
                </Row>
                <Row jc={JustifyContentTypes.flexEnd}>
                    <Icon icon={IconTypes.cart} alt={IconTypes.cart} />
                </Row>
            </Row>
            <Button
                height="60px"
                componentSize={ComponentSizesTypes.full}
                color={colors.yellow}
                onClick={(): Promise<boolean> => router.push(href)}
            >
                <Description weight={WeightTypes.w600} fontSize={FontSizeTypes.m} color={colors.dark} uppercase>
                    go to cart
                </Description>
            </Button>
        </StyledMobileGoToCart>,
        root
    );
};

export { MobileGoToCart };
