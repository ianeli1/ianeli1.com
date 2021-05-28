import { Avatar } from "components/Avatar";
import { Default } from "components/layout/default";
import { Gallery } from "components/layout/Gallery";

export default function About() {
  return (
    <Default>
      <Gallery
        right
        background={
          <main
            className="h-full w-1/3 flex justify-center items-center"
            style={{ marginLeft: "66.666667%" }}
          >
            <Avatar image="https://cdn.discordapp.com/attachments/616319929532022796/847658206725668894/1612222001434.png" />
          </main>
        }
      ></Gallery>
    </Default>
  );
}
