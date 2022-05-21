import { classNames } from '@infotition/classnames';
import { ChangeEvent, FunctionComponent, useId } from 'react';

import { Show } from './Show';
import styles from './TextField.module.scss';
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
}) => {
  const textFieldId = useId();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.value);
  };

  const containerClasses = classNames(
    styles['text-field-container'],
    full && styles['full-width'],
    disabled && styles['disabled'],
    error && styles['error'],
  );

  const textFieldClasses = classNames(
    styles['text-field'],
    styles[variant],
    full && styles['full-width'],
    !label && styles['without-label'],
  );

  // TODO: Add icon compound components
  // TODO: Compound label, buttons etc.
  // TODO: Password toggle button

  // TODO: Word count label

  label = required && label ? `${label} *` : label;

  const inputProps = {
    placeholder: ' ',
    onChange: handleChange,
    defaultValue: value,
    disabled,
    type,
    readonly,
    required,
  };

  return (
    <div className={containerClasses}>
      <div className={textFieldClasses}>
        <input id={textFieldId} {...inputProps} />

        <Show when={label}>
          <label htmlFor={textFieldId}>{label}</label>
          <Show when={variant == 'outlined'}>
            <fieldset>
              <legend>{label}</legend>
            </fieldset>
          </Show>
        </Show>
      </div>

      <Show when={helper || error}>
        <span className={styles.helper}>{error ? error : helper}</span>
      </Show>
    </div>
  );
};
