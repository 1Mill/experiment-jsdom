#!/bin/bash

aws --endpoint http://localhost:4566/ \
	lambda invoke \
		--function-name $1 \
		development.output.json
