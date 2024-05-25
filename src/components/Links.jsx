import Link from "next/link";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
const Links = () => {
  return (
    <div>
      <p className="mt-10 font italic">Contact us &rarr;</p>

      <div className="inline-flex items-center mt-4 Home_sci">
        <Link
          className="border-gray-200 rounded-full border mr-4 p-3"
          href="https://www.linkedin.com/in/shahed2247/"
          target="blank"
        >
          <FaLinkedinIn size={10} />
        </Link>

        <Link
          className="border-gray-200 rounded-full border mr-4 p-3"
          href="https://www.facebook.com/shahed.abiddarpon"
          target="blank"
        >
          <FaFacebookF size={10} />
        </Link>

        <Link
          className="border-gray-200 rounded-full border mr-4 p-3"
          href="https://github.com/SoundlessGhost"
          target="blank"
        >
          <TbBrandGithubFilled size={10} />
        </Link>
      </div>
    </div>
  );
};

export default Links;
