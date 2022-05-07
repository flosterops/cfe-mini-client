import React, { FunctionComponent, ReactElement } from 'react';
import { ISpaceTypes } from 'models/layout.model';
import styled from 'styled-components';
import ReCAPTCHA from 'react-google-recaptcha';
import { space } from 'helpers/theme';

interface ICaptcha extends ISpaceTypes {
    onChange?: (...args: any) => void;
}

const siteKey = '6LeMMiwaAAAAADUF9VkqY8uRurkvfi_gtgmw0gVI';

const StyledCaptcha = styled(ReCAPTCHA)<ICaptcha>`
    ${space}
`;

const Captcha: FunctionComponent<ICaptcha> = ({ onChange, ...props }: ICaptcha): ReactElement => {
    return <StyledCaptcha sitekey={siteKey} onChange={onChange} {...props} />;
};

export { Captcha };
