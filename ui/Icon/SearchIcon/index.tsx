import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { ISpaceTypes } from 'models/layout.model';
import { space } from 'helpers/theme';

const StyledBucketIcon = styled.svg<ISpaceTypes>`
    ${space}
`;

export interface ISearchIcon extends ISpaceTypes {
    color?: string;
    width?: number;
    height?: number;
    onClick?: () => void;
}

const SearchIcon = ({
    color = 'rgb(255, 255, 255)',
    width = 30,
    height = 30,
    onClick,
    ...props
}: ISearchIcon): ReactElement => {
    return (
        <StyledBucketIcon
            version="1.2"
            overflow="visible"
            onClick={onClick}
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
            width={width}
            height={height}
            x="0px"
            y="0px"
            {...props}
        >
            <g>
                <path
                    id="search"
                    d="M15.33,10.66c-0.01,2.57-2.09,4.65-4.66,4.66c-1.24,0.03-2.43-0.45-3.3-1.33c-0.9-0.87-1.4-2.08-1.37-3.33  c-0.02-1.24,0.48-2.44,1.37-3.3c0.86-0.89,2.06-1.39,3.3-1.37c1.25-0.03,2.46,0.47,3.33,1.37c0.89,0.86,1.39,2.06,1.37,3.3l0,0  H15.33z M20.66,19.32c0.01-0.35-0.14-0.69-0.39-0.94l-3.57-3.57c0.85-1.21,1.31-2.67,1.3-4.15c0-0.98-0.19-1.95-0.58-2.85  c-0.73-1.77-2.13-3.17-3.9-3.9c-1.82-0.77-3.88-0.77-5.7,0c-1.77,0.73-3.17,2.13-3.9,3.9c-0.77,1.82-0.77,3.88,0,5.7  c0.73,1.77,2.13,3.17,3.9,3.9c0.9,0.39,1.87,0.58,2.85,0.58c1.48,0.01,2.93-0.44,4.15-1.29l3.57,3.56c0.24,0.26,0.58,0.41,0.94,0.4  C20.06,20.65,20.65,20.06,20.66,19.32L20.66,19.32L20.66,19.32z"
                    style={{ fill: color }}
                    vectorEffect="non-scaling-stroke"
                />
            </g>
        </StyledBucketIcon>
    );
};

export { SearchIcon };
