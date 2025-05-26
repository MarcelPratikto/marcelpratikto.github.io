
To untrack a directory:
```python
git rm -r --cached src-tauri/target
```

To merge
```python
# pull from origin/master to get latest update
git pull origin master
# checkout to master or origin/master then merge
git checkout origin/master
git merge <your-branch-name>
# go back to your branch then push
git checkout <your-branch-name>
git push origin master
```

To overwrite the local with the origin master
```python
git reset --hard origin/master
```

To change the local and remote master repo
```python
# Pre-req:
# Make sure your current directory is the one for the app
# For me, that is C:/COG_DEV/COG_app

# 1. Ensure you're on the branch you want to become the new master.
git checkout your_branch_name

# 2. Delete the local master branch (if it exists). Be very careful with this!
git branch -D master

# 3. Rename your current branch to master.
git branch -m master

# 4. Force push the new master to the remote repository. This will overwrite the remote master.
git push -f origin master
```

Check branches
```python
# check local branches
git branch

# check remote branches
git branch -r

# check local and remote branches
git branch -a

#ensure local repository has latest info from remote
git fetch
git fetch --all
```

Delete branches
```python
# remote_name: usually origin
# branch_name: name of branch you want to delete
git push <remote_name> --delete <branch_name>

# for local -d or -D both works, but -D is more serious
git branch -d <branch_name>
```

Revert to a previous version
```python
# use git log to find the commit_hash
# (the previous version that you want to revert to)
# press 'q' to quit the log
git log
git revert <commit_hash>
```