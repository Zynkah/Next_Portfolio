import {
  FieldValues,
  Path,
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";

interface ContactInputProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  register: (name: Path<T>) => ReturnType<UseFormRegister<T>>;
  errors: FieldErrors<T>;
  labelClass?: string;
  inputClass?: string;
  errorClass?: string;
  multiline?: boolean;
}

export const ContactInput = <T extends FieldValues>({
  label,
  name,
  placeholder,
  type = "text",
  register,
  errors,
  labelClass,
  inputClass,
  errorClass,
  multiline = false,
}: ContactInputProps<T>) => {
  const error = errors[name];

  return (
    <div>
      <label htmlFor={`cf-${name}`} className={labelClass}>
        {label}
      </label>
      {multiline ? (
        <textarea
          id={`cf-${name}`}
          placeholder={placeholder}
          className={inputClass}
          {...register(name)}
        />
      ) : (
        <input
          id={`cf-${name}`}
          type={type}
          placeholder={placeholder}
          className={inputClass}
          {...register(name)}
        />
      )}
      {error?.message && (
        <p className={errorClass}>▸ {String(error.message)}</p>
      )}
    </div>
  );
};
