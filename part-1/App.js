/** renders a <div> with instances of the other two components. */

function App() {
     const root = ReactDOM.createRoot(document.getElementById('root'));
     root.render(
          <div>
               <FirstComponent />
               <NamedComponent name="Hoka" />
          </div>
     );
}