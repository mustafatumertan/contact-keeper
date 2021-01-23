import React, {Fragment, useContext} from 'react'
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";

const Contacts = () => {

   const contactContext = useContext(ContactContext);

   const { contacts, filtered } = contactContext;

   if (contacts.length === 0) {
      return <h4>Start by adding a contact</h4>;
}

   return (
      <Fragment>
         {filtered !== null ? filtered.map(c=><ContactItem key={ c.id} contact={ c }/>) : contacts.map(c => <ContactItem key={ c.id} contact={ c }/>)};
      </Fragment>
   )
}

export default Contacts;