### Starting Workflow

#### `npm i` OR `yarn` : To install packages

#### `npm run start` OR `yarn start` : To run the webapp

<hr />

### Pushing Workflow

1. First checkout to a new branch named with this format: `[your-name]/[purpose-of-branch]`. Example, `omkaar/transaltion-fix`
2. After adding your changes, checkout to `staging` and run `git merge [your-branch-name]`

#### **To push to staging**

3. Add, commit and push code to the the repo

#### **To push to prod**

3. Checkout to master, run `git merge staging`
4. Add, commit and push code to the the repo
5. Run `yarn deploy` OR `npm run deploy`
