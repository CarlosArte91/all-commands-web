import PropTypes from 'prop-types'

export default function Command({ id, name, description }) {
  return (
    <article className='command'>
      <div>
        <h4 className='font-bold'>
          {name}
        </h4>

        <span className='block text-sm'>
          {description}
        </span>
      </div>

      <button
        className='commad-button'
        onClick={() => console.log('id', id)}
      >
        Modificar
      </button>
    </article>
  )
}

Command.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
