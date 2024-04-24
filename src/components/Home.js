import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import useAuthContext from "../contexts/AuthContext";
import {
  AuthProviderIngatlan,
  useAuthContextIngatlan,
} from "../contexts/AuthContextIngatlan";
import Row from "react-bootstrap/esm/Row";
import Navbars from "./Navbars";
import Kartya from "./Kartya";
import Searchbox from "./Searchbox";

//a program belépő oldala
export default function Home() {
  const { user } = useAuthContext();
  const { ingatlan } = useAuthContextIngatlan();
  const [filteredIngatlan, setFilteredIngatlan] = useState([]);

  //az ingatlanok közt keres, településre, ingatlan típusra vagy fűtés típusra lehet keresni
  const search = (searchWord) => {
    //console.log(ingatlan);
    if (typeof searchWord !== "string" || !searchWord) {
      alert("Érvénytelen keresési kifejezés");
      return; // Kilépés a függvényből, ha nem jó a searchWord
    }
    //keresési feltételek alapján egy tömbbe szűrés
    const filtered = ingatlan.filter(
      (item) =>
        (item.telepules_megnevezes &&
          item.telepules_megnevezes
            .toLowerCase()
            .includes(searchWord.toLowerCase())) ||
        (item.ing_tipus_megnevezes &&
          item.ing_tipus_megnevezes
            .toLowerCase()
            .includes(searchWord.toLowerCase())) ||
        (item.futes_tipus_megnevezes &&
          item.futes_tipus_megnevezes
            .toLowerCase()
            .includes(searchWord.toLowerCase()))
    );
    //a szűrt tömb beállítása
   if(filtered.length!=0){
    setFilteredIngatlan(filtered)
   }else{
    alert("Érvénytelen keresési kifejezés");
   }
  
    // console.log(filtered);
    // console.log(filteredIngatlan);
  };

  return (
    <>
      <AuthProviderIngatlan>
        <Navbars />
        <Searchbox search={search} />
        <Container className="card_container">
          <Row>
            {filteredIngatlan.length === 0 ? (
              <>
                {ingatlan.map((item, index) => {
                  if (index >= 1 && index <= 12) {
                    return <Kartya key={index} data={item} />;
                  }
                })}
              </>
            ) : (
              <>
                {filteredIngatlan.map((item, index) => {
                  console.log(item);
                  return <Kartya key={index} data={item} />;
                })}
              </>
            )}
          </Row>
        </Container>
      </AuthProviderIngatlan>
    </>
  );
}
