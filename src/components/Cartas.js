/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../components/cartas.css'
import breiner from '../components/img/breiner.png'
import franco from '../components/img/franco.png'
import jasil from '../components/img/jasil.png'
import jose from '../components/img/jose.png'
import liseth from '../components/img/liseth.png'
import lorainne from '../components/img/lorainne.png'
import luisCamilo from '../components/img/luisCamilo.png'
import luisFlorez from "../components/img/luisFlorez.png";
import luisH from "../components/img/luisH.png";
import melany from '../components/img/melany.png'
import miguel from '../components/img/miguel.png'
import morris from '../components/img/morris.png'
import robert from "../components/img/robert.png";

export const Cartas = () => {
        return (
          <div className="cartas">
            {/* CARD 1*/}
            <section className="caja1">
              <div className="container">
                <div className="card">
                  <div className="imgBx">
                    <img src={breiner} />
                  </div>
                  <div className="contentBx">
                    <h2>Breiner</h2>
                    <a href="#">Perfil</a>
                  </div>
                </div>
              </div>
              {/* FINALIZA CARD 1*/}

              {/* CARD 2*/}
              <div className="container">
                <div className="card">
                  <div className="imgBx">
                    <img src={franco} />
                  </div>
                  <div className="contentBx">
                    <h2>Franco</h2>
                    <a href="#">Perfil</a>
                  </div>
                </div>
              </div>
              {/* FINALIZA CARD 2*/}

              {/* CARD 3*/}
              <div className="container">
                <div className="card">
                  <div className="imgBx">
                    <img src={jasil} />
                  </div>
                  <div className="contentBx">
                    <h2>Jasil</h2>
                    <a href="#">Perfil</a>
                  </div>
                </div>
              </div>
              {/* FINALIZA CARD 3*/}

              {/* CARD 4*/}
              <div className="container">
                <div className="card">
                  <div className="imgBx">
                    <img src={jose} />
                  </div>
                  <div className="contentBx">
                    <h2>Jose</h2>
                    <a href="#">Perfil</a>
                  </div>
                </div>
              </div>
              {/* FINALIZA CARD 4*/}
            </section>

            <section className="caja2">
              {/* CARD 5*/}
              <div className="container">
                <div className="card">
                  <div className="imgBx">
                    <img src={liseth} />
                  </div>
                  <div className="contentBx">
                    <h2>Liseth</h2>
                    <a href="#">Perfil</a>
                  </div>
                </div>
              </div>
              {/* FINALIZA CARD 5*/}

              {/* CARD 6*/}
              <div className="container">
                <div className="card">
                  <div className="imgBx">
                    <img src={lorainne} />
                  </div>
                  <div className="contentBx">
                    <h2>Lorainne</h2>
                    <a href="#">Perfil</a>
                  </div>
                </div>
              </div>
              {/* FINALIZA CARD 6*/}

              {/* CARD 7*/}
              <div className="container">
                <div className="card">
                  <div className="imgBx">
                    <img src={luisCamilo} />
                  </div>
                  <div className="contentBx">
                    <h2>Luis Camilo</h2>
                    <a href="#">Perfil</a>
                  </div>
                </div>
              </div>
              {/* FINALIZA CARD 7*/}

              {/* CARD 8*/}
              <div className="container">
                <div className="card">
                  <div className="imgBx">
                    <img src={luisFlorez} />
                  </div>
                  <div className="contentBx">
                    <h2>Luis Florez</h2>
                    <a href="#">Perfil</a>
                  </div>
                </div>
              </div>
              {/* FINALIZA CARD 8*/}
            </section>

            <section className="caja3">
              {/* CARD 9*/}
              <div className="container">
                <div className="card">
                  <div className="imgBx">
                    <img src={luisH} />
                  </div>
                  <div className="contentBx">
                    <h2>Luis H</h2>
                    <a href="#">Perfil</a>
                  </div>
                </div>
              </div>
              {/* FINALIZA CARD 9*/}

              {/* CARD 10*/}
              <div className="container">
                <div className="card">
                  <div className="imgBx">
                    <img src={melany} />
                  </div>
                  <div className="contentBx">
                    <h2>Melany</h2>
                    <a href="#">Perfil</a>
                  </div>
                </div>
              </div>
              {/* FINALIZA CARD 10*/}

              {/* CARD 11*/}
              <div className="container">
                <div className="card">
                  <div className="imgBx">
                    <img src={miguel} />
                  </div>
                  <div className="contentBx">
                    <h2>Miguel</h2>
                    <a href="#">Perfil</a>
                  </div>
                </div>
              </div>
              {/* FINALIZA CARD 11*/}

              {/* CARD 12*/}
              <div className="container">
                <div className="card">
                  <div className="imgBx">
                    <img src={morris} />
                  </div>
                  <div className="contentBx">
                    <h2>Guillermo</h2>
                    <a href="#">Perfil</a>
                  </div>
                </div>
              </div>
              {/* FINALIZA CARD 12*/}
            </section>

            {/* CARD 13*/}
            <div className="container">
              <div className="card">
                <div className="imgBx">
                  <img src={robert} />
                </div>
                <div className="contentBx">
                  <h2>Robert</h2>
                  <a href="#">Perfil</a>
                </div>
              </div>
            </div>
            {/* FINALIZA CARD 13*/}
          </div>
        );
}
export default Cartas;