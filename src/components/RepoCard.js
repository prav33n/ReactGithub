

import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSelectedRepo } from '../store/app/actions';
import './RepoCard.css';

const RepoCard =  (props) => {
    const { name, url, language, dispatch }  = props;

    return(
        <li className={"reportCardContainer"} onClick={() => { dispatch(setSelectedRepo(name));}}>
            <div className={"reportCardName"}>{name}</div>
            <div className={"reportCardLanguage"}>{language}</div>
            <a className={"reportCardLink"} href={url} target="_blank" rel="noopener noreferrer">Repo Url</a>
        </li>
    );
};

RepoCard.prototype = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired
};

export default connect()(RepoCard);
