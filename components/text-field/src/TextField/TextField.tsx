import { classNames } from '@infotition/classnames';
import { FunctionComponent, useId } from 'react';

import { Show } from './Show';
import styles from './TextField.module.scss';
import { TextFieldProps } from './TextField.types';

export const TextField: FunctionComponent<TextFieldProps> = ({
  label,
  helper,
  variant = 'outlined',
  type = 'text',
  full = false,
}) => {
  const textFieldId = useId();

  const textFieldClasses = classNames(
    styles['text-field-container'],
    styles[variant],
    full && styles['full-width'],
    !label && styles['without-label'],
  );

  // TODO: Hide helper text if no label
  // TODO: Add icon compound components
  // TODO: Word count label
  // TODO: Number styling
  // TODO: Required prop
  // TODO: Read only prop
  // TODO: Disabled prop
  // TODO: Error as helper text
  // TODO: Password toggle button
  // TODO: Size small/normal prop
  // TODO: margin none, dense, normal prop
  // TODO: Value, on change prop

  // TODO: Compound label, buttons etc.

  return (
    <div className={styles['text-field']}>
      <div className={textFieldClasses}>
        <input id={textFieldId} type={type} placeholder=" "></input>

        <Show when={label}>
          <label htmlFor={textFieldId}>Email</label>
          <Show when={variant == 'outlined'}>
            <fieldset>
              <legend>Email</legend>
            </fieldset>
          </Show>
        </Show>
      </div>

      <span className={styles.helper}>{helper}</span>
    </div>
  );
};
