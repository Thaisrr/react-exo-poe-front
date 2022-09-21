const Show = ({serie : {title, image, description, id, is_vue}, update}) => (
    <article className="card">
          {/* 
          ({serie : {title, image, description, id}, update})
            -> En paramétre, on récupére un objet props, qui contient un attribut serie, et un attribut update
            props.serie  / props.update
            -> On décompose props, pour créer une variable serie, et une variable update.
            -> On rédécompose série, pour créer des variables de ses attributs (serie.title -> title, ...)
          */}
        <div className="c-header">
            <img src={image} alt={`Affiche de ${title}`} />
        </div>
        <div className="c-body">
            <h3>
                {title} 
                {is_vue && <span>✅</span>} {/* ajoute un [V] uniquement si is_vue est true (truthy) */}
                </h3>
            <p>{description}</p>
            <button className="btn-lg" onClick={() => update(id)}>
                Marquer comme
                {/* What ? True : False    WTF  */}
                { is_vue ? ' pas vu' : ' VUE'}
            </button>
        </div>
    </article>
)
export default Show;