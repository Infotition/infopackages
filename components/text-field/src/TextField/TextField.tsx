import { classNames } from '@infotition/classnames';
import { IconButton } from '@infotition/icon-button';
import {
  cloneElement,
  ChangeEvent,
  FunctionComponent,
  useId,
  useState,
} from 'react';
import { EyeIcon } from '../Icons/Eye';
import { EyeOffIcon } from '../Icons/EyeOff';

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
    rightAdornment = <IconButton icon={icon} onClick={toggleFieldVisibility} />;
  }

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
    rightAdornment && styles['right-adornment'],
    leftAdornment && styles['left-adornment'],
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
    <div className={containerClasses}>
      <div className={textFieldClasses}>
        {leftAdornment &&
          cloneElement(leftAdornment, {
            className: styles['left-adornment-item'],
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
            className: styles['right-adornment-item'],
            disabled,
          })}
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
