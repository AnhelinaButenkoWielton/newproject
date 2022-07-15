import React from 'react' ;   

const SprawdzDostawce = () =>{
    return (
        <div className="main_container">
            <h2>Sprawdź dostawcę</h2>
            <div className="mt-4">
                <p2>Po wpisaniu numeru NIP zostanie on sprawdzony czy jest już w trakcie weryfikacji.</p2>
            </div>
            <div className="mt-1">
                <p4>Jeśli nie zostaniesz przeniesiony do formualrza weryfikacji formalanej</p4>
                <input type="text" className="form-control mt-2" name="name" required="" placeholder="Podaj numer NIP"></input>
            </div>
            <div className="mt-4 mb-4 d-flex justify-content-center">
                <button type="submit" className="button_to_sending">Wyszlij do werefikacji</button>
            </div>
        </div>
    );
}

export default SprawdzDostawce;