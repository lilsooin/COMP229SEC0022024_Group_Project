import project1 from './assets/pet.png'
import project2 from './assets/dashcam.png'
import project3 from './assets/kiosk.png'


export default function Project() {
    return (
        <>
            <h1>My Projects</h1>
            <h2><p>Project: Pet community</p></h2>

            <img src={project1} width={200}></img>
            <br />
            <>Role: login and authentication, Community</>
            <h3>Application Description</h3>
            <ul>
                <li>This is a pet community and shopping mall service.</li>
                <li>The community allows members to create groups and communicate through posts and comments in a feed format similar to Instagram.</li>
                <li>Members can enjoy various events and benefits.</li>
                <li>The shopping mall is a place where pet supplies are sold, and users can purchase a wide range of products and leave product reviews and ratings.</li>
            </ul>
            <hr />

            <h2><p>Project: Dashcamp Project</p></h2>
            <img src={project2} width={200}></img>
            <br />
            <>Role: overall development</>
            <ul>
                <li>With the mobile app, you can view the current streaming video from the black box connected via hotspot, as well as play or download the stored videos.</li>
                <li>Use the app to modify the settings of the black box.</li>
            </ul>
            <hr />

            <h2><p>Project: Kiosk Project</p></h2>
            <img src={project3} width={200}></img>
            <br />
            <>Role:  Implementing RealTime DB, Cloud Storage integration, notification, and synchronization features.</>
            <ul>
                <li>This is a solution app that provides kiosk services to customers.</li>
                <li>Customers can store their desired images and content.</li>
                <li>Subscribed customers are provided with synchronization functionality, enabling them to retrieve stored images and content on other devices.</li>
            </ul>
        </>
    );
}
