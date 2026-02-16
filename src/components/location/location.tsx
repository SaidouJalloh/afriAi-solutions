export default function Location() {
    return (
        <section className="w-full mt-20" aria-labelledby="map">
            <h2 className="sr-only" id="map">
                La localisation de afriAi Solutions
            </h2>

            <div className="w-full h-96">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3857.7105111707515!2d-17.365283924890264!3d14.78532898572319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDQ3JzA3LjIiTiAxN8KwMjEnNDUuOCJX!5e0!3m2!1sen!2sfr!4v1771258971065!5m2!1sen!2sfr"
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
