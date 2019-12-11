

import * as React from 'react';
import PropTypes from 'prop-types';
import RepoCard from './RepoCard';
import Api from '../api/Api';
import './Repositories.css';

export const Repositories =  (props) => {
    const [loading, setLoading ] = React.useState(false);
    const [ repositories, setRepositories ] = React.useState([]);
    const { companyName } = props;

    const getRepositories = async () => {
        setLoading(true);
        setRepositories(await Api.getRepositories(companyName));
        setLoading(false);
    };

    React.useEffect(() => {getRepositories();}, [companyName]);
    return(
        <>
            { loading && 'Loading Animation'}
            { !loading && !!repositories &&
                <div className="repositoryContainer">
                    <div className={"repoTileContainer"}>
                        <div className={"repoHeader"}>Name</div>
                        <div className={"repoHeader"}>Language</div>
                        <div className={"repoHeader"}>URL</div>
                    </div>
                    <div className={"repoContentContainer"}>
                    { repositories.map((repository, index) => {
                        const { name, html_url, language, decription } = repository;
                        return <RepoCard name = {name} language={language} url={html_url} decription={decription} key={index} companyName={companyName}/>
                        }
                    )}
                    </div>
                </div>
            }
        </>
    );
};

Repositories.prototype = {
    onSelectionChange: PropTypes.func
}