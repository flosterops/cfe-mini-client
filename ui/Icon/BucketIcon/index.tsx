import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { ISpaceTypes } from 'models/layout.model';
import { space } from 'helpers/theme';

const StyledBucketIcon = styled.svg<ISpaceTypes>`
    ${space}
`;

export interface IBucketIcon extends ISpaceTypes {
    color?: string;
    width?: number;
    height?: number;
}

const BucketIcon = ({ color = 'rgb(255, 255, 255)', width = 13, height = 13, ...props }: IBucketIcon): ReactElement => {
    return (
        <StyledBucketIcon
            version="1.1"
            width={width}
            height={height}
            overflow="visible"
            x="0px"
            y="0px"
            viewBox="0 0 1000 1000"
            {...props}
        >
            <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
            <g>
                <path
                    style={{ fill: color }}
                    d="M406.7,873.3V266.7c0-14-9.3-23.3-23.3-23.3s-23.3,9.3-23.3,23.3v606.7c0,14,9.3,23.3,23.3,23.3S406.7,887.3,406.7,873.3z M826.7,896.7c0,25.7-21,46.7-46.7,46.7H220c-25.7,0-46.7-21-46.7-46.7v-700h-46.7v700c0,51.3,42,93.3,93.3,93.3h560c51.3,0,93.3-42,93.3-93.3v-700h-46.7V896.7z M640,873.3V266.7c0-14-9.3-23.3-23.3-23.3c-14,0-23.3,9.3-23.3,23.3v606.7c0,14,9.3,23.3,23.3,23.3C630.7,896.7,640,887.3,640,873.3z M896.7,103.3H640C640,52,598,10,546.7,10h-93.3C402,10,360,52,360,103.3H103.3c-14,0-23.3,9.3-23.3,23.3c0,14,9.3,23.3,23.3,23.3H360h280h256.7c14,0,23.3-9.3,23.3-23.3C920,112.7,910.7,103.3,896.7,103.3z M406.7,103.3c0-25.7,21-46.7,46.7-46.7h93.3c25.7,0,46.7,21,46.7,46.7H406.7z"
                />
            </g>
        </StyledBucketIcon>
    );
};

export { BucketIcon };
