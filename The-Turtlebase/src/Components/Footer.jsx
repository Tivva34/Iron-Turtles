import pokemonIcon from "../assets/pokemon.svg";
import snapchatIcon from "../assets/snapchat.svg";
import youtubeIcon from "../assets/youtube.svg";

function Footer() {
  return (
    <footer className="page footer">
      <a href="#">
        <img src={snapchatIcon} alt="Snapchat" />
      </a>
      <a href="#">
        <img src={youtubeIcon} alt="Youtube" />
      </a>
      <a href="#">
        <img src={pokemonIcon} alt="Pokemon" />
      </a>
    </footer>
  );
}

export default Footer;
