import React, { Fragment, useContext } from 'react'
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
         <TransitionGroup>
            {filtered !== null ? filtered.map(c =>
               <CSSTransition key={c.id} timeout={500} classNames="item">
                  <ContactItem contact={c} />
               </CSSTransition>) : contacts.map(c =>
                  <CSSTransition key={c.id} timeout={500} classNames="item">
                     <ContactItem contact={c} />
                  </CSSTransition>
               )}

         </TransitionGroup>



      </Fragment>
   )
}

export default Contacts;