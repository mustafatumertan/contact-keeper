import React, {useContext} from 'react';
import alertContext from "../../context/alert/alertContext";


const Alerts = () => {

   const aCtx = useContext(alertContext);

   return (
      aCtx.alerts.length > 0 && aCtx.alerts.map(a => (
         <div key={atob.id} className={`alert alert-${a.type}`}>
            <i className="fas fa-info-circle"/> {a.msg}
         </div>
      ))
   )
}

export default Alerts
