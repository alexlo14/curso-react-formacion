import React from 'react'

export default function GaleriaImagenes() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <img src="./imagen.jpg" alt="Imagen 1"/>
                    <h5>Título 1</h5>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <img src="./imagen.jpg" alt="Imagen 2"/>
                    <h5>Título 2</h5>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <img src="./imagen.jpg" alt="Imagen 3"/>
                    <h5>Título 3</h5>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <img src="./imagen.jpg" alt="Imagen 4"/>
                    <h5>Título 4</h5>
                </div>
            </div>
        </div>

    )
}
