import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path : "/", // alamat dari sebuah page
        children : [
            {
                index : true,
                lazy : {
                    Component : async() => {
                        const Component = await import("../pages/movies/Movies.tsx")
                        return Component.default
                    }
                }
            },
            {
                path : "add-movie",
                    lazy : {
                    Component : async() => {
                        const Component = await import("../pages/movies/AddMovie.tsx")
                        return Component.default
                    }
                }
            },
        ]
    }
]);

export default router;