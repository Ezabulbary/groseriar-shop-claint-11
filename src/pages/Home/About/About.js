import React from 'react';
import AboutImg from '../../../images/about/about.png';

const About = () => {
    return (
        <div className='container text-center my-5'>
            <div className='d-flex align-items-center justify-content-center'>
                <div>
                    <h2>About Us</h2>
                    <p className='p-2'> dignissimos velit eaque nisi! Obcaecati ullam porro dolor itaque quas earum pariatur esse vitae quo laborum repellat ut non nostrum nihil, omnis ex ad iusto expedita eaque quidem numquam. Quo voluptates ipsam, repellat porro maxime laboriosam excepturi sint expedita nobis impedit repellendus culpa animi atque iure sunt consequatur esse iusto quibusdam? Qui modi blanditiis provident ab eum dolores, iste delectus fugit accusamus autem, sunt, id quia totam? Libero aliquid nisi similique voluptatum modi ab obcaecati reprehenderit, laudante, aperiam dignissimos aliquid, optio blanditiis rem et ipsam ut, facilis temporibus repudiandae hic consectetur rerum molestiae quaerat. Exercitationem optio, facilis non harum nulla quam iusto porro architecto nam, pariatur debitis assumenda corrupti magni! Quia perspiciatis vel voluptatibus aperiam sapiente mollitia facere dolorum deserunt rem eveniet alias doloremque, fuga magni molestiae minima quos nisi! Dolo</p>
                </div>
                <div>
                    <img className='rounded' src={AboutImg} alt="aboutImage" />
                </div>
            </div>
        </div>
    );
};

export default About;