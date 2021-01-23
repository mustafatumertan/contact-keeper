import React, {useContext, useRef, useEffect} from 'react';
import contactContext from "../../context/contact/contactContext";

const ContactFilter = () => {

   const ctContext = useContext(contactContext);
   const text = useRef("");
   const { filterContacts, clearFilter, filtered } = ctContext;
   useEffect(() => {
      if (filtered === null) {
         text.current.value = "";
      }
   });

   const onChange = e => {
      if (text.current.value !== "") {
         filterContacts(e.target.value);
      } else {
         clearFilter();
      }
   }
   return (
      <form>
         <input ref={text} type="text" placeholder="Filter Contacts..." onChange={ onChange }/>
      
</form>
   )
}

export default ContactFilter;