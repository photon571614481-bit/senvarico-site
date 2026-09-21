#!/usr/bin/env bash
# Build the site and publish dist/ to the gh-pages branch (GitHub Pages, branch mode).
# Usage: pnpm run deploy
set -euo pipefail
cd "$(dirname "$0")/.."
REMOTE_URL="$(git remote get-url origin)"
pnpm build
pnpm check:site
TMP="$(mktemp -d)"
cp -R dist/. "$TMP"/
cd "$TMP"
git init -q -b gh-pages
git -c http.version=HTTP/1.1 remote add origin "$REMOTE_URL"
git add -A
git -c user.name="senvarico-deploy" -c user.email="deploy@senvarico.com" commit -q -m "Deploy site $(date -u +%Y-%m-%dT%H:%M:%SZ)"
git -c http.version=HTTP/1.1 push -f origin gh-pages
cd - >/dev/null
rm -rf "$TMP"
echo "Published to gh-pages."
