import Nav from "../components/shared/nav"
import SideBar from "../components/shared/sideBar"

const Layout = function({children}){
    return(
      <>
          <Nav />
          <SideBar />
          <div className="content-body" style={{minHeight:798}}>
            <div className="container-fluid">
              {children}
            </div>
          </div>
      </>
    
    )
}

export default Layout