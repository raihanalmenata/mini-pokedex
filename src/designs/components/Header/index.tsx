import Logo from '../Logo';
import './style.css'

const Header = (): JSX.Element => (
    <nav id="app-header">
        <Logo title={true} />
    </nav>    
);

export default Header;