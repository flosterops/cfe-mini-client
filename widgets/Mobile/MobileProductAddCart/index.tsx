import React, { FunctionComponent, ReactElement, useEffect, useState } from 'react';
import { Button, Column, Description, Price, Row } from 'ui';
import { SelectCount } from 'widgets/index';
import { colors } from 'helpers/colors';
import { AlignItemsTypes, ComponentSizesTypes, FontSizeTypes, WeightTypes } from 'models/layout.model';
import styled from 'styled-components';
import { ILayout } from 'ui/Layout';
import { media } from 'helpers/theme';
import { BreakPoints } from 'helpers/responsive';
import { createPortal } from 'react-dom';

const StyledMobileProductAddCart = styled(Column)<ILayout>`
    display: none;
    position: fixed;
    bottom: 0;
    ${media.lessThan(BreakPoints.phone)} {
        display: flex;
    }
`;

interface IMobileProductAddCart {
    price: number | string;
    setModalMessage: (value: boolean) => void;
}

const MobileProductAddCart: FunctionComponent<IMobileProductAddCart> = ({
    setModalMessage,
    price,
}: IMobileProductAddCart): ReactElement | null => {
    const [root, setRoot] = useState<HTMLBodyElement | null>(null);

    useEffect((): void => {
        const body = document.getElementsByTagName('body')[0];
        setRoot(body);
    }, []);

    if (!root) {
        return null;
    }

    const onAdd = (): void => {
        setModalMessage(true);
        setTimeout((): void => {
            setModalMessage(false);
        }, 3000);
    };

    return createPortal(
        <StyledMobileProductAddCart>
            <Row componentHeight="40px" padding="0 15px" ai={AlignItemsTypes.center} bg={colors.black}>
                <Price>{price}</Price>
            </Row>
            <Row bg={colors.yellow}>
                <SelectCount onChange={(i) => i} />
                <Button height="50px" color={colors.yellow} componentSize={ComponentSizesTypes.full} onClick={onAdd}>
                    <Description weight={WeightTypes.w600} fontSize={FontSizeTypes.m} color={colors.dark} uppercase>
                        add to cart
                    </Description>
                </Button>
            </Row>
        </StyledMobileProductAddCart>,
        root
    );
};

export { MobileProductAddCart };
