## How it works

This example uses a simplified version of the script from [sparanoid/env.sh](https://github.com/sparanoid/env.sh).

This method supports multistage builds, which are highly recommended in production. Combined with the Next [Output Standalone](https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files) feature, only `node_modules` files required for production are copied into the final Docker image. Final image approximately 200 MB.

## Prerequisites

Install [Docker Desktop](https://docs.docker.com/get-docker) for Mac, Windows, or Linux. Docker Desktop includes Docker Compose as part of the installation.

## How to use

Build the server.

```bash
# Create a network, which allows containers to communicate
# with each other, by using their container name as a hostname
docker network create my_network

# Build prod
docker compose build
```

Run the server

```bash
# Up prod in detached mode
docker compose up -d
```

Open [http://localhost:3000](http://localhost:3000) and check the page is showing the correct value for `NEXT_PUBLIC_ENV_VARIABLE`.

## Check it reads new values at startup

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