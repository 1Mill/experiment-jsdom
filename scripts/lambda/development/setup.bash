#!/bin/bash

source $(dirname -- "$(readlink -f -- "$BASH_SOURCE")")/../compile.bash
source $(dirname -- "$(readlink -f -- "$BASH_SOURCE")")/create.bash

DIR=$1

compile $DIR &
create $DIR || true # ! Prevent error
wait
