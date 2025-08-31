
import GridCardsBlog from "../components/GridCardsBlog"
import PrincipalCardBlog from "../components/PrincipalCardBlog"
import Header from "../components/Header"
import { ROUTES_PROJECT } from "../routes/routes"

export const Blog = () => {
    return (
      <>
        <Header />
        <PrincipalCardBlog/>
        <GridCardsBlog />
      </>
    )
  }