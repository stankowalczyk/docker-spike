# Docker Spike

## Goals

The goal of this spike is to gain a basic understanding about how to use Dockerfiles and understand what they do, as well as how to use Docker Compose to manage a simple orchestration case.

Please note that this repo is not a tutorial on Docker (NodeJS or Redis), it is simply an exercise reinforcing basic knowledge about Docker.

## Resources used

- [Introduction to Docker](https://www.youtube.com/watch?v=Q5POuMHxW-0)
- [Docker Basics](https://www.lynda.com/Docker-tutorials/Docker-Basics/485649-2.html)
- [Docker Getting Started](https://docs.docker.com/engine/getstarted/)
- [Docker Compose Getting Started](https://docs.docker.com/compose/gettingstarted/)

## Technologies used

- [Docker](https://docs.docker.com/engine/installation/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Tasks undertaken

- Create a basic node app to be run inside one container (`/node-app`)
- Create a `DockerFile` (`/node-app/DockerFile`)
- Create a `docker-compose.yml` file (`/node-app/docker-compose.yml`)

## What was found out

- When a `Dockerfile` is executed from a `docker-compose.yml` which resides outside of the `Dockerfile`'s directory - any paths within the `Dockerfile` will change to be relative to the `docker-compose.yml`'s directory.
- Docker Compose does a pretty good job with container orchestration, and will alter host files in order to enable network communication between containers.
- If needed volumes can be used to save data persistently between docker container instances (whether its two different containers, or after a container has been stopped and started later).
- If the `docker-compose.yml` service uses an image made with a `Dockerfile`, and following fields are not defined: `container_name`, and `image` then the container may get an automatically generated name, same with the image for the container.
- Ports which are exposed inside a `Dockerfile` do not need to be exposed again in the `docker-compose.yml`.

## Open issues / risks

- Storing credentials in Docker images is a very bad idea - a solution will be required to avoid storing sensitive information inside images.

## Getting up and running

### Expected outcome

If run successfully you will have a NodeJS app which you can access through your browser. It also has a hit counter feature, where the data is stored inside a Redis instance - it was done this way to demonstrate the use of two Docker containers.

### Steps

1. [Install Docker](https://docs.docker.com/engine/installation/) on your operating system of choice.
2. Using a terminal / command prompt navigate to the repo's `node-app` folder.
3. `$ docker-compose up -d`
4. Check everything is working well by visiting [localhost:8080](http://localhost:8080) in a browser.

### Cleanup

1. Using a terminal / command prompt window, from the repo's `node-app` folder run `docker-compose down`.
2. `$ docker rm node-app redis`
3. `$ docker rmi node-app` (if you also wish to remove the redis and node images, also run `$ docker rmi redis node`)

docker-compose up -d

## License

This repo is licensed under the terms of the BSD 3-Clause license. Please see the LICENSE file.
