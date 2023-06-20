import cart from "../assets/carrito.png"

const styles = {
    img: {
        height: "2rem",
        with: "auto",
    }
}

export const CartWidget = () => (
<>
<img src={cart} style={styles.img} alt="carrito de compras" /> <span>0</span>
</>
)

