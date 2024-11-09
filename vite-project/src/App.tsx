import Header from './header'
import GroeneHaven from './groenehaven';
import Plaats from './plaats';
import Missie from './missie';
import WieBenIk from './wiebenik';
import Contact from './contact';

function App() {

  return (
    <>
      <Header/>
      <main className='h-full pt-28 md:pt-40'>
        <div className='argent custom-bg h-screen bg-cover md:bg-fixed'>
          <h1 className='text-3xl md:text-4xl font-bold pt-40 text-center text-white'>Groene haven voor jongeren.</h1>
        </div>
        <Missie/>
        <Plaats/>
        <GroeneHaven/>
        <WieBenIk/>
        <Contact/>
      </main>
    </>
  )
}

export default App
