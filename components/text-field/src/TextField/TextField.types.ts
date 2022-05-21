export type ChangeCallback = (value: string) => void;

export type TextFieldProps = {
  /** The label of the text field. */
  label?: string;
  /** The helper text which gets displayed below the text field. */
  helper?: string;
  /** Styling variant of the text field. */
  variant?: 'filled' | 'outlined';
  /** The type of the text field. */
  type?: 'email' | 'password' | 'text' | 'number';
  /** Whether the text field should be full with. */
  full?: boolean;
  /** Whether the input of the field is required. */
  required?: boolean;
  /** Whether the input should be read only or not. */
  readonly?: boolean;
  /** Whether the input should be disabled or not. */
  disabled?: boolean;
  /** Error message which should get displayed below field. */
  error?: string;
  /** The current value of the text field. */
  value?: string;
  /** Callback whenever the content changes. */
  onChange?: ChangeCallback;
};
