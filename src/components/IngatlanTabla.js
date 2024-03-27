import Container from "react-bootstrap/esm/Container"; 
import Table from "react-bootstrap/Table"; 
import IngatlanTablaSor from "./IngatlanTablaSor"; 
import { useContext } from "react";
import { 
    AuthProviderIngatlan, 
    AuthContextIngatlan, 
    useAuthContextIngatlan, 
  } from "../contexts/AuthContextIngatlan"; 

export default function IngatlanTabla(props){
    const { ingatlan, setIngatlan } = useAuthContextIngatlan();   


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
                <> 
                  <tr> 
                    <IngatlanTablaSor key={index} data={item} /> 
                  </tr> 
                </> 
              ))} 
            </tbody> 
          </Table> 

    );

}