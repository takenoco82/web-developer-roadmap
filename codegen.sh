#!/bin/bash -eu

set -eu

readonly PROJECT_ROOT=$(git rev-parse --show-toplevel)
readonly OUT_DIR_NAME=sandbox_cli
readonly OUT_DIR=${PROJECT_ROOT}/${OUT_DIR_NAME}

# 出力先のディレクトリを削除
rm -rf ${OUT_DIR}

# APIクライアントを生成
docker run \
  --rm \
  -v ${PROJECT_ROOT}:/local \
  swaggerapi/swagger-codegen-cli generate \
    -l javascript \
    -i /local/docs/swagger.yaml \
    -o /local/${OUT_DIR_NAME} \
    --additional-properties usePromises=true,useES6=true

# テストは削除する
rm -rf ${OUT_DIR}/test
