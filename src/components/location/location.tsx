export default function Location() {
    return (
        <section className="w-full mt-20" aria-labelledby="map">
            <h2 className="sr-only" id="map">
                La localisation de afriAi Solutions
            </h2>

            <div className="w-full h-96">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.9223572288556!2d-17.478427709193493!3d14.721369893117503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f16!3m3!1m2!1s0xec172aeadb74d39%3A0x230af86d2cf852bb!2sSacre%20Coeur%203%20Extension%2C%20Dakar%2C%20Senegal!5e0!3m2!1sen!2sfr!4v1763583538146!5m2!1sen!2sfr"
                    width="100%"
                    height="450"
                    title="La localisation de afriAi Solutions"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </section>
    );
}
