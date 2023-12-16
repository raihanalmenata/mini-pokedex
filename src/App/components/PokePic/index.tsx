import { HTMLAttributes } from 'react';
import './style.css'

interface Props extends HTMLAttributes<HTMLImageElement> {
    src : string
}

const PokePic = ({ src }: Props): JSX.Element => (
    <div className="pic-holder">
        <img src={src} alt="" />
    </div>
);

export default PokePic;