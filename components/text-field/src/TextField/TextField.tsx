import { classNames } from '@infotition/classnames';
import { IconButton } from '@infotition/icon-button';
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

  const eye = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.test}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
      <path
        fillRule="evenodd"
        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div className={containerClasses}>
      <div className={textFieldClasses}>
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

        {eye}
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
