import logo from '../../../assets/logo.svg';

import './style.css'

interface Props {
    title: boolean;
}

const Logo = ({ title }: Props): JSX.Element => (
    <div className="logo-con">
        <img src={logo} alt="" className="logo-shape" />
        {
            title &&
            <h1 className="logo-text-con">
                <span className="logo-text-1">Mini</span>
                <span className="logo-text-2">_</span>
                <span className="logo-text-3">Pokedex</span>
            </h1>
        }

    </div>
);

export default Logo;