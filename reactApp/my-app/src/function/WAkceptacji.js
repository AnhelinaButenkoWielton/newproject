import React from 'react' ;   

const WAkceptacji = () =>{
    return (
        <div className="main_container">    
            <h2>Lista dostawców w akceptacji</h2>
            <table className="table">
                <thead className="table-light">
                    <tr>
                        <th className="table-active" scope="col">#</th>
                        <th className="table-active" scope="col">Nazwa Firmy</th>
                        <th className="table-active" scope="col">Data zgłoszenia</th>
                        <th className="table-active" scope="col">Adres</th>
                        <th className="table-active" scope="col">NIP</th>
                        <th className="table-active" scope="col">Walidator</th>
                        <th className="table-active" scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="td_lista_do_akceptacji">1</td>
                        <td className="td_lista_do_akceptacji"><a href="zgloszenie.html">WIRTUALNA POLSKA MEDIA SPÓŁKA AKCYJNA</a></td>
                        <td className="td_lista_do_akceptacji">07/13/2022</td>
                        <td className="td_lista_do_akceptacji">ul. Żwirki i Wigury 16 02-092 Warszawa</td>
                        <td className="td_lista_do_akceptacji">5272645593</td>
                        <td className="td_lista_do_akceptacji">Wojciech Koperski</td>
                        <td className="td_lista_do_akceptacji">Zaakceptowano</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default WAkceptacji;