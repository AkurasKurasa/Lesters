import '../components/Card.css'

function Card(props) {

    return (

        <article className="best-item" id={props.id}>
            <section className="best-item-image"></section>
              <section className="best-item-bottom-portion regular">
                <span className="best-item-name">{props.name}</span>
                <button className="best-item-button">ORDER</button>
              </section>
        </article>

    )

}

export default Card