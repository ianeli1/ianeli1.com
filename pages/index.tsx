import { Default } from "components/layout/default";
import { OneColumn } from "components/layout/oneColumn";
import { Title } from "components/Title";


export default function Home() {
  return (
    <Default>
     <OneColumn minWidth="30%">
       <Title>Featured</Title>
     </OneColumn>

    </Default>
  )
}
