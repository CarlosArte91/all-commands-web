import { useEffect, useState } from 'react'
import Command from './Command'
import Title from './Title'

const allCommands = [
  {
    id: 1,
    name: 'npm install',
    description: 'Este es el comando básico de npm para instalar cualquier dependencia.',
  },
  {
    id: 2,
    name: 'npm uninstall',
    description: 'Este comando se usa para desinstalar una dependencia del proyecto.',
  },
  {
    id: 3,
    name: 'docker run',
    description: 'Este comando se usa para iniciar un contenedor de docker.',
  },
  {
    id: 4,
    name: 'docker ps',
    description: 'Sirve para consultar las imagenes de mi equipo.',
  },
  {
    id: 5,
    name: 'docker ps -a',
    description: 'Sirve para consultar las imagenes de mi equipo.',
  },
]

export default function Commands() {
  const [commands, setCommands] = useState(null)

  useEffect(() => {
    if (!commands) setCommands(allCommands)
  }, [commands])

  return (
    <section
      className='py-4 px-4 w-full sm:w-4/5 lg:w-3/6'
    >
      <Title text='Comandos' />

      {commands && commands.map((command) => (
        <Command
          key={command.id}
          id={command.id}
          name={command.name}
          description={command.description}
        />
      ))}
    </section>
  )
}
