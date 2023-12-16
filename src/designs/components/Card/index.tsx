import { ReactNode } from 'react';
import './style.css'

interface Props {
    title : string,
    subtitle? : string,
    description? : string,
    extraHeader? : string,

    picture? : ReactNode,

    icon? : ReactNode,
    hideIcon? : boolean
}

const Card = ({
    title,
    subtitle,
    description,
    extraHeader,
    picture,
    icon
}: Props): JSX.Element => (
    <div className="card">
        <div className="card-pic-con">
            {
                picture && picture
            }
        </div>
        <div className="card-data-con">
            <h2 className="extra-header">
                { extraHeader }
            </h2>
            <h1 className="title">
                { title }
            </h1>
            <h3 className="subtitle">
                { subtitle }
            </h3>
            <h4 className="description">
                { description }
            </h4>
        </div>
        <div className='card-icon-con'>
            {
                icon && icon
            }
        </div>
    </div>
);

export default Card;