import { S3 } from "aws-sdk"
import fs from "fs"
import { accessKeyId, bucketName, endpoint, secretAccessKey } from "./config";

const s3 = new S3({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    endpoint: endpoint 
});

export const uploadFile = async(fileName:string,localFilePath:string) => {
const fileContent = fs.readFileSync(localFilePath);
const response = await s3.upload({
    Body:fileContent,
    Bucket:bucketName,
    Key:fileName
}).promise();

return response
}