version: '3.2'
services:
  localstack:
    image: localstack/localstack:latest
    container_name: localstack_demo7
    ports:
      - '4563-4599:4563-4599'
      - '8055:8080'
    environment:
      - SERVICES=s3
      - DEBUG=1
      - DATA_DIR=/tmp/localstack_new/data
      - LOCALSTACK_TMP_DIR=/tmp/localstack_new
      - WEB_UI_ENABLED=1
      - START_WEB=1
    volumes:
      - './.localstack_new:/tmp/localstack_new'
      - '/var/run/docker.sock:/var/run/docker.sock'
