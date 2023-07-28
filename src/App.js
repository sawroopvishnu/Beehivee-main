/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from "./logo.svg";
import "./App.css";

function App() {
    return ( <
        >
        <div id="beehive-social-panel" class="beehive-social-panel">
        <div class="inner-panel ass-scrollbar">
          <div class="panel-block dark">
            <a href="#" class="panel-logo item">
              <img
                src="mythemestore.com/beehive-preview/wp-content/themes/beehive/assets/images/logo-vertical.svg"
                alt="Beehive Preview"
              />
            </a>
            <div class="my-card item">
              <h4 class="form-title">Login Now</h4>
              <form
                action="mythemestore.com/beehive-preview/wp-login.php"
                method="post"
                id="panel-login-form"
                class="beehive-login-form panel-login"
                name="panel-login"
              >
                <div class="form-group">
                  <div class="user-name">
                    <label class="screen-reader-text">Email/username</label>
                    <span class="icon">
                      <i class="uil-user"></i>
                    </span>
                    <input
                      type="text"
                      id="username"
                      class="username-control"
                      required
                      name="log"
                      value=""
                      placeholder="Email or username"
                    ></input>
                  </div>
                </div>
                <div class="form-group">
                  <div class="pass">
                    <label class="screen-reader-text">Password</label>
                    <span class="icon">
                      <i class="uil-key-skeleton-alt"></i>
                    </span>
                    <input
                      type="password"
                      id="password"
                      class="password-control"
                      required
                      name="pwd"
                      value=""
                      placeholder="Password"
                    ></input>
                  </div>
                </div>
                <div class="beehive-login-result"></div>
                <div class="submit">
                  <button
                    type="submit"
                    id="login_submit"
                    class="submit-login"
                    name="wp-submit"
                  >
                    Log In
                  </button>
                </div>
                <input
                  type="hidden"
                  id="panel-login-security"
                  name="panel-login-security"
                  value="94ea23d160"
                />
                <input
                  type="hidden"
                  name="_wp_http_referer"
                  value="/beehive-preview/activity/"
                />
                <div class="register-link">
                  <p class="color-primary">Login is disabled</p>
                </div>
              </form>
            </div>
          </div>
          <div class="panel-block light">
            <div class="panel-menu item">
              <ul id="menu-dashboard-menu" class="navbar-panel">
                <li
                  id="menu-item-74"
                  class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-370 current_page_item menu-item-74"
                >
                  <a href="" aria-current="page">
                    <i class="uil-notebooks"></i>
                    <span class="nav-link-text">Activity</span>
                  </a>
                </li>
                <li
                  id="menu-item-80"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-80"
                >
                  <a href="#">
                    <i class="uil-image-v"></i>
                    <span class="nav-link-text">Photos</span>
                  </a>
                </li>
                <li
                  id="menu-item-82"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-82"
                >
                  <a href="#">
                    <i class="uil-play"></i>
                    <span class="nav-link-text">Watch</span>
                  </a>
                </li>
                <li
                  id="menu-item-83"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-83"
                >
                  <a href="#">
                    <i class="uil-user"></i>
                    <span class="nav-link-text">People</span>
                  </a>
                </li>
                <li
                  id="menu-item-78"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-78"
                >
                  <a href="#">
                    <i class="uil-users-alt"></i>
                    <span class="nav-link-text">Groups</span>
                  </a>
                </li>
                <li
                  id="menu-item-75"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-75"
                >
                  <a href="#">
                    <i class="uil-tv-retro"></i>
                    <span class="nav-link-text">Adverts</span>
                  </a>
                </li>
                <li
                  id="menu-item-81"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-81"
                >
                  <a href="#">
                    <i class="uil-shopping-trolley"></i>
                    <span class="nav-link-text">Shop</span>
                  </a>
                </li>
                <li
                  id="menu-item-79"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-79"
                >
                  <a href="#">
                    <i class="uil-briefcase-alt"></i>
                    <span class="nav-link-text">Jobs</span>
                  </a>
                </li>
                <li
                  id="menu-item-77"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-77"
                >
                  <a href="#">
                    <i class="uil-comments"></i>
                    <span class="nav-link-text">Forums</span>
                  </a>
                </li>
                <li
                  id="menu-item-76"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-76"
                >
                  <a href="#">
                    <i class="uil-newspaper"></i>
                    <span class="nav-link-text">Blog</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> <
        div id = "beehive-page"
        class = "site" >
        <header id="sochead" class="site-header social-header user-nav-active">
          <nav class="navbar beehive-navbar social fixed-top">
            <div class="container">
              <div id="beehive-ajax-search" class="beehive-ajax-search">
                <form
                  role="search"
                  method="get"
                  id="ajax-search-form"
                  class="ajax-search-form form-inline"
                  action="#"
                >
                  <div class="search-field">
                    <i class="icon ion-android-search"></i>
                    <input
                      id="ajax-search-textfield"
                      type="text"
                      name="s"
                      placeholder="Search..."
                      value=""
                      autocomplete="off"
                      required
                    ></input>
                    <span class="beehive-loading-ring"></span>
                  </div>
                  <div class="search-button">
                    <button type="submit" class="search-submit">
                      <i class="icon ion-android-search"></i>
                    </button>
                  </div>
                </form>
                <div id="ajax-search-result"></div>
              </div>

              <ul id="navbar-user" class="navbar-nav navbar-user">
                <li class="mini-cart nav-item">
                  <a href="#" class="cart-contents nav-link" title="View Cart">
                    <i class="uil-cart"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    href="#"
                    class="nav-link login"
                    data-toggle="modal"
                    data-target="#login-modal"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <
        div id = "content"
        class = "site-content" >
        <div id="primary" class="content-area">
            <div class="layout social">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-lg-8 col-main">
                    <main id="main" class="main-content">
                      <div class="beehive-title-bar social">
                        <div class="title-bar-wrapper">
                          <div class="title-wrapper screen-reader-text">
                            <h1 class="title h3">Activity</h1>
                          </div>
                        </div>
                      </div>

                      <article
                        id="post-0"
                        class="bp_activity type-bp_activity post-0 page type-page status-publish hentry beehive-post"
                      >
                        <div class="entry-content clearfix">
                          <div
                            id="buddypress"
                            class="buddypress-wrap beehive bp-dir-hori-nav alignwide"
                          >
                            <nav
                              class="activity-type-navs main-navs bp-navs dir-navs "
                              role="navigation"
                              aria-label="Directory menu"
                            >
                              <ul class="component-navigation activity-nav">
                                <li
                                  id="activity-all"
                                  class="dynamic"
                                  data-bp-scope="all"
                                  data-bp-object="activity"
                                >
                                  <a href="#">
                                    All Members
                                    <span class="count">1</span>
                                  </a>
                                </li>
                              </ul>
                            </nav>

                            <div class="screen-content">
                              <div
                                id="activity-stream"
                                class="activity"
                                data-bp-list="activity"
                              >
                                <ul class="activity-list item-list bp-list">
                                  <li
                                    class="activity activity_update activity-item has-comments date-recorded-1671906914 animate-item slideInUp"
                                    id="activity-12377"
                                    data-bp-activity-id="12377"
                                    data-bp-timestamp="1671906914"
                                  >
                                    <div class="activity-avatar item-avatar">
                                      <a href="#">
                                        <img
                                          loading="lazy"
                                          src="//www.gravatar.com/avatar/51ba6a8f76f32fc013fff596e4471477?s=200&#038;r=g&#038;d=mm"
                                          class="avatar user-3-avatar avatar-200 photo"
                                          width="200"
                                          height="200"
                                          alt="Profile picture of User"
                                        />
                                      </a>
                                    </div>

                                    <div class="activity-content">
                                      <div class="activity-header">
                                        <div class="posted-meta">
                                          <p>
                                            <a href="#">User</a> posted an
                                            update
                                          </p>
                                        </div>

                                        <div class="date mute">
                                          3 days, 13 hours ago{" "}
                                        </div>
                                      </div>

                                      <div class="activity-inner">
                                        <p> user</p>
                                      </div>
                                    </div>

                                    <div class="activity-comments">
                                      <ul>
                                        <li
                                          class="activity activity_update activity-item date-recorded-1672070729 animate-item slideInUp"
                                          id="activity-12383"
                                          data-bp-activity-id="12383"
                                          data-bp-timestamp="1672070729"
                                        >
                                          <div class="activity-avatar item-avatar">
                                            <a href="#">
                                              <img
                                                loading="lazy"
                                                src="//www.gravatar.com/avatar/51ba6a8f76f32fc013fff596e4471477?s=200&#038;r=g&#038;d=mm"
                                                class="avatar user-3-avatar avatar-200 photo"
                                                width="200"
                                                height="200"
                                                alt="Profile picture of User"
                                              />
                                            </a>
                                          </div>

                                          <div class="activity-content">
                                            <div class="activity-header">
                                              <div class="posted-meta">
                                                <p>
                                                  <a href="#">User</a> posted an
                                                  update
                                                </p>
                                              </div>

                                              <div class="date mute">
                                                1 day, 16 hours ago{" "}
                                              </div>
                                            </div>

                                            <div class="activity-inner">
                                              <p>kbkbkbk</p>
                                            </div>
                                          </div>
                                        </li>

                                        <li
                                          id="acomment-12382"
                                          class="comment-item"
                                          data-bp-activity-comment-id="12382"
                                        >
                                          <div class="acomment-avatar item-avatar">
                                            <a href="#">
                                              <img
                                                loading="lazy"
                                                src="//www.gravatar.com/avatar/51ba6a8f76f32fc013fff596e4471477?s=50&#038;r=g&#038;d=mm"
                                                class="avatar user-3-avatar avatar-50 photo"
                                                width="50"
                                                height="50"
                                                alt="Profile picture of User"
                                              />{" "}
                                            </a>
                                          </div>

                                          <div class="acomment-meta">
                                            <a href="#">User</a> replied{" "}
                                            <a
                                              href="#"
                                              class="activity-time-since"
                                            >
                                              <time
                                                class="time-since"
                                                datetime="2022-12-26 08:17:10"
                                                data-bp-timestamp="1672042630"
                                              >
                                                1 day, 23 hours ago
                                              </time>
                                            </a>
                                          </div>

                                          <div class="acomment-content">
                                            <div class="rtmedia-activity-container">
                                              <div class="rtmedia-activity-text">
                                                <span>hruu</span>
                                              </div>
                                              <ul class="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list"></ul>
                                            </div>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li
                                    class="activity activity_update activity-item date-recorded-1671906324 animate-item slideInUp"
                                    id="activity-12376"
                                    data-bp-activity-id="12376"
                                    data-bp-timestamp="1671906324"
                                  >
                                    <div class="activity-avatar item-avatar">
                                      <a href="#">
                                        <img
                                          loading="lazy"
                                          src="//www.gravatar.com/avatar/51ba6a8f76f32fc013fff596e4471477?s=200&#038;r=g&#038;d=mm"
                                          class="avatar user-3-avatar avatar-200 photo"
                                          width="200"
                                          height="200"
                                          alt="Profile picture of User"
                                        />
                                      </a>
                                    </div>

                                    <div class="activity-content">
                                      <div class="activity-header">
                                        <div class="posted-meta">
                                          <p>
                                            <a href="#">User</a> posted an
                                            update
                                          </p>
                                        </div>

                                        <div class="date mute">
                                          3 days, 13 hours ago{" "}
                                        </div>
                                      </div>

                                      <div class="activity-inner">
                                        <p>
                                          <a href="#" rel="nofollow ugc">
                                            @robert
                                          </a>{" "}
                                          hi
                                        </p>
                                      </div>
                                    </div>
                                  </li>
                                  <li class="load-more">
                                    <a href="#">Load More</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </main>
                  </div>

                  <div class="col-lg-4 col-aside">
                    <aside
                      id="buddypress_sidebar"
                      class="widget-area sidebar-widget-area sticky-sidebar"
                    >
                      <div
                        id="bp_core_members_widget-2"
                        class="widget widget_bp_core_members_widget buddypress widget"
                      >
                        <h5 class="widget-title">Members</h5>

                        <div class="item-options" id="members-list-options">
                          <a href="#" id="newest-members">
                            Newest
                          </a>
                          <span class="bp-separator" role="separator">
                            |
                          </span>
                          <a
                            href="#"
                            id="recently-active-members"
                            class="selected"
                          >
                            Active
                          </a>

                          <span class="bp-separator" role="separator">
                            |
                          </span>
                          <a href="#" id="popular-members">
                            Popular
                          </a>
                        </div>

                        <ul
                          id="members-list"
                          class="item-list"
                          aria-live="polite"
                          aria-relevant="all"
                          aria-atomic="true"
                        >
                          <li class="vcard">
                            <div class="item-avatar">
                              <a
                                href="#"
                                class="bp-tooltip"
                                data-bp-tooltip="User"
                              >
                                <img
                                  loading="lazy"
                                  src="//www.gravatar.com/avatar/51ba6a8f76f32fc013fff596e4471477?s=50&#038;r=g&#038;d=mm"
                                  class="avatar user-3-avatar avatar-50 photo"
                                  width="50"
                                  height="50"
                                  alt="Profile picture of User"
                                />
                              </a>
                            </div>

                            <div class="item">
                              <div class="item-title fn">
                                <a href="#">User</a>
                              </div>
                              <div class="item-meta">
                                <span
                                  class="activity"
                                  data-livestamp="2022-12-28T08:09:34+0000"
                                >
                                  Active 2 minutes ago
                                </span>
                              </div>
                            </div>
                          </li>

                          <li class="vcard">
                            <div class="item-avatar">
                              <a
                                href="#"
                                class="bp-tooltip"
                                data-bp-tooltip="Sephiroth"
                              >
                                <img
                                  loading="lazy"
                                  src="mythemestore.com/beehive-preview/wp-content/uploads/avatars/1/6005b5c352343-bpthumb.png"
                                  class="avatar user-1-avatar avatar-50 photo"
                                  width="50"
                                  height="50"
                                  alt="Profile picture of Sephiroth"
                                />
                              </a>
                            </div>

                            <div class="item">
                              <div class="item-title fn">
                                <a href="#">Sephiroth</a>
                              </div>
                              <div class="item-meta">
                                <span
                                  class="activity"
                                  data-livestamp="2022-12-23T20:09:37+0000"
                                >
                                  Active 4 days, 12 hours ago
                                </span>
                              </div>
                            </div>
                          </li>

                          <li class="vcard">
                            <div class="item-avatar">
                              <a
                                href="#"
                                class="bp-tooltip"
                                data-bp-tooltip="Irina Petrova"
                              >
                                <img
                                  loading="lazy"
                                  src="mythemestore.com/beehive-preview/wp-content/uploads/avatars/4/5e2cc15a94152-bpthumb.jpg"
                                  class="avatar user-4-avatar avatar-50 photo"
                                  width="50"
                                  height="50"
                                  alt="Profile picture of Irina Petrova"
                                />
                              </a>
                            </div>

                            <div class="item">
                              <div class="item-title fn">
                                <a href="#">Irina Petrova</a>
                              </div>
                              <div class="item-meta">
                                <span
                                  class="activity"
                                  data-livestamp="2022-09-15T18:21:44+0000"
                                >
                                  Active 3 months, 1 week ago
                                </span>
                              </div>
                            </div>
                          </li>

                          <li class="vcard">
                            <div class="item-avatar">
                              <a
                                href="#"
                                class="bp-tooltip"
                                data-bp-tooltip="Jennie Ferguson"
                              >
                                <img
                                  loading="lazy"
                                  src="mythemestore.com/beehive-preview/wp-content/uploads/avatars/16/5e2d07dbca09a-bpthumb.jpg"
                                  class="avatar user-16-avatar avatar-50 photo"
                                  width="50"
                                  height="50"
                                  alt="Profile picture of Jennie Ferguson"
                                />
                              </a>
                            </div>

                            <div class="item">
                              <div class="item-title fn">
                                <a href="#">Jennie Ferguson</a>
                              </div>
                              <div class="item-meta">
                                <span
                                  class="activity"
                                  data-livestamp="2020-11-09T14:18:17+0000"
                                >
                                  Active 2 years, 1 month ago
                                </span>
                              </div>
                            </div>
                          </li>

                          <li class="vcard">
                            <div class="item-avatar">
                              <a
                                href="#"
                                class="bp-tooltip"
                                data-bp-tooltip="John Thompson"
                              >
                                <img
                                  loading="lazy"
                                  src="mythemestore.com/beehive-preview/wp-content/uploads/avatars/14/5e2d01291b6b9-bpthumb.jpg"
                                  class="avatar user-14-avatar avatar-50 photo"
                                  width="50"
                                  height="50"
                                  alt="Profile picture of John Thompson"
                                />
                              </a>
                            </div>

                            <div class="item">
                              <div class="item-title fn">
                                <a href="#">John Thompson</a>
                              </div>
                              <div class="item-meta">
                                <span
                                  class="activity"
                                  data-livestamp="2020-11-05T14:15:59+0000"
                                >
                                  Active 2 years, 1 month ago
                                </span>
                              </div>
                            </div>
                          </li>

                          <li class="vcard">
                            <div class="item-avatar">
                              <a
                                href="#"
                                class="bp-tooltip"
                                data-bp-tooltip="Sophia Lee"
                              >
                                <img
                                  loading="lazy"
                                  src="mythemestore.com/beehive-preview/wp-content/uploads/avatars/6/5e2cccd55f95b-bpthumb.jpg"
                                  class="avatar user-6-avatar avatar-50 photo"
                                  width="50"
                                  height="50"
                                  alt="Profile picture of Sophia Lee"
                                />
                              </a>
                            </div>

                            <div class="item">
                              <div class="item-title fn">
                                <a href="#">Sophia Lee</a>
                              </div>
                              <div class="item-meta">
                                <span
                                  class="activity"
                                  data-livestamp="2020-10-28T08:53:31+0000"
                                >
                                  Active 2 years, 2 months ago
                                </span>
                              </div>
                            </div>
                          </li>

                          <li class="vcard">
                            <div class="item-avatar">
                              <a
                                href="#"
                                class="bp-tooltip"
                                data-bp-tooltip="Alexis Clark"
                              >
                                <img
                                  loading="lazy"
                                  src="mythemestore.com/beehive-preview/wp-content/uploads/avatars/12/5e2cfd5d1d7c0-bpthumb.jpg"
                                  class="avatar user-12-avatar avatar-50 photo"
                                  width="50"
                                  height="50"
                                  alt="Profile picture of Alexis Clark"
                                />
                              </a>
                            </div>

                            <div class="item">
                              <div class="item-title fn">
                                <a href="#">Alexis Clark</a>
                              </div>
                              <div class="item-meta">
                                <span
                                  class="activity"
                                  data-livestamp="2020-10-28T08:52:56+0000"
                                >
                                  Active 2 years, 2 months ago
                                </span>
                              </div>
                            </div>
                          </li>
                        </ul>

                        <input
                          type="hidden"
                          id="_wpnonce-members"
                          name="_wpnonce-members"
                          value="dca92d2ffd"
                        />
                        <input
                          type="hidden"
                          name="members_widget_max"
                          id="members_widget_max"
                          value="7"
                        />
                      </div>
                      <nav class="sidebar-nav-menu">
                        <ul id="menu-sidebar-menu" class="aside-navbar">
                          <li
                            id="menu-item-115"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-115"
                          >
                            <a href="#">Home</a>
                          </li>
                          <li
                            id="menu-item-114"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-114"
                          >
                            <a href="#">About Us</a>
                          </li>
                          <li
                            id="menu-item-113"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-113"
                          >
                            <a href="#">FAQs</a>
                          </li>
                          <li
                            id="menu-item-116"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-116"
                          >
                            <a href="#">Blog</a>
                          </li>
                          <li
                            id="menu-item-112"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-112"
                          >
                            <a href="#">Contact</a>
                          </li>
                        </ul>
                      </nav>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
          </div> <
        /div> <
        /div>

        <
        div class = "demo-info" >
        <span>
          user: <strong>user</strong>,{" "}
        </span> <
        span >
        password: <strong>user</strong> <
        /span> <
        /div> <
        div class = "modal fade login-modal"
        id = "login-modal"
        tabindex = "-1"
        role = "dialog"
        aria - hidden = "true" >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <div class="inner">
                <img
                  src="mythemestore.com/beehive-preview/wp-content/uploads/2020/10/avatar.png"
                  alt="Guest"
                  class="avatar guest-avatar"
                ></img>
              </div>
            </div>
            <div class="modal-body">
              <h4 class="modal-title">Log into your account</h4>
              <form
                action="mythemestore.com/beehive-preview/wp-login.php"
                method="post"
                id="modal-login-form"
                class="beehive-login-form modal-login-form"
                name="modal-login-form"
              >
                <div class="form-group">
                  <div class="user-name">
                    <label class="screen-reader-text">Email/username</label>
                    <span class="icon">
                      <i class="uil-user"></i>
                    </span>
                    <input
                      type="text"
                      id="modal-username"
                      class="username-control"
                      required
                      name="log"
                      value=""
                      placeholder="Email or username"
                    ></input>
                  </div>
                </div>
                <div class="form-group">
                  <div class="pass">
                    <label class="screen-reader-text">Password</label>
                    <span class="icon">
                      <i class="uil-key-skeleton-alt"></i>
                    </span>
                    <input
                      type="password"
                      id="modal-password"
                      class="password-control"
                      required
                      name="pwd"
                      value=""
                      placeholder="Password"
                    ></input>
                  </div>
                </div>
                <div class="modal-options">
                  <div class="row">
                    <div class="col-6">
                      <div class="forgetmenot">
                        <label for="modal-rememberme">
                          <input
                            id="modal-rememberme"
                            name="rememberme"
                            type="checkbox"
                            value="forever"
                          />{" "}
                          Remember Me{" "}
                        </label>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="forgot-password">
                        <a href="https://mythemestore.com/beehive-preview/my-account/lost-password/">
                          Lost Password?{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="beehive-login-result"></div>
                <div class="submit">
                  <button
                    type="submit"
                    id="modal_login_submit"
                    class="submit-login"
                    name="wp-submit"
                  >
                    Log Into Your Account
                  </button>
                </div>
                <input
                  type="hidden"
                  id="modal-login-security"
                  name="modal-login-security"
                  value="f21d473ca9"
                />
                <input
                  type="hidden"
                  name="_wp_http_referer"
                  value="/beehive-preview/activity/"
                />
                <div class="register-link">
                  <p class="color-primary">Login is disabled</p>
                </div>
              </form>
            </div>
          </div>
        </div> <
        button type = "button"
        class = "close"
        data - dismiss = "modal"
        aria - label = "Close" >
        <i class="icon ion-close-round"></i> <
        /button> <
        /div> <
        />
    );
}

export default App;