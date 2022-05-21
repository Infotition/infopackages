import { classNames } from '@infotition/classnames';
import { ChangeEvent, FunctionComponent, useId, useState } from 'react';

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
  maxLength,
}) => {
  const textFieldId = useId();
  const [wordCount, setWordCount] = useState(value.length);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    if (maxLength) setWordCount(val.length);
    onChange && onChange(val);
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

  label = required && label ? `${label} *` : label;

  const inputProps = {
    placeholder: ' ',
    onChange: handleChange,
    defaultValue: value,
    disabled,
    type,
    readonly,
    required,
    ...((maxLength ?? 0) > 0 && { maxLength }),
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

      <div className={styles.below}>
        <Show when={helper || error}>
          <span className={styles.helper}>{error ? error : helper}</span>
        </Show>
        <Show when={maxLength}>
          <span className={styles.limit}>
            {wordCount} / {maxLength}
          </span>
        </Show>
      </div>
    </div>
  );
};
