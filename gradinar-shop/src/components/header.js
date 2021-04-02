import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header>
    <nav class="uk-navbar-container uk-margin" uk-navbar>
        <div class="uk-container uk-navbar-left">
            <Link class="uk-navbar-item uk-logo" href="#">
              <StaticImage
                src="../images/gradinar-logo.png"
                width={100}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Gradinar logo"
              />
            </Link>

            <ul class="uk-navbar-nav">
                <li><Link href="#">Proizvodi</Link></li>
                <li><Link href="#">Inspiracija</Link></li>
                <li><Link href="#">Nameštaj od paleta</Link></li>
                <li><Link href="#">O nama</Link></li>
                <li><Link href="#">Kontakt</Link></li>
            </ul>

            <div class="uk-navbar-item">
                {/* <form action="javascript:void(0)">
                    <input class="uk-input uk-form-width-small" type="text" placeholder="Input">
                    <button class="uk-button uk-button-default">Button</button>
                </form> */}
            </div>
        </div>
    </nav>

    <nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">

        <ul class="uk-navbar-nav">
            <li>
            <a href="#">Proizvodi</a>
                <div class="uk-navbar-dropdown" uk-drop="boundary: !nav; boundary-align: true; pos: bottom-justify;">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li class="uk-active"><a href="#">Active</a></li>
                        <li><a href="#">Item</a></li>
                        <li class="uk-nav-header">Header</li>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                        <li class="uk-nav-divider"></li>
                        <li><a href="#">Item</a></li>
                    </ul>
                </div>
            </li>
           <li>
               <a href="#">Proizvodadadad</a>
               <div class="uk-navbar-dropdown" uk-drop="boundary: !nav; boundary-align: true; pos: bottom-justify;">
                   <div class="uk-navbar-dropdown-grid uk-child-width-1-2" uk-grid>
                       <div>
                           <ul class="uk-nav uk-navbar-dropdown-nav">
                               <li class="uk-active"><a href="#">Active</a></li>
                               <li><a href="#">Item</a></li>
                               <li class="uk-nav-header">Header</li>
                               <li><a href="#">Item</a></li>
                               <li><a href="#">Item</a></li>
                               <li class="uk-nav-divider"></li>
                               <li><a href="#">Item</a></li>
                           </ul>
                       </div>
                       <div>
                           <ul class="uk-nav uk-navbar-dropdown-nav">
                               <li class="uk-active"><a href="#">Active</a></li>
                               <li><a href="#">Item</a></li>
                               <li class="uk-nav-header">Header</li>
                               <li><a href="#">Item</a></li>
                               <li><a href="#">Item</a></li>
                               <li class="uk-nav-divider"></li>
                               <li><a href="#">Item</a></li>
                           </ul>
                       </div>
                   </div>
               </div>
           </li>
       </ul>

    </div>
</nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
