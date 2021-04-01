import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header>
    <nav class="uk-navbar-container uk-margin" uk-navbar>
    <div class="uk-navbar-left">
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
            <li>
                <Link href="#"><span class="uk-icon uk-margin-small-right"></span>Proizvodi</Link>
            </li>
            <li>
                <Link href="#"><span class="uk-icon uk-margin-small-right"></span>Inspiracija</Link>
            </li>
            <li>
                <Link href="#"><span class="uk-icon uk-margin-small-right"></span>Nameštaj od paleta</Link>
            </li>
            <li>
                <Link href="#"><span class="uk-icon uk-margin-small-right"></span>O nama</Link>
            </li>
            <li>
                <Link href="#"><span class="uk-icon uk-margin-small-right"></span>Kontakt</Link>
            </li>
        </ul>

        <div class="uk-navbar-item">
            {/* <form action="javascript:void(0)">
                <input class="uk-input uk-form-width-small" type="text" placeholder="Input">
                <button class="uk-button uk-button-default">Button</button>
            </form> */}
        </div>

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
