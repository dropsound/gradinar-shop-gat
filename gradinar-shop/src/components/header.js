import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Brands from "./brands"



const Header = ({ siteTitle }) => (
  <header>
      <div class="uk-container">
            <div class="uk-position-relative uk-margin">
                <nav class="uk-navbar-container uk-navbar" uk-navbar="dropbar: +.uk-navbar-dropbar">
                    <div class="uk-navbar-left">
                        <ul class="uk-navbar-nav">
                            <li>
                            <Link class="uk-navbar-item uk-logo" href="/">
                            <StaticImage
                                src="../images/gradinar-logo.png"
                                width={100}
                                quality={95}
                                formats={["AUTO", "WEBP", "AVIF"]}
                                alt="Gradinar logo"
                            />
                            </Link>
                            </li>
                            <li>
                                <a href="#" aria-expanded="false">Proizvodi</a>
                                <div class="uk-navbar-dropdown uk-navbar-dropdown-width-5 uk-navbar-dropdown-dropbar">
                                    <div class="uk-navbar-dropdown-grid uk-child-width-1-5 uk-grid uk-grid-stack" uk-grid="">
                                        <div class="uk-first-column">
                                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                                <li class="uk-nav-header">
                                                <StaticImage
                                                        src="../images/illustrations/tiles.png"
                                                        width={60}
                                                        quality={95}
                                                        formats={["AUTO", "WEBP", "AVIF"]}
                                                        imgClassName="nav-ilu"
                                                        alt="Keramika"
                                                    />
                                                    <br></br>
                                                    Keramika</li>
                                                    <hr class="uk-article-divider"></hr>
                                                <li><a href="#">Zidne ločice</a></li>
                                                <li><a href="#">Podne pločice</a></li>
                                                <li><a href="#">Lepkovi</a></li>
                                                <li><a href="#">Fug mase</a></li>
                                                <li><a href="#">Lajsne</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                        <ul class="uk-nav uk-navbar-dropdown-nav">
                                                <li class="uk-nav-header">
                                                <StaticImage
                                                        src="../images/illustrations/toilet.png"
                                                        width={60}
                                                        quality={95}
                                                        formats={["AUTO", "WEBP", "AVIF"]}
                                                        imgClassName="nav-ilu"
                                                        alt="Sanitarija"
                                                    />
                                                    <br></br>
                                                    Sanitarija</li>
                                                    <hr class="uk-article-divider"></hr>
                                                <li><a href="#">WC šolje</a></li>
                                                <li><a href="#">Lavaboi</a></li>
                                                <li><a href="#">Kade</a></li>
                                                <li><a href="#">Tuš kabine</a></li>
                                                <li><a href="#">Slavine</a></li>
                                                <li><a href="#">Tuševi</a></li>
                                                <li><a href="#">Kupatilski nameštaj</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                        <ul class="uk-nav uk-navbar-dropdown-nav">
                                                <li class="uk-nav-header">
                                                <StaticImage
                                                        src="../images/illustrations/bonfire.png"
                                                        width={60}
                                                        quality={95}
                                                        formats={["AUTO", "WEBP", "AVIF"]}
                                                        imgClassName="nav-ilu"
                                                        alt="Ogrev"
                                                    />
                                                    <br></br>
                                                    Ogrev</li>
                                                    <hr class="uk-article-divider"></hr>
                                                <li><a href="#">Briket/drvo</a></li>
                                                <li><a href="#">Briket/ugalj</a></li>
                                                <li><a href="#">Potpala</a></li>
                                                <li><a href="#">Drvo</a></li>
                                                <li><a href="#">Ugalj</a></li>
                                                <li><a href="#">Pelet</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                        <ul class="uk-nav uk-navbar-dropdown-nav">
                                                <li class="uk-nav-header">
                                                <StaticImage
                                                        src="../images/illustrations/painting-roller.png"
                                                        width={60}
                                                        quality={95}
                                                        formats={["AUTO", "WEBP", "AVIF"]}
                                                        imgClassName="nav-ilu"
                                                        alt="Alat"
                                                    />
                                                    <br></br>
                                                    Alat</li>
                                                    <hr class="uk-article-divider"></hr>
                                                <li><a href="#">Molerski</a></li>
                                                <li><a href="#">Građevinski</a></li>
                                                <li><a href="#">Električarski</a></li>
                                                <li><a href="#">Vodovodni</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                        <ul class="uk-nav uk-navbar-dropdown-nav">
                                            <Link href="./pages/brands-page.js">
                                                <li class="uk-nav-header">
                                                <StaticImage
                                                        src="../images/illustrations/brands.png"
                                                        width={60}
                                                        quality={95}
                                                        formats={["AUTO", "WEBP", "AVIF"]}
                                                        imgClassName="nav-ilu"
                                                        alt="Alat"
                                                    />
                                                    <br></br>
                                                    Brendovi</li>
                                            </Link>
                                                    <hr class="uk-article-divider"></hr>
                                                    <Brands></Brands>
                                                        
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><Link href="#">Inspiracija</Link></li>
                            <li><Link href="#">Nameštaj od paleta</Link></li>
                            <li><Link href="#">O nama</Link></li>
                            <li><Link href="#">Kontakt</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div class="uk-navbar-item">
                {/* <form action="javascript:void(0)">
                    <input class="uk-input uk-form-width-small" type="text" placeholder="Input">
                    <button class="uk-button uk-button-default">Button</button>
                </form> */}
            </div>
            </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
