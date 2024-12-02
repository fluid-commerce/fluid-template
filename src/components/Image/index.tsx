type TIMageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};
export default function Image({ src, alt, width, height }: TIMageProps) {
  return <img src={src} alt={alt} height={height} width={width} />;
}
