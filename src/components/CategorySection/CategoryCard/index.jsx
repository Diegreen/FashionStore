export const CategoryCard = ({title, img}) => {
    return (
        <li>
            <img src={img} alt={title} />
             <h3 className="title3">{title}</h3>
        </li>
    )
}

