/*

export const config = {
  "aws": {
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET
  },
  "postgres": {
    "username": process.env.POSTGRES_USERNAME,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DATABASE,
    "host": process.env.POSTGRES_HOST,
    "dialect": "postgres",
  }
}

} 
*/


export const config = {
  "aws": {
    "aws_region": "us-east-1",
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": "s3-bucket-udagram"
  },
  "postgres": {
    "username": process.env.POSTGRES_USERNAME,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DATABASE,
    "host": "udagramdb.cnemwvldkks7.us-east-1.rds.amazonaws.com"
  }
}


