import React from "react";
import {SiCodeforces} from 'react-icons/si'
import {AiOutlineGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/jaya-kalyani-kommanaboena/"
        className="home__social-icon"
        target="_blank"
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://github.com"
        className="home__social-icon"
        target="_blank"
      >
        <AiOutlineGithub />
      </a>
    </div>
  );
};

export default Social;
