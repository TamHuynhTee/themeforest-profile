import React from 'react';
import { useForm } from 'react-hook-form';
import style from '../../style.module.css';
import FormInput from '../FormInput';

type Props = {};

const FormContact = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.formElement}>
      <h3 className={style.formTitle}>Leave a message</h3>
      <ul>
        <FormInput
          errors={errors}
          label="Name"
          name="name"
          type="text"
          register={{
            ...register('name', {
              required: {
                value: true,
                message: 'Name required',
              },
            }),
          }}
        />
        <FormInput
          errors={errors}
          label="Email"
          name="email"
          type="text"
          placeholder=""
          register={{
            ...register('email', {
              required: {
                value: true,
                message: 'Email required',
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            }),
          }}
        />
        <FormInput
          errors={errors}
          label="Message"
          name="message"
          type="textarea"
          placeholder=""
          register={{
            ...register('message', {
              required: {
                value: true,
                message: 'Message required',
              },
            }),
          }}
        />

        <li className={style.formElement}>
          <button type="submit" className={style.submitButton}>
            Send
          </button>
        </li>
      </ul>
    </form>
  );
};

export default FormContact;
