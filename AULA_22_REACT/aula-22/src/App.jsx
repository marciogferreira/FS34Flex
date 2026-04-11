import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Main from './layouts/Main'
import CardProduct from './components/CardProduct'
function App() {
  return (
    <>
      {/* Passagem de Props com React */}
      <Header nome="FullStack" cargah="100h">
        <p>Conteúdo Programático:</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
        </ul>
      </Header>
      <Header nome="Frontend" />
      <Header nome="Backend" />
      <Main />

      <Footer />
    </>
  )
}
export default App
