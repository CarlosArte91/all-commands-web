import Commands from '../components/Commands'
import Divider from '../components/Divider'
import Technologies from '../components/Technologies'

export default function HomePage() {
  return (
    <main
      className='
        flex
        flex-col
        items-center
        lg:flex-row
        lg:justify-center
        lg:items-stretch
        2xl:px-40
        gap-3'
    >
      <Technologies />
      <Divider />
      <Commands />
    </main>
  )
}
