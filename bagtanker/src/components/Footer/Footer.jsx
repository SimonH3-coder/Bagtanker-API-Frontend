import Bagtanker from '../../assets/Bagtanker.svg'


export function Footer() {
    return (
        <footer>
        <figure>
          <img src={Bagtanker} alt="Bagtanker" />  
        </figure>
        <section>
             <p>Øster Uttrupvej </p>
        <p>9000 Aalborg</p>
        <p>Tlf: 12345678 </p>
        <p>Info: info@bagtanker.dk</p>
</section>
        
        <section>
        <h3>Tilmeld dig Bagtankers nyhedsbrev</h3>
        <p>Få vores nyheder direkte i din indbakke</p>
        <form>
            <input type="email" placeholder='email' />
            <input type="submit" value="Tilmeld" />
        </form>
        </section>
        </footer>

    )
}