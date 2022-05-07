import React, { FunctionComponent, ReactElement } from 'react';
import { Collapse, Column, Description, Icon, NavLink, Row } from 'ui';
import styled from 'styled-components';
import { Category } from 'models/category.model';
import { useRouter } from 'next/router';
import { AlignItemsTypes, ComponentSizesTypes, FontSizeTypes, JustifyContentTypes } from 'models/layout.model';
import { IconTypes } from 'helpers/icons';
import { IIcon } from 'ui/Icon';
import { colors } from 'helpers/colors';
import { ILayout } from 'ui/Layout';
import nextI18Next from 'i18n';
import { fontSize } from 'helpers/theme';
import { Field, Form } from 'widgets';
import { IFieldProps } from 'widgets/Form/FieldWrap';
import { IGame } from 'models/game.model';

const { useTranslation } = nextI18Next;

interface MobileStoreMenu {
    categories: Category[];
    currentGame: IGame;
}

interface IDefilement extends IIcon {
    visible: boolean;
}

const Defilement = styled(Icon)<IDefilement>`
    transition: all 0.4s ease;
    transform: ${(props: IDefilement): string => (props.visible ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const ListItem = styled(Row)<ILayout>`
    text-transform: uppercase;
    border-bottom: 1px solid ${colors.grayMedium};
    padding: 0 15px;
    height: 40px;
    & a {
        ${fontSize({ fontSize: FontSizeTypes.s })}
    }
`;

const StyledField = styled(Field)<IFieldProps>`
    & input {
        height: 30px;
        border-color: transparent;
        background: #130923;
        font-size: 12px;
    }
`;

const GameImage = styled.img`
    width: 50px;
`;

interface CategoryHeading {
    visible: boolean;
}

const CategoryHeading = ({ visible }: CategoryHeading): ReactElement => {
    return (
        <ListItem padding="0 15px" ai={AlignItemsTypes.center} componentHeight="60px">
            <Description uppercase>game</Description>
            <Defilement visible={visible} mleft="5px" alt={IconTypes.defilement} icon={IconTypes.defilement} />
        </ListItem>
    );
};

const MobileStoreMenu: FunctionComponent<MobileStoreMenu> = ({
    categories = [],
    currentGame,
}: MobileStoreMenu): ReactElement => {
    const router = useRouter();
    const channel = router.query.channel;
    const { t } = useTranslation();

    return (
        <Column>
            <Row ai={AlignItemsTypes.center} componentHeight="50px" componentWidth="auto" mtop="36px" padding="0 15px">
                <GameImage src={currentGame.mobileImage} alt={currentGame.mobileImage} />
                <Column mleft="10px">
                    <Description uppercase>{currentGame.name}</Description>
                    <Description color={colors.yellow} uppercase>
                        store
                    </Description>
                </Column>
            </Row>
            <Form initialValues={{ search: '' }}>
                {(): ReactElement => {
                    return (
                        <StyledField
                            margin="30px 0 0"
                            componentSize={ComponentSizesTypes.full}
                            name="search"
                            type="search"
                            icon={IconTypes.search}
                        />
                    );
                }}
            </Form>
            <Collapse
                mtop="30px"
                heading={(visible: boolean): ReactElement => <CategoryHeading visible={visible} />}
                icon={(): false => false}
            >
                <Column padding="0 15px">
                    {categories.map(
                        (category: Category): ReactElement => {
                            return (
                                <ListItem key={category.id}>
                                    <NavLink
                                        href={{
                                            pathname: '/[channel]/[categoryId]/',
                                            query: { channel, categoryId: category.name },
                                        }}
                                    >
                                        {category.name}
                                    </NavLink>
                                </ListItem>
                            );
                        }
                    )}
                </Column>
            </Collapse>
            <ListItem>
                <NavLink
                    href={{
                        pathname: '/[channel]/bonus-shop/',
                        query: { channel },
                    }}
                >
                    {t('bonus shop')}
                </NavLink>
            </ListItem>
            <ListItem>
                <NavLink
                    href={{
                        pathname: '/[channel]/patron-page/',
                        query: { channel },
                    }}
                >
                    {t('patron page')}
                </NavLink>
            </ListItem>
            <Row componentHeight="60px" padding="0 15px">
                <NavLink
                    href={{
                        pathname: '/[channel]/patron-page/',
                        query: { channel },
                    }}
                >
                    <Description uppercase color={colors.yellow}>
                        {t('community page')}
                    </Description>
                </NavLink>
            </Row>
            <Row padding="0 15px" mtop="50px" ai={AlignItemsTypes.center} jc={JustifyContentTypes.spaceBetween}>
                <Description uppercase>shopping cart</Description>
                <Icon icon={IconTypes.cart} alt={IconTypes.cart} width="24px" height="20px" />
            </Row>
            <Row
                mtop="15px"
                jc={JustifyContentTypes.spaceBetween}
                ai={AlignItemsTypes.center}
                bg="#271A3D"
                componentHeight="38px"
                padding="0 15px 0 30px"
            >
                <Description>Glyph Coins</Description>
                <Row ai={AlignItemsTypes.center} componentWidth="auto">
                    <Description color={colors.yellow}>0</Description>
                    <Icon
                        icon={IconTypes.glyphCoin}
                        alt={IconTypes.glyphCoin}
                        mleft="10px"
                        width="20px"
                        height="18px"
                    />
                </Row>
            </Row>
            <Row
                mtop="15px"
                jc={JustifyContentTypes.spaceBetween}
                ai={AlignItemsTypes.center}
                bg={colors.sky}
                componentHeight="38px"
                padding="0 15px 0 30px"
            >
                <Row componentWidth="auto">
                    <Description color={colors.dark}>Recharge</Description>
                    <Description mleft="3px">Binaries</Description>
                </Row>
                <Row ai={AlignItemsTypes.center} componentWidth="auto">
                    <Description>0</Description>
                    <Icon
                        icon={IconTypes.binaryCoin}
                        alt={IconTypes.binaryCoin}
                        mleft="10px"
                        width="20px"
                        height="18px"
                    />
                </Row>
            </Row>
        </Column>
    );
};

export { MobileStoreMenu };
