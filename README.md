## Introduction

More details about using AWS Lambda destinations here - https://sarthakj178.com/using-aws-lambda-destinations

In this repository, I've done a basic setup for Lambda destinations using AWS SAM template.
I have configured one Lambda function which will be triggered using aws cli.
On successful execution it will deliver a message to an SQS Queue.
On Failed execution, it will deliver a message to an SNS Topic which sends an email.

## Setup

-   Clone the repository

```
git clone https://github.com/sarthakj178/aws-sqs-lambda-destinations.git
cd aws-sqs-lambda-destinations
```

-   Change the email Id in template.yaml to your email Id and make sure you confirm the sns subscription once the code is released.

## Release

```
sam package --template-file template.yaml   --s3-bucket <YOUR_BUCKET_NAME> --output-template-file packaged.yaml
sam deploy --profile personal --template-file ./packaged.yaml --stack-name <YOUR_STACK_NAME> --capabilities CAPABILITY_IAM
```

## Test

### Success test case

-   Invoke the Lambda function with the required input present.

```
echo '{"x":1}' > /tmp/1; aws --profile personal lambda invoke-async --function-name sarthakj178-aws-sqs-lambda-destinatio-PingFunction-6BKE7P08PL4T  --invoke-args /tmp/1
```

You will find a message in the SQS queue.

### Failure test case

-   Invoke the Lambda function with the required input missing.

```echo '{"y":1}' > /tmp/1; aws --profile personal lambda invoke-async --function-name sarthakj178-aws-sqs-lambda-destinatio-PingFunction-6BKE7P08PL4T --invoke-args /tmp/1

```

You will get an email.
