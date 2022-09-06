import useItemCount from "../Counter/useItemCount";

const ItemDetail =({teclado}) =>{
    const onAdd= (useItemCount) =>{
        console.log(useItemCount)
    }

    return(
        <article>
            <h1>{teclado.nombre}</h1>
            <div className="card-detail">
                <div className="card-detail-left">
                    <img src={teclado.img} alt={teclado.nombre} className="img" />
                </div>
                <div className="card-detail-right">
                    <p>{teclado.nombre}</p>
                    <p>{teclado.precio}</p>
                    <p>Stock: 10</p>
                    <useItemCount/>
                </div>
            </div>
        </article>
    )

};

export default ItemDetail;