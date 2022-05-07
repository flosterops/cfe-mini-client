import { IFieldProps } from 'widgets/Form/FieldWrap';
import { colors } from 'helpers/colors';

const accountTypes = ['text', 'password', 'email'];

export const inputStyles = {
    account: {
        getFieldBorder: function ({ type }: IFieldProps) {
            if (accountTypes.includes(type as string)) {
                return `border-color: ${colors.grayMedium}`;
            }
            return '';
        },

        getFieldBg: function ({ type }: IFieldProps) {
            if (accountTypes.includes(type as string)) {
                return `background: ${colors.dark}`;
            }
            return '';
        },

        getFieldHeight: function ({ type }: IFieldProps) {
            if (accountTypes.includes(type as string)) {
                return 'height: 45px';
            }
            return '';
        },
    },
};
