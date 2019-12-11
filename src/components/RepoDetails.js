

import * as React from 'react';
import Api from '../api/Api';
import {useSelector} from 'react-redux';
import {ContributerCard} from './ContributerCard';
  
export const RepoDetails =  (props) => {
    const [ loading, setLoading ] = React.useState(false);
    const [ repoContributers, setRepoContributers ] = React.useState(null);
    const repoName = useSelector((state) => state.app.selectedRepo);
    const {companyName} = props;
    
    const getRepoInfo = async () => {
        if(repoName) {
            setLoading(true);
            setRepoContributers(await Api.getContributors(companyName , repoName));
            setLoading(false);
        }
    };

    React.useEffect(() => {getRepoInfo();}, [repoName]);

    return(
        <div className={"repoDetailsContainer"}>
            { !repoName && "Select a Repository  to see contributors List"}
            { loading &&  "Loading"}
            { !loading && !!repoContributers && 
                <>
                    <div className="repoTitle">{`Selected Repo : ${repoName}`}</div>
                    {repoContributers.map(contributer => {
                        const { avatar_url, contributions, login } = contributer;
                            return (
                                <ContributerCard
                                    avatar={avatar_url}
                                    contributions={contributions}
                                    login={login}
                                />
                            ) 
                        }   
                    )}
                </>
            }
        </div>
    );
};