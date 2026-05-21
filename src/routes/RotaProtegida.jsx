import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext'; // Importando o contexto de autenticação

export default function RotaProtegida() {
  const { usuario } = useContext(AuthContext);

  // Se o usuário existir (estiver logado), renderiza o <Outlet /> (a página filha)
  // Caso contrário, usa o <Navigate /> para expulsar o usuário para a página de login
  return usuario ? <Outlet /> : <Navigate to="/login" replace />;
}