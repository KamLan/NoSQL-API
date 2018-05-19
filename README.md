# NoSQL-API
NoSQL API for the NoSQL-interface

This NoSQL API is powered by NodeJs

You want to test this API ?

First create a docker-compose.yml file

version: "3.3"

services:
  mongo:
    image: kamlando/mongo-db-import:latest
    networks:
      - general

  node:
    image: kamlando/node-api-example:latest
    networks:
      - general
    links:
      - mongo

networks:
  general:
    driver: bridge
    ipam:
      config:
        - subnet: 101.198.0.0/24
        
Then type in your console:  docker-compose up -d 

Finally check the url: 101.198.0.3:3000/artists
