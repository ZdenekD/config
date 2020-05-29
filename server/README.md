### [Apache](https://httpd.apache.org)

**Config**

    /server/apache/.htaccess

---

### Apache for singlepage

-   root target to /dist (folder with built assets)

**Config**

    /server/apache/singlepage/.htaccess

---

### [AWS](https://aws.amazon.com)

### AWS CodeBuild for React

-   build project and synchronize **dist** folder with S3 bucket

**Config**

    /server/aws/codebuild/react/buildspec.yml

---

### [NodeJS](https://nodejs.org/en/)

### [NextJS](https://nextjs.org)

#### Basic settings

-   nodejs react framework

**Config**

    /server/nodejs/nextjs/basic/next.config.js

#### [Sendgrid](https://zeit.co/guides/deploying-nextjs-nodejs-and-sendgrid-with-zeit-now) settings

**Config**

    /server/nodejs/nextjs/sendgrid/next.config.js

---

### [Now/Vercel](https://zeit.co/dashboard)

### Now/Vercel for singlepage

-   config file for single-page routes (everything goes through index.html)

**Config**

    /server/now/singlepage/now.json
    /server/vercel/singlepage/vercel.json

### Now/Vercel with sendgrid e-mail sender

-   added sendgrid api key value for zeit
-   `now secrets add SENDGRID_API_KEY [your-sendgrid-api-key]`

**Config**

    /server/now/sendgrid/now.json
    /server/vercel/sendgrid/vercel.json

#### Now/Vercel ignore file

-   Ignore files not necessary for building on zeit.co

**Config**

    /server/now/.nowignore
    /server/vercel/.vercelignore
