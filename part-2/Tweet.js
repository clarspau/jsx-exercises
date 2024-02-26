/** Tweet's props:
 * - username
 * - name
 * - date of the tweet
 * - tweet message
 */

function Tweet({ username, name, date, message }) {
     return (
          <div class="tweet">
               <span class="username">{username}</span>
               <span>{name}</span>
               <span class="date">{date}</span>
               <span>{message}</span>
          </div>
     );
}