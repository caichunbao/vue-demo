import Home from "../components/Home.vue"
import Explorer from "../components/Explorer.vue"
import Cart from "../components/Cart.vue"
import Me from "../components/Me.vue"

const routes = [
    { name: "Home", path: "/", component: Home },
    { name: "Explorer", path: "/", component: Home },
    { name: "Cart", path: "/cart", component: Cart },
    { name: "Me", path: "/me", component: Me }
]

export default routes;