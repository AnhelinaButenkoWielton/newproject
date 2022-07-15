
import React from 'react' ;   

const Formalna = () =>{
  return (
    <div className="main_container">    
        <form className="row g-3 needs-validation" novalidate>
            <table className="table">
                <thead className="table-light">
                    <tr>
                        <th className="table-active" colspan="2" scope="col">Weryfikacja / ponowna weryfikacja Dostawcy</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="td_quest">Nazwa lub imię i nazwisko</td>
                        <td className="td_input"><input type="text" className="form-control" name="name" required="" placeholder="Nazwa lub imię i nazwisko"></input></td>
                    </tr>
                    <tr>
                        <td className="td_quest">Adres siedziby lub miejsca prowadzenia działalności</td>
                        <td className="td_input"><input type="text" className="form-control" name="name" required="" placeholder="Adres siedziby lub miejsca prowadzenia działalności"></input></td>
                    </tr>
                    <tr>
                        <td className="td_quest">Numer identyfikacji podatkowej (NIP)</td>
                        <td className="td_input"><input type="text" className="form-control" name="name" required="" placeholder="Numer identyfikacji podatkowej (NIP)"></input></td>
                    </tr>
                    <tr>
                        <td className="td_quest">Numer REGON</td>
                        <td className="td_input"><input type="text" className="form-control" name="name" required="" placeholder="Numer REGON"></input></td>
                    </tr>
                    <tr>
                        <td className="td_quest">Numer KRS</td>
                        <td className="td_input"><input type="text" className="form-control" name="name" required="" placeholder="Numer KRS"></input></td>
                    </tr>
                    <tr>
                        <td className="td_quest">Numer telefonu</td>
                        <td className="td_input"><input type="text" className="form-control" name="name" required="" placeholder="Numer telefonu"></input></td>
                    </tr>
                    <tr>
                        <td className="td_quest">Adres strony internetowej lub strony w mediach społecznościowych</td>
                        <td className="td_input"><input type="text" className="form-control" name="name" required="" placeholder="Adres strony internetowej lub strony w mediach społecznościowych"></input></td>
                    </tr>
                    <tr>
                        <td className="td_quest">Data powstania / zarejestrowania</td>
                        <td className="td_input"><input type="datetime-local"  className="form-control" id="datetime-local" required aria-label="select example"></input></td>
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
                        <td className="td_input"><input type="text" className="form-control" name="name" required="" placeholder="Imię i Nazwisko"></input></td>
                    </tr>
                    <tr>
                        <td className="td_quest">Telefon</td>
                        <td className="td_input"><input type="text" className="form-control" name="name" required="" placeholder="Telefon"></input></td>
                    </tr>
                    <tr>
                        <td className="td_quest">E-mail</td>
                        <td className="td_input"><input type="text" className="form-control" name="name" required="" placeholder="E-mail"></input></td>
                    </tr>
                    <tr>
                        <td className="td_quest">Numer rachunku rozliczeniowego prowadzonego w Polsce w polskiej walucie</td>
                        <td className="td_input"><input type="text" className="form-control" name="name" required="" placeholder="Numer rachunku rozliczeniowego prowadzonego w Polsce w polskiej walucie"></input></td>
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
                                <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" required></input>
                            </div>
                        </td>
                        <td className="td_radio_button">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault2" required></input>
                            </div>
                        </td>
                        <td className="td_input_with_radiobutton"><input type="text" className="form-control" name="name" required="" placeholder="Komentarz"></input></td>
                    </tr>
                    <tr>
                        <td className="td_quest">Czy wskazane wyżej dane, uzyskane od Dostawcy są zgodne z jego danymi na Białej Liście?</td>
                        <td className="td_radio_button">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault3" required></input>
                            </div>
                        </td>
                        <td className="td_radio_button">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault4" required></input>
                            </div>
                        </td>
                        <td className="td_input_with_radiobutton"><input type="text" className="form-control" name="name" required="" placeholder="Komentarz"></input></td>
                    </tr>
                    <tr>
                        <td className="td_quest">Czy Dostawca będzie obciążał Spółkę podatkiem VAT?</td>
                        <td className="td_radio_button">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault1" required></input>
                            </div>
                        </td>
                        <td className="td_radio_button">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault2" required></input>
                            </div>
                        </td>
                        <td className="td_input_with_radiobutton"><input type="text" className="form-control" name="name" required="" placeholder="Komentarz"></input></td>
                    </tr>
                    <tr>
                        <td className="td_quest">Czy towary, które będzie dostarczał Dostawca, będą wysyłane z miejsca w Polsce?</td>
                        <td className="td_radio_button">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault1" required></input>
                            </div>
                        </td>
                        <td className="td_radio_button">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault2" required></input>
                            </div>
                        </td>
                        <td className="td_input_with_radiobutton"><input type="text" className="form-control" name="name" required="" placeholder="Komentarz"></input></td>
                    </tr>
                    <tr>
                        <td className="td_quest">Czy Dostawca przedstawił kopię koncesji na obrót paliwami (o ile są one przedmiotem transakcji)?</td>
                        <td className="td_radio_button">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault1" required></input>
                            </div>
                        </td>
                        <td className="td_radio_button">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault2" required></input>
                            </div>
                        </td>
                        <td className="td_input_with_radiobutton"><input type="text" className="form-control" name="name" required="" placeholder="Komentarz"></input></td>
                    </tr>
                    <tr>
                        <td className="td_quest">Czy umowa z Dostawcą zawiera zapis, że zapłata może nastąpić w MPP i może być wstrzymana do czasu, aż rachunek Dostawcy pojawi się na Białej Liście?</td>
                        <td className="td_radio_button">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault6" id="flexRadioDefault1" required></input>
                            </div>
                        </td>
                        <td className="td_radio_button">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault6" id="flexRadioDefault2" required></input>
                            </div>
                        </td>
                        <td className="td_input_with_radiobutton"><input type="text" className="form-control" name="name" required="" placeholder="Komentarz"></input></td>
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
                                <input className="form-check-input" type="radio" name="flexRadioDefault7" id="flexRadioDefault1"  required></input>
                            </div>
                        </td>
                        <td className="td_radio_button">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault7" id="flexRadioDefault2"  required></input>
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
                        <td className="td_input"><input type="text" className="form-control" name="name" required="" placeholder="Imię i Nazwisko"></input></td>
                    </tr>
                    <tr>
                        <td className="td_quest">Data uzyskania / weryfikacji danych</td>
                        <td className="td_input"><input type="datetime-local"  className="form-control" id="datetime-local"  required aria-label="select example"></input></td>
                    </tr>
                    <tr>
                        <td className="td_quest">Osoba zatwierdzająca</td>
                        <td className="td_input">
                            <div className="input-group mb-3">
                                <select className="form-select" id="inputGroupSelect01" required aria-label="select example">
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
            <div className="mt-4 mb-4 d-flex justify-content-center">
                <button type="submit" className="button_to_sending">Wyszlij do werefikacji</button>
            </div>
        </form>
    </div>
  );
}

export default Formalna;