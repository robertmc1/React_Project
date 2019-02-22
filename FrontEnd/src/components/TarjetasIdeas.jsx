import  React from 'react';
import {connect} from 'react-redux';

const TarjetasIdea = (props) => {

    const {idea} = props.ideasR;

    const mapIdea = idea.map((item) => {

    return(
        <div key={item._id} id={item._id}>
            <div className={"tarjetas"}>
                <div className={"tituloTarjeta"}>
                    UNICORN SHOP
                </div>
                <div className={"divTj"} >
                    <div>
                        <div>Idea:</div>
                        <div>City:</div>
                    </div>
                    <div>
                        <div>Super App</div>
                        <div>Madrid</div>
                    </div>
                </div>

                <div className={"divTitle"}>
                    Description
                </div>
                <div className="divTjLine">
                    <p>{item.description}
                    </p>
                </div>
                <div className="divTjLine">
                    <div >
                        <div className={"divTitle"}>Headquarter</div>
                    </div>
                    <div>
                        <div>Madrid</div>
                    </div>
                    <div>
                        <div className={"divTitle"}>Team</div>
                    </div>
                    <div>
                        <div>Real Unicorn</div>
                    </div>
                </div>
            </div>
        </div>

        )
    });

    return(
        <div >
            <div className={"container"}>
                {mapIdea}
            </div>
        </div>
    )
};

const mapStateToProps3 = (state, props) => ({
    ideasR: state
});

export default connect(mapStateToProps3, null)(TarjetasIdea);