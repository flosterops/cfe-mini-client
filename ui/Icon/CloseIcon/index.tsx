import React, { FunctionComponent, ReactElement } from 'react';
import styled from 'styled-components';
import { ISpaceTypes } from 'models/layout.model';
import { space } from 'helpers/theme';

const StyledCloseIcon = styled.svg<ISpaceTypes>`
    ${space}
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`;

export interface ICloseIcon extends ISpaceTypes {
    color?: string;
    width?: number;
    height?: number;
    onClick?: () => void;
}

const CloseIcon: FunctionComponent<ICloseIcon> = ({
    color = 'rgb(255, 255, 255)',
    width = 32,
    height = 32,
    onClick,
    ...props
}: ICloseIcon): ReactElement => {
    return (
        <StyledCloseIcon
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            width={width}
            height={height}
            onClick={onClick}
            viewBox="0 0 18.491 18.492"
        >
            <path
                id="Tracé_96"
                data-name="Tracé 96"
                d="M16.287,0,9.245,7.042,2.2,0,0,2.2,7.041,9.246,0,16.287l2.2,2.2L9.245,11.45l7.042,7.042,2.2-2.2L11.449,9.246,18.491,2.2Z"
                transform="translate(0 0)"
                style={{ fill: color }}
            />
        </StyledCloseIcon>
    );
};

export { CloseIcon };
