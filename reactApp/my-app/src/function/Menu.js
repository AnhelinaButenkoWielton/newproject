function Menu() {
    function handleSubmit(e) {
      e.preventDefault();
      console.log('Kliknięto na przycisk Wyślij.');
    }
  
    return (
      
      <form onSubmit={handleSubmit}>
        <ul>
          <li><a className="main_title" href="#">Weryfikacja<img src={logo} alt="Girl in a jacket" width="50" height="50"></img></a></li>
          <li><a className="first_title" href="#">Nawigacja</a></li>
          <li><a className="active" href="index.html">Sprawdż dostawcę</a></li>
          <li><a className="title" href="#">Weryfikacja</a></li>
          <li><a href="formalna.html">Formalna</a></li>
          <li><a href="transaction.html">Transakcyjna</a></li>
          <li><a className="title" href="#">Status akceptacji</a></li>
          <li><a href="w_akceptacji.html">W akceptacji</a></li>
          <li><a href="wszystkie.html">Wszystkie</a></li>
          <li><a className="title" href="#">Akceptacja</a></li>
          <li><a href="#">Do akceptacji</a></li>
          <li><a href="#">Zaakceptowano</a></li>
          <li><a className="title" href="#">Konto</a></li>
          <li><a href="moje_konto.html">Moje konto</a></li>
          <li><a href="#">Wyloguj się</a></li>
          <li><a className="title" href="#">Szybkie linki</a></li>
          <li><a href="#">Procedura</a></li>
          <li><a href="https://aplikacja.ceidg.gov.pl/CEIDG/CEIDG.Public.UI/Search.aspx" target="_blank" rel="noreferrer">Strona CEIDG</a></li>
          <li><a href="https://ekrs.ms.gov.pl/web/wyszukiwarka-krs/strona-glowna/index.html" target="_blank" rel="noreferrer">Strona KRS</a></li>
          <li><a href="https://www.podatki.gov.pl/wykaz-podatnikow-vat-wyszukiwarka" target="_blank" rel="noreferrer">Biala lista</a></li>
        </ul>
      </form>
    );
  }