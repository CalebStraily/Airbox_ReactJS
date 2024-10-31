import React from "react";
import Watermark from "../media/watermarks.png";
import Logo from "../media/AirboxLogoTrimmed.png"
import GoogleIcon from "../media/googlePlusCircle.png";
import WifiIcon from "../media/wifiCircle.png";
import TwitterIcon from "../media/twitterCircle.png";
import FacebookIcon from "../media/facebookCircle.png";

function Footer()
{
    return(
        <div className="row">
            <Watermarks />
            <FooterLinks />
        </div>
    )

    function Watermarks()
    {
        return(
            <div className="row footerRow">
            <div className="col-12">
                <img className="img-fluid" src={Watermark} alt="" />
            </div>
            </div>
        )

    }

    function FooterLinks()
    {
        return(
            <div className="row footerLinks">
            <div className="col-6">
                <ul>
                    <li><img className="img-fluid" src={Logo} alt="" /></li>
                    <li>
                        <p>
                            AIR <b><span className="company-affix">BOX</span></b> <br />
                            <span className="hosting-provider-subtext">Hosting Provider</span>
                        </p>
                    </li>
                    <li><span className="copyright">© 2013 | PRIVACY POLICY</span></li>
                </ul>
            </div>
            <div className="col-6 links-column">
                <ul>
                    <li><img className="img-fluid" src={GoogleIcon} alt="" /></li>
                    <li><img className="img-fluid" src={WifiIcon} alt="" /></li>
                    <li><img className="img-fluid" src={TwitterIcon} alt="" /></li>
                    <li><img className="img-fluid" src={FacebookIcon} alt="" /></li>
                </ul>
            </div>
        </div>
        )
    }
}

export default Footer;