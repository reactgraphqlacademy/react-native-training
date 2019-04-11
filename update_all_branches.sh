#!/bin/bash
BRANCHES=(
animations
animations-leanjs
foundation
foundation-fetchmore
master
navigation
navigation-leanjs
navigation-leanjs-1
navigation-leanjs-2
navigation-leanjs-3
navigation-leanjs-4
solution
)
ORIGINALBRANCH=`git branch | grep \* | cut -d ' ' -f2`

echo ⚠️ You are going to cherry-pick a commit on all branches
echo What is the SHA1?
read CHERRYCOMMIT

for BRANCH in "${BRANCHES[@]}";
do
  git checkout $BRANCH;
  git cherry-pick $CHERRYCOMMIT;
  git push;
done
git checkout $ORIGINALBRANCH;
