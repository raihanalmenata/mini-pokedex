import { ReactNode } from 'react';
import './style.css'

interface Props {
    children?: ReactNode
}

const Header = ({children}: Props): JSX.Element => (
    <nav id="app-header">
        { children }
    </nav>    
);

export default Header;