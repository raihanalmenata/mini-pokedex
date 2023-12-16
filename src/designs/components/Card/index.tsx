import { HTMLAttributes, ReactNode } from 'react';
import './style.css'

interface Props extends HTMLAttributes<HTMLDivElement>{
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
            <h4 className="extra-header">
                { extraHeader }
            </h4>
            <h3 className="title">
                { title }
            </h3>
            <h5 className="subtitle">
                { subtitle }
            </h5>
            <h6 className="description">
                { description }
            </h6>
        </div>
        <div className='card-icon-con'>
            {
                icon && icon
            }
        </div>
    </div>
);

export default Card;