import { classNames } from '@infotition/classnames';
import { Show } from '@infotition/react-control-flow';
import { FunctionComponent, useRef } from 'react';

import { createClickAnimation } from '../../utils/createRippleAnimation';
import { ButtonProps } from './Button.types';

export const Button: FunctionComponent<ButtonProps> = ({
  label,
  type = 'button',
  variant = 'contained',
  color = 'primary',
  loadingPosition,
  loadingIndicator,
  disableElevation = false,
  disabled = false,
  full = false,
  loading = false,
  className,
  onClick,
}) => {
  const button = useRef<HTMLButtonElement>(null);

  const handleClick = (event: React.MouseEvent) => {
    createClickAnimation(event, 'btn-ripple');
    button.current?.blur();
    onClick && onClick();
  };

  const buttonClasses = classNames(
    'btn',
    variant,
    color,
    !disableElevation && 'elevation',
    disabled && 'disabled',
    full && 'full-width',
    className,
  );

  const buttonProps = {
    onClick: handleClick,
    className: buttonClasses,
    tabindex: 0,
    disabled,
    type,
    variant,
  };

  return (
    <button ref={button} {...buttonProps}>
      <Show when={!loadingIndicator && loading && loadingPosition != 'end'}>
        <div className="spinner" />
      </Show>

      <Show when={!loading || (loading && loadingPosition)}>
        <>{loading && loadingIndicator ? loadingIndicator : label}</>
      </Show>

      <Show when={!loadingIndicator && loading && loadingPosition == 'end'}>
        <div className="spinner" />
      </Show>
    </button>
  );
};
