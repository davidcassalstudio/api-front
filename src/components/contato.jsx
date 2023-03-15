//import { useState } from 'react';
import { useState } from 'react';
import '../App.css';

function Contato() {
    const [ userInput, setuserInput ] = useState([]);

    const onHandleInput = (e) => {
        const name  = e.target.name;
        const value = e.target.value;

        setuserInput({
            ...userInput,
            [name]: value
        })
    }

    const onHandleSubmit = (e) => {
        e.preventDefault();
        window.location.reload();
        Array.from(document.querySelectorAll('.input-form')).map(input => input.value = '');

        fetch('https://aggressive-gray-fatigues.cyclic.app/users', {
            method: 'POST',
            headers:  {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userInput)
        })
    }

    return (
        <section className='contact-create'>
            <h2>Cadastrar usuário</h2>
            <form method="POST" onSubmit={onHandleSubmit}>
                <input type="text" className="input-form" name="nome" placeholder="Digite seu nome" onInput={onHandleInput} />
                <input type="email" className="input-form" name="email" placeholder="exemplo@gmail.com" onInput={onHandleInput} />
                <input type="tel" className="input-form" name="telefone" placeholder="(11)98877-6655" onInput={onHandleInput} />
                <button type="submit" className="submit-form" name="cadastrar">Cadastrar</button>
            </form>
        </section>
    )
}

export default Contato;