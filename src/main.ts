import * as core from '@actions/core'
import * as event from './event'
import * as version from './version'
import * as git from './git'
// import {wait} from './wait'

export async function run(): Promise<void> {
  try {
    const token = core.getInput('repo-token')

    const tag = event.getCreatedTag()

    if (tag && version.isSemVer(tag)) {
      const changelog = await globalThis.getChangesIntroducedByTag(tag)

      releaseUrl = await github.createReleaseDraft(tag, token, changelog)
      
    }

    core.setOutput('release_url', 'https://example.com')
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
