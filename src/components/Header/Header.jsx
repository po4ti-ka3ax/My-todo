import PropTypes from 'prop-types'
import s from './Header.module.css';


const Header = (props) => {
  return (
    <div>
      <h1 className={s.header__title}>
        ToDo list 2023
      </h1>
    </div>
  )
}




Header.propTypes = {
  text: PropTypes.string
}


export default Header;