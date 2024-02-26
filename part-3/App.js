const App = () => {
     return (
          <div>
               <Person
                    name="Mudkip"
                    age={33}
                    hobbies={["boxing", "swimming", "snorkeling"]}
               />
               <Person
                    name="Charmander"
                    age={8}
                    hobbies={["painting", "video games"]} />
               <Person
                    name="Psyduck"
                    age={18}
                    hobbies={["sleeping", "talking to friends"]}
               />
               <Person
                    name="Eevee"
                    age={25}
                    hobbies={["reading", "dancing", "jumping"]}
               />
          </div>
     );
}
