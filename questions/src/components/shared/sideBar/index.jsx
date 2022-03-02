import '../../../styles.css'

const SideBar = function () {

  return (
    <div className="dlabnav">
      <div className="dlabnav-scroll mm-active ps ps--active-y">
        <div className="dropdown header-profile2 ">
          <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown">
            <div className="header-info2 d-flex align-items-center">
              <img src="images/profile/pic1.jpg" alt="" />
              <div className="d-flex align-items-center sidebar-info">
                <div>
                  <span className="font-w400 d-block">Franklin Jr</span>
                  <small className="text-end font-w400">Superadmin</small>
                </div>
                <i className="fas fa-chevron-down"></i>
              </div>

            </div>
          </a>
          <div className="dropdown-menu dropdown-menu-end">
            <a href="./app-profile.html" className="dropdown-item ai-icon ">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              <span className="ms-2">Profile </span>
            </a>
            <a href="./email-inbox.html" className="dropdown-item ai-icon">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-success" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span className="ms-2">Inbox </span>
            </a>
            <a href="./login.html" className="dropdown-item ai-icon">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-danger" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
              <span className="ms-2">Logout </span>
            </a>
          </div>
        </div>
        <ul className="metismenu mm-show" id="menu">
          <li><a className="has-arrow " href="#" aria-expanded="false">
            <i className="flaticon-025-dashboard"></i>
            <span className="nav-text">Dashboard</span>
          </a>
            <ul aria-expanded="false" className="mm-collapse left">
              <li><a href="index.html">Dashboard Light</a></li>
              <li><a href="index-2.html">Dashboard Dark</a></li>
              <li><a href="jobs-page.html">Jobs</a></li>
              <li><a href="application-page.html">Application</a></li>
              <li><a href="my-profile.html">Profile</a></li>
              <li><a href="statistics-page.html">Statistics</a></li>
              <li><a href="compaines.html">Companies</a></li>
            </ul>

          </li>
          <li><a className="has-arrow " href="#" aria-expanded="false">
            <i className="flaticon-093-waving"></i>
            <span className="nav-text">Jobs</span>
          </a>
            <ul aria-expanded="false" className="mm-collapse left">
              <li><a href="job-list.html">Job Lists</a></li>
              <li><a href="job-view.html">Job View</a></li>
              <li><a href="job-application.html">Job Application</a></li>
              <li><a href="apply-job.html">Apply Job</a></li>
              <li><a href="new-job.html">New Job</a></li>
              <li><a href="user-profile.html">User Profile</a></li>
            </ul>
          </li>
        </ul>
        <div className="plus-box">
          <p className="fs-14 font-w600 mb-2">Let Jobick ManagedYour Resume Easily</p>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div className="copyright">
          <p><strong>Jobick Job Admin</strong> © 2021 All Rights Reserved</p>
          <p className="fs-12">Made with <span className="heart"></span> by DexignLabs</p>
        </div>
        <div className="ps__rail-x" style={{left:0, bottom:0}}><div className="ps__thumb-x" tabIndex="0" style={{left:0, width:0}}></div></div><div className="ps__rail-y" style={{top:0, height:835, right:0}}><div className="ps__thumb-y" tabIndex="0" style={{top:0, height:531}}></div></div></div>
    </div>




  )

}


export default SideBar