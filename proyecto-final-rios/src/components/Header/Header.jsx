import React from 'react'
import './Header.css'

function header() {
    return [
        <div key="1" className="jumbotron">
        </div>,
        <div key="2" className="container-header">
            <div className="container-header__box1">
                <div className="container-header__image">
                    <img src="https://pbs.twimg.com/media/EjUBPF8XsAAQQPY?format=jpg&name=4096x4096" alt="" />
                </div>
                <div className="container-header__content">
                    <h2>Lorem, ipsum dolor</h2>
                    <span>Lorem, ipsum dolor sit amet </span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Ut facere quasi vero culpa reiciendis similique.</p>
                    <button>Ver más</button>
                </div>
            </div>
            <div className="container-header__box2">
                <div className="container-header__image">
                    <img src="https://m.media-amazon.com/images/I/51U-SRiOd+L._AC_SY780_.jpg" alt="" />
                </div>
                <div className="container-header__content">
                    <h2>Lorem, ipsum dolor</h2>
                    <span>Lorem, ipsum dolor sit amet </span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Ut facere quasi vero culpa reiciendis similique.</p>
                    <button>Ver más</button>
                </div>
            </div>
        </div>
    ]
}



export default header