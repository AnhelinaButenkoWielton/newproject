import React from 'react' ;   

const MojeKonto = () =>{
    return (
        <div className="main_container">    
            <h2 className="mt-1">Twój profil</h2>
            <table className="table table-striped mt-4">
                <tbody>
                    <tr>
                        <td className="td_profile">Imię i nazwisko</td>
                        <td className="td_profile">Anhelina Butenko</td>
                    </tr>
                    <tr>
                        <td className="td_profile">Stanowisko</td>
                        <td className="td_profile">Praktykantka</td>
                    </tr>
                    <tr>
                        <td className="td_profile">Telefon</td>
                        <td className="td_profile">BRAK WPISANEGO TELEFONU</td>
                    </tr>
                    <tr>
                        <td className="td_profile">Przełożony</td>
                        <td className="td_profile">Rafał Strzelecki</td>
                    </tr>
                    <tr>
                        <td className="td_profile">Domyślna osoba akceptująca</td>
                        <td className="td_profile">Wojciech Koperski</td>
                    </tr>
                </tbody>
            </table>
            <p className="mt-4 mb-2">Wskaż domyslną osobą akceptującą:</p>
            <div className="input-group p-0 m-0">
                <select className="form-select" id="inputGroupSelect01" required aria-label="select example">
                <option value="">Osoba akceptująca</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </select>
            </div>
            <div className="mt-4 mb-4 d-flex justify-content-center">
                <button type="submit" className="button_to_sending">Zapisz</button>
            </div>
        </div>
    );
}

export default MojeKonto;