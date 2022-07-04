import * as yup from 'yup';

const FIELD_REQUIRED = 'Це поле має бути заповнено'

const schema = yup.object().shape({
  login: yup
    .string()
    .required(FIELD_REQUIRED),
  password: yup
    .string()
    .required(FIELD_REQUIRED)
    .min(4, 'Пароль повинен містити не менше 8 символів'),
})

export default schema;
