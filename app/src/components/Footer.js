function Footer() {
    return (
        <div className="border border-dark">
            <div className="text-center p-4" id="hours">
                <div className="fw-bold">Happy Escape Eatery</div>
                <div>384 East Main St. Lexington, KY</div>
                <div>+1 (234) 567 - 8910</div>
                <div>Tuesday - Sunday 8AM - 9PM</div>
            </div>
                
            <div className="text-center p-4" style={{backgroundColor: "#A4DF56"}}>
                © 2023 Burgerrights:
                <p className="text-reset fw-bold" >HappyEscapeEatery.com</p>
            </div>

        </div>
    )
}

export default Footer;