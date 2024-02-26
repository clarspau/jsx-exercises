/** Learn some information about this person. 
 * 
 * Props:
 * - name
 * - age
 * - hobbies (an array of things this person enjoys)
 * 
 * If the person is over 18 years old, display "please go vote!. * Otherwise, display "you must be 18".
* If the person's name is longer than 8 characters,
* only display the first six characters of their name.
*/

function Person({ name, age, hobbies }) {
     const voteMessage = age >= 18
          ? "Please go vote!"
          : "You must be 18";

     const hobbiesLIs = hobbies.map(hobby => <li>{hobby}</li>);

     return (
          <div>
               <p>Learn some information about this person:</p>
               <ul>
                    <li>Name: {name.slice(0, MAX_NAME_LENGTH_TO_SHOW)}</li>
                    <li>Age: {age}</li>
                    <ul>
                         Hobbies:
                         {hobbiesLIs}
                    </ul>
               </ul>
               <h3>{voteText}</h3>
          </div>
     );
}