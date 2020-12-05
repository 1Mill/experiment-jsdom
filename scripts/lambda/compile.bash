#!/bin/bash

compile() {
        # Setup
	local relative_path=$1
	local this_directory_path=$(dirname -- "$(readlink -f -- "$BASH_SOURCE")")

        # Compute
	local dockercomopse_path="$this_directory_path/compile.docker-compose.yml"
	local lambda_absolutepath=$(cd -- $relative_path && pwd)

        # Import
        local config_filename=dev.lambda.config
	source $lambda_absolutepath/$config_filename

        # Perform
	DIR=$lambda_absolutepath docker-compose -f $dockercomopse_path up --build $RUNTIME
}
