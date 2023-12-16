import { useEffect, useState } from 'react';
import './style.css'
import { getInspectorDataFromIndex } from '../../../utils/pokemon';

interface Props {
    selectedCardIndex : string
}

const PokeInspector = ({
    selectedCardIndex
}: Props): JSX.Element => {

    const [data, setData] = useState(null)

    useEffect(()=> {
        const getData = async () => {
            if(selectedCardIndex){
                const newInspectorData = await getInspectorDataFromIndex(selectedCardIndex);
                setData(newInspectorData)
            }
        }
        getData();
    }, [selectedCardIndex])

    return (
        <div id="poke-inspector">
            {
                data ?
                    <>
                        <div className="pic-con">
                            <img src={data.picURL} alt="" className="poke-pic" />
                        </div>
                        <div className="data-con">

                            <div className="data-header">
                                <h2 className="poke-name">
                                    {data.name}
                                </h2>
                                <h3 className="poke-type">
                                    {data.types.join(', ')}
                                </h3>
                            </div>

                            <div className="poke-profile">
                                <div className="poke-profile-row">
                                    <div className="poke-profile-col">
                                        <p className="poke-profile-label">Index</p>
                                        <p className="poke-profile-value">{data.index}</p>
                                    </div>
                                    <div className="poke-profile-col">
                                        <p className="poke-profile-label">Base Exp</p>
                                        <p className="poke-profile-value">{data.baseExp}</p>
                                    </div>
                                </div>
                                <div className="poke-profile-row">
                                    <div className="poke-profile-col">
                                        <p className="poke-profile-label">Height</p>
                                        <p className="poke-profile-value">{data.height}</p>
                                    </div>
                                    <div className="poke-profile-col">
                                        <p className="poke-profile-label">Weight</p>
                                        <p className="poke-profile-value">{data.weight}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="poke-info">
                                <div className="poke-abilities">
                                    <h3 className="poke-abilities-heading"> Abilities </h3>
                                    <ul className="poke-abilities-con">
                                        {
                                            data.abilities.map(ability => <li className="poke-abilities-datum"> {ability}</li>)
                                        }
                                    </ul>
                                </div>
                                <div className="poke-moves">
                                    <h3 className="poke-moves-heading"> Moves </h3>
                                    <ul className="poke-moves-con">
                                        {
                                            data.moves.map(move => <li className="poke-moves-datum"> {move}</li>)
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <div className="unselected-message-con">
                        <p className='unselected-message'>Click any card to view more information here</p>
                    </div>
            }

        </div>
    );
}


export default PokeInspector;