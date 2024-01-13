/**
 * Unit tests for src/wait.ts
 */

import { extract } from '../src/env';
import { expect } from '@jest/globals';

describe('env.ts', () => {
  it('Should extract env from text', async () => {
    const text = `
      ## haha

      something $23df &*s __

      +env:FOO=bar
      +env:BAR=baz
      +env:BAZ=foo
    `;

    const env = extract(text);
    expect(env).toMatchObject({
      FOO: 'bar',
      BAR: 'baz',
      BAZ: 'foo'
    });
  });
});
