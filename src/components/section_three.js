import './section_three.css';

function SectionThree() { 
    return (
        <div className="section_three">
            <div className="three_description">
                <h1>OUR STATS</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc-<br />
                    ing elit. Vivamus lacinia odio vitae vestibulum ves-<br />
                    tibulum.</p>
            </div>
            <div className="three_rounds">
                <div className="round_content">
                    <p className="numbers">
                        123
                    </p>
                    <p className="text">Lorem ipsum<br />dolor sit amet</p>
                </div>
                <div className="round_content">
                    <p className="numbers">
                        123
                    </p>
                    <p className="text">Lorem ipsum<br />dolor sit amet</p>
                </div>
                <div className="round_content">
                    <p className="numbers">
                        123
                    </p>
                    <p className="text">Lorem ipsum<br />dolor sit amet</p>
                </div>
            </div>
            <div className="three_side_image">
                <img src="./images/background7.png" alt="background7" />
            </div>
        </div>
    )
}

export default SectionThree;