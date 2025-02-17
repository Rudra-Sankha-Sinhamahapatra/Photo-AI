import dotenv from 'dotenv'
dotenv.config();

export const accessKeyId = process.env.AWS_ACCESS_ID || "";
export const secretAccessKey = process.env.AWS_SECRET_KEY || "";
export const endpoint =process.env.AWS_ENDPOINT || "";
export const bucketName = process.env.AWS_BUCKET_NAME || "";
