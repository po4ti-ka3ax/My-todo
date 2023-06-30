import PropTypes from 'prop-types'
import s from './Task.module.css';
import React, { useEffect, useState } from 'react';
import diskette from '../../img/diskette.svg'
import lock from '../../img/lock.svg'
import open from '../../img/open.svg'
import pencil from '../../img/pencil.svg'
import trash from '../../img/trash.svg'
import { useLocalStorage } from '../hooks/useLocalStorage';
import Form from '../Form/Form';


const Task = ({tasks, setTasks }) => {

  const [edit, setEdit] = useState(null)
  const [currentValue, setCurrentValue] = useState('')
  const [status, setStatus] = useState(true)
  // const LS = localStorage.setItem('tasks', JSON.stringify(todo))




  const statusTodo = (id) => {
    let newTodo = [...tasks].filter(item => {
      localStorage.setItem("tasks", JSON.stringify(tasks))
      if (item.id === id) {
        item.status = !item.status
      }
      return item
    })
    setTasks(newTodo)
  }
  const editTodo = (id, title) => {
    setEdit(id)
    setCurrentValue(title)

  }
  const deleteTodo = (id) => {
    let newTodo = [...tasks].filter(item => item.id != id)
    setTasks(newTodo)
    localStorage.setItem("tasks", JSON.stringify(tasks))

  }

  const saveEditTodo = (id) => {
    let newTodo = [...tasks].map(item => {
      if (item.id === id) {
        item.title = currentValue
      }
      return item
    })
    setTasks(newTodo)
    setEdit(null)
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }


  // useEffect(() => {
  //   const data = localStorage.getItem('tasks')
  //   if(data !== null) {
  //     setTasks(JSON.parse(data))
  //   }
  // },[])

  // setTasks()


  return (
    <div className={s.form__tasks}>
      <div className={s.tasks}>
        <h2 className={s.tasks__title}>Tasks</h2>
        {
          tasks.map(elem => (
            <div key={elem.id} className={s.task}>
              {
                edit === elem.id
                  ?
                  <div>
                    <input
                      className={s.task__input}
                      value={currentValue}
                      onChange={(e) => setCurrentValue(e.target.value)}
                      placeholder='Редактировать' />
                  </div>
                  :
                  <div className={!elem.status ? s.task__title__close : s.task__title}>{elem.title}</div>
              }


              {
                edit === elem.id
                  ?
                  <button className={s.btn} onClick={() => saveEditTodo(elem.id)}>
                    <img src={diskette} alt="" />
                  </button>
                  :
                  <div className={s.btns}>
                    <button className={s.btn} onClick={() => {
                      statusTodo(elem.id)
                      setStatus(!status)
                    }}>
                      {
                        elem.status
                          ?
                          <img src={lock} alt="lock" />
                          :
                          <img src={open} alt="open" />
                      }

                    </button>
                    <button className={s.btn} onClick={() => editTodo(elem.id, elem.title)}>
                      <img src={pencil} alt="" />
                    </button>
                    <button className={s.btn} onClick={() => deleteTodo(elem.id)}>
                      <img src={trash} alt="" />
                    </button>
                  </div>
              }

            </div>


          ))
        }

      </div>
    </div>

  )
}




Task.propTypes = {
  todo: PropTypes.array,
  setTodo: PropTypes.func,
}


export default Task;