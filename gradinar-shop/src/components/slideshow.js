import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function slideshow () {
    return (

        <section class="uk-position-relative uk-visible-toggle uk-light slideshow" uk-slideshow="min-height: 300; max-height: 600;">
          <ul class="uk-slideshow-items">
            <li class="sshow-item-1">
                <Link href="#">
                <figure class="uk-container uk-height-1-1">
                <StaticImage src="../images/showroom/kupatilo1.jpg" formats={["AUTO", "WEBP", "AVIF"]} alt="Promo Kupatilo" uk-cover/></figure></Link></li>
            <li class="sshow-item-2">
                <Link href="#">
                <figure class="uk-container uk-height-1-1">
                    <StaticImage src="../images/showroom/plocice1.jpg" formats={["AUTO", "WEBP", "AVIF"]} alt="Promo Plocice"uk-cover/></figure></Link></li>
            <li class="sshow-item-3">
                <Link href="#">
                <figure class="uk-container uk-height-1-1">
                    <StaticImage src="../images/showroom/palete1.jpg" formats={["AUTO", "WEBP", "AVIF"]} alt="Promo Palete"uk-cover/></figure></Link></li>
          </ul>
          

            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slideshow-item="previous" uk-slidenav-previous></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slideshow-item="next" uk-slidenav-next></a>
          <div class="uk-position-bottom-center uk-position-small">
            <ul class="uk-slideshow-nav uk-dotnav"></ul>
          </div>
        </section>
    )
}