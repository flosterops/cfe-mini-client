import React, { FunctionComponent, ReactElement } from 'react';
import styled from 'styled-components';
import { ISpaceTypes } from 'models/layout.model';
import { space } from 'helpers/theme';

const StyledBackToIcon = styled.svg<ISpaceTypes>`
    ${space}
`;

export interface IBackToIcon extends ISpaceTypes {
    color?: string;
    width?: number;
    height?: number;
}

const BackToIcon: FunctionComponent<IBackToIcon> = ({
    color = 'rgb(255, 255, 255)',
    width = 32,
    height = 32,
    ...props
}): ReactElement => {
    return (
        <StyledBackToIcon
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            overflow="visible"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
            {...props}
            width={width}
            height={height}
        >
            <g>
                <path
                    d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
                    style={{ fill: color }}
                    vectorEffect="non-scaling-stroke"
                />
            </g>
        </StyledBackToIcon>
    );
};

export { BackToIcon };
