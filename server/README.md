### [Apache](https://httpd.apache.org)

**Config**

    /server/apache/.htaccess

---

### Apache for webpack

-   root target to /dist (folder with built assets)

**Config**

    /server/apache/webpack/.htaccess

---

### [AWS](https://aws.amazon.com)

### AWS CodeBuild for React

-   build project and synchronize **dist** folder with S3 bucket

**Config**

    /server/aws/codebuild/react/buildspec.yml
