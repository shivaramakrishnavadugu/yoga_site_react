import './section_one.css';

function SectionOne() {
    return (
        <div className="section_one">
                <div className="section_one_left_design">
                    <img src="./images/background1.png" alt="background1" />
                    <img src="./images/image1.png" alt="image1" />
                </div>
            <div className="section_one_right">
                <h1>YOGA CLASS</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipi-<br />
                    scing elit. Donec fringilla neque euismod volut-<br />pat cursus. Vestibulum ac pretium orci,</p>
                <span>JOIN NOW</span>
                <div className="side_image">
                    <img src="./images/background6.png" alt="sideimage" />
                </div>
            </div>
        </div>
    )
}

export default SectionOne;
