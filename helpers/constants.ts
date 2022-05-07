import { BreakPoints } from './responsive';

export const constants = {
    // currently we have only one [width], but it will be breakpoint for desktop when we add mobile view
    getWidth: (value: BreakPoints): string => value + 'px',
    width: {
        wideDesktop: BreakPoints.wideDesktop + 'px',
        lgDesktop: BreakPoints.lgDesktop + 'px',
        desktop: BreakPoints.desktop + 'px',
        smallDesktop: BreakPoints.smallDesktop + 'px',
        tablet: BreakPoints.tablet + 'px',
        phone: BreakPoints.phone + 'px',
        smallPhone: BreakPoints.smallPhone + 'px',
    },
    maxWidthWithPadding: '1510px',
    virtualCurrency: {
        atlas: 'TWC',
    },
    downloadLink:
        'https://analytics.trionworlds.com/dl?file=https%3A%2F%2Fglyph.dyn.triongames.com%2Fglyph%2Flive%2FGlyphInstall.exe&l=1616526110031&f=e0fbf05f41d020665cba38924aeb16c2:2230030429&p=https%3A%2F%2Fglyph.trionworlds.com%2Faccount%2Fprofile%2Fmanage-game!input.action%3Fdd%3D1&r=&k=UA-7947017-5',
};
