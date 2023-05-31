# With Docker Compose and Next Runtime Environment

This example contains everything needed to get a Next.js production environment up and running with Docker Compose and [Next Runtime Environment](https://github.com/expatfile/next-runtime-env).

## Benefits of Docker Compose

- Develop locally without Node.js or TypeScript installed ✨
- Easy to run, consistent development environment across macOS, Windows, and Linux teams
- Run multiple Next.js apps, databases, and other microservices in a single deployment
- Multistage builds combined with [Output Standalone](https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files) outputs up to 85% smaller apps (Approximately 110 MB compared to 1 GB with create-next-app)
- Easy configuration with YAML files

## Benefits of Next Runtime Environment  

Brings the [Build once, deploy many](https://www.mikemcgarr.com/blog/build-once-deploy-many.html) principle back to Next.js.

## Prerequisites

Install [Docker Desktop](https://docs.docker.com/get-docker) for Mac, Windows, or Linux. Docker Desktop includes Docker Compose as part of the installation.

## How to use

Multistage builds are highly recommended in production. Combined with the Next [Output Standalone](https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files) feature, only `node_modules` files required for production are copied into the final Docker image.

First, build and run the production server (Final image approximately 110 MB).

```bash
# Create a network, which allows containers to communicate
# with each other, by using their container name as a hostname
docker network create my_network

# Build prod
docker compose build

# Up prod in detached mode
docker compose up -d
```

Open [http://localhost:3000](http://localhost:3000) and check the page is showing the correct value for `NEXT_PUBLIC_ENV_VARIABLE`.

Kill the containers:

```bash
docker kill $(docker ps -aq) && docker rm $(docker ps -aq)
```

Modify the value of the `NEXT_PUBLIC_ENV_VARIABLE` variable in the `.env` file.

Run the production server again, without rebuilding it:

```bash
# Up prod in detached mode
docker compose up -d
```

Open [http://localhost:3000](http://localhost:3000) and check the page is showing the updated value for `NEXT_PUBLIC_ENV_VARIABLE`.

## Useful commands

```bash
# Free space
docker system prune -af --volumes
```
