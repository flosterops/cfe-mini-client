import React, { FunctionComponent, ReactElement, useState } from 'react';
import Select from 'react-select';
import { ISelectOptionsModel } from 'widgets/Form/Fields/SelectSearch';
import { countSelectStyles } from './styles';

function getDefaultSelectCountOptions(count: number = 10): ISelectOptionsModel[] {
    const options = [] as ISelectOptionsModel[];
    for (let i = 0; i < count; i++) {
        options.push({ value: i + 1, label: i + 1 });
    }
    return options;
}

const DEFAULT_COUNT_SELECT_VALUE = { value: 1, label: 1 };

interface ISelectCount {
    defaultValue?: ISelectOptionsModel;
    onChange: (value: ISelectOptionsModel) => void;
}

const SelectCount: FunctionComponent<ISelectCount> = ({
    onChange,
    defaultValue = DEFAULT_COUNT_SELECT_VALUE,
}: ISelectCount): ReactElement => {
    const [value, setValue] = useState<ISelectOptionsModel>(defaultValue);
    const options = getDefaultSelectCountOptions();

    const handleChange = (value: any): void => {
        setValue(value);
        onChange(value);
    };

    return (
        <Select
            options={options}
            value={value}
            onChange={handleChange}
            styles={countSelectStyles}
            isSearchable={false}
            isClearable={false}
        />
    );
};

export { SelectCount };
