import '../../../styles.css'
import NavHeader from './NavHeader';
const Nav = function () {
  return (
    <>
    <NavHeader />
    <div className="header">
      <div className="header-content">
        <nav className="navbar navbar-expand">
          <div className="collapse navbar-collapse justify-content-between">
            <div className="header-left">
              <div className="dashboard_bar">
                Calendar
              </div>
              <div className="nav-item d-flex align-items-center">
                <div className="input-group search-area">
                  <input type="text" className="form-control" placeholder="" />
                    <span className="input-group-text"><a href="#"><i className="flaticon-381-search-2"></i></a></span>
                </div>
                <div className="plus-icon">
                  <a href="#"><i className="fas fa-plus"></i></a>
                </div>
              </div>
            </div>
            <ul className="navbar-nav header-right">
              <li className="nav-item dropdown notification_dropdown">
                <a className="nav-link bell-link " href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22.871" viewBox="0 0 24 22.871">
                    <g data-name="Layer 2" transform="translate(-2 -2)">
                      <path id="Path_9" data-name="Path 9" d="M23.268,2H4.73A2.733,2.733,0,0,0,2,4.73V17.471A2.733,2.733,0,0,0,4.73,20.2a.911.911,0,0,1,.91.91v1.94a1.82,1.82,0,0,0,2.83,1.514l6.317-4.212a.9.9,0,0,1,.5-.153h4.436a2.742,2.742,0,0,0,2.633-2L25.9,5.462A2.735,2.735,0,0,0,23.268,2Zm.879,2.978-3.539,12.74a.915.915,0,0,1-.88.663H15.292a2.718,2.718,0,0,0-1.514.459L7.46,23.051v-1.94a2.733,2.733,0,0,0-2.73-2.73.911.911,0,0,1-.91-.91V4.73a.911.911,0,0,1,.91-.91H23.268a.914.914,0,0,1,.879,1.158Z" transform="translate(0 0)" />
                      <path id="Path_10" data-name="Path 10" d="M7.91,10.82h4.55a.91.91,0,1,0,0-1.82H7.91a.91.91,0,1,0,0,1.82Z" transform="translate(-0.45 -0.63)" />
                      <path id="Path_11" data-name="Path 11" d="M16.1,13H7.91a.91.91,0,1,0,0,1.82H16.1a.91.91,0,1,0,0-1.82Z" transform="translate(-0.45 -0.99)" />
                    </g>
                  </svg>
                  <span className="badge light text-white bg-primary rounded-circle">76</span>
                </a>
              </li>
              <li className="nav-item dropdown notification_dropdown">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g data-name="Layer 2" transform="translate(-2 -2)">
                      <path id="Path_20" data-name="Path 20" d="M22.571,15.8V13.066a8.5,8.5,0,0,0-7.714-8.455V2.857a.857.857,0,0,0-1.714,0V4.611a8.5,8.5,0,0,0-7.714,8.455V15.8A4.293,4.293,0,0,0,2,20a2.574,2.574,0,0,0,2.571,2.571H9.8a4.286,4.286,0,0,0,8.4,0h5.23A2.574,2.574,0,0,0,26,20,4.293,4.293,0,0,0,22.571,15.8ZM7.143,13.066a6.789,6.789,0,0,1,6.78-6.78h.154a6.789,6.789,0,0,1,6.78,6.78v2.649H7.143ZM14,24.286a2.567,2.567,0,0,1-2.413-1.714h4.827A2.567,2.567,0,0,1,14,24.286Zm9.429-3.429H4.571A.858.858,0,0,1,3.714,20a2.574,2.574,0,0,1,2.571-2.571H21.714A2.574,2.574,0,0,1,24.286,20a.858.858,0,0,1-.857.857Z" />
                    </g>
                  </svg>
                  <span className="badge light text-white bg-primary rounded-circle">4</span>
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <div id="DZ_W_Notification1" className="widget-media dlab-scroll p-3" style={{height:380}}>
                    <ul className="timeline">
                      <li>
                        <div className="timeline-panel">
                          <div className="media me-2">
                            <img alt="image" width="50" src="images/avatar/1.jpg" />
                          </div>
                          <div className="media-body">
                            <h6 className="mb-1">Dr sultads Send you Photo</h6>
                            <small className="d-block">29 July 2020 - 02:26 PM</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media me-2 media-info">
                            KG
                          </div>
                          <div className="media-body">
                            <h6 className="mb-1">Resport created successfully</h6>
                            <small className="d-block">29 July 2020 - 02:26 PM</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media me-2 media-success">
                            <i className="fa fa-home"></i>
                          </div>
                          <div className="media-body">
                            <h6 className="mb-1">Reminder : Treatment Time!</h6>
                            <small className="d-block">29 July 2020 - 02:26 PM</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media me-2">
                            <img alt="image" width="50" src="images/avatar/1.jpg" />
                          </div>
                          <div className="media-body">
                            <h6 className="mb-1">Dr sultads Send you Photo</h6>
                            <small className="d-block">29 July 2020 - 02:26 PM</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media me-2 media-danger">
                            KG
                          </div>
                          <div className="media-body">
                            <h6 className="mb-1">Resport created successfully</h6>
                            <small className="d-block">29 July 2020 - 02:26 PM</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media me-2 media-primary">
                            <i className="fa fa-home"></i>
                          </div>
                          <div className="media-body">
                            <h6 className="mb-1">Reminder : Treatment Time!</h6>
                            <small className="d-block">29 July 2020 - 02:26 PM</small>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <a className="all-notification" href="#">See all notifications <i className="ti-arrow-end"></i></a>
                </div>
              </li>


              <li className="nav-item dropdown notification_dropdown">
                <a className="nav-link " href="#" data-bs-toggle="dropdown">
                  <svg xmlns="http://www.w3.org/2000/svg" width="23.262" height="24" viewBox="0 0 23.262 24">
                    <g id="icon" transform="translate(-1565 90)">
                      <path id="setting_1_" data-name="setting (1)" d="M30.45,13.908l-1-.822a1.406,1.406,0,0,1,0-2.171l1-.822a1.869,1.869,0,0,0,.432-2.385L28.911,4.293a1.869,1.869,0,0,0-2.282-.818l-1.211.454a1.406,1.406,0,0,1-1.88-1.086l-.213-1.276A1.869,1.869,0,0,0,21.475,0H17.533a1.869,1.869,0,0,0-1.849,1.567L15.47,2.842a1.406,1.406,0,0,1-1.88,1.086l-1.211-.454a1.869,1.869,0,0,0-2.282.818L8.126,7.707a1.869,1.869,0,0,0,.432,2.385l1,.822a1.406,1.406,0,0,1,0,2.171l-1,.822a1.869,1.869,0,0,0-.432,2.385L10.1,19.707a1.869,1.869,0,0,0,2.282.818l1.211-.454a1.406,1.406,0,0,1,1.88,1.086l.213,1.276A1.869,1.869,0,0,0,17.533,24h3.943a1.869,1.869,0,0,0,1.849-1.567l.213-1.276a1.406,1.406,0,0,1,1.88-1.086l1.211.454a1.869,1.869,0,0,0,2.282-.818l1.972-3.415a1.869,1.869,0,0,0-.432-2.385ZM27.287,18.77l-1.211-.454a3.281,3.281,0,0,0-4.388,2.533l-.213,1.276H17.533l-.213-1.276a3.281,3.281,0,0,0-4.388-2.533l-1.211.454L9.75,15.355l1-.822a3.281,3.281,0,0,0,0-5.067l-1-.822L11.721,5.23l1.211.454A3.281,3.281,0,0,0,17.32,3.151l.213-1.276h3.943l.213,1.276a3.281,3.281,0,0,0,4.388,2.533l1.211-.454,1.972,3.414h0l-1,.822a3.281,3.281,0,0,0,0,5.067l1,.822ZM19.5,7.375A4.625,4.625,0,1,0,24.129,12,4.63,4.63,0,0,0,19.5,7.375Zm0,7.375A2.75,2.75,0,1,1,22.254,12,2.753,2.753,0,0,1,19.5,14.75Z" transform="translate(1557.127 -90)" />
                    </g>
                  </svg>

                  <span className="badge light text-white bg-primary rounded-circle">15</span>
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <div id="DZ_W_TimeLine02" className="widget-timeline dlab-scroll style-1 ps ps--active-y p-3 height370">
                    <ul className="timeline">
                      <li>
                        <div className="timeline-badge primary"></div>
                        <a className="timeline-panel text-muted" href="#">
                          <span>10 minutes ago</span>
                          <h6 className="mb-0">Youtube, a video-sharing website, goes live <strong className="text-primary">$500</strong>.</h6>
                        </a>
                      </li>
                      <li>
                        <div className="timeline-badge info">
                        </div>
                        <a className="timeline-panel text-muted" href="#">
                          <span>20 minutes ago</span>
                          <h6 className="mb-0">New order placed <strong className="text-info">#XF-2356.</strong></h6>
                          <p className="mb-0">Quisque a consequat ante Sit amet magna at volutapt...</p>
                        </a>
                      </li>
                      <li>
                        <div className="timeline-badge danger">
                        </div>
                        <a className="timeline-panel text-muted" href="#">
                          <span>30 minutes ago</span>
                          <h6 className="mb-0">john just buy your product <strong className="text-warning">Sell $250</strong></h6>
                        </a>
                      </li>
                      <li>
                        <div className="timeline-badge success">
                        </div>
                        <a className="timeline-panel text-muted" href="#">
                          <span>15 minutes ago</span>
                          <h6 className="mb-0">StumbleUpon is acquired by eBay. </h6>
                        </a>
                      </li>
                      <li>
                        <div className="timeline-badge warning">
                        </div>
                        <a className="timeline-panel text-muted" href="#">
                          <span>20 minutes ago</span>
                          <h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
                        </a>
                      </li>
                      <li>
                        <div className="timeline-badge dark">
                        </div>
                        <a className="timeline-panel text-muted" href="#">
                          <span>20 minutes ago</span>
                          <h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown header-profile">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown">
                  <img src="images/profile/pic1.jpg" width="20" alt="" />
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a href="./app-profile.html" className="dropdown-item ai-icon">
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
              </li>
              <li className="nav-item">

              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    </>
  )

}

export default Nav;