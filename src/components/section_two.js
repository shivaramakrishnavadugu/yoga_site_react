import './section_two.css';

function SectionTwo() { 
    return (
        <div className="section_two">
            <div className="section_two_description">
                <h1>CHOOSE CLASS</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc-<br />
                    ing elit. Vivamus lacinia odio vitae vestibulum ves-<br />
                    tibulum. </p>
            </div>
            <div className="section_two_images">
                <div className="image_content">
                    <img src="./images/background2.png" alt="background2" />
                    <img src="./images/image2.png" alt="image2" />
                    <div className="image_description">
                        <h2>NEWBIE CLASS</h2>
                        <p>Lorem ipsum dolor sit amet,<br />
                            consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="image_content">
                    <img src="./images/background2.png" alt="background2" />
                    <img src="./images/image3.png" alt="image3" />
                    <div className="image_description">
                        <h2>ADVANCED CLASS</h2>
                        <p>Lorem ipsum dolor sit amet,<br />
                            consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="image_content">
                    <img src="./images/background2.png" alt="background2" />
                    <img src="./images/image4.png" alt="image4" />
                    <div className="image_description">
                        <h2>EXPERT CLASS</h2>
                        <p>Lorem ipsum dolor sit amet,<br />
                            consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo;