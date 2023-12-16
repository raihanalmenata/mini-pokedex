import './style.css'

import '../designs/styles/color.css'
import '../designs/styles/typography.css'
import '../designs/styles/other.css'

import Header from '../designs/components/Header';
import Footer from '../designs/components/Footer';

const App = (): JSX.Element => {
  return (
    <div id="app-con">
      <div id="app">
        <Header />
        <div id="app-content">
          <div id="card-list">
            { '< Card List >' }
          </div>
          <div id="card-inspector">
          { '< Card Inspector >' }
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App