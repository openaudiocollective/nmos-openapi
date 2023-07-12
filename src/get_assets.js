// Octokit.js
// https://github.com/octokit/request.js/

import { request } from '@octokit/request';

export async function GetLatestReleaseTag() {
  const release = await request('GET /repos/{owner}/{repo}/releases/latest', {
    owner: 'AMWA-TV',
    repo: 'is-04',
    headers: {
      authorization: 'token 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',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  const tagName = release.data.tag_name;
  console.log(`The latest release is tagged ${tagName}`);
  return tagName;
}

export async function GetExamplesFileList(ref) {
  const result = await request('GET /repos/{owner}/{repo}/contents/{path}', {
    owner: 'AMWA-TV',
    repo: 'is-04',
    path: 'examples/', // Replace this with the path to the file
    ref,
    headers: {
      authorization: 'token x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xx',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  // The content is in base64 format, so decode it
  const content = Buffer.from(result.data.content, 'base64').toString('utf-8');

  console.log(content);
}

export async function GetSchemasFileList(ref) {
  const result = await request('GET /repos/{owner}/{repo}/contents/{path}', {
    owner: 'AMWA-TV',
    repo: 'is-04',
    path: 'APIs/schemas/', // Replace this with the path to the file
    ref,
    headers: {
      authorization: 'token x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xx',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  // The content is in base64 format, so decode it
  const content = Buffer.from(result.data.content, 'base64').toString('utf-8');

  console.log(content);
}

export async function GetSpecsFileList(ref) {
  const result = await request('GET /repos/{owner}/{repo}/contents/{path}', {
    owner: 'AMWA-TV',
    repo: 'is-04',
    path: 'APIs', // Replace this with the path to the file
    ref,
    headers: {
      authorization: 'token x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xx',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  // The content is in base64 format, so decode it
  const content = Buffer.from(result.data.content, 'base64').toString('utf-8');

  console.log(content);
}
