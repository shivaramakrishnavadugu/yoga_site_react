import './section_six.css';

function SectionSix() { 
    return (
        <div className="section_six">
            <div className="description">
                <h1>Pricing</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc-<br />
                    ing elit. Vivamus lacinia odio vitae vestibulum ves-<br />
                    tibulum.</p>
            </div>
            <div className="cards">
                <div className="cards_content">
                    <h2>NEWBIE CLASS<br />
                        $00.00</h2>
                    <img src="./images/icon.png" alt="icon" />
                    <p>Lorem ipsum dolor sit amet,<br /> consectetur
                    adipiscing elit.</p>
                    <button>REGISTER NOW</button>
                </div>
                <div className="cards_content">
                <h2>ADVANCE CLASS<br />
                        $00.00</h2>
                    <img src="./images/icon.png" alt="icon" />
                    <p>Lorem ipsum dolor sit amet,<br /> consectetur
                    adipiscing elit.</p>
                    <button>REGISTER NOW</button>
                </div>
                <div className="cards_content">
                <h2>EXPERT CLASS<br />
                        $00.00</h2>
                    <img src="./images/icon.png" alt="icon" />
                    <p>Lorem ipsum dolor sit amet,<br /> consectetur
                    adipiscing elit.</p>
                    <button>REGISTER NOW</button>
                </div>
            </div>
        </div>
    )
}

export default SectionSix;