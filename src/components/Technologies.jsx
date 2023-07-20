import { useState, useEffect } from 'react'
import Technology from './Technology'
import Title from './Title'
import Search from './Search'

const allTechnologies = [
  {
    id: 1,
    name: 'npm'
  },
  {
    id: 2,
    name: 'docker'
  },
  {
    id: 3,
    name: 'linux'
  },
  {
    id: 4,
    name: 'sql'
  },
]

export default function Technologies() {
  const [technologies, setTechnologies] = useState(null)

  useEffect(() => {
    if (!technologies) setTechnologies(allTechnologies)
  }, [technologies])

  return (
    <section
      className='w-full py-4 px-4 sm:w-4/5 lg:w-2/6'
    >
      <Title text='Tecnologías' />

      <div className='tech-header'>
        <div className='tech-search'>
          <Search />

          <button
            className='new-command-button'
          >
            Nuevo comando
          </button>
        </div>

        <div
          className='w-full xs:w-1/2 sm:w-3/5 lg:w-full'
        >
          {technologies && technologies.map((tecnology) => (
            <Technology
              key={tecnology.id}
              id={tecnology.id}
              name={tecnology.name}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
