import DocumentMain from "../components/documentMain";
import Opentab from "../components/opentab";

export default function Home() {
  return (
    <DocumentMain category={["사건", "의지평선너머로"]}>
      <Opentab />
      <Opentab />
      <Opentab />
    </DocumentMain>
  );
}
