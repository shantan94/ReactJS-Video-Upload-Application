<h1>React Video Upload to Amazon s3</h1>
This application helps to upload a video file (changing the accept value of form can help you upload any file onto aws). For the video to run on Amazon CloudFront url has to be created.

An "AWSConfig.js" file has to be created in the src path which contains the following:

import AWS from "aws-sdk";
const config = {
  "AWSKeys": {
    "accessKeyId": "accessKeyId",
    "secretAccessKey": "secretAccessKey",
    "region": "region",
    "bucket": "bucket"
  }
};
export const AWSConfig = config["AWSKeys"];
AWS.config.update({
  accessKeyId: AWSConfig.accessKeyId,
  secretAccessKey: AWSConfig.secretAccessKey,
  region: AWSConfig.region,
});
export const s3 = new AWS.S3();
export const cdnEndpoint = "cloudfronturl";
export const cdnAccessKeyId = "cdnAccessKeyId";
export const cdnPrivateKeyString ="cdnPrivateKeyString";
