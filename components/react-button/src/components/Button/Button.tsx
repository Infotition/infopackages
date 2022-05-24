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
  startIcon,
  endIcon,
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
    'aria-busy': loading,
    onClick: handleClick,
    className: buttonClasses,
    tabIndex: 0,
    disabled,
    type,
    variant,
  };

  return (
    <button ref={button} data-testid="btn" {...buttonProps}>
      <Show when={!loadingIndicator && loading && loadingPosition !== 'end'}>
        <div className="spinner" aria-hidden />
      </Show>

      <Show when={startIcon}>
        <div className="icon">{startIcon}</div>
      </Show>

      <Show when={loading}>
        <>{loadingIndicator}</>
      </Show>

      <Show
        when={!loadingIndicator && (!loading || (loading && loadingPosition))}
      >
        <>{label}</>
      </Show>

      <Show when={endIcon}>
        <div className="icon">{endIcon}</div>
      </Show>

      <Show when={!loadingIndicator && loading && loadingPosition === 'end'}>
        <div className="spinner" />
      </Show>
    </button>
  );
};
