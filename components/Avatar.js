import Image from "next/image";

const Avatar = ({ className = "" }) => {
  return (
    <div className={`hidden xl:flex xl:max-w-none h-full ${className}`}>
      <Image
        src={"/avatar.png"}
        width={1000}
        height={1000}
        quality={100}
        alt="Avatar de Gabriel Macena"
        className="translate-z-0 object-contain w-full h-full"
        priority
        sizes="(max-width: 1200px) 100vw, 1000px"
      />
    </div>
  );
};

export default Avatar;
