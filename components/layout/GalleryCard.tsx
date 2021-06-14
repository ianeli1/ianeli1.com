import { Line } from "components/Line";

export const GalleryCard: React.FC<{
  title?: string;
  desc?: string;
  line?: boolean;
  links?: {
    name: string;
    value: string;
    href?: string;
  }[];
}> = ({ title, desc, links, children, line }) => {
  const links1 = links?.slice(0, 3) ?? [];
  const links2 = links?.slice(3).slice(0, 3) ?? [];
  return (
    <div className="h-full w-full border-l-2 border-black p-8 flex flex-col">
      {title && <h1 className="text-7xl font-bold">{title}</h1>}
      {!line && <Line />}
      {desc && <p className="p-8 text-justify">{desc}</p>}

      <div className="flex-1 p-8 flex justify-around">
        {children ? (
          <>{children}</>
        ) : (
          <>
            <div className="p-8 flex-1 flex flex-col justify-around">
              {links1.map((props, i) => (
                <GalleryLink key={i} {...props} />
              ))}
            </div>
            <Line vertical />
            <div className="p-8 flex-1 flex flex-col justify-around">
              {links2.map((props, i) => (
                <GalleryLink key={i} {...props} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const GalleryLink: React.FC<{
  name: string;
  value: string;
  href?: string;
}> = ({ name, value, href }) => (
  <section className="flex">
    <h2 className="text-2xl font-semibold whitespace-nowrap mr-2">
      {name + ": "}
    </h2>
    {href ? (
      <a className="text-2xl text-blue-600" href={href} target="_blank">
        <h2>{value}</h2>
      </a>
    ) : (
      <h2 className="text-2xl">{value}</h2>
    )}
  </section>
);
