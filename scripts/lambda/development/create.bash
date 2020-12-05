#!/bin/bash

create() {
	# Setup
        local aws_endpoint=http://localhost:4566
	local config_filename=dev.lambda.config
	local env_filename=.env
	local relative_path=$1

        # Compute
	local absolute_path=$(cd -- $relative_path && pwd)

	# Import
	if [ -f "$absolute_path/$env_filename" ]
	then
		source $absolute_path/.env
	fi
	source $absolute_path/$config_filename

        # Perform
	aws --endpoint-url $aws_endpoint \
		lambda delete-function \
			--function-name $FUNCTIONNAME

	aws --endpoint-url $aws_endpoint \
		lambda create-function \
			--code S3Bucket="__local__",S3Key="/$absolute_path/" \
			--function-name $FUNCTIONNAME \
			--handler $HANDLER \
			--role some-placeholder \
			--runtime $RUNTIME

	if [ "$ENVIRONMENT" != "" ]
	then
		aws --endpoint-url $aws_endpoint \
			lambda update-function-configuration \
				--environment "Variables=$ENVIRONMENT" \
				--function-name $FUNCTIONNAME
	fi
}
