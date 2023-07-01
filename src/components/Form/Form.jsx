import PropTypes from 'prop-types'
import s from './Form.module.css';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Task from '../Task/Task';


const Form = ({ tasks, setTasks }) => {
  const [currentValue, setCurrentValue] = useState('')


  function setStorageData(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
  }


  const saveHandler = () => {
    setStorageData("tasks", tasks)
  }

  const addTodo = () => {
    setTasks(
      [...tasks, {
        id: uuidv4(),
        title: currentValue,
        status: true
      }],
    )
    setCurrentValue('')
  }

  useEffect(() => {
    saveHandler()
  },[tasks])



  return (
    <div className={s.form__task}>
      <div className={s.form}>
        <input
          placeholder='Введите задачу'
          value={currentValue}
          onChange={e => setCurrentValue(e.target.value)}
          className={s.form__input} />
        <button className={s.form__btn} onClick={addTodo}>Add task</button>
      </div>
      <Task tasks={tasks} setTasks={setTasks}/>

    </div>

  )
}




Form.propTypes = {
  tasks: PropTypes.array,
  setTasks: PropTypes.func,
}


export default Form;