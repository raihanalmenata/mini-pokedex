import './style.css'

import '../designs/styles/color.css'
import '../designs/styles/typography.css'
import '../designs/styles/other.css'

import Header from '../designs/components/Header';
import Footer from '../designs/components/Footer';
import Logo from '../designs/components/Logo';

const App = (): JSX.Element => {
  return (
    <div id="app-con">
      <div id="app">
        <Header>
          <Logo title={true} />
        </Header>
        <div id="app-content">
          <div id="card-list">
            { '< Card List >' }
          </div>
          <div id="card-inspector">
          { '< Card Inspector >' }
          </div>
        </div>
        <Footer 
          text='Mini_Pokedex is a part of technical test project at Dattabot.id'
        />
      </div>
    </div>
  )
}

export default App