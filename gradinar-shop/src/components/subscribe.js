import * as React from "react"

export default function subscribe (){

return (
    <div class="subscribe">
<section class="uk-section uk-section-primary uk-section-small uk-light">
    <div class="uk-container">
        <div class="uk-text-center">
            <div class="uk-h2 uk-margin-remove">Prijavite se za novosti</div>
            <div>Budite pravovremeno obavešteni o novim proizvodima i akcijama.</div>
        </div>
        <div class="uk-margin uk-text-center">
        <form class="uk-form-stacked">
                    <label>
                        <div class="uk-form-label uk-text-muted">Prijavite se za novosti</div>
                        <div class="uk-inline uk-width-medium">
                            <a class="uk-form-icon uk-form-icon-flip" href="#" uk-icon="mail"></a>
                        <input class="uk-input" type="email" placeholder="Vaš email" required></input>
                        </div>
                    </label>
                    </form>
                    <button class="uk-button uk-button-secondary">Prijavite se</button>
        </div>
    </div>   
  </section>
  <section class="uk-section uk-section-default uk-section-small">
          <div class="uk-container">
            <div uk-slider>
              <ul class="uk-slider-items uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-5@m uk-grid">
                <li>
                  <div class="uk-grid-small uk-flex-center uk-flex-left@s" uk-grid>
                    <div><span uk-icon="icon: star; ratio: 2.5;"></span>
                    </div>
                    <div class="uk-text-center uk-text-left@s uk-width-expand@s">
                      <div>Najbolja ponuda</div>
                      <div class="uk-text-meta">Izuzetne cene i svakodnevne akcije</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="uk-grid-small uk-flex-center uk-flex-left@s" uk-grid>
                    <div><span uk-icon="icon: receiver; ratio: 2.5;"></span>
                    </div>
                    <div class="uk-text-center uk-text-left@s uk-width-expand@s">
                      <div>Dostupnost</div>
                      <div class="uk-text-meta">U "hitnim" situacijama uvek dostupni</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="uk-grid-small uk-flex-center uk-flex-left@s" uk-grid>
                    <div><span uk-icon="icon: location; ratio: 2.5;"></span>
                    </div>
                    <div class="uk-text-center uk-text-left@s uk-width-expand@s">
                      <div>Idealna lokacija</div>
                      <div class="uk-text-meta">Obezbedjen parking i utovarni prostor</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="uk-grid-small uk-flex-center uk-flex-left@s" uk-grid>
                    <div><span uk-icon="icon: comments; ratio: 2.5;"></span>
                    </div>
                    <div class="uk-text-center uk-text-left@s uk-width-expand@s">
                      <div>Jednostavan dogovor</div>
                      <div class="uk-text-meta">Poznavanje trzista i nesebicna saradnja sa konkurencijom</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="uk-grid-small uk-flex-center uk-flex-left@s" uk-grid>
                    <div><span uk-icon="icon: happy; ratio: 2.5;"></span>
                    </div>
                    <div class="uk-text-center uk-text-left@s uk-width-expand@s">
                      <div>100%</div>
                      <div class="uk-text-meta">Zadovoljni kupci</div>
                    </div>
                  </div>
                </li>
              </ul>
              <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin-medium-top"></ul>
            </div>
          </div>
        </section>
  </div>

)
}