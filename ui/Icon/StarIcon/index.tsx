import React, { FunctionComponent, ReactElement } from 'react';
import { ISpaceTypes } from 'models/layout.model';

export interface IStarIcon extends ISpaceTypes {
    color?: string;
    width?: number;
    height?: number;
    onClick?: (...args: any) => void;
}

const StarIcon: FunctionComponent<IStarIcon> = ({
    color = '#838383',
    width = 25,
    height = 25,
    onClick,
    ...props
}: IStarIcon): ReactElement => {
    return (
        <svg
            {...props}
            id="grade-24px"
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            onClick={onClick}
            viewBox={`0 0 ${width} ${height}`}
        >
            <path id="Path_249" data-name="Path 249" d="M0,0H24V24H0Z" fill="none" />
            <path
                id="Path_250"
                data-name="Path 250"
                d="M12,17.27,18.18,21l-1.64-7.03L22,9.24l-7.19-.61L12,2,9.19,8.63,2,9.24l5.46,4.73L5.82,21Z"
                style={{ fill: color }}
            />
        </svg>
    );
};

export { StarIcon };
