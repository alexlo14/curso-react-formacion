import { Card } from "@mui/material";

export default function TarjetaInformativa({ titulo, descripcion, imagen }) {
    return (
        <div className="row">
            <div className="card">
                <img src={imagen} className="card-img-top" alt={titulo} style={{ maxHeight: "100px", maxWidth: "100px" }}/>
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{descripcion}</p>
                    <a href="/" class="btn btn-primary">VER</a>
                </div>
            </div>
        </div>
    )
}
