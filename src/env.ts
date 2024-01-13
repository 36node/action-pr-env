/**
 * Extract env from text.
 *
 * @param text input string.
 * @returns {{[key:string]: string}} Resolves with a map of environment variables.
 */
export function extract(text = ''): { [key: string]: string } {
  const regex = new RegExp(/\+env:(.*)=(.*)/g);
  const env: { [key: string]: string } = {};
  let results: RegExpExecArray | null;

  while ((results = regex.exec(text)) !== null) {
    env[results[1]] = results[2];
  }

  return env;
}
