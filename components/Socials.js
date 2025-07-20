// links
import Link from "next/link";

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiLinkedinBoxLine,
} from "react-icons/ri";

import { VscGithub } from "react-icons/vsc";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://github.com/gbmacena"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <VscGithub />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/gabriel-macena-871333315/"}
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiLinkedinBoxLine size={20} />
      </Link>
      <Link
        href={"https://www.instagram.com/gabrielmacena0/"}
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiInstagramLine />
      </Link>
      {/* <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiDribbbleLine />
      </Link> */}
      {/* <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiBehanceLine />
      </Link> */}
      {/* <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiPinterestLine />
      </Link> */}
    </div>
  );
};

export default Socials;
