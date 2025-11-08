import { useFormik } from "formik"
import { validationSchema } from "../model"
import type { CreateTaskProps, TaskData } from "../model"

import css from './index.module.scss';

import { getAllSavedTask, saveAllTasks } from "@shared/util/localStorageUtils";


export const CreateTask: React.FC<CreateTaskProps> = ({open, onClose}) => {
  
  return (
    <dialog open={open} aria-modal={true} className={css.create_task_wrapper}>
      <div className={css.create_task_content}>
        <div className={css.create_task_top_content}>
          <span className={css.create_task_title}>Создать новую задачу</span>
          <button onClick={onClose} className={css.create_task_close_btn}>Закрыть</button>
        </div>
        <CreateTaskForm/>
      </div>
    </dialog>
  )
}


const CreateTaskForm: React.FC = () => {
  const formik = useFormik<Omit<TaskData, 'id'>>({
    initialValues: {
      title: '',
      shortDesc: '',
      isExtreme: false,
      isModerate: false,
      isLow: false,
      description: '',
      date: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const newId = Date.now().toString();
      const newTask: TaskData = {...values, id: newId}; 
      
      const existinTasks = getAllSavedTask();
      const updatedTask = [...existinTasks, newTask];
      saveAllTasks(updatedTask);
      formik.resetForm();
    }
  })
  return (
    <form action="" method="post" onSubmit={formik.handleSubmit} className={css.create_task_form}>
      <fieldset className={css.form_wrapper}>
        <div  className={css.input_conteiner}>
          <label htmlFor="title" className={css.input_wrapper}>
            <span>Названия</span>
            <input type="text" id="title" {...formik.getFieldProps('title')}/>
          </label>
          {/* Отображаем ошибку, если поле было тронуто (touched) и есть ошибка */
            formik.errors.title ? (
            <div className={css.error}>{formik.errors.title}</div>
          ) : null}
        </div>

        <div className={css.input_conteiner}>
          <label htmlFor="shortDesc" className={css.input_wrapper}>
            <span>Краткое описания</span>
            <input type="text" id="shortDesc" {...formik.getFieldProps('shortDesc')}/>
          </label>
          {formik.errors.shortDesc ? (
            <div className={css.error}>{formik.errors.shortDesc}</div>
          ) : null}
        </div >

        <div className={css.input_conteiner}>
          <label htmlFor="date" className={css.input_wrapper} >
            <span>Дата</span>
            <input type="date" id="date" {...formik.getFieldProps('date')}/>
          </label>
          { formik.errors.date ? (
            <div className={css.error}>{formik.errors.date}</div>
          ) : null}
        </div>
        
        <fieldset className={css.checkbox_wrapper}>
          <span>Приоритет: </span>
          <div>
            <label htmlFor="isExtreme">
              <span>Срочный: </span>
              <input 
                type="checkbox" 
                id="isExtreme"
                {...formik.getFieldProps('isExtreme')}
                checked={formik.values.isExtreme}
              />
            </label>
          </div>
          <div>
            <label htmlFor="isModerate">
              <span>Умренный: </span>
              <input 
                type="checkbox"
                id="isModerate"
                {...formik.getFieldProps('isModerate')}
                checked={formik.values.isModerate}
                />
            </label>
          </div>
          <div>
            <label htmlFor="isLow">
              <span>Низкий: </span>
              <input 
                type="checkbox" 
                id="isLow"
                {...formik.getFieldProps('isLow')}
                checked={formik.values.isLow}
              />
            </label>
          </div>
          
        </fieldset>
        <div className={css.description_wrapper}>
          <span>Описания задачи</span>
          <label htmlFor="description">
            <textarea id="description" rows={8} cols={86} {...formik.getFieldProps('description')}/>
          </label>
        </div>
      </fieldset>
        <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>Создать задачу</button>
    </form>
  )
}
