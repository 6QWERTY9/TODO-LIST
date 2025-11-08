import * as Yup from 'yup';

export const validationSchema = Yup.object({
    title: Yup.string().max(30).required("Название не должно превышать 30 символов"),
    shortDesc: Yup.string().max(100).required("Краткое описани не должно превышать 100 символов"),
    date: Yup.date().required("Дата обязательна"),
    description: Yup.string()
})