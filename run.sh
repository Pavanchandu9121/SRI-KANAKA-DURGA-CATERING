git filter-branch -f --env-filter '
if [ "$GIT_AUTHOR_EMAIL" = "159125892+gpt-engineer-app[bot]@users.noreply.github.com" ] || [ "$GIT_AUTHOR_EMAIL" = "noreply@lovable.dev" ]; then
    export GIT_AUTHOR_NAME="Pavan Chandu"
    export GIT_AUTHOR_EMAIL="pavanchandu9391@gmail.com"
fi
if [ "$GIT_COMMITTER_EMAIL" = "159125892+gpt-engineer-app[bot]@users.noreply.github.com" ] || [ "$GIT_COMMITTER_EMAIL" = "noreply@lovable.dev" ]; then
    export GIT_COMMITTER_NAME="Pavan Chandu"
    export GIT_COMMITTER_EMAIL="pavanchandu9391@gmail.com"
fi
' --tag-name-filter cat -- --branches --tags
