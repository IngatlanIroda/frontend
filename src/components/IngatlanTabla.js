
import Table from "react-bootstrap/Table"; 
import IngatlanTablaSor from "./IngatlanTablaSor"; 

import { 
   
  useContextIngatlanAdmin, 
  } from "../contexts/AuthContextIngatlanAdmin"; 

export default function IngatlanTabla(props){
    const { ingatlan } = useContextIngatlanAdmin();   


    return(
        <Table responsive striped hover> 
            <thead> 
              <tr> 
                <th>ing_id</th> 
                <th>település</th> 
                <th>nagyság</th> 
                <th>ingatlan tipus</th> 
                <th>szobák száma</th> 
                <th>leírás</th> 
                <th>cím</th> 
                <th>erkély</th> 
                <th>terasz</th> 
                <th>kert</th> 
                <th>szerkesztés</th> 
                <th>töröl</th> 
              </tr>
            </thead> 
            <tbody> 
              {ingatlan.map((item, index) => ( 
                
              
                    <IngatlanTablaSor key={index} data={item} /> 
           
            
              ))} 
            </tbody> 
          </Table> 

    );

}