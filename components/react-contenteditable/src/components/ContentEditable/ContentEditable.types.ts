import { CSSProperties } from 'react';

export type ChangeCallback = (value: string) => void;

export type ContentEditableProps = {
  /** Inner html of the editable element. */
  html?: string;
  /** The internal tag name of the editable component. */
  Tag?: keyof JSX.IntrinsicElements;
  /** Whether the editing should be disabled or not. */
  readonly?: boolean;
  /** Additional element css class names. */
  className?: string;
  /** The language, the browser should check spelling in. */
  lang?: string;
  /** Whether the browser should check spelling or not. */
  spellcheck?: boolean;
  /** Whether default styling should get applied or not. */
  headless?: boolean;
  /** A collection of css properties which should get applied inline to the element. */
  style?: CSSProperties;
  /** Callback whenever the content changes. */
  onChange?: ChangeCallback;
  /** Callback whenever the element is [blurred](https://developer.mozilla.org/en-US/docs/web/api/element/blur_event). */
  onBlur?: ChangeCallback;
  /** Callback whenever the element has received [focus](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event). */
  onFocus?: ChangeCallback;
};
