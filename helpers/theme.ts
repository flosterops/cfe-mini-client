import {
    PositionTypes,
    FontSizeTypes,
    WeightTypes,
    ComponentSizesTypes,
    DirectionTypes,
    JustifyContentTypes,
    AlignItemsTypes,
    AlignTextTypes,
    ISpaceTypes,
} from 'models/layout.model';
import { createGlobalStyle } from 'styled-components';
import { colors } from 'helpers/colors';
import { BreakPoints } from './responsive';

export const loginBackground = '/img/login-bg.jpeg';

export const globalStyles = {
    global: {
        borderRadius: 0,
        componentHeight: 50,
    },
    fonts: {
        default: `
            font-family: "Motiva-sans", sans-serif;
       `,
    },

    jc: {
        flexStart: `
            justify-content: flex-start;
        `,
        center: `
            justify-content: center;
        `,
        stretch: `
            justify-content: stretch;
        `,
        flexEnd: `
            justify-content: flex-end;
        `,
        spaceBetween: `
            justify-content: space-between;
        `,
        spaceAround: `
            justify-content: space-around;
        `,
        default: `
            justify-content: flex-start;
        `,
    },

    ai: {
        flexStart: `
            align-items: flex-start;
        `,
        center: `
            align-items: center;
        `,
        stretch: `
            align-items: stretch;
        `,
        flexEnd: `
            align-items: flex-end;
        `,
        spaceBetween: `
            align-items: space-between;
        `,
        spaceAround: `
            align-items: space-around;
        `,
        default: `
            align-items: flex-start;
        `,
    },

    textAlign: {
        center: `
            text-align: center;
        `,
        left: `
            text-align: left;
        `,
        right: `
            text-align: right;
        `,
        default: `
            text-align: left;
        `,
    },

    direction: {
        row: `
            flex-direction: row;
        `,
        column: `
            flex-direction: column;
        `,
        default: `
            flex-direction: column;
        `,
    },

    position: {
        left: `
            justify-content: left;
        `,
        right: `
            justify-content: right;
        `,
        center: `
            justify-content: center;
        `,
        default: `
            justify-content: left;
        `,
    },

    componentSizes: {
        s: `
            width: 120px;
        `,
        m: `
            width: 240px;
        `,
        l: `
            width: 320px;
        `,
        xl: `
            width: 420px;
        `,
        full: `
            width: 100%;
        `,
        auto: `
            width: auto;
        `,
        default: `
            width: 180px;
        `,
    },

    weight: {
        400: `
            font-weight: 400;
        `,
        500: `
            font-weight: 500;
        `,
        600: `
            font-weight: 600;
        `,
        700: `
            font-weight: 700;
        `,
        800: `
            font-weight: 800;
        `,
        default: `
            font-weight: 400;
        `,
    },

    ln: {
        xxs: `
            line-height: 10px;
        `,
        xs: `
            line-height: 12px;
        `,
        s: `
            line-height: 14px;
        `,
        m: `
            line-height: 16px;
        `,
        l: `
            line-height: 24px;
        `,
        xl: `
            line-height: 36px;
        `,
        xxl: `
            line-height: 48px;
        `,
        default: `
            line-height: 16px;
        `,
    },

    fontSizes: {
        xxs: `
            font-size: 10px;
        `,
        xs: `
            font-size: 12px;
        `,
        s: `
            font-size: 14px;
        `,
        m: `
            font-size: 16px;
        `,
        l: `
            font-size: 24px;
        `,
        xl: `
            font-size: 36px;
        `,
        xxl: `
            font-size: 48px;
        `,
        default: `
            font-size: 16px;
        `,
    },
};

interface SpaceValues {
    margin?: string;
    marginBottom?: string;
    marginTop?: string;
    marginLeft?: string;
    marginRight?: string;
    padding?: string;
    paddingBottom?: string;
    paddingTop?: string;
    paddingLeft?: string;
    paddingRight?: string;
    [key: string]: any;
}

export const space = (props: ISpaceTypes): SpaceValues => ({
    margin: props.margin || '',
    marginBottom: props.mbottom || '',
    marginTop: props.mtop || '',
    marginLeft: props.mleft || '',
    marginRight: props.mright || '',
    padding: props.padding || '',
    paddingBottom: props.pbottom || '',
    paddingTop: props.ptop || '',
    paddingLeft: props.pleft || '',
    paddingRight: props.pright || '',
});

export const weight = (props: { weight?: WeightTypes }): string => {
    if (props.weight) {
        return globalStyles.weight[props.weight];
    }
    return globalStyles.weight.default;
};

export const fontSize = (props: { fontSize?: FontSizeTypes }): string => {
    if (props.fontSize) {
        return globalStyles.fontSizes[props.fontSize];
    }
    return globalStyles.fontSizes.default;
};

export const align = (props: { position?: PositionTypes }): string => {
    if (props.position) {
        return globalStyles.position[props.position];
    }
    return globalStyles.position.default;
};

export const hoverEffect = `
    transition: 0.2s ease;
    opacity: 1;
`;

export const notHoverEffect = `
    opacity: 0;
`;

export const bgGradient = `background: transparent linear-gradient(90deg, ${colors.purplePink} 0%, ${colors.purpleMain} 100%) 0% 0% no-repeat
        padding-box;`;

export const componentSize = (props: { componentSize?: ComponentSizesTypes }): string => {
    if (props.componentSize) {
        return globalStyles.componentSizes[props.componentSize];
    }
    return globalStyles.componentSizes.default;
};

export const direction = (props: { direction?: DirectionTypes }): string => {
    if (props.direction) {
        return globalStyles.direction[props.direction];
    }
    return globalStyles.direction.default;
};

export const jc = (props: { jc?: JustifyContentTypes }): string => {
    if (props.jc) {
        return globalStyles.jc[props.jc];
    }
    return globalStyles.jc.default;
};

export const ai = (props: { ai?: AlignItemsTypes }): string => {
    if (props.ai) {
        return globalStyles.ai[props.ai];
    }
    return globalStyles.ai.default;
};

export const textAlign = (props: { textAlign?: AlignTextTypes }): string => {
    if (props.textAlign) {
        return globalStyles.textAlign[props.textAlign];
    }
    return globalStyles.textAlign.default;
};

export const lh = (props: { fontSize?: FontSizeTypes }): string => {
    if (props.fontSize) {
        return globalStyles.ln[props.fontSize];
    }
    return globalStyles.ln.default;
};

interface Media {
    lessThan: (breakPoint: BreakPoints) => string;
    moreThan: (breakPoint: BreakPoints) => string;
}

export const media: Media = {
    lessThan: (breakPoint: BreakPoints): string => `@media(max-width: ${breakPoint}px)`,
    moreThan: (breakPoint: BreakPoints): string => `@media(min-width: ${breakPoint + 1}px)`,
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    width: 100%;
    position: relative;
    padding: 0;
    height: 100%;
    ${globalStyles.fonts.default};
    ${globalStyles.weight.default};
    letter-spacing: 1px;
  }
  h1,h2,h3,h4,h5,h6,p,ol,ul {
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: #FFFFFF;
    cursor: pointer;
    &:hover {
        opacity: 0.8
    }
  }
  *, :after, :before {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  #__next {
    position: relative;
    height: 100vh;
    background-color: ${colors.dark};
  }
`;
