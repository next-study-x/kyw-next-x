import clsx from "clsx";

const TextDivider = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div className="w-[300px] h-[20px] relative flex items-center">
      <div className="w-full bg-[#2f3336] h-[0.5px]" />
      <div
        className={clsx(
          "text-[#E7E9EA] text-[15px] absolute left-[50%] transform -translate-x-1/2 bg-black px-2",
          className
        )}
      >
        {text}
      </div>
    </div>
  );
};

export default TextDivider;
