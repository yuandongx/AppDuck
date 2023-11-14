// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
    auth: 'YOUR-TOKEN'
})
const crate = async (url) => await octokit.request(url, {
    owner: 'OWNER',
    repo: 'REPO',
    tag_name: 'v1.0.0',
    target_commitish: 'devel',
    name: 'v1.0.0',
    body: 'Description of the release',
    draft: false,
    prerelease: false,
    generate_release_notes: false,
    headers: {
        'X-GitHub-Api-Version': '2022-11-28'
    }
})

const latest = async () => await octokit.request('GET /repos/{owner}/{repo}/releases/latest', {
    owner: 'OWNER',
    repo: 'REPO',
    headers: {
        'X-GitHub-Api-Version': '2022-11-28'
    }
})
const update = async