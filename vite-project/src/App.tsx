import Header from './components/header'
import GroeneHaven from './components/groenehaven';
import Plaats from './components/plaats';
import Missie from './components/missie';
import WieBenIk from './wiebenik';
import Contact from './components/contact';
import { Testimonials } from './components/testimonials';

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
        <Testimonials/>
        <WieBenIk/>
        <Contact/>
      </main>
    </>
  )
}

export default App
