

import * as React from 'react';
import Api from '../api/Api';
import './Organization.css';


const getInfoCard = (number, text) => {
    return (
        <div className="infoCardContainer">
            <div className="number">{number}</div>
            <div className="text">{text}</div>
        </div>
    );
}
export const Organization =  (props) => {
    const [loading, setLoading ] = React.useState(false);
    const [ orgInfo, setOrgInfo] = React.useState({});
    const {companyName} = props;

    const getOrgInfo = async () => {
        setLoading(true);
        setOrgInfo(await Api.getOrgInfo(companyName));
        setLoading(false);
    };

    React.useEffect(() => {getOrgInfo();}, [companyName]);

    const { public_repos, followers, following, html_url  } = orgInfo;
    return(
        <>
            { loading && 'Loading Animation'}
            { !loading && !!orgInfo && 
                <div className="organizationContainer">
                    {getInfoCard(public_repos, 'Public Repositories')}
                    {getInfoCard(followers, 'Followers')}
                    {getInfoCard(following, 'Following')}
                    <a href={html_url} target="_blank" rel="noopener noreferrer">Github</a>
                </div>
            }
        </>
    );
};