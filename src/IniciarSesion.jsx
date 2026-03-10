import { useState, useEffect } from "react";
import "./IniciarSesion.css";
import { useAuth } from "./AuthContext";
import api from "./Services/api";

const IniciarSesion = ({ chVista }) => {

  const { login } = useAuth();

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const respuesta = await api.get("/users");
        setUsuarios(respuesta.data);
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      }
    };

    obtenerUsuarios();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const usuarioEncontrado = usuarios.find(
      (user) =>
        (user.username === usuario || user.email === usuario) &&
        user.password === password
    );

    if (usuarioEncontrado) {
      const token = btoa(
        JSON.stringify({
          id: usuarioEncontrado.id,
          username: usuarioEncontrado.username,
        })
      );

      alert(`¡Bienvenido ${usuarioEncontrado.name.firstname}!`);
      login(token);
      localStorage.setItem("usuario", JSON.stringify(usuarioEncontrado));
      if (chVista) {
  chVista("Usuario");
}

    } else {
      setError("Usuario o contraseña incorrectos");
      alert("Usuario o contraseña incorrectos");
    }
  };

  const handleCancel = () => {
    setUsuario("");
    setPassword("");
    setError("");
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>

        <div className="icono"></div>

        <h2>LOGIN</h2>

        {error && <div className="error-message">{error}</div>}

        <label>
          Usuario
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="Ingresa tu usuario"
            required
          />
        </label>

        <label>
          Contraseña
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña"
            required
          />
        </label>

        <div className="botones">
          <button type="submit">Iniciar</button>
          <button type="button" onClick={handleCancel}>Cancelar</button>
        </div>

        <div className="links">
          <a href="#">Recordar contraseña</a>
          <a href="#">Registrar</a>
        </div>

      </form>
    </div>
  );
};

export default IniciarSesion;