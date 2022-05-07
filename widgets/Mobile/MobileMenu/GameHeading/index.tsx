import styled from 'styled-components';
import { ILayout } from 'ui/Layout';
import { colors } from 'helpers/colors';
import { IIcon } from 'ui/Icon';
import React, { ReactElement } from 'react';
import { AlignItemsTypes } from 'models/layout.model';
import { Description, Icon, Row } from 'ui';
import { IconTypes } from 'helpers/icons';

interface GameHeading {
    visible: boolean;
}

export const ListItem = styled(Row)<ILayout>`
    border-bottom: 1px solid ${colors.grayMedium};
`;

interface IDefilement extends IIcon {
    visible: boolean;
}

const Defilement = styled(Icon)<IDefilement>`
    transition: all 0.4s ease;
    transform: ${(props: IDefilement): string => (props.visible ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const GameHeading = ({ visible }: GameHeading): ReactElement => {
    return (
        <ListItem padding="0 15px" ai={AlignItemsTypes.center} componentHeight="40px">
            <Description uppercase>game</Description>
            <Defilement visible={visible} mleft="5px" alt={IconTypes.defilement} icon={IconTypes.defilement} />
        </ListItem>
    );
};

export { GameHeading };
