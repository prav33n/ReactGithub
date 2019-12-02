const baseURL =  'https://api.github.com';

const getData = async (path) => {
    const url = `${baseURL}${path}`;
    const header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    return fetch(url, header).then((response) => response.json());
};

export default {
    async getOrgInfo(companyName) {
        return await getData(`/orgs/${companyName}`);
    },
    async getOrgMembers(companyName) {
        return await getData(`/orgs/${companyName}/public_members`);
    },
    async getRepositories(companyName) {
        return await getData(`/orgs/${companyName}/repos`);
    },
    async getContributors(companyName, repo_name){
        return await getData(`/repos/${companyName}/${repo_name}/contributors`);
    } 
}