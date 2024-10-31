import React from "react";
import Services from "./Services";
import Subscriptions from "./Subscriptions";
import ProductCatalogue from "./ProductCatalogue";
import CogsImage from '../media/controlPanelCogWheel.png';
import GlobeImage from '../media/multiDomainWebGlobe.png';
import FTPImage from '../media/ftpServiceCloudUpArrow.png';
import SupportImage from '../media/directSupportPhoneIcon.png';

function Body()
{
    return(
        <div className="row">
            <div className="col-12">
                <div className="row">
                    <Services img={CogsImage} title="Control" titleSubtext="panel"/>
                    <Services img={GlobeImage} title="Multi-Domain" titleSubtext="Hosting"/>
                    <Services img={FTPImage} title="FTP" titleSubtext="Service"/>
                    <Services img={SupportImage} title="Direct" titleSubtext="Support"/>
                </div>
            </div>
            <div className="col-12">
                <div className="row">
                    <Subscriptions title="Mini Hosting" price="$10.99" diskSpace="4" bandwidth="20" accounts="100" platforms="PHP,ROR,MYSQL" />
                    <Subscriptions title="User Hosting" price="$12.99" diskSpace="8" bandwidth="40" accounts="100" platforms="PHP,ROR,MYSQL" />
                    <Subscriptions title="Pro Hosting" price="$16.99" diskSpace="10" bandwidth="60" accounts="100" platforms="PHP,ROR,MYSQL" />
                    <Subscriptions title="Maxi Hosting" price="$20.99" diskSpace="20" bandwidth="100" accounts="100" platforms="PHP,ROR,MYSQL" />
                </div>
            </div>
            <div className="col-12">
                <div className="row">
                    <ProductCatalogue title="Hosting Services" bulletOne="Shared Hosting" bulletTwo="Shared Cloud Hosting" bulletThree="Reseller Hosting" />
                    <ProductCatalogue title="Server Solutions" bulletOne="Dedicated Servers" bulletTwo="Dynamic Cloud Server" bulletThree="Virtual Servers" />
                    <ProductCatalogue title="Email Solutions" bulletOne="Instant Mail" bulletTwo="1&1 MailXchange" bulletThree="Microsoft Exchange" />
                    <ProductCatalogue title="More Products" bulletOne="ListLocal" bulletTwo="Microsoft Sharepoint" bulletThree="eShops" />                    
                </div>
            </div>
        </div>
    )
}

export default Body;