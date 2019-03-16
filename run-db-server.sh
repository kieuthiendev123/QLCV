#!/bin/bash
CONTAINER_NAME="mssql-container"

docker rm --volumes --force "$CONTAINER_NAME"
docker create --restart=no --name "$CONTAINER_NAME" \
  --publish "1433:1433" \
  --env "ACCEPT_EULA=Y" \
  --env "SA_PASSWORD=PKO1Z2lo3" \
  microsoft/mssql-server-linux:2017-CU2
docker start "$CONTAINER_NAME"