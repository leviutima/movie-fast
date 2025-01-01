import { Helmet } from "react-helmet-async";

export function Home() {
  return (
    <div>
      <Helmet title="Início"/>
      <div className="flex justify-center items-center">
        <h1>Diversos filme na palma da sua mão</h1>
      </div>
    </div>
  );
}
