import { GetLatestReleaseTag, GetExamplesFileList } from './get_assets.js';

async function main() {
  const tag = await GetLatestReleaseTag();
  GetExamplesFileList(tag);
}

Promise.resolve(main());
