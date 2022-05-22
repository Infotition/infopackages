import { classNames } from '@infotition/classnames';
import { cloneElement, FunctionComponent, useRef } from 'react';

import { IconButtonProps } from './IconButton.types';

/**
 * React component representing an clickable icon button with ripple
 * animation.
 *
 * @example ```js
 *   <IconButton icon={EyeIcon} onClick={() => console.log('click"')} />
 * ```
 */
export const IconButton: FunctionComponent<IconButtonProps> = ({
  icon,
  onClick,
  disabled = false,
  className = '',
  size = 'medium',
  ariaLabel = 'icon button',
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    const classList = buttonRef.current?.classList;
    classList?.remove('animate');
    classList?.add('animate');
    setTimeout(() => classList?.remove('animate'), 400);
    onClick && onClick();
  };

  const buttonClasses = classNames(
    'icon-button',
    disabled && 'disabled',
    size,
    className,
  );

  const buttonProps = {
    className: buttonClasses,
    onClick: handleClick,
    disabled,
  };

  return (
    <button ref={buttonRef} data-testid="icon-btn" {...buttonProps}>
      {cloneElement(icon, { 'aria-hidden': true })}
      <span className="sr-only">{ariaLabel}</span>
    </button>
  );
};
