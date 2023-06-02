# With Docker Compose and Next Runtime Environment

This example uses [Next Runtime Environment](https://github.com/expatfile/next-runtime-env) package.

I haven't been able to make multistage builds and [Output Standalone](https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files) feature to work with this method. Final image approximately 880 MB.

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