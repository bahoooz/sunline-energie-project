import Image from "next/image";

interface MdxImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function MdxImage({ src, alt, width = 800, height = 400 }: MdxImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="my-8 rounded-lg w-full object-cover"
    />
  );
}