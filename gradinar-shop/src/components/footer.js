import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function footer () {
    return (
    <footer>
        <section class="uk-section uk-section-secondary uk-section-small uk-light">
          <div class="uk-container">
            <div class="uk-grid uk-child-width-1-4@m" uk-grid>
                <div class="uk-first-child">
                    <Link class="uk-logo" href="#">
                    <StaticImage
                                src="../images/gradinar-logo.png"
                                width={100}
                                quality={95}
                                formats={["AUTO", "WEBP", "AVIF"]}
                                alt="Gradinar logo"
                            />
                    </Link>
                    
                       
                        <p class="uk-text-small">Najstariji salon keramike u regionu. Višegodišnje iskustvo u saradnji sa najpoznatijim regionalnim i svetskim proizvođačima.</p>
                    <ul class="uk-iconnav">
                    <li><a href="#" title="Facebook" uk-icon="facebook"></a></li>
                    <li><a href="#" title="Twitter" uk-icon="twitter"></a></li>
                    <li><a href="#" title="YouTube" uk-icon="youtube"></a></li>
                    <li><a href="#" title="Instagram" uk-icon="instagram"></a></li>
                    </ul>
                </div>
                <div>
                    <nav class="uk-grid uk-grid-small uk-child-width-1-2" uk-grid>
                    <div>
                        <ul class="uk-nav uk-nav-default">
                        <li><a href="#">Katalog</a></li>
                        <li><a href="#">Brendovi</a></li>
                        <li><a href="#">Dostava</a></li>
                        <li><a href="#">Česta pitanja</a></li>
                        <li><a href="#">Uslovi plaćanja</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul class="uk-nav uk-nav-default">
                        <li><a href="#">O nama</a></li>
                        <li><a href="#">Kontakt</a></li>
                        <li><a href="#">Dokumentacija</a></li>
                        <li><a href="#">Inspiracija/Blog</a></li>
                        <li><a href="#">Novosti</a></li>
                        </ul>
                    </div>
                    </nav>
                </div>
                <div>
                    <ul class="uk-list uk-text-small">
                    <li><a class="uk-link-muted" href="#"><span class="uk-margin-small-right" uk-icon="receiver"></span><span class="tm-pseudo">+381 34 702 008</span></a></li>
                    <li><a class="uk-link-muted" href="#"><span class="uk-margin-small-right" uk-icon="mail"></span><span class="tm-pseudo">gradinard.doo@gmail.com</span></a></li>
                    <li>
                        <div class="uk-text-muted"><span class="uk-margin-small-right" uk-icon="location"></span><span>Kralja Petra Prvog bb, Arandjelovac</span>
                        </div>
                    </li>
                    <li>
                        <div class="uk-text-muted"><span class="uk-margin-small-right" uk-icon="clock"></span><span>Radno vreme 09:00–17:00</span>
                        </div>
                    </li>
                    </ul>
                </div>
                <div>
                    <form class="uk-form-stacked">
                    <label>
                        <div class="uk-form-label uk-text-muted">Prijavite se za novosti</div>
                        <div class="uk-inline uk-width-1-1">
                            <a class="uk-form-icon uk-form-icon-flip" href="#" uk-icon="mail"></a>
                        <input class="uk-input" type="email" placeholder="Vaš email" required></input>
                        </div>
                    </label>
                    </form>
                    <button class="uk-button uk-button-secondary">Prijavite se</button>
                    <div class="uk-margin uk-text-small uk-text-muted">Gradinar&#174; | dropsound&#174; | 2021&#169;</div>
                </div>
            </div>
        </div>
    </section>
    </footer>


    )
}