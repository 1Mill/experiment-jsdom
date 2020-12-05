# Experimenting with JSDom via AWS lambda in local development

## Setup in development

1. To start localstack (a local version of AWS), run `docker-compose up --build`
1. To compile and deploy the a lambda to localstack, run

    ```bash
    ./scripts/lambda/development/setup.bash ./services/hello-world
    ```

1. To invoke the lambda and output logs into localstack, install `aws-cli` and then run

    ```bash
    ./scripts/lambda/development/invoke.bash services--helloworld
    ```
