import { classNames } from '@infotition/classnames';
import { FunctionComponent, useRef } from 'react';
import styles from './ContentEditable.module.scss';
import { ContentEditableProps, ChangeCallback } from './ContentEditable.types';

/**
 * React component representing an element with editable contents.
 *
 * @example ```js
 *    const [html, setHtml] = useState('Edit me');
 *    return <ContentEditable html={html} onChange={setHtml}  />
 * ```
 */
export const ContentEditable: FunctionComponent<ContentEditableProps> = ({
  html = 'Edit me!',
  Tag = 'div',
  readonly = false,
  spellcheck = false,
  lang = 'en',
  headless = false,
  className,
  style,
  onChange,
  onBlur,
  onFocus,
  onKey,
}) => {
  const value = useRef(html);

  /** Calls the callback function if it is present with the inner html value of the target element. */
  const handleCallback = (target: EventTarget, callback?: ChangeCallback) => {
    callback && callback((target as HTMLDivElement).innerHTML);
  };

  return (
    <Tag
      data-testid="content-editable"
      dangerouslySetInnerHTML={{ __html: value.current }}
      contentEditable={!readonly}
      onInput={({ target }) => handleCallback(target, onChange)}
      onBlur={({ target }) => handleCallback(target, onBlur)}
      onFocus={({ target }) => handleCallback(target, onFocus)}
      onKeyDown={(event) => onKey && onKey('down', event)}
      onKeyUp={(event) => onKey && onKey('up', event)}
      className={classNames(className, !headless && styles['content-editable'])}
      lang={lang}
      spellCheck={spellcheck}
      style={style}
    />
  );
};
