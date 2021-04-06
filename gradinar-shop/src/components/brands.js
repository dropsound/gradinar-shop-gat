import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function Brands  () {

    return (
        <div class="uk-child-width-1-2 uk-grid brands-list" uk-grid="">
            <div class="uk-first-column">
            <ul>
                <li>
                <Link href="#">
                    <StaticImage
                        src="../images/brands/enmon.png"
                        width={100}
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        imgClassName="brands-logo"
                        alt="Enmon logo"
                    />
                </Link>
                </li>
                <li>
                <Link href="#">
                    <StaticImage
                        src="../images/brands/zorka-keramika.png"
                        width={100}
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        imgClassName="brands-logo"
                        alt="Zorka Keramika"
                    />
                </Link>
                </li>
                <li>
                <Link href="#">
                    <StaticImage
                        src="../images/brands/jovanovic-keramika.png"
                        width={100}
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        imgClassName="brands-logo"
                        alt="Jovanovic Keramika"
                    />
                </Link>
                </li>
            </ul>
            </div>
            <div>
            <ul>
                <li>
                <Link href="#">
                    <StaticImage
                        src="../images/brands/ceresit.png"
                        width={100}
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        imgClassName="brands-logo"
                        alt="Ceresit logo"
                    />
                </Link>
                </li>
                <li>
                <Link href="#">
                    <StaticImage
                        src="../images/brands/geberit.png"
                        width={100}
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        imgClassName="brands-logo"
                        alt="Geberit logo"
                    />
                </Link>
                </li>
                <li>
                <Link href="#">
                    <StaticImage
                        src="../images/brands/isomat.png"
                        width={100}
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        imgClassName="brands-logo"
                        alt="Isomat logo"
                    />
                </Link>
                </li>
            </ul>
            </div>
        </div>

      )
    
}
  
