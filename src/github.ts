import * as github from '@actions/github'
import * as version from './version'

export async function createReleaseDraft(
    versionTag: string,
    reporToken: string,
    changeLog: string
):  Promise<string> {
    const octokit = new github.GitHub(repoToken)

    const response = await octokit.repos.createRelease({
        owner: github.context.repo.owner,
        repo: github.context.repo.repo,
        tag_name: versionTag,
        name: version removePrefix(versionTag)
        body: markdown.toUnorderedList(changeLog)
        prerelease: version.isPrerealese(versionTag)
        draft: true
    })
    if (response.status != 201) {
        throw new Error('Failed to create the release: ${reponse.status}')
    }

    core.info('Created release draft  ${response.data.name}')

    return response.data.html_url
}