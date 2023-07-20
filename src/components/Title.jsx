import PropTypes from 'prop-types'

export default function Title({ text }) {
  return (
    <h2
      className='
        text-xl
        mb-5
        text-neutral-600
        text-center
        font-bold'
    >
      {text}
    </h2>
  )
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
}
