// Import required AWS SDK clients and commands for Node.js
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
// Set the AWS region
const REGION = "us-west-1";

// Create Amazon S3 service client object.
const s3 = new S3Client({ region: REGION });

// Create and upload the object to the specified Amazon S3 bucket.
const uploadToS3 = async (filename, fileContents) => {
  // Set the parameters.
  const uploadParams = {
    Bucket: "safersalebucket",
    // Specify the name of the new object. For example, 'index.html'.
    // To create a directory for the object, use '/'. For example, 'myApp/package.json'.
    Key: filename,
    // Content of the new object.
    Body: fileContents,
  };
  try {
    const data = await s3.send(new PutObjectCommand(uploadParams));
    console.log(
      "Successfully uploaded object: " +
        uploadParams.Bucket +
        "/" +
        uploadParams.Key
    );
  } catch (err) {
    console.log("Error", err);
  }
  return "https://safersalebucket.s3-us-west-1.amazonaws.com/" + filename;
};

module.exports = uploadToS3;
