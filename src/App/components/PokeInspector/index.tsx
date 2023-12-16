import { HTMLAttributes } from 'react';
import './style.css'



interface Props extends HTMLAttributes<HTMLDivElement> {
    data?: {
        picURL: string,

        name: string,
        types: string[],

        index: string,
        baseExp: string,
        height: string,
        weight: string,

        healthPoint: string,
        attack: string,
        defense: string,
        specialAttack: string,
        specialDefense: string,
        speed: string,

        abilities: string[],
        moves: string[]
    }
}

const PokeInspector = ({
    data
}: Props): JSX.Element => (
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
                            <div className="poke-stats">
                                <h3 className="poke-stats-heading">Stats</h3>
                                <div className="poke-stats-data">
                                    <div className="poke-stats-data-row">
                                        <div className="poke-stats-data-col">
                                            <p className="poke-stats-data-label">
                                                Health Point
                                            </p>
                                            <p className="poke-stats-data-value">
                                                {data.healthPoint}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="poke-stats-data-row">
                                        <div className="poke-stats-data-col">
                                            <p className="poke-stats-data-label">
                                                Attack
                                            </p>
                                            <p className="poke-stats-data-value">
                                                {data.attack}
                                            </p>
                                        </div>
                                        <div className="poke-stats-data-col">
                                            <p className="poke-stats-data-label">
                                                Defense
                                            </p>
                                            <p className="poke-stats-data-value">
                                                {data.defense}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="poke-stats-data-row">
                                        <div className="poke-stats-data-col">
                                            <p className="poke-stats-data-label">
                                                Special Attack
                                            </p>
                                            <p className="poke-stats-data-value">
                                                {data.specialAttack}
                                            </p>
                                        </div>
                                        <div className="poke-stats-data-col">
                                            <p className="poke-stats-data-label">
                                                Special Defense
                                            </p>
                                            <p className="poke-stats-data-value">
                                                {data.specialDefense}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="poke-stats-data-row">
                                        <div className="poke-stats-data-col">
                                            <p className="poke-stats-data-label">
                                                Speed
                                            </p>
                                            <p className="poke-stats-data-value">
                                                {data.speed}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                        data.moves.map(move => <li className="poke-abilities-datum"> {move}</li>)
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

export default PokeInspector;