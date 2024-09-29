import React, { useState } from "react";

const contactos = [
  { nombre: "Juan Pérez", nacionalidad: "Colombiano" },
  { nombre: "Maria García", nacionalidad: "Española" },
  { nombre: "Emily Smith", nacionalidad: "Estadounidense" },
  // ... otros contactos
];

function FilterwithPrev() {
  const [contacts, setContacts] = useState(contactos);
  //prevContacts puede ser cualquier nombre como preState
  //Aunque setContacts(contacts.filter(...)) puede funcionar en muchos casos, es más seguro usar la versión con prevState (setContacts(prevContacts => ...))
  // para asegurar que siempre trabajas con el estado más reciente y evitar problemas en situaciones más complejas o con actualizaciones concurrentes.
  const eliminarContactosColombianos = () => {
    setContacts((prevContacts) =>
      prevContacts.filter((contacto) => contacto.nacionalidad !== "Colombiano")
    );
  };

  return (
    <div>
      <h3>Elimina contacto por ancionalidad con prevState</h3>
      <ul>
        {contacts.map((contacto, index) => (
          <li key={index}>
            {contacto.nombre} - {contacto.nacionalidad}
          </li>
        ))}
      </ul>
      <button onClick={eliminarContactosColombianos}>
        Eliminar Contactos Colombianos
      </button>
    </div>
  );
}

export default FilterwithPrev;
