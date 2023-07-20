import { ProductCards } from "./ProductsCard"

export const ProductsSection = () => {
    return (
        <section>
            <h2 className="title2">Produtos em destaque</h2>
            <ul>
                <ProductCards title = "Blazer Branco Elegante" img="#" price={490} />
                <ProductCards title="Sapatos Amarelos" img="#" price={490}/>
                <ProductCards title = "Casaco marrom" img="#" price={490} />
                <ProductCards title = "Blazer Branco Elegante" img="#" price={490}/>
            </ul>
        </section>
    )
}