import React from 'react';
import '../Styles/Billboard.css';
import { Link } from 'react-router-dom';

function Billboard() {
    return (
        <div className="billboard-container" id='billboard'>
            {/* Billboard Items */}
            <div className="billboard-item">
                <img src="./Event_images/Oppam.jpg" alt="Image 1" />
                <h2>Image 1 Title</h2>
                <p>Sed natus officia quo quas rerum est dolorem ipsum aut reprehenderit autem? At voluptatem aliquam eis qui dolores temporibus qui illum ullam et consectetur laudantium aut dolor quaerat. Ex voluptatem labore sit commodi accusamus rem adipisci architecto sit reprehenderit voluptas vel nobis modi qui aspernatur dolore et quos expedita.</p>
                <Link to="/oppam" className="button">
                    Check it out!
                </Link>
            </div>

            <div className="billboard-item">
                <img src="./Event_images/Oppam.jpg" alt="Image 1" />
                <h2>Image 1 Title</h2>
                <p>Sed natus officia quo quas rerum est dolorem ipsum aut reprehenderit autem? At voluptatem aliquam eis qui dolores temporibus qui illum ullam et consectetur laudantium aut dolor quaerat. Ex voluptatem labore sit commodi accusamus rem adipisci architecto sit reprehenderit voluptas vel nobis modi qui aspernatur dolore et quos expedita.</p>
                <Link to="/oppam" className="button">
                    Check it out!
                </Link>
            </div>

            <div className="billboard-item">
                <img src="./Event_images/Oppam.jpg" alt="Image 1" />
                <h2>Image 1 Title</h2>
                <p>Sed natus officia quo quas rerum est dolorem ipsum aut reprehenderit autem? At voluptatem aliquam eis qui dolores temporibus qui illum ullam et consectetur laudantium aut dolor quaerat. Ex voluptatem labore sit commodi accusamus rem adipisci architecto sit reprehenderit voluptas vel nobis modi qui aspernatur dolore et quos expedita.</p>
                <Link to="/oppam" className="button">
                    Check it out!
                </Link>
            </div>
            <div className="billboard-item">
                <img src="./Event_images/Oppam.jpg" alt="Image 1" />
                <h2>Image 1 Title</h2>
                <p>Sed natus officia quo quas rerum est dolorem ipsum aut reprehenderit autem? At voluptatem aliquam eis qui dolores temporibus qui illum ullam et consectetur laudantium aut dolor quaerat. Ex voluptatem labore sit commodi accusamus rem adipisci architecto sit reprehenderit voluptas vel nobis modi qui aspernatur dolore et quos expedita.</p>
                <Link to="/oppam" className="button">
                    Check it out!
                </Link>
            </div>

            <div className="billboard-item">
                <img src="./Event_images/Oppam.jpg" alt="Image 1" />
                <h2>Image 1 Title</h2>
                <p>Sed natus officia quo quas rerum est dolorem ipsum aut reprehenderit autem? At voluptatem aliquam eis qui dolores temporibus qui illum ullam et consectetur laudantium aut dolor quaerat. Ex voluptatem labore sit commodi accusamus rem adipisci architecto sit reprehenderit voluptas vel nobis modi qui aspernatur dolore et quos expedita.</p>
                <Link to="/oppam" className="button">
                    Check it out!
                </Link>
            </div>

            <div className="billboard-item">
                <img src="./Event_images/Oppam.jpg" alt="Image 1" />
                <h2>Image 1 Title</h2>
                <p>Sed natus officia quo quas rerum est dolorem ipsum aut reprehenderit autem? At voluptatem aliquam eis qui dolores temporibus qui illum ullam et consectetur laudantium aut dolor quaerat. Ex voluptatem labore sit commodi accusamus rem adipisci architecto sit reprehenderit voluptas vel nobis modi qui aspernatur dolore et quos expedita.</p>
                <Link to="/oppam" className="button">
                    Check it out!
                </Link>
            </div>
        
            
            {/* End Billboard Items */}
        </div>
        

        
    );
}

export default Billboard;