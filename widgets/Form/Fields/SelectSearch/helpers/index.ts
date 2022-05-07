import { defaultSelectStyle } from 'widgets/Form/Fields/SelectSearch/helpers/Styles/defaultSelect';
import { getAccountSelectStyle } from './Styles/accountSelect';
import { transparentSelectStyle } from './Styles/transparentSelect';

const selectStyles = {
    default: defaultSelectStyle,
    account: getAccountSelectStyle(0),
    accountBordered: getAccountSelectStyle(5),
    transparent: transparentSelectStyle,
};

enum SelectMenuPlacement {
    default = 'auto',
    bottom = 'bottom',
    top = 'top',
}

export { selectStyles, SelectMenuPlacement };
