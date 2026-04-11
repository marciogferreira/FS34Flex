import './header.css';

function Header (props) {

    console.log(props)

    return (
        <header>
            <h1>Header - {props.nome}</h1>
            <p>
                <strong>Carga horária: </strong>
                {props.cargah}
            </p>
            <div>
                {props.children}
            </div>
        </header>
    )
}

export default Header