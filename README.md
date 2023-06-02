## The problem

Next.js does support [environment variables](https://nextjs.org/docs/basic-features/environment-variables), but only at build time. This means you must rebuild your app for each target environment, which violates the [Build once, deploy many](https://www.mikemcgarr.com/blog/build-once-deploy-many.html) principle.

These examples contain everything needed to get a Next.js production environment up and running with Docker Compose and being able to read environment variables from the `environment` section in your docker-compose.yml file when the container starts.

## Examples

Both examples read the system variables and generate a public `__env.js`/`__ENV.js` file which exposes the `NEXT_PUBLIC_` variables to the client.

- [with-env.sh](with-env.sh) uses a bash script.
- [with-next-runtime-env](with-next-runtime-env) uses [Next Runtime Environment](https://github.com/expatfile/next-runtime-env) package.