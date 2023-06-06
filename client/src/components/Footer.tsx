import Logo from "../assets/logo.png";

type Props = {};

const Footer = ({}: Props) => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <p>Made with <span style={{color: 'red'}}>&#10084;</span> and <b>React.js</b>.</p>
    </footer>
  );
};

export default Footer;
