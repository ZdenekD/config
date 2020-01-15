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

### [Now](https://zeit.co/dashboard)

### Now for singlepage

-   config file for single-page routes (everything goes through index.html)

**Config**

    /server/now/singlepage/now.json

#### Now ignore file

-   Ignore files not necessary for building on zeit.co

**Config**

    /server/now/.nowignore
