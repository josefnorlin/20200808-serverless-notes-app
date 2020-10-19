# 20200808-serverless-notes-app

Stack dev-notes-infra-cognito
  Status: deployed
  Outputs:
    UserPoolClientId: 68d48h9rddo6bmfa26e7pi806q
    UserPoolId: us-east-1_CXRMMcGr3
    IdentityPoolId: us-east-1:175e4e3e-647d-43d1-8f0d-c1c97b3884a0

Stack dev-notes-infra-dynamodb
  Status: no changes
  Outputs:
    TableName: dev-notes-infra-dynamodb-TableCD117FA1-1R0O033P1T7T7
    TableArn: arn:aws:dynamodb:us-east-1:398521548222:table/dev-notes-infra-dynamodb-TableCD117FA1-1R0O033P1T7T7
  Exports:
    dev-notes-infra-TableName: dev-notes-infra-dynamodb-TableCD117FA1-1R0O033P1T7T7
    dev-notes-infra-TableArn: arn:aws:dynamodb:us-east-1:398521548222:table/dev-notes-infra-dynamodb-TableCD117FA1-1R0O033P1T7T7

Stack dev-notes-infra-s3
  Status: no changes
  Outputs:
    AttachmentsBucketName: dev-notes-infra-s3-uploads4f6eb0fd-1tmludp7lqcvj