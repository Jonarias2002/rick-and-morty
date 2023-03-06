import CharacterList from './components/CharacterList'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-black text-success'>
      <h1 className='text-center display-1 py-4'>Rick and Morty</h1>
      <CharacterList/>
      <Footer />
    </div>
  )
}

export default App 