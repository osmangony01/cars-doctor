import person from '../../../../public/assets/images/about_us/person.jpg';
import parts from '../../../../public/assets/images/about_us/parts.jpg';

const AboutUs = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content grid grid-cols-2 px-0 pt-28 gap-12">
                <div className='relative'>
                    <img src={person} className="w-4/5 rounded-lg shadow-2xl" />
                    <img src={parts} className="absolute top-1/2 left-1/2 w-80 border-8 border-blue-50 rounded-lg shadow-2xl" />
                </div>
                <div>
                    <p className='text-orange-600 pb-4 font-bold'>About Us</p>
                    <h3 className="text-4xl font-bold">We are qualified & of experience in this field</h3>

                    <p className="py-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-4">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;