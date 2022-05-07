import React, { ReactElement } from 'react';
import { colors } from 'helpers/colors';

interface IDownloadIcon {
    color: string;
}

const DownloadIcon = ({ color = colors.dark }: IDownloadIcon): ReactElement => {
    return (
        <svg
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
            width="28"
            height="28"
        >
            <g>
                <path
                    d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
                    style={{
                        fill: color,
                    }}
                />
            </g>
        </svg>
    );
};

export { DownloadIcon };
