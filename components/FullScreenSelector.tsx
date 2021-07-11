export interface FSSProps {
  open: boolean;
  options: {
    text: string;
    onClick: () => void;
  }[];
  onClose: () => void;
}

export function FullScreenSelector({ options, onClose, open }: FSSProps) {
  return (
    <main
      className={`fixed top-0 bottom-0 p-10 h-screen w-screen bg-gray-900 z-20 flex flex-col transition-opacity ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }
      justify-evenly overflow-y-auto
      `}
    >
      <div className="flex my-4 justify-center relative">
        <h1 className="flex-1 text-5xl text-white">ian★</h1>
        <h1 className="text-white text-5xl cursor-pointer" onClick={onClose}>
          x
        </h1>
      </div>
      {options.map(({ onClick, text }) => (
        <h1
          onClick={onClick}
          key={text}
          className="text-white text-5xl cursor-pointer font-bold my-4"
        >
          {text}
        </h1>
      ))}
    </main>
  );
}
