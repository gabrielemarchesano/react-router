import { NavLink } from "react-router-dom"

export default function Navbar() {

  const linkItems = [
    {
      id: 1,
      path: "/",
      body: "Home"
    },
    {
      id: 2,
      path: "/about",
      body: "About Us"
    },
    {
      id: 3,
      path: "/products",
      body: "Products"
    }
  ]

  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid px-5">
          <a class="navbar-brand" href="/"><i className="bi bi-bullseye fs-1"></i></a>
          <div class="items">
            <ul class="navbar-nav flex-row gap-4">
              {
                linkItems.map((item) => (
                  <li class="nav-item" key={item.id}>
                    <NavLink class="nav-link" aria-current="page" to={item.path}>{item.body}</NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}