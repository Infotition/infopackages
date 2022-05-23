import { classNames } from '@infotition/classnames';
import { Show } from '@infotition/react-control-flow';
import { IconButton } from '@infotition/react-icon-button';

import {
  cloneElement,
  ChangeEvent,
  FunctionComponent,
  useId,
  useState,
} from 'react';

import { EyeIcon } from '../Icons/Eye';
import { EyeOffIcon } from '../Icons/EyeOff';
import { TextFieldProps } from './TextField.types';

export const TextField: FunctionComponent<TextFieldProps> = ({
  label,
  helper,
  error,
  variant = 'outlined',
  type = 'text',
  full = false,
  required = false,
  readonly = false,
  disabled = false,
  value = '',
  onChange,
  maxLength,
  rightAdornment,
  leftAdornment,
}) => {
  const textFieldId = useId();
  const [wordCount, setWordCount] = useState(value.length);
  const [fieldType, setFieldType] = useState(type);

  const toggleFieldVisibility = () => {
    setFieldType(fieldType === 'password' ? 'text' : 'password');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (maxLength) setWordCount(val.length);
    onChange && onChange(val);
  };

  if (required && label) label = `${label} *`;
  if (type == 'password') {
    const icon = fieldType === 'password' ? EyeIcon : EyeOffIcon;
    rightAdornment = (
      <IconButton
        icon={icon}
        onClick={toggleFieldVisibility}
        ariaLabel={fieldType === 'password' ? 'show password' : 'hide password'}
      />
    );
  }

  const containerClasses = classNames(
    'text-field-container',
    full && 'full-width',
    disabled && 'disabled',
    error && 'error',
  );

  const textFieldClasses = classNames(
    'text-field',
    variant,
    full && 'full-width',
    !label && 'without-label',
    rightAdornment && 'right-adornment',
    leftAdornment && 'left-adornment',
  );

  const inputProps = {
    placeholder: ' ',
    onChange: handleChange,
    defaultValue: value,
    type: fieldType,
    disabled,
    readOnly: readonly,
    required,
    ...((maxLength ?? 0) > 0 && { maxLength }),
  };

  return (
    <div className={containerClasses} data-testid="text-field-container">
      <div className={textFieldClasses} data-testid="text-field">
        {leftAdornment &&
          cloneElement(leftAdornment, {
            className: 'left-adornment-item',
            disabled,
          })}

        <input id={textFieldId} {...inputProps} />
        <div></div>

        <Show when={label}>
          <label htmlFor={textFieldId}>{label}</label>
          <Show when={variant == 'outlined'}>
            <fieldset>
              <legend>{label}</legend>
            </fieldset>
          </Show>
        </Show>

        {rightAdornment &&
          cloneElement(rightAdornment, {
            className: 'right-adornment-item',
            disabled,
          })}
      </div>

      <div className="below" data-testid="text-field-below">
        <Show when={helper || error}>
          <span className="helper">{error ? error : helper}</span>
        </Show>
        <Show when={maxLength}>
          <span className="limit">
            {wordCount} / {maxLength}
          </span>
        </Show>
      </div>
    </div>
  );
};
