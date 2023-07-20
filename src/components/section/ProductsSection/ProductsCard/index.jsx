export const ProductCards = ({title, img, price}) => {
    return (
        <li>
            <img src={img} alt="" />
            <h3 className="title3">{title}</h3>
            <span className="price">{price}</span>
        </li>
    )
}