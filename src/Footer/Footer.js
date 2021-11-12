import { ImFacebook2, ImInstagram } from 'react-icons/im'
import { SiAirbnb } from 'react-icons/si'

export default function Footer() {

    return(
        <footer className="lurayfooter">
            <div className="socialicons">
                <a className="socials" href="https://www.facebook.com/luraybeachretreat" rel="noreferrer" target="_blank"> 
                    <ImFacebook2 size={22}/>
                </a>
                <a className="socials"  href="https://www.instagram.com/luray_beachretreat/?hl=en" rel="noreferrer" target="_blank"> 
                    <ImInstagram size={22} style={{ textDecoration: "none"}}/>
                </a>
                <a className="socials"  href="https://www.airbnb.com.au/rooms/48058326" rel="noreferrer" target="_blank"> 
                    <SiAirbnb size={22} style={{ textDecoration: "none"}}/>
                </a>
                
            </div>
            <div className="copyright">
                <p>&copy; Luray Beach Retreat 2021</p>
            </div>
            
        </footer>
    )
}