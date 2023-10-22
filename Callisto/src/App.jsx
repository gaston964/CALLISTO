import './App.css'
import NavBar from './components/NavBar'
import CompraCards from './components/CompraCards'

function App() {


  return (
    <>
      <section className='background'>
        <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'/>
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
          <div id='title'>
            <span className='title'>
              CALLISTO
            </span>
            <br/>
              <span>
                START LIVING
              </span>
          </div>
          <NavBar />
          <CompraCards />
      </section>
    </>
  )
}

export default App
