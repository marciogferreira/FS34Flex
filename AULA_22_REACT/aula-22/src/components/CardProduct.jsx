function CardProduct(props) {
    return (
        <>
            <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.nome}</h5>
                    <p className="card-text">{props.descricao}</p>
                    <a href="#" className="btn btn-primary">Comprar</a>
                </div>
            </div>
        </>
    )
}

export default CardProduct

