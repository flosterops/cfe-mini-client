import { ReactElement } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { Namespaces, withDefaultNamespaces } from 'i18n/helpers';
import { FormikProps, FormikValues } from 'formik';
import { BaseLayout, Field, Form, LoginLayout, ValidationPopOver } from 'widgets';
import {
    allowLowercase,
    allowSpecialChapter,
    allowUppercase,
    isEmail,
    isRequired,
    lessThan,
    moreThan,
    onlyLatin,
    onlyTenDigits,
    repeatPassword,
} from 'widgets/Form/validations';
import { Button, Description, Row } from 'ui';
import { loginBackground } from 'helpers/theme';
import { isEmptyObject } from 'helpers/isEmptyObject';
import { ButtonTypes, ComponentSizesTypes, FontSizeTypes, JustifyContentTypes, WeightTypes } from 'models/layout.model';
import { IconTypes } from 'helpers/icons';
import { colors } from 'helpers/colors';
import { IValidationModel } from 'models/validation.model';
import { useAuth } from 'helpers/useAuth';
import { ErrorNotification } from 'helpers/useNotification.helper';
import { Preloader } from 'helpers/preloader';

export const StyledValidationPopOver = styled.div<{ size: number }>`
    position: absolute;
    left: -380px;
    top: -20px;
    box-shadow: rgba(0, 0, 0, 0.7) 0px 20px 40px;
    &:after {
        content: '';
        position: absolute;
        z-index: 2;
        top: ${(props) => `calc(50% - ${props.size / 2}px);`}
        right: ${(props) => -props.size / 2}px;
        width: 0;
        height: 0;
        transform: rotate(-45deg);
        border-left: ${(props) => props.size}px solid transparent;
        border-right: ${(props) => props.size}px solid ${colors.dark};
        border-top: ${(props) => props.size}px solid transparent;
        clear: both;
    }
`;

const getRegisterValidationSchema = (t: (value: string) => string) => ({
    email: [
        isRequired(t('error:this field is required')),
        isEmail(t('error:email is invalid')),
        onlyLatin(t('error:only latin symbols and min 1 letter')),
    ],
    password: [
        isRequired(t('error:this field is required')),
        moreThan(8),
        lessThan(32),
        allowUppercase(t('error:should contains one uppercase symbol')),
        allowLowercase(t('error:should contains one lowercase symbol')),
        onlyTenDigits(t('error:base 10 digits')),
        allowSpecialChapter(t('error:non-alphanumeric characters (special characters)')),
    ],
    confirmPassword: [
        isRequired(t('error:this field is required')),
        repeatPassword(t('error:passwords are not matched')),
    ],
    terms: [isRequired(t('error:this field is required'))],
});

const registerNamespaces = withDefaultNamespaces([Namespaces.login, Namespaces.error]);
const initialRegisterValues = { email: '', password: '', configPassword: '', terms: false, promotion: false };

interface IPasswordPopOverValidations {
    validate: (value: string) => boolean;
    text: string;
}

export const getPasswordPopOverValidations = (t: (value: string) => string): IPasswordPopOverValidations[] => [
    {
        text: t('error:lowercase letter of European languages'),
        validate: (value: string): boolean => !allowLowercase()({ value }),
    },
    {
        text: t('error:uppercase letter of European languages'),
        validate: (value: string): boolean => !allowUppercase()({ value }),
    },
    {
        text: t('error:base 10 digits'),
        validate: (value: string): boolean => !onlyTenDigits()({ value }),
    },
    {
        text: t('error:non-alphanumeric characters (special characters)'),
        validate: (value: string): boolean => !allowSpecialChapter()({ value }),
    },
];

export const getPasswordPopOverValidation = (password: string, t: (value: string) => string): IValidationModel[] =>
    getPasswordPopOverValidations(t).map(
        ({ validate, text }: IPasswordPopOverValidations): IValidationModel => ({ text, valid: validate(password) })
    );

const RegisterPage = (): ReactElement => {
    const router = useRouter();
    const { register, validateToken } = useAuth();
    const { t } = useTranslation(registerNamespaces);

    const onSubmit = async (values: FormikValues): Promise<void> => {
        Preloader.start();
        try {
            const error = await register(values.email, values.password, 9001, new Date());
            if (!error?.message) {
                await validateToken(false);
                await router.push('/');
                Preloader.start();
            } else {
                // TODO change error models for register request
                ErrorNotification.pushNotification(t(error.message));
            }
        } catch (e) {
            ErrorNotification.pushNotification(e.message);
        }
    };
    return (
        <BaseLayout withFooter={false} withHeader={false}>
            <LoginLayout bgImage={loginBackground}>
                <Row jc={JustifyContentTypes.center} mbottom="40px">
                    <Description
                        mright="5px"
                        fontSize={FontSizeTypes.l}
                        weight={WeightTypes.w700}
                        color={colors.yellow}
                        uppercase
                    >
                        create
                    </Description>
                    <Description fontSize={FontSizeTypes.l} weight={WeightTypes.w700} uppercase>
                        your glyph account
                    </Description>
                </Row>
                <Form initialValues={initialRegisterValues} validations={getRegisterValidationSchema(t)}>
                    {({ errors, touched, values }: FormikProps<FormikValues>): ReactElement => {
                        const isValid = isEmptyObject(errors) && !isEmptyObject(touched);
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
                                    {values.password && (
                                        <StyledValidationPopOver size={20}>
                                            <ValidationPopOver
                                                validations={getPasswordPopOverValidation(values.password, t)}
                                            />
                                        </StyledValidationPopOver>
                                    )}
                                </Row>
                                <Row mbottom="40px">
                                    <Field
                                        name="confirmPassword"
                                        type="password"
                                        componentSize={ComponentSizesTypes.full}
                                        label="Confirm password"
                                        icon={IconTypes.showPw}
                                    />
                                </Row>

                                <Row mbottom="20px">
                                    <Field
                                        name="terms"
                                        type="checkbox"
                                        placeholder="I have read and agree to Trion's Terms of Usage and Privacy Policy."
                                    />
                                </Row>
                                <Row mbottom="40px">
                                    <Field
                                        name="promotion"
                                        type="checkbox"
                                        placeholder="Click this box to receive Glyph announcement and promotional messages."
                                    />
                                </Row>
                                <Row>
                                    <Button
                                        type={ButtonTypes.submit}
                                        color={colors.yellow}
                                        componentSize={ComponentSizesTypes.full}
                                        onClick={(): Promise<void> => onSubmit(values)}
                                        disabled={!isValid}
                                    >
                                        Create Account
                                    </Button>
                                </Row>
                            </>
                        );
                    }}
                </Form>
            </LoginLayout>
        </BaseLayout>
    );
};

interface IServerSideProps {
    namespacesRequired: Namespaces[];
    forgotPassword: false;
}

RegisterPage.getInitialProps = async (): Promise<IServerSideProps> => {
    return { namespacesRequired: registerNamespaces, forgotPassword: false };
};

export default RegisterPage;
