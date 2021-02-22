## API AWS
This API create two endpoint: first endpoint create a user with `email` and `name`.
Second endpoint send a previous created user email with attachments.

This API was built using API Gateway, SES, Lambda Function deployed using ClaudiaJS.
## Prerequisites

Create a table in DynamoDB, with a `string` primary key called `email`. You can do that from the DynamoDB web console, or using the AWS CLI command line. Here is an example command that will create the table with the minimal provisioned throughput:

```bash
aws dynamodb create-table --table-name users \
  --attribute-definitions AttributeName=email,AttributeType=S \
  --key-schema AttributeName=email,KeyType=HASH \
  --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 \
  --query TableDescription.TableArn --output text
```

Install all dependencies: _`nodemail, claudia, aws-sdk, claudia-api-builder.`_

Verify your email address in AWS Email Verification or using this code on terminal:
```
aws ses verify-email-identity --email-address your-email@email
```
