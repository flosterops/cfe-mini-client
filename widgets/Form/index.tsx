import React, { FunctionComponent, ReactElement } from 'react';
import {
    Formik,
    Form as FormikFormWrap,
    FormikValues,
    FormikHelpers,
    FormikErrors,
    FormikFormProps,
    FormikProps,
} from 'formik';
import styled from 'styled-components';

const StyledFormik = styled(Formik)<IFormProps>`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const StyledFormikWrap = styled(FormikFormWrap)<FormikFormProps>`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

interface IFormProps {
    initialValues: any;
    validations?: any;
    onSubmit?: (values: FormikValues, actions: FormikHelpers<FormikValues>) => void;
    onChange?: (values: FormikValues, errors: FormikErrors<FormikValues>) => void;
    renderMode?: 'config' | 'JSX';
    children?: any;
    submitForm?: (values: any) => any;
    getRef?: (ref: any) => void;
}

const Form: FunctionComponent<IFormProps> = ({
    onSubmit,
    getRef,
    validations,
    onChange,
    initialValues,
    children,
}: IFormProps): ReactElement => {
    // private form: any = null;
    const handleSubmit = (values: object, actions: any): void => {
        onSubmit && onSubmit(values, actions);
    };

    const handleGetRef = (form: any): void => {
        // this.form = form;
        getRef && getRef(form);
    };

    const handleValidate = (values: any): FormikErrors<FormikValues> => {
        const errors = {} as FormikErrors<FormikValues>;

        if (!validations) {
            return errors;
        }

        Object.entries(validations).forEach(([fieldName, rules]: any) => {
            errors[fieldName] = rules
                .map((rule: any) => rule({ value: values[fieldName], values }))
                .filter((i: any) => !!i)[0];
        });

        for (let fieldName in errors) {
            if (errors.hasOwnProperty(fieldName) && !errors[fieldName]) {
                delete errors[fieldName];
            }
        }

        onChange && onChange(values, errors);

        return errors;
    };

    return (
        <StyledFormik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            innerRef={handleGetRef}
            validate={handleValidate}
        >
            {(formikProps: FormikProps<FormikValues>) => {
                return (
                    <StyledFormikWrap style={{ display: 'flex', flexDirection: 'column' }}>
                        {children(formikProps)}
                    </StyledFormikWrap>
                );
            }}
        </StyledFormik>
    );
};

export { Form };
