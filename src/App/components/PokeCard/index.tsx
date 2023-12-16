import Card from '../../../designs/components/Card';
import PokePic from '../PokePic';
import './style.css'

interface Props {
    name: string,
    index: string,
    species:  string,
    types: string,
    pictureURL: string,

    clickHandler: (index: string) => void,
}

const PokeCard = ({
    name,
    index,
    species,
    types,
    pictureURL,
    clickHandler
}: Props): JSX.Element => {

    const picture = <PokePic src={pictureURL} />
    const icon = <span className="material-icons-round icon">chevron_right</span>

    return (
        <div className="pokecard" 
        onClick={() => clickHandler(index)}
        >
            <Card 
                title={name}
                subtitle={species}
                description={types}
                extraHeader={index}
     
                picture={picture}
                icon={icon}
            />
        </div>
   );
}

export default PokeCard;