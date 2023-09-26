import PropTypes from 'prop-types'

InputText.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default function InputText({id,label,value, onChange}){
  return(
    <div>
      <label htmlFor={id} >{label}</label>
      <input 
      type="text"
      id={id}
      value = {value}
      onChange={onChange}/>
    </div>
  )
}
