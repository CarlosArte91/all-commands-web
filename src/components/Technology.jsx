import PropTypes from 'prop-types'

export default function Technology({ id, name }) {
  return (
    <button
      className='technology'
      onClick={() => console.log('id', id)}
    >
      {name}
    </button>
  )
}

Technology.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
}
