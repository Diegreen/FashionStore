import Banner from "../../assets/Banner.jpg";

export const BannerSection = () => {
    return (
        <section>
            <img src={Banner} alt="Banner Principal" />
            <div>
                <h1 className="title1">Fashion Store</h1>
                <p className="paragraph">Fique por dentro das nossas últimas promoções e novidades</p>
                <a href="#">Confira as ofertas</a>
            </div>
        </section>
    )
}