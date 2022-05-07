import React, { FunctionComponent, ReactElement } from 'react';
import { ISpaceTypes } from 'models/layout.model';
import { colors } from 'helpers/colors';
import styled from 'styled-components';
import { space } from 'helpers/theme';
import { useAuth } from 'helpers/useAuth';

export interface IAccountIcon extends ISpaceTypes {
    width?: number;
    height?: number;
}

const StyledAccountIcon = styled.svg<any>`
    ${space}
`;

const AccountIcon: FunctionComponent<IAccountIcon> = ({
    width = 32,
    height = 32,
    ...props
}: IAccountIcon): ReactElement => {
    const { user } = useAuth();
    const color = user ? colors.yellow : colors.lightText;
    return (
        <StyledAccountIcon
            {...props}
            viewBox="0 0 24 24"
            width="28"
            height="28"
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            overflow="visible"
            preserveAspectRatio="none"
        >
            <g>
                <path
                    id="user-circle-o"
                    d="M11.99,2.64c-1.24,0-2.48,0.25-3.62,0.74c-2.27,0.93-4.07,2.73-5,5c-0.98,2.31-0.98,4.93,0,7.24  c0.47,1.12,1.15,2.14,2,3c0.86,0.86,1.88,1.54,3,2c2.32,0.99,4.95,0.99,7.27,0c1.12-0.47,2.14-1.15,3-2c0.86-0.86,1.54-1.88,2-3  c0.98-2.31,0.98-4.93,0-7.24c-0.93-2.27-2.73-4.07-5-5C14.48,2.88,13.24,2.63,11.99,2.64L11.99,2.64z M18.43,16.71  c-0.46-2.27-1.52-3.4-3.19-3.4c-0.86,0.87-2.03,1.35-3.25,1.33c-1.22,0.02-2.4-0.46-3.26-1.33c-1.67,0-2.73,1.13-3.19,3.4  c-1.02-1.37-1.56-3.03-1.55-4.74c0-1.07,0.22-2.12,0.64-3.1c0.8-1.93,2.33-3.46,4.26-4.26c1.98-0.85,4.23-0.85,6.21,0  c1.92,0.8,3.45,2.33,4.25,4.26c0.42,0.98,0.64,2.03,0.64,3.1c0.01,1.71-0.53,3.37-1.55,4.74l0,0H18.43z M14.81,12.8  c-0.74,0.76-1.76,1.19-2.82,1.17c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4C16,11.03,15.58,12.06,14.81,12.8L14.81,12.8z"
                    vectorEffect="non-scaling-stroke"
                    style={{ fill: color, width: `${width}px`, height: `${height}px` }}
                />
            </g>
        </StyledAccountIcon>
    );
};

export { AccountIcon };
