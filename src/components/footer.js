import './footer.css';

function Footer() { 
    return (
        <div className="footer">
            <div class="footer_left">
                <h2>Title Here</h2>
                <p>Lorem ipsum dolor sit amet, consectetur-<br />
                    adipiscing elit. Aliquam at dignissim nunc, id-<br />
                    maximus ex. Etiam nec dignissim elit, at-<br />dignissim enim. </p>
            </div>
            <div className="footer_right">
                <div className="about_content">
                    <h2>About</h2>
                    <ul>
                        <li><a href="nolinkadded">History</a></li>
                        <li><a href="nolinkadded">Our Team</a></li>
                        <li><a href="nolinkadded">Brand Guidelines</a></li>
                        <li><a href="nolinkadded">Terms & Condition</a></li>
                        <li><a href="nolinkadded">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="about_content">
                    <h2>Services</h2>
                    <ul>
                        <li><a href="nolinkadded">How to Order</a></li>
                        <li><a href="nolinkadded">Our Product</a></li>
                        <li><a href="nolinkadded">Order Status</a></li>
                        <li><a href="nolinkadded">Promo</a></li>
                        <li><a href="nolinkadded">Payment Method</a></li>
                    </ul>
                </div>
                <div className="about_content">
                    <h2>Follow</h2>
                    <ul>
                        <li><a href="nolinkadded"><i className="fa fa-facebook"></i>Facebook</a></li>
                        <li><a href="nolinkadded"><i className="fa fa-twitter"></i>Twitter</a></li>
                        <li><a href="nolinkadded"><i className="fa fa-instagram"></i>Instagram</a></li>
                        <li><a href="nolinkadded"><i className="fa fa-whatsapp"></i>Whatsapp</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;