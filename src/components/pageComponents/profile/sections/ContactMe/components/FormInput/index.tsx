import style from '../../style.module.css';

type FormInputType = {
  type: 'text' | 'textarea';
  name: string;
  placeholder?: string;
  label: string;
  register: any;
  errors?: Record<string, any>;
};

const FormInput = (props: FormInputType) => {
  const { label, type, register, name, placeholder, errors } = props;

  const isError = name in (errors || {}) || false;

  const errMessage = errors?.[name]?.message || '';

  return (
    <li className={[style.formElement, isError ? style.error : ''].join(' ')}>
      <label htmlFor={name}>{label}</label>
      {type === 'text' ? (
        <input
          type={'text'}
          {...register}
          id={name}
          placeholder={placeholder}
        />
      ) : (
        <textarea
          {...register}
          rows={5}
          id={name}
          placeholder={placeholder}
        ></textarea>
      )}
      <span className="block text-red-600 text-xs transition-all">
        {errMessage}
      </span>
    </li>
  );
};

export default FormInput;
