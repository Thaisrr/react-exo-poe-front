import Show from "./Show";

const Home = function() {
    const shows = [
        {id: 1, title: 'The Witcher', description: "Il y a des monstres qui font grrrr", is_vue: true, image: './images/the-witcher.jpg' },
        {id: 2, title: 'Russian Doll', description: 'Elle meurt et revit et remeurt', is_vue: true, image: './images/russian-doll.jpg' },
        {id: 3, title: 'Game of Throne', description: 'Iels meurent toustes', is_vue: true, image: './images/game.jpg' },
        {id: 4, title: "Buffy the Vampire Slayer", description: "Des vampires qui font grr", is_vue: false, image: "./images/buffy.jpg"},
        {id: 5, title: "Charmed", description: "Des démons qui font grr", is_vue: true, image: "./images/charmed.jpg"},
        {id: 6, title: "House of the Dragons", description: "Des dragons qui font grr", is_vue: false, image: "./images/dragon.jpg"},


    ];

    function updateShow(id) {
        const show = shows.find(s => s.id === id);
        console.log(`${show.title} a été modifié !`)
    }

    return (
    <>
        <h1>Show Time</h1>

        <section className="grid">
            {shows.map(el => <Show key={el.id} serie={el} update={updateShow} /> )}
                
        </section>
    </>
    )
}
export default Home;
