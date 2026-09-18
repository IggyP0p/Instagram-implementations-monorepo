import Button from "../components/Button";
import { AlertIcon } from "../components/Icons";

export default function notFound() {
   return (
      <div>
         <div><AlertIcon/></div>
         <span>Profile não está disponível</span>
         <span>O link pode estar corrompido ou o perfil pode ter sido removido</span>
         <Button variant="primary">Cadastrar-se no Instagram</Button>
      </div>
   );
}
