import Image from "next/image";
import { cn } from "@/shared/ui/lib/utils";

type AvatarProps = {
  src?: string | null;
  alt?: string;
  fallback?: string;
  size?: number | string;
  className?: string;
};

export const Avatar = ({
  src,
  alt = "Avatar",
  fallback = "👤",
  size = 40,
  className,
}: AvatarProps) => {
  const sizeStyle = typeof size === "number" ? `${size}px` : size;

  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-full overflow-hidden bg-gray-200 text-xl flex-shrink-0",
        className
      )}
      style={{ width: sizeStyle, height: sizeStyle }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={`${size}px`}
        />
      ) : (
        <span className="text-2xl">{fallback}</span>
      )}
    </div>
  );
};

export { cn };
