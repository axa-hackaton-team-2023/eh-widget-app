import React, {FC} from 'react';
import createAXADropdownReact from '@axa-ch/dropdown/lib/index.react';

const AXADropdownReact = createAXADropdownReact(React.createElement);

const SelectWidget: FC<any> = ({
                          id,
                          options,
                          value,
                          required,
                          disabled,
                          readonly,
                          autofocus,
                          onChange,
                          onBlur,
                          onFocus
                      }) => {
    // Map options.enumOptions to items for AXADropdown
    const items = options.enumOptions.map(option => ({
        name: option.label,
        value: option.value,
        isSelected: option.value === value
    }));

    // Handle change event to propagate to the form
    const handleChange = (value) => {
        console.log(value);
        onChange(value.value);
    };

    // Return the AXADropdownReact with mapped props
    return (
        <AXADropdownReact
            key={id}
            items={items}
            defaultTitle={options.title}
            value={value}
            name={name}
            required={required}
            disabled={disabled || readonly}
            invalid={options.rawErrors && options.rawErrors.length > 0}
            onChange={handleChange}
            // onBlur and onFocus can be similarly mapped if needed
        />
    );
};

export default SelectWidget;
