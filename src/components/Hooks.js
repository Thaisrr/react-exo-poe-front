import { useState } from "react";

const Hooks = () => {

 /****** Fleurs  **********/   
    const [flowers, setFlowers] = useState(['Tulipes', 'Coquelicots', 'Roses', 'Magnolias', 'Chysanthèmes', 'Tournesols']);

    function orderFlowers(dir) {
        //const copy = flowers.map(f => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
        const copy = [...flowers];
        if(dir === 'asc') {setFlowers(copy.sort())}
        else {setFlowers(copy.sort().reverse())}
       // setFlowers([...flowers].sort())
    }

/****** Notes  **********/   
    const [notes, setNotes] = useState([19, 2, 9, 7, 14, 4]);

    /*
    function compareNumbers(a, b) {
        return a - b;
    }

    const compareNumbers = (a, b) => a - b;
    */


    function orderNotes(dir) {
        if(dir === 'asc') {
            setNotes([...notes].sort((a, b) => a - b))
        } else {
            setNotes([...notes].sort((a, b) => b - a));
        }
    }

/***** Compteur  ******/
    const [count, setCounter] = useState(0);
    const [clicked, setClicked] = useState(false);
    function launchCounter() {
        setClicked(true);
        let seconds = 0;
        setInterval(function() {
            seconds++;
            console.log('in interval ', seconds);
            setCounter(seconds)
        }, 1000)
    }

 /***** Un utilisateur, qui a un nom et un prénom, on passe sont nom en majuscule */ 
    const [user, setUser] = useState({prenom: 'Jean Michel', nom: 'La Tarte'});
    function upperName() {
        const copy = {...user};
        copy.nom = copy.nom.toUpperCase();
        setUser(copy);
        // setUser({...user, nom: user.nom.toUpperCase()})
    }

/**** un tableau d'utilisateur.trices, et on veut mettre tous leurs prénoms en majuscule */   
    const [users, setUsers] = useState([
        {id: 10, prenom: 'Jean Michel', nom: 'La Tarte'},
        {id: 11, prenom: 'Jean Micheline', nom: 'La Tourte'},
    ]);

    function upperAllNames() {
        //const copy = [...users];
        /*copy.forEach(u => {
            u.nom = u.nom.toUpperCase()
            console.log(u.prenom, u.nom)
        })*/

        const copy = users.map(u => {
            u.nom = u.nom.toUpperCase();
            return u;
        })
        //const copy = users.map(u => ({...u, nom: u.nom.toUpperCase()}))
        setUsers(copy)
    }

    return (
        <>
            <h1>Use State</h1>

            <main>
                <article>
                    <h2>Les Fleurs</h2>
                    <p>
                        <button onClick={() => orderFlowers('asc')}>Trier de A à Z</button>
                        <button onClick={() => orderFlowers('desc')}>Trier de Z à A</button>
                    </p>
                    <ul>
                        {flowers.map((f) => <li key={f}>{f}</li>)}
                    </ul>
                </article>
                <article>
                    <h2>Notes</h2>
                    <p>
                        <button onClick={() => orderNotes('asc')}>Trier par ordre 🥐</button>
                        <button onClick={() => orderNotes('desc')}>Trier par ordre 🎲🥐</button>

                    </p>
                    <ul>
                        {notes.map(n => <li key={n}>{n}</li>)}
                    </ul>
                </article>
                <article>
                    <h2>Compteur</h2>

                    <p>Compteur : {count}</p>
                    <p>
                        <button disabled={clicked} onClick={()=> launchCounter()}>Start</button>
                    </p>
                </article>
                <article>  
                    <h2>Un.e Utilisateur.trice</h2>
                    <p>
                        <button onClick={() => upperName()}>Mettre en Maj</button>
                    </p>

                    <p>{user.prenom} {user.nom}</p>
                </article>
                <article>
                    <h2>Users</h2>
                    <p>
                        <button onClick={() => upperAllNames()}>Tout mettre en majuscules</button>
                    </p>
                    <ul>
                        {users.map(function(u) {
                            return <li key={u.id}>{u.nom} {u.prenom}</li>
                        })}
                    </ul>
                </article>
            </main>
        </>
    )
}
export default Hooks;