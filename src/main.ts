import * as core from '@actions/core';
import { extract } from './env';

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const text: string = core.getInput('text');
    const env = extract(text);

    // Debug logs are only output if the `ACTIONS_STEP_DEBUG` secret is true
    const output = JSON.stringify(env, null, 2);
    core.debug(`env ${output}`);

    // Set outputs for other workflow steps to use
    core.setOutput('env', output);

    // write to $GITHUB_ENV
    for (const [key, value] of Object.entries(env)) {
      core.exportVariable(key, value);
    }
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message);
  }
}
