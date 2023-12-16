import './style.css'

import '../designs/styles/color.css'
import '../designs/styles/typography.css'
import '../designs/styles/other.css'

import Header from '../designs/components/Header';
import Footer from '../designs/components/Footer';
import Logo from '../designs/components/Logo';
import PokeCard from './components/PokeCard';
import PokeInspector from './components/PokeInspector';

import { useCardData } from '../stores/cardData';
import { getNewCardData } from '../utils/pokemon';
import { useState } from 'react';

const App = (): JSX.Element => {

  const [cardData, dispatchCardData] = useCardData();
  const [selectedCardId, setSelectedCardId] = useState('');

  const handleCardListOnScroll = async (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const cardList = e.target as HTMLDivElement;
    const isScrolledToBottom = Math.abs(cardList.scrollHeight - cardList.clientHeight - cardList.scrollTop) < 1

    if (isScrolledToBottom) {
      const newCardData = await getNewCardData(7, cardData?.length);
      dispatchCardData({
        type: 'added',
        data: newCardData
      })
    }
  }

  const handleCardClick = (index: string) => setSelectedCardId(index);

  return (
    <div id="app-con">
      <div id="app">
        <Header>
          <Logo title={true} />
        </Header>
        <div id="app-content">
          <div id="card-list" 
          onScroll={handleCardListOnScroll}
          >
            {
              cardData.map(
                (data) => <PokeCard {...data} key={data.index} clickHandler={handleCardClick}/>
              )
            }
          </div>
          <PokeInspector selectedCardIndex={selectedCardId}/>
        </div>
        <Footer
          text='Mini_Pokedex is a part of technical test project at Dattabot.id'
        />
      </div>
    </div>
  )
}

export default App