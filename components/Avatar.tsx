interface AvatarProps {
  image: string;

  /**size in rem */
  size?: string;
}

export function Avatar({ image, size = "16rem" }: AvatarProps) {
  return (
    <div className="rounded-full" style={{ width: size, height: size }}>
      <img src={image} className="w-full h-full object-cover" />
    </div>
  );
}
