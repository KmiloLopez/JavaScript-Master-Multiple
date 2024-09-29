import React, { useState } from "react";

const contactos = [
  {
    nombre: "Juan Pérez",
    telefono: "+573001234567",
    nacionalidad: "Colombiano",
  },
  {
    nombre: "Maria García",
    telefono: "+346001234567",
    nacionalidad: "Española",
  },
  {
    nombre: "Emily Smith",
    telefono: "+14151234567",
    nacionalidad: "Estadounidense",
  },
  {
    nombre: "Hiroshi Tanaka",
    telefono: "+819012345678",
    nacionalidad: "Japonés",
  },
  {
    nombre: "Pierre Dupont",
    telefono: "+33601234567",
    nacionalidad: "Francés",
  },
  {
    nombre: "Ana Silva",
    telefono: "+5511991234567",
    nacionalidad: "Brasileña",
  },
  {
    nombre: "Liam O'Connor",
    telefono: "+353851234567",
    nacionalidad: "Irlandés",
  },
  { nombre: "Chen Wei", telefono: "+8613912345678", nacionalidad: "Chino" },
  { nombre: "Olga Ivanova", telefono: "+79161234567", nacionalidad: "Rusa" },
  {
    nombre: "Fatima Al-Mansouri",
    telefono: "+971501234567",
    nacionalidad: "Emiratí",
  },
];

const FilterThis = () => {
  const [nametoDel, setNameToDel] = useState("");
  const [contacts, setContacts] = useState(contactos);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newa = contacts.filter((contact) => contact.nombre !== nametoDel);
    // console.log(newa);
    // setContacts(newa);
    setContacts(contacts.filter((contact) => contact.nombre !== nametoDel));
  };
  return (
    <>
      <h3>Elimina contacto por nombre</h3>
      <div>{contacts.map((contacto) => contacto.nombre)}</div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="name to del"
          value={nametoDel}
          onChange={(e) => setNameToDel(e.target.value)}
        ></input>
        <button>Delete</button>
      </form>
    </>
  );
};

export default FilterThis;
