//import компонентов
import Menu from '../Common/Menu/menu';

let links = [
    {
        path: "/about_us",
        text: "About Us"
    },
    {
        path: "/",
        text: "Your Tasks"
    },
    {
        path: "/buy_vip",
        text: "Buy VIP"
    }
]

//function componet
const Footer = (props) => {
    return(
        <footer>
            <div className='container'>
                <Menu type='footerNavigation' links={links} class='footer_menu'/>
            </div>
        </footer>
    )
};

export default Footer;