import { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { FormikProps, FormikValues } from 'formik';
import { Namespaces, withDefaultNamespaces } from 'i18n/helpers';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { isEmail, isRequired, lessThan, moreThan, onlyLatin } from 'widgets/Form/validations';
import { BaseLayout, Field, Form, LoginLayout } from 'widgets';
import { Button, Column, Description, NavLink, Row } from 'ui';
import {
    AlignItemsTypes,
    AlignTextTypes,
    ButtonTypes,
    ComponentSizesTypes,
    JustifyContentTypes,
} from 'models/layout.model';
import { isEmptyObject } from 'helpers/isEmptyObject';
import { colors } from 'helpers/colors';
import { IconTypes } from 'helpers/icons';
import { loginBackground } from 'helpers/theme';
import { ILayout } from 'ui/Layout';
import { useAuth } from 'helpers/useAuth';
import { Preloader } from 'helpers/preloader';
import { ErrorNotification } from 'helpers/useNotification.helper';
import { resetPassRequest } from 'requests/resetPass.request';

const StyledForm = styled(Form)`
    width: 100%;
`;

const Clickable = styled(Row)<ILayout>`
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

const getLoginValidationSchema = (t: (value: string) => string) => ({
    email: [
        isRequired(t('error:this field is required')),
        isEmail(t('error:email is invalid')),
        onlyLatin(t('error:only latin symbols and min 1 letter')),
    ],
    password: [isRequired(t('error:this field is required')), moreThan(8), lessThan(32)],
});

const getResetPassValidationSchema = (t: (value: string) => string) => ({
    email: [
        isRequired(t('error:this field is required')),
        isEmail(t('error:email is invalid')),
        onlyLatin(t('error:only latin symbols and min 1 letter')),
    ],
});

const loginNamespaces = withDefaultNamespaces([Namespaces.login, Namespaces.error]);

const LoginPage = (): ReactElement => {
    const router = useRouter();
    const { t } = useTranslation(loginNamespaces);
    const initialValues = { password: '', email: '', remember: false };
    const { login } = useAuth();
    const [isResetPass, setIsResetPass] = useState<boolean>(false);

    const onSubmit = async ({ email, password }: FormikValues): Promise<void> => {
        try {
            const { error } = (await login(email, password, 1001)) as any;
            if (!error.message) {
                await router.push('/');
                Preloader.done();
            } else {
                Preloader.done();
                ErrorNotification.pushNotification(error.message);
            }
        } catch (e) {
            ErrorNotification.pushNotification(e.message);
        }
    };

    const handleResetPass = async (email: string): Promise<void> => {
        const data = await resetPassRequest(email);
        if (data.errorMessage) {
            ErrorNotification.pushNotification(data.errorMessage);
        } else {
            ErrorNotification.pushNotification(t('login:emailSentSuccessfully'));
        }
    };

    return (
        <BaseLayout withHeader={false} withFooter={false}>
            <LoginLayout bgImage={loginBackground}>
                {isResetPass ? (
                    <StyledForm initialValues={{ email: '' }} validations={getResetPassValidationSchema(t)}>
                        {({ errors, values }: FormikProps<FormikValues>): ReactElement => {
                            const isValid = isEmptyObject(errors);
                            return (
                                <Column>
                                    <Row mbottom="40px">
                                        <Field
                                            name="email"
                                            type="text"
                                            componentSize={ComponentSizesTypes.full}
                                            label={t('login:sendVerifyCode')}
                                        />
                                    </Row>
                                    <Row mbottom="100px">
                                        <Button
                                            type={ButtonTypes.submit}
                                            color={colors.yellow}
                                            componentSize={ComponentSizesTypes.full}
                                            onClick={(): Promise<void> => handleResetPass(values.email)}
                                            disabled={!isValid}
                                        >
                                            {t('login:sendCode')}
                                        </Button>
                                    </Row>
                                    <Column ai={AlignItemsTypes.center}>
                                        <Description mbottom="25px" textAlign={AlignTextTypes.center}>
                                            {t('login:rememberedPass')}
                                        </Description>
                                        <Clickable componentWidth="auto" onClick={(): void => setIsResetPass(false)}>
                                            <Description textAlign={AlignTextTypes.center} color={colors.yellow}>
                                                {t('login:login')}
                                            </Description>
                                        </Clickable>
                                    </Column>
                                </Column>
                            );
                        }}
                    </StyledForm>
                ) : (
                    <StyledForm initialValues={initialValues} validations={getLoginValidationSchema(t)}>
                        {({ errors, values }: FormikProps<FormikValues>): ReactElement => {
                            const isValid = isEmptyObject(errors);
                            return (
                                <>
                                    <Row mbottom="40px">
                                        <Field
                                            name="email"
                                            type="text"
                                            componentSize={ComponentSizesTypes.full}
                                            label={t('login:email')}
                                        />
                                    </Row>
                                    <Row mbottom="40px">
                                        <Field
                                            name="password"
                                            type="password"
                                            componentSize={ComponentSizesTypes.full}
                                            label={t('login:password')}
                                            icon={IconTypes.showPw}
                                        />
                                    </Row>

                                    <Row jc={JustifyContentTypes.spaceBetween} mbottom="40px">
                                        <Field name="remember" type="checkbox" placeholder={t('login:rememberMe')} />
                                        <Clickable componentWidth="auto" onClick={(): void => setIsResetPass(true)}>
                                            <Description color={colors.yellow}>{t('login:forgotPass')}</Description>
                                        </Clickable>
                                    </Row>
                                    <Row mbottom="100px">
                                        <Button
                                            type={ButtonTypes.submit}
                                            color={colors.yellow}
                                            componentSize={ComponentSizesTypes.full}
                                            onClick={(): Promise<void> => onSubmit(values)}
                                            disabled={!isValid}
                                        >
                                            {t('login:signIn')}
                                        </Button>
                                    </Row>
                                    <Column ai={AlignItemsTypes.center}>
                                        <Description mbottom="25px" textAlign={AlignTextTypes.center}>
                                            {t('login:noAccount')}
                                        </Description>
                                        <NavLink href="/register">
                                            <Description textAlign={AlignTextTypes.center} color={colors.yellow}>
                                                {t('login:registerYourSelf')}
                                            </Description>
                                        </NavLink>
                                    </Column>
                                </>
                            );
                        }}
                    </StyledForm>
                )}
            </LoginLayout>
        </BaseLayout>
    );
};

interface InitialProps {
    namespacesRequired: string[];
}

LoginPage.getInitialProps = async (): Promise<InitialProps> => {
    return { namespacesRequired: loginNamespaces };
};

export default LoginPage;
