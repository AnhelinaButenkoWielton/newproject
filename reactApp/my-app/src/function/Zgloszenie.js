
import React from 'react' ;   

const Zgloszenie = () =>{
  return (
    <div className="main_container">  
        <h2>Pełne zgłoszenie o ID 1069</h2>  
        <table className="table">
            <thead className="table-light">
                <tr>
                    <th className="table-active" colspan="2" scope="col">Weryfikacja / ponowna weryfikacja Dostawcy</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="td_quest">Nazwa lub imię i nazwisko</td>
                    <td className="td_input"><input type="text" className="form-control" name="name" required="" placeholder="Nazwa lub imię i nazwisko" value="WIRTUALNA POLSKA MEDIA SPÓŁKA AKCYJNA" disabled></input></td>
                </tr>
                <tr>
                    <td className="td_quest">Adres siedziby lub miejsca prowadzenia działalności</td>
                    <td className="td_input"><input type="text" className="form-control" name="name" required="" placeholder="Adres siedziby lub miejsca prowadzenia działalności" value="ul. Żwirki i Wigury 16 02-092 Warszawa" disabled></input></td>
                </tr>
                <tr>
                    <td className="td_quest">Numer identyfikacji podatkowej (NIP)</td>
                    <td className="td_input"><input type="text" className="form-control" name="name" required="" placeholder="Numer identyfikacji podatkowej (NIP)" value="5272645593" disabled></input></td>
                </tr>
                <tr>
                    <td className="td_quest">Numer REGON</td>
                    <td className="td_input"><input type="text" className="form-control" name="name" required="" placeholder="Numer REGON" value="142742958" disabled></input></td>
                </tr>
                <tr>
                    <td className="td_quest">Numer KRS</td>
                    <td className="td_input"><input type="text" className="form-control" name="name" required="" placeholder="Numer KRS" value="" disabled></input></td>
                </tr>
                <tr>
                    <td className="td_quest">Numer telefonu</td>
                    <td className="td_input"><input type="text" className="form-control" name="name" required="" placeholder="Numer telefonu" value="" disabled></input></td>
                </tr>
                <tr>
                    <td className="td_quest">Adres strony internetowej lub strony w mediach społecznościowych</td>
                    <td className="td_input"><input type="text" className="form-control" name="name" required="" placeholder="Adres strony internetowej lub strony w mediach społecznościowych" value="" disabled></input></td>
                </tr>
                <tr>
                    <td className="td_quest">Data powstania / zarejestrowania</td>
                    <td className="td_input"><input type="datetime-local"  className="form-control" id="datetime-local" required aria-label="select example" value="2022-07-13 00:00:00" disabled></input></td>
                </tr>
            </tbody>
        </table>
        <table className="table">
            <thead className="table-light">
                <tr>
                    <th className="table-active" colspan="2" scope="col">Dane osoby kontaktowej (imię, nazwisko, telefon, e-mail)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="td_quest">Imię i Nazwisko</td>
                    <td className="td_input"><input type="text" className="form-control" name="name" required="" placeholder="Imię i Nazwisko" value="Anhelina Butenko" disabled></input></td>
                </tr>
                <tr>
                    <td className="td_quest">Telefon</td>
                    <td className="td_input"><input type="text" className="form-control" name="name" required="" placeholder="Telefon" value="" disabled></input></td>
                </tr>
                <tr>
                    <td className="td_quest">E-mail</td>
                    <td className="td_input"><input type="text" className="form-control" name="name" required="" placeholder="E-mail" value="" disabled></input></td>
                </tr>
                <tr>
                    <td className="td_quest">Numer rachunku rozliczeniowego prowadzonego w Polsce w polskiej walucie</td>
                    <td className="td_input"><input type="text" className="form-control" name="name" required="" placeholder="Numer rachunku rozliczeniowego prowadzonego w Polsce w polskiej walucie" value="" disabled></input></td>
                </tr>
            </tbody>
        </table>
        <table className="table">
            <thead className="table-light">
                <tr>
                    <th className="table-active" scope="col"></th>
                    <th className="table-active" scope="col">TAK</th>
                    <th className="table-active" scope="col">NIE</th>
                    <th className="table-active" scope="col">KOMENTARZ</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="td_quest">Czy Dostawca widnieje na Białej Liście i jest na niej zarejestrowany jako podatnik VAT czynny?</td>
                    <td className="td_radio_button">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" checked disabled></input>
                        </div>
                    </td>
                    <td className="td_radio_button">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault2" disabled></input>
                        </div>
                    </td>
                    <td className="td_input_with_radiobutton"><input type="text" className="form-control" name="name" required="" placeholder="Komentarz" disabled></input></td>
                </tr>
                <tr>
                    <td className="td_quest">Czy wskazane wyżej dane, uzyskane od Dostawcy są zgodne z jego danymi na Białej Liście?</td>
                    <td className="td_radio_button">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault3" checked disabled></input>
                        </div>
                    </td>
                    <td className="td_radio_button">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault4" disabled></input>
                        </div>
                    </td>
                    <td className="td_input_with_radiobutton"><input type="text" className="form-control" name="name" required="" placeholder="Komentarz" disabled></input></td>
                </tr>
                <tr>
                    <td className="td_quest">Czy Dostawca będzie obciążał Spółkę podatkiem VAT?</td>
                    <td className="td_radio_button">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault1" disabled></input>
                        </div>
                    </td>
                    <td className="td_radio_button">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault2" checked disabled></input>
                        </div>
                    </td>
                    <td className="td_input_with_radiobutton"><input type="text" className="form-control" name="name" required="" placeholder="Komentarz" disabled></input></td>
                </tr>
                <tr>
                    <td className="td_quest">Czy towary, które będzie dostarczał Dostawca, będą wysyłane z miejsca w Polsce?</td>
                    <td className="td_radio_button">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault1" disabled></input>
                        </div>
                    </td>
                    <td className="td_radio_button">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault2" checked disabled></input>
                        </div>
                    </td>
                    <td className="td_input_with_radiobutton"><input type="text" className="form-control" name="name" required="" placeholder="Komentarz" disabled></input></td>
                </tr>
                <tr>
                    <td className="td_quest">Czy Dostawca przedstawił kopię koncesji na obrót paliwami (o ile są one przedmiotem transakcji)?</td>
                    <td className="td_radio_button">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault1" checked disabled></input>
                        </div>
                    </td>
                    <td className="td_radio_button">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault2" disabled></input>
                        </div>
                    </td>
                    <td className="td_input_with_radiobutton"><input type="text" className="form-control" name="name" required="" placeholder="Komentarz" disabled></input></td>
                </tr>
                <tr>
                    <td className="td_quest">Czy umowa z Dostawcą zawiera zapis, że zapłata może nastąpić w MPP i może być wstrzymana do czasu, aż rachunek Dostawcy pojawi się na Białej Liście?</td>
                    <td className="td_radio_button">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault6" id="flexRadioDefault1" disabled></input>
                        </div>
                    </td>
                    <td className="td_radio_button">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault6" id="flexRadioDefault2" checked disabled></input>
                        </div>
                    </td>
                    <td className="td_input_with_radiobutton"><input type="text" className="form-control" name="name" required="" placeholder="Komentarz" disabled></input></td>
                </tr>
            </tbody>
        </table>
        <table className="table">
            <thead className="table-light">
                <tr>
                    <th className="table-active" scope="col"></th>
                    <th className="table-active" scope="col">POZYTYWNA</th>
                    <th className="table-active" scope="col">NEGATYWNA</th>
                    <th className="table-active" scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="td_quest">Ocena wiarygodności dostawcy</td>
                    <td className="td_radio_button">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault7" id="flexRadioDefault1"  disabled></input>
                        </div>
                    </td>
                    <td className="td_radio_button">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault7" id="flexRadioDefault2"  checked disabled></input>
                        </div>
                    </td>
                    <td className="td_input_with_radiobutton"></td>
                </tr>
            </tbody>
        </table>
        <table className="table">
            <thead className="table-light">
                <tr>
                    <th className="table-active" colspan="2" scope="col">Dane Osoby która zebrała informacje</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="td_quest">Imię i Nazwisko</td>
                    <td className="td_input"><input type="text" className="form-control" name="name" required="" placeholder="Imię i Nazwisko" value="Anhelina Butenko" disabled></input></td>
                </tr>
                <tr>
                    <td className="td_quest">Data uzyskania / weryfikacji danych</td>
                    <td className="td_input"><input type="datetime-local"  className="form-control" id="datetime-local"  required aria-label="select example" value="2022-07-13 00:00:00" disabled></input></td>
                </tr>
                <tr>
                    <td className="td_quest">Osoba zatwierdzająca</td>
                    <td className="td_input">
                        <div className="input-group mb-3">
                            <select className="form-select" id="inputGroupSelect01" required aria-label="select example" value="Wojciech Koperski" disabled>
                            <option value="">Osoba zatwierdzająca</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </select>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  );
}

export default Zgloszenie;