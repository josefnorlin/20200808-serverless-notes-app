export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "20200808-notes-app-upload"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://6y32fq26ic.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_kJ8v6Zpwo",
    APP_CLIENT_ID: "5cgna39hr4h817sq21lq92vasm",
    IDENTITY_POOL_ID: "us-east-1:bad7f3c1-4402-48b2-b5b2-d6b3bf34ac5a",
  },
};
