import './houseprofile.css';

function HouseProfile(props) {
    return (
        <div className='house-container'>
            <div className='house-img-container'>
                <img src={props.houseImg} className='house-img'  alt='house-img' />
            </div>
        </div>
    );
};

export { HouseProfile };