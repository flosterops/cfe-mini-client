import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Icons } from 'ui/Icon/helpers';
import { IconTypes } from 'helpers/icons';
import { space } from 'helpers/theme';
import { ISpaceTypes } from 'models/layout.model';

export interface IIcon extends ISpaceTypes {
    alt: string;
    icon: IconTypes;
    height?: string;
    width?: string;
}

const StyledIcon = styled.img<any>`
    width: ${(props) => (props.width ? props.width : 'auto')};
    height: ${(props) => (props.height ? props.height : 'auto')};
    ${space}
`;

const Icon = ({ alt, icon, height, width, ...props }: IIcon): ReactElement => {
    return <StyledIcon height={height} width={width} src={Icons[icon]} alt={alt} {...props} />;
};

export { Icon };
