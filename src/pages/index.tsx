import Perfil from "@/Componentes/Perfil";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav>
        <Link href="/Pagina1">Pagina1</Link>
      </nav>
      <Perfil nombre="Joselito" apellido="vaca" edad={20}/>
      <Perfil nombre="Pablo" apellido="Marmol"edad={15}/>
    </>
  );
}
