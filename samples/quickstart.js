// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

async function main() {
  // [START suggester_quickstart]
  const suggester = require('code-suggester');
  const {Octokit} = require('@octokit/rest');

  async function quickstart() {
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });

    const changes = new Map([
      [
        'baz.txt',
        {
          mode: '100644',
          content: 'hello world!',
        },
      ],
    ]);

    await suggester.createPullRequest(octokit, changes, {
      upstreamOwner: 'googleapis',
      upstreamRepo: 'code-suggester',
      title: 'An example of a PR',
      description: 'This change adds a new file, as an example.',
    });
  }
  quickstart();
  // [END suggester_quickstart]
}
main();
