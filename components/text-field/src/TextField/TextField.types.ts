export type TextFieldProps = {
  /** The label of the text field. */
  label?: string;
  /** The helper text which gets displayed below the text field. */
  helper?: string;
  /** Styling variant of the text field. */
  variant?: 'filled' | 'outlined';
  /** The type of the text field. */
  type?: 'email' | 'password' | 'text' | 'number';
  /** Whether the text field should be full with or not. */
  full?: boolean;
};
