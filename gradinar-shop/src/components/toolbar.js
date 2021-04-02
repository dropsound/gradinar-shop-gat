import React from "react"
import { Link } from "gatsby"

export default function toolbar () {
    return (
        <nav class="uk-navbar-container toolbar uk-visible@m" uk-navbar>
            <div class="uk-navbar">
                <div class="uk-container">
                    <ul class="uk-navbar-nav">
                        <li><Link to="/" title="Pozovite"><span uk-icon="receiver"></span>+381 34 702 008</Link></li>
                        <li><Link title="Lokacija"><span uk-icon="location"></span>Kralja Petra Prvog bb 34300 Arandjelovac</Link></li>
                        <li title="Radno vreme"><span uk-icon="clock"></span><span class="wtime">Radno vreme: 09:00 - 17:00</span></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}





