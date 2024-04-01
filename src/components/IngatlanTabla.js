
import Table from "react-bootstrap/Table"; 
import IngatlanTablaSor from "./IngatlanTablaSor"; 
import { 
   
  useContextIngatlanAdmin, 
  } from "../contexts/AuthContextIngatlanAdmin"; 
  import "./module_ingatlan_form.css";

export default function IngatlanTabla(props){
    const { ingatlan } = useContextIngatlanAdmin();   

    return(
        <Table responsive striped hover id="ingatlan_table"> 
            <thead> 
              <tr> 
                <th>id</th> 
                <th>ingatlan típusa</th> 
                <th>fűtés típus</th> 
                <th>nagyság</th> 
                <th>szobák száma</th> 
                <th>erkély</th> 
                <th>terasz</th> 
                <th>kert</th> 
                <th>település</th>
                <th>cím</th>
                <th>leírás</th> 
                <th>ügytípus</th>
                <th>user</th>
                <th>hirdetés feladása</th>
                <th>hirdetés lejárata</th> 
                <th>hirdetés módosítása</th>
                <th>ár</th>
                <th>szerkesztés</th> 
                <th>törlés</th> 
                <th>mentés</th> 
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