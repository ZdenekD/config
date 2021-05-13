### &#128452; [Apache](https://httpd.apache.org)

**Config**

    /server/apache/.htaccess

### Apache for singlepage

-   root target to /dist (folder with built assets)

**Config**

    /server/apache/singlepage/.htaccess

---

### &#128452; [AWS](https://aws.amazon.com)

### AWS CodeBuild for React

-   build project and synchronize **dist** folder with S3 bucket

**Config**

    /server/aws/codebuild/react/buildspec.yml

---

### &#128452; [NodeJS](https://nodejs.org/en/)

### [NextJS](https://nextjs.org)

#### CSS Modules fix

Because of problems with NextJS CSS modules and Framer-motion (if is used `<AnimatePresence exitBeforeEnter>`, NextJS change styles immediately and animation `before unmount` is unstyled).
Solution is use @zeit/next-css package, but there is invalid configuration for postcss, so edit files are in folder **next-css**. For proper work it's necessary use @zeit/next-css package
and edited files from folder 'next-css'.

Dependecies:

    -   css-loader
    -   extracted-loader
    -   find-up
    -   ignore-loader
    -   mini-css-extract-plugin
    -   postcss-loader

#### Basic settings

-   nodejs react framework

**Config**

    /server/nodejs/nextjs/basic/next.config.js

#### [Sendgrid](https://zeit.co/guides/deploying-nextjs-nodejs-and-sendgrid-with-zeit-now) settings

**Config**

    /server/nodejs/nextjs/sendgrid/next.config.js

---

### [Now/Vercel](https://zeit.co/dashboard)

### &#128452; Now/Vercel for singlepage

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
