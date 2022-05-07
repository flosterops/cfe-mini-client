import { TChannelTypes } from './channels.model';

export interface IHeaderLink {
    id: string;
    type: EHeaderLinkTypes;
    text: string;
    to: string;
}

export enum EHeaderLinkTypes {
    support = 'support',
    games = 'games',
    store = 'store',
}

export interface ISupportLinks extends Record<TChannelTypes, string> {}
