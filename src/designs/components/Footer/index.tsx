import './style.css'

interface Props {
    text? : string
}

const Footer = ({ text }: Props): JSX.Element => (
    <footer id="app-footer">
        <p className="footer-text">
            { text }
        </p>
    </footer>    
);

export default Footer;