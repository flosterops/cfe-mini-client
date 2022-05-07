import { TChannelTypes } from './channels.model';
import { IPreferencesModel } from 'ui/PreferencesBanner';
import { Category } from './category.model';
import { PurchaseType } from './purchase.model';

export interface IGame {
    id: string;
    name: string;
    category: string;
    description: string;
    image: string;
    smallImage: string;
    channel: TChannelTypes;
    mobileImage: string;
}

export interface GameData {
    headerBackground: string;
    name: string;
    categories: Category[];
    purchaseType: PurchaseType;
    topBanner: IBannerDataModel | null;
    patronBanner: IBannerDataModel | null;
    preferences: IPreferencesDataModel | null;
    purchaseOnlyPc: boolean;
}

export interface IPreferencesDataModel extends IPreferencesModel {}

export interface IBannerDataModel {
    imageSrc: string;
    title: string;
    description: string;
    linkText: string;
    href: string;
}
