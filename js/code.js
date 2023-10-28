const inputNombre = document.getElementById("inputNombre");
const inputApellido = document.getElementById("inputApellido");
const tbodyUsuarios = document.getElementById("tbodyUsuarios");

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

const registroUsuario = (event) => {
  if (event.keyCode === 13) {
    agregarUsuario();
  }
};

const agregarUsuario = () => {
  const usuario = {
    id: crypto.randomUUID(),
    nombre: inputNombre.value,
    apellido: inputApellido.value,
  };

  usuarios.push(usuario);

  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  mostrarUsuarios();
};

const eliminarUsuario = (id) => {
  const usuario = usuarios.find((usuario) => {
    return usuario.id === id;
  });

  const index = usuarios.indexOf(usuario);

  usuarios.splice(index, 1);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  mostrarUsuarios();
};

const mostrarUsuarios = () => {
  tbodyUsuarios.innerHTML = "";
  usuarios.forEach((usuario) => {
    tbodyUsuarios.innerHTML += `<tr>
                                    <th scope="row">${usuario.id}</th>
                                    <td>${usuario.nombre}</td>
                                    <td>${usuario.apellido}</td>
                                    <td>
                                        <button type="button" class="btn btn-danger" onclick="eliminarUsuario('${usuario.id}')">
                                            Eliminar usuario
                                        </button>
                                    </td>
                                    <td>
                                        <button type="button" class="btn btn-warning">
                                            Editar usuario
                                        </button>
                                    </td>

                                    
                                </tr>`;
  });
};

window.addEventListener("load", mostrarUsuarios);
