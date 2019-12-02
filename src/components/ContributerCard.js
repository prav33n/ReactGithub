

import * as React from 'react';
import PropTypes from 'prop-types';
import './ContributerCard.css';

export const ContributerCard =  (props) => {
    const { avatar, contributions, login }  = props;
    
    return(
        <div className={"contributerCard"}>
            <img className={"contributerImage"} src={`${avatar}&size=100`} alt="avatar"/>
            <div className={"contributerInfo"}>
                <div className={"contributerInfoText"}>{login}</div>
                <div className={"contributerInfoText"}>{`Contributions: ${contributions}`}</div>
            </div>
        </div>
    );
};

ContributerCard.prototype = {
    avatar: PropTypes.string,
    contributions: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired
};
