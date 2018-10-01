import GitHub from '@rqt/github'

(async () => {
  const gh = new GitHub('token')
  gh.repos.create()
})()