#!/bin/bash

## Requires: https://github.com/google/go-containerregistry/tree/main/cmd/gcrane

## Usage: ./container-sync.sh
## Dry run: dryrun=echo ./container-sync.sh

set -e

gcrane="${gcrane:-gcrane}"

project="oneplatform-us-247012"

declare -A ver
eval $(jq -r 'to_entries|.[]|"ver[\(.key)]=\(.value)"' old_ver.json)

declare -A images
images=(
  ["alpine:${ver[alpine]}"]=alpine
  ["curlimages/curl:${ver[curl]}"]=curl
  ["gcr.io/go-containerregistry/gcrane@${ver[gcrane]}"]=gcrane
  ["gcr.io/kaniko-project/executor:v${ver[kaniko]}-debug"]=kaniko-executor
  ["node:${ver[node]}"]=node
)

pattern=$1

for source in "${!images[@]}"; do
  case "$source" in
    *$pattern*)
      tag=${images[$source]#*:}
      test "$tag" = "${images[$source]}" && tag=${source#*:}
      test "$tag" = "$source" && tag=${ver[${images[$source]}]}
      target="gcr.io/$project/${images[$source]%:*}:$tag"
      $dryrun $gcrane cp "$source" "$target"
    ;;
  esac
done
