/** Tweet's props:
 * - username
 * - name
 * - date of the tweet
 * - tweet message
 */

const Tweet = ({ username, name, date, message }) => {
     return (
          <div className="tweet">
               <span className="username"><i>{username}</i> </span>
               <span>{name} </span>
               <span className="date">{date}: </span>
               <span>"{message}"</span>
          </div>
     );
}