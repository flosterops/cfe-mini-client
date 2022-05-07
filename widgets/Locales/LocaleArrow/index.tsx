import React, { FunctionComponent, ReactElement } from 'react';
import { Column, Icon } from 'ui';
import { AlignItemsTypes, JustifyContentTypes } from 'models/layout.model';
import { IconTypes } from 'helpers/icons';
import { IIcon } from 'ui/Icon';
import styled from 'styled-components';
import { media } from 'helpers/theme';
import { BreakPoints } from 'helpers/responsive';

interface ILocaleArrow {
    short: boolean;
}

interface IDefilement extends IIcon {
    short: boolean;
}

const StyledDefilementTop = styled(Icon)<IDefilement>`
    margin-bottom: -10px;
    ${media.lessThan(BreakPoints.phone)} {
        width: 16px;
        margin-bottom: 0;
    }
    ${({ short }: IDefilement): string => (short ? '' : 'display: none')}
`;

const StyledDefilementDown = styled(Icon)<IDefilement>`
    transform: rotate(180deg);
    ${media.lessThan(BreakPoints.phone)} {
        width: 16px;
    }
    margin-top: ${({ short }: IDefilement): string => (short ? '-10px' : '0')};
`;

const LocaleArrow: FunctionComponent<ILocaleArrow> = ({ short }: ILocaleArrow): ReactElement => {
    return (
        <Column componentWidth="auto" jc={JustifyContentTypes.center} ai={AlignItemsTypes.center}>
            <StyledDefilementTop short={short} alt="drop-down" icon={IconTypes.defilement} />
            <StyledDefilementDown short={short} alt="drop-down" icon={IconTypes.defilement} />
        </Column>
    );
};

export { LocaleArrow };
