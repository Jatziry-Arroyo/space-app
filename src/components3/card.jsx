import "./card.css";


function Card(){
    const myInfo = {
        nombre: "Jatziry Arroyo",
        formacion: "Lic. en Nutrición",
    };
    return (
        <div className="cardP">
            <h2>{myInfo.nombre}</h2>
            <p>{myInfo.formacion}</p>
        </div>
    )
    
}

export default Card;