import BookDetail from "../components/BookDetail.vue"
import Main from "../components/Main.vue"
import Home from "../components/Home.vue"
import Explorer from "../components/Explorer.vue"
import Cart from "../components/Cart.vue"
import Me from "../components/Me.vue"

const routes = [{
        name: "Main",
        path: "/",
        component: Main,
        children: [
            { name: "Home", path: "home", component: Home },
            { name: "Explorer", path: "explorer", component: Explorer },
            { name: "Cart", path: "cart", component: Cart },
            { name: "Me", path: "me", component: Me }
        ]
    },
    { name: "BookDetail", path: "/book/:id", component: BookDetail }

]

export default routes;