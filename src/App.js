import { useLayoutEffect, useState } from 'react';
import './App.css';
import Contato from './components/contato';

function App() {
  const [ users, setUsers ] = useState([]);

  useLayoutEffect(() => {
    fetch('http://localhost:5000/users')
      .then(resp => resp.json())
      .then(data => {
        setUsers(data)
      })
  },[])

  return (

    <> 
      <section className='grid'>
        {
          users?.map(user => (
            <div className='card' key={user._id}>
              <h2>{user.nome}</h2>
              <ul>
                <li><strong>E-mail:</strong> {user.email}</li>
                <li><strong>Telefone:</strong> {user.telefone}</li>
              </ul>
            </div>
          ))
        }
      </section>

      <Contato />
    </>
  )
}

export default App;


// import { useLayoutEffect, useState } from 'react';
// import './App.css';

// function App() {
//   const [ users, setUsers ] = useState([]);

//   useLayoutEffect(() => {
//     fetch('http://localhost:5000/users')
//       .then(resp => resp.json())
//       .then(data => {
//         setUsers(data)
//       })
//   },[])

//   return (
//     <section className='grid'>
//       {
//         users?.map(user => (
//           <div className='card' key={user._id}>
//             <h2>{user.nome}</h2>
//             <p>{user.email}</p>
//             <p>{user.telefone}</p>
//           </div> 
//         ))
//       }
//     </section>
//   );
// }
// export default App;
