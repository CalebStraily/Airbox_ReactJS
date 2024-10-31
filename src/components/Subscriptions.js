import React from "react";

function Subscriptions(props)
{
    return(
        <div className="col-3 subscriptionsList text-center">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <div className="row top-chat-bubble">
                        <div className="col-12">
                            <span className="service-title">{props.title}</span>
                        </div>
                    </div>
                <div className="row bottom-chat-bubble">
                    <div className="col-12">
                        {props.price} <span className="perMonth">/MO.</span>
                    </div>
                </div>
                <div className="row features-table text-center">
                    <table>
                        <tbody>
                            <tr>
                                <th>
                                    {props.diskSpace} GB DISK SPACE
                                    <div className="down-triangle">
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th>{props.bandwidth} GB BANDWIDTH</th>
                            </tr>
                            <tr>
                                <th>{props.accounts} EMAIL ACCOUNTS</th>
                            </tr>
                            <tr>
                                <th>{props.platforms}</th>
                            </tr>
                            <tr>
                                <th><button>Sign Up</button></th>
                            </tr>
                        </tbody>
                    </table>
                </div>                        
                    </div>
                <div className="col-2"></div>
            </div>

        </div>
    )
}

export default Subscriptions;