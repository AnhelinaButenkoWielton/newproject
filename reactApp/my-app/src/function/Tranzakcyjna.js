import React from 'react' ;   

const Transakcyjna = () =>{
    return (
        <div className="main_container">    
            <form className="row g-3 needs-validation" novalidate>
                <h2>Weryfikacja na etapie rozpoczęcia współpracy / kontynuacji współpracy</h2>
                <p>Wybierz dostawcę</p>
                <div className="input-group p-0 m-1">
                    <select className="form-select" id="inputGroupSelect01" required aria-label="select example">
                    <option value="">Wybierz dostawcę</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </select>
                </div>
                <p>Podaj numer zapotrzebowania</p>
                <input type="text" className="form-control m-1" name="name" required="" placeholder="Podaj numer zapotrzebowania"></input>

                <table className="table">
                    <thead className="table-light">
                        <tr>
                            <th className="table-active" scope="col">I. Weryfikacja podstawowa</th>
                            <th className="table-active" scope="col">TAK</th>
                            <th className="table-active" scope="col">NIE</th>
                            <th className="table-active" scope="col">N/D</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="td_quest">Czy Dostawca przechodził wcześniej weryfikację i został uznany za potencjalnie nierzetelnego?</td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="td_quest">Czy transakcja ma być przeprowadzona bez ryzyka gospodarczego, które normalnie charakteryzuje tego rodzaju transakcję?</td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault1" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="td_quest">Czy transakcja została sztucznie podzielona na kilka mniejszych lub jej wartość została obniżona po to, aby zapłaty można było dokonać gotówką lub na rachunek nie figurujący na Białej Liście lub bez zastosowania MPP?</td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault1" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="td_quest">Czy zapłata za towar/usługę ma być dokonana na dwa odrębne rachunki bankowe, rachunek podmiotu trzeciego lub rachunek zagraniczny bez uzasadnienia ekonomicznego?</td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault1" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="td_quest">Czy cena oferowanego przez Dostawcę towaru/usługi lub termin płatności znacząco odbiegają od warunków rynkowych bez ekonomicznego uzasadnienia?</td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault1" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="td_quest">Czy warunki transakcji odbiegają od tych, które w danej branży są uznawane za gwarantujące bezpieczeństwo obrotu?</td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault6" id="flexRadioDefault1" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault6" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault6" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="td_quest">Czy towary/usługi oferowane przez Dostawcę nie należą do branży w której działa i Dostawca ten nigdy wcześniej Spółce nie oferował takich towarów/usług a zmiana profilu działalności Dostawcy odbywa się bez uzasadnienia ekonomicznego?</td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault7" id="flexRadioDefault1" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault7" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault7" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="td_quest">Czy kontakt z Dostawcą nie był odpowiedni dla okoliczności danej transakcji?</td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault8" id="flexRadioDefault1" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault8" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault8" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="td_quest">Czy w siedzibie lub miejscu prowadzenia działalności Dostawcy brak jest oznak prowadzenia tej działalności lub miejsce to jest nieadekwatne do rodzaju i skali prowadzonej działalności albo nie posiada odpowiedniego zaplecza organizacyjno-technicznego?</td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault9" id="flexRadioDefault1" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault9" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault9" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="td_quest">Czy towary, które ma dostarczać Dostawca nie spełniają wymagań jakościowych określonych przez prawo?</td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault10" id="flexRadioDefault1" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault10" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault10" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="td_quest">Czy transakcja nie jest potwierdzona umową, zamówieniem lub innym potwierdzeniem warunków transakcji?</td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault11" id="flexRadioDefault1" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault11" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault11" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="td_quest">Czy Dostawca widnieje na Białej Liście i jest na niej zarejestrowany jako podatnik VAT czynny?</td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault12" id="flexRadioDefault1" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault12" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault12" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="td_quest">Czy Dostawca jest spółką z niskim kapitałem zakładowym, niewspółmiernym do skali proponowanej transakcji?</td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault13" id="flexRadioDefault1" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault13" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault13" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="table">
                    <thead className="table-light">
                        <tr>
                            <th className="table-active" scope="col">II. Weryfikacja umocowania</th>
                            <th className="table-active" scope="col">TAK</th>
                            <th className="table-active" scope="col">NIE</th>
                            <th className="table-active" scope="col">N/D</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="td_quest">Czy nie udało się zweryfikować upoważnienia osoby zawierającej umowę w imieniu Dostawcy do reprezentowania go?</td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault14" id="flexRadioDefault1" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault14" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault14" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="table">
                    <thead className="table-light">
                        <tr>
                            <th className="table-active" scope="col">III. Weryfikacja w urzędzie skarbowym</th>
                            <th className="table-active" scope="col">TAK</th>
                            <th className="table-active" scope="col">NIE</th>
                            <th className="table-active" scope="col">N/D</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="td_quest">Czy zaświadczenia uzyskane od urzędu skarbowego właściwego dla Dostawcy wskazują, że Dostawca nie składa deklaracji podatkowych, nie ujmuje w nich wymaganych zdarzeń lub zalega z podatkami (jeśli Spółka wystąpiła o takie zaświadczenia?</td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault15" id="flexRadioDefault1" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault15" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault15" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="table">
                    <thead className="table-light">
                        <tr>
                            <th className="table-active" scope="col">IV. Weryfikacja z udziałem Kontrahenta</th>
                            <th className="table-active" scope="col">TAK</th>
                            <th className="table-active" scope="col">NIE</th>
                            <th className="table-active" scope="col">N/D</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="td_quest">Czy nie udało się uzyskać od Dostawcy dokumentów finansowych takich jak np. sprawozdanie finansowe czy bilans lub dokumenty te nie wskazują, aby Dostawca prowadził działalność gospodarczą (o ile Dostawca został o to poproszony)?</td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault16" id="flexRadioDefault1" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault16" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault16" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="td_quest">Czy nie udało się uzyskać od Dostawcy innych dokumentów wskazujących na faktyczne prowadzenie przez niego działalności gospodarczej lub dokumenty te nie wskazują na prowadzenie takiej działalności (o ile Dostawca został o to poproszony)?</td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault17" id="flexRadioDefault1" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault17" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault17" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="td_quest">Czy nie udało się dodzwonić na numer ogólny siedziby Dostawcy (o ile Spółka podjęła próbę przeprowadzenia połączenia)?</td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault18" id="flexRadioDefault1" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault18" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault18" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
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
                            <td className="td_quest">Wynik weryfikacji transakcyjnej</td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault19" id="flexRadioDefault1" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button_for_transaction">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault19" id="flexRadioDefault2" required></input>
                                </div>
                            </td>
                            <td className="td_radio_button"></td>
                        </tr>
                    </tbody>
                </table>
                <table className="table">
                    <thead className="table-light">
                        <tr>
                            <th className="table-active heder_of_table" colspan="2" scope="col">Dane Osoby która zebrała informacje</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="td_quest">Imię i Nazwisko</td>
                            <td className="td_input"><input type="text" className="form-control" name="name" required="" placeholder="Imię i Nazwisko"></input></td>
                        </tr>
                        <tr>
                            <td className="td_quest">Data uzyskania / weryfikacji danych</td>
                            <td className="td_input"><input type="datetime-local"  className="form-control" id="datetime-local" required aria-label="select example"></input></td>
                        </tr>
                    </tbody>
                </table>
                <div className="mt-4 mb-4 d-flex justify-content-center" onSubmit={Check}>
                    <button type="submit" className="button_to_sending">Wyszlij do werefikacji</button>
                </div>
            </form>
        </div>
    );
}

function Check() {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
        })
    }

export default Transakcyjna;