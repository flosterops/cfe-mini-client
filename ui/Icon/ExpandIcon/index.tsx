import React, { FunctionComponent, ReactElement } from 'react';

interface IExpandIcon {
    color?: string;
    width?: number;
    height?: number;
}

const ExpandIcon: FunctionComponent<IExpandIcon> = ({
    color = '#ffffff',
    width = 32,
    height = 32,
}: IExpandIcon): ReactElement => {
    return (
        <svg
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            overflow="visible"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
            width={width}
            height={height}
        >
            <g>
                <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
                    style={{ fill: color }}
                />
            </g>
        </svg>
    );
};

export { ExpandIcon };
