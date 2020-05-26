import React from 'react';
import ContactCard from "./components/ContactCard"

function App() {
  return (
    <div>
     <ContactCard contacts={{name:"Pooja", phone:"83748374", email :"hdshd@gmail.com", imgUrl:""}}/>
     <ContactCard contacts = {{name:"Rene", phone:"4343565", email: "rene@gmail.com", imgUrl:""}}/>
     {/* <ContactCard name ="Emma" phone = "2325545" email = "emma@gmail.com" imgUrl=""/>
     <ContactCard name ="Lauren" phone = "2324566" email = "lauren@gmail.com" imgUrl=""/> */}
    </div>
  );
}

export default App;
