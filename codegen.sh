#!/bin/bash -eu

set -eu

readonly PROJECT_ROOT=$(git rev-parse --show-toplevel)
readonly SANDBOX_CLI_DIR_NAME=sandbox_cli
readonly SANDBOX_CLI_DIR=${PROJECT_ROOT}/${SANDBOX_CLI_DIR_NAME}

readonly SANDBOX_API_DIR_NAME=sandbox_api
readonly SANDBOX_API_DIR=${PROJECT_ROOT}/${SANDBOX_API_DIR_NAME}

# 出力先のディレクトリを削除
rm -rf ${SANDBOX_CLI_DIR}

# APIクライアントを生成
docker run \
  --rm \
  -v ${PROJECT_ROOT}:/local \
  swaggerapi/swagger-codegen-cli generate \
    -l javascript \
    -i /local/docs/swagger.yaml \
    -o /local/${SANDBOX_CLI_DIR_NAME} \
    --additional-properties usePromises=true

# テストは削除する
rm -rf ${SANDBOX_CLI_DIR}/test

# 出力先のディレクトリを削除
rm -rf ${SANDBOX_API_DIR}

# APIモックを生成
docker run \
  --rm \
  -v ${PROJECT_ROOT}:/local \
  swaggerapi/swagger-codegen-cli generate \
    -l nodejs-server \
    -i /local/docs/swagger.yaml \
    -o /local/${SANDBOX_API_DIR_NAME} \
    --additional-properties serverPort=8888
