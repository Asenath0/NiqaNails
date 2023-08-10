import "./PriceList.css";

function PriceList() {
  return (
    <section id="price-list">
      <table>
        <caption>Cennik</caption>
        <tbody>
          <tr>
            <td>Hybryda</td>
            <td>80zł</td>
          </tr>
          <tr>
            <td>Przedłużanie na formie</td>
            <td>110zł</td>
          </tr>
          <tr>
            <td>Odnowa żelowa</td>
            <td>90zł</td>
          </tr>
          <tr>
            <td>Żel na naturalnej płytce</td>
            <td>110zł</td>
          </tr>
          <tr>
            <td>Ściąganie żelu / hybrydy (po innej stylistce)</td>
            <td>30zł</td>
          </tr>
          <tr>
            <td>French, Babyboomer, Ombre</td>
            <td>+ 10zł</td>
          </tr>
        </tbody>
      </table>
      <p className="description">Inne zdobienia wyceniane indywidualnie</p>
      <p>Zapisy pod numerem telefonu:</p>
      <a href="tel:+48530404648">
        <p> (+48) 530 404 648</p>
      </a>
    </section>
  );
}

export default PriceList;
