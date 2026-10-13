/** @type {import('next').NextConfig} */
const isGithubActions = !!process.env.GITHUB_ACTIONS;
let repoName = process.env.REPO_NAME || '';

if (isGithubActions && !repoName && process.env.GITHUB_REPOSITORY) {
  const parts = process.env.GITHUB_REPOSITORY.split('/');
  if (parts.length === 2 && !parts[1].endsWith('.github.io')) {
    repoName = parts[1];
  }
}

if (!repoName && isGithubActions) {
  repoName = 'AI-guide';
}

const basePath = isGithubActions && repoName ? `/${repoName}` : '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
