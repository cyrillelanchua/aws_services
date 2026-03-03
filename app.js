// AWS Services Data
const awsServicesData = {
  "categories": [
    {
      "name": "AWS shared responsibility model",
      "groups": [
        {
          "name": "Categories",
          "services": [
            {
              "title": "Fully managed services",
              "description": `For fully managed services, AWS handles nearly all operational tasks like provisioning, scaling, patching, backups, performance optimization, and security patches.
                              AWS also provides built-in monitoring and metrics.
                              Fully managed AWS database services only require customers to be responsible for designing data structures and managing access controls.`
            },
            {
              "title": "Managed services",
              "description": `With managed database services, AWS handles routine tasks like backups, patching, and hardware provisioning while customers are responsible for database configuration, query optimization, and performance tuning decisions.`
            },
            {
              "title": "Unmanaged services",
              "description": `With unmanaged databases, customers are responsible for installation, configuration, patching, maintenance tasks, database security, backups, high availability setup, and performance optimization.
                An example of an unmanaged database in AWS would be a database management system like MySQL installed directly on an Amazon Elastic Compute Cloud (Amazon EC2) instance.`
            }
          ]
        },
      ]
    },
    {
      "name": "Management/monitoring tools",
      "groups": [
        {
          "name": "services",
          "services": [
            {
              "title": "Amazon CloudFormation",
              "description": `Infrastructure as Code (IaC) service that allows you to define and provision AWS infrastructure using a declarative template format.

                              Create templates for resource deployment in AWS. Provision and deploy fully configured infrastructure.
                              Pay only the resources used in the templates and provision multi-region, multi-tier applications quickly with textfiles written json or yaml.

                              Update or manage the template(stack) using aws management console, aws cli, or aws sdk. You can update the stack by modifying the template and applying the changes, which allows you to manage your infrastructure as code and maintain **version control** over your deployments.

                              You can use CloudFormation to create and manage a collection of related AWS resources, provisioning and updating them in an orderly and predictable fashion.
                              CloudFormation templates are JSON or YAML formatted text files that describe the AWS resources you want to create and their configurations.`
            },
            {
              "title": "Amazon CloudTrail",
              "description": `Monitoring and auditing of IT infrastructure for complience, user activity, and operational troubleshooting. Provides event history of AWS account activity, including actions taken through the AWS Management Console, AWS SDKs, command line tools, and other AWS services.

                              Log and monitor **account activity** and **event history**.
                              Simplify auditing, security analysis, resource change tracking, and troubleshooting.

                              Free review of account activities for the past **90 days**

                              provide visibility into user/resource activities. Track action taken through AWS Management Console, AWS SDKs, command line tools, and other AWS services.
                              **Automatically respond to security threats and operational issues.**

                              Amazon CloudTrail is a service that enables governance, compliance, and operational and risk auditing of your AWS account.
                              With CloudTrail, you can log, continuously monitor, and retain account activity related to actions across your AWS infrastructure.

                              CloudTrail provides event history of your AWS account activity, including actions taken through the AWS Management Console, AWS SDKs, command line tools, and other AWS services.
                              This event history simplifies security analysis, resource change tracking, and troubleshooting.`
            },
            {
              "title": "Amazon CloudWatch",
              "description": `Monitoring and management system for AWS infrastructure.
                              Natively integrate with over 70 AWS services.
                              Gain system-wide visibility into **resource utilization, application performance, and operational health.**
                              Can **react to events in real time, set alarms, and automatically react to changes in your AWS resources.**

                              Amazon CloudWatch is a monitoring and observability service built for DevOps engineers, developers, site reliability engineers (SREs), and IT managers.
                              It provides data and actionable insights to monitor applications, respond to system-wide performance changes, optimize resource utilization, and get a unified view of operational health.

                              CloudWatch collects monitoring and operational data in the form of logs, metrics, and events, providing you with a unified view of AWS resources, applications, and services running on AWS and on-premises servers.
                              You can use CloudWatch to detect anomalous behavior in your environments, set alarms, visualize logs and metrics side by side, take automated actions, troubleshoot issues, and discover insights to keep your applications running smoothly.`
            }
          ]
        },
      ]
    },
    {
      "name": "Networking and content delivery",
      "groups": [
        {
          "name": "Network services",
          "services": [
            {
              "title": "Virtual Private Cloud (VPC)",
              "description": `A Virtual Private Cloud (VPC) is a logically isolated section of the AWS cloud where you can launch AWS resources in a virtual network that you define.
                              You have complete control over your virtual networking environment, including selection of your own IP address range, creation of subnets, and configuration of route tables and network gateways.
                              VPCs provide security and isolation, allowing you to control inbound and outbound traffic to your resources.
                              VPCs are isolated from other users and resources in the AWS cloud, providing a secure environment for your applications and data.

                              **VPC are automatically created when you create an AWS account**, and you can create additional VPCs as needed. Each VPC can span multiple Availability Zones (AZs) within a region, providing high availability and fault tolerance for your applications. You can also connect your VPC to your on-premises network using VPN or AWS Direct Connect for hybrid cloud architectures.`
            },
            {
              "title": "Amazon CloudFront",
              "description": `Amazon CloudFront is a **content delivery network (CDN)** service that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds.
                              It integrates with other AWS services to provide a comprehensive solution for content delivery and security.

                              CDN a system of distributed servers that deliver web content to users based on their geographic location, the origin of the content, and a content delivery server.
                              CloudFront uses a global network of **edge locations** to cache and deliver content closer to end-users, improving performance and reducing latency.

                              Makes loading websites/apps faster for users by caching content at **edge locations** around the world, reducing latency and improving performance.`
            },
            {
              "title": "Amazon Route 53",
              "description": `Connects users request to infrastructure running in AWS, such as Amazon EC2 instances, Elastic Load Balancing load balancers, or Amazon S3 buckets, and can also be used to route users to infrastructure outside of AWS.

                              Domain registration: You can register domain names directly through Route 53, making it easier to manage your domain and DNS settings in one place.
                              Health checking: Route 53 can monitor the health of your resources and route traffic away from unhealthy resources to healthy ones, improving the availability of your applications.
                              Traffic management: Route 53 offers various routing policies, such as simple routing, weighted routing, latency-based routing, and geolocation routing, allowing you to control how traffic is directed to your resources based on factors like performance and geographic location.

                              Amazon Route 53 is a scalable and highly available **Domain Name System (DNS)** web service.
                              It is designed to route end users to Internet applications by translating human-readable names, such as www.example.com, into the numeric IP addresses, such as 192.0.2.1, that computers use to connect to each other.`
            },
            {
              "title": "Amazon Global Accelerator",
              "description": `To direct traffic into the **AWS global network** instead of the **public internet**, which can improve performance and availability for your applications. Utilized **edge locations**.

                              Kind of like a virtual toll road that allows your web traffic to bypass the traffic congestion on the public internet and take a more direct route to your application endpoints in AWS. This can result in lower latency and improved performance for your users, especially those located far from your application endpoints.

                              Amazon Global Accelerator is a service that improves the availability and performance of your applications with local or global users.
                              It provides static IP addresses that act as a fixed entry point to your application endpoints in one or more AWS Regions, such as Application Load Balancers, Network Load Balancers, and EC2 instances.
                              Global Accelerator uses the AWS global network to optimize the path from your users to your application, improving performance and availability.`
            }
          ]
        },
      ]
    },
    {
      "name": "Deploying and operating the cloud",
      "groups": [
        {
          "name": "Interacting with the cloud",
          "services": [
            {
              "title": "AWS Management Console",
              "description": `The AWS Management Console is a web-based interface for accessing and managing AWS services.
                              It provides a graphical interface for users to interact with AWS resources, configure services, and monitor usage and performance.`
            },
            {
              "title": "AWS CLI (Command Line Interface)",
              "description": `The AWS Command Line Interface (CLI) is a unified tool to manage AWS services.
                              With just one tool to download and configure, you can control multiple AWS services from the command line and automate them through scripts.
                              Uses commands in your command-line shell to interact with AWS services. Can use scripts to automate tasks.`
            },
            {
              "title": "AWS SDKs (Software Development Kits)",
              "description": `AWS SDKs provide a set of libraries and tools for various programming languages to interact with AWS services.
                              They simplify the process of making API calls, handling authentication, and managing responses, allowing developers to integrate AWS services into their applications more easily.
                              They can be used with various programming languages, such as Python, Java, JavaScript, and more.
                              They provide a higher-level abstraction for interacting with AWS services, making it easier to integrate AWS functionality into applications.`
            }
          ]
        },

        {
          "name": "Infrastructure as code (IaC)",
          "services": [
            {
              "title": "Concepts",
              "description": `Infrastructure as Code (IaC) is the practice of managing and provisioning computing infrastructure through machine-readable configuration files,
                              rather than through physical hardware configuration or interactive configuration tools.
                              It allows for automation, version control, and consistency in managing infrastructure.
                              examples AWS CloudFormation, AWS Terraform, and AWS CDK (Cloud Development Kit).`
            },
          ]
        },
        {
          "name": "Connecting to the cloud",
          "services": [
            {
              "title": "Virtual Private Network (VPN)",
              "description": `A Virtual Private Network (VPN) extends a private network across a public network, allowing users to send and receive data as if their devices were directly connected to the private network.
                              VPNs provide secure communication over the internet, encrypting data to protect it from unauthorized access.
                              They are commonly used to connect remote offices or users to a central corporate network, ensuring secure access to resources.

                              Creates an encrypted connection between your on-premises network and your VPC over the public internet. This allows you to securely access resources in your VPC as if you were directly connected to it.

                              Amazon has its own VPN service called AWS VPN that helps establish secure connections between your on-premises network and your AWS VPCs. It provides two types of VPN connections: AWS Site-to-Site VPN and AWS Client VPN. AWS Site-to-Site VPN allows you to connect your on-premises network to your VPC using an IPsec VPN connection, while AWS Client VPN enables you to securely access your AWS resources from any location using an OpenVPN-based client.`
            },
            {
              "title": "AWS Direct Connect",
              "description": `AWS Direct Connect is a cloud service solution that makes it easy to establish a dedicated network connection from your premises to AWS.
                              Using AWS Direct Connect, you can establish private connectivity between AWS and your data center, office, or colocation environment, which in many cases can reduce your network costs,
                              increase bandwidth throughput, and provide a more consistent network experience than internet-based connections.

                              considered "shortest path" to AWS, providing a more consistent network experience than internet-based connections.
                              It can be used to connect to all AWS services in the same region, and it can also be used to connect to AWS services in other regions through AWS Direct Connect Gateway.`
            },
            {
              "title": "Public Internet",
              "description": `The public internet is the most common way to connect to AWS services. It provides a flexible and cost-effective method for accessing AWS resources from anywhere in the world.
                              However, it may not offer the same level of performance or security as dedicated connections like AWS Direct Connect.
                              Not private or secure. not encrypted by default, so you should use additional security measures like VPNs or encryption to protect your data when using the public internet to connect to AWS services.`
            },
          ]
        },
        {
          "name": "AWS Global infrastructure",
          "services": [
            {
              "title": "Availability Zones (AZs)",
              "description": `Availability Zones (AZs) are isolated locations within an AWS region. Each AZ consists of one or more data centers with redundant power, networking, and connectivity.
                              AZs are designed to be **independent from failures** in other AZs, providing high availability and fault tolerance for your applications.
                              By deploying resources across multiple AZs, you can achieve greater resilience and minimize the impact of potential failures.

                              **High availability**
                              Hosting resources in multiple AZs allows you to design your applications for high availability.
                              By deploying resources across multiple AZs, you can achieve greater resilience and minimize the impact of potential failures.
                              If one AZ experiences an outage, your applications can continue to operate using resources in other AZs, ensuring high availability for your users.

                              **Fault tolerance**
                              Ability to provide uninterrupted service even during natural/human-made disasters, hardware failures, or other unexpected events.
                              AZs are designed to be independent from failures in other AZs, providing fault tolerance for your applications.
                              If one AZ experiences an outage, your applications can continue to operate using resources in other AZs, minimizing downtime and ensuring a seamless user experience.

                              **Resiliency**
                              Capacity to recover quickly from failures and continue operating without significant disruption.
                              AZs are designed to be resilient to failures, with redundant power, networking, and connectivity.
                              By deploying resources across multiple AZs, you can achieve greater resilience and minimize the impact of potential failures on your applications.`
            },
            {
              "title": "Regions",
              "description": `Two or more AZs make up an AWS Region. Each region is a separate geographic area that AWS uses to house its data centers. Each region is isolated from others to ensure the highest possible fault tolerance and stability.
                              All AZs within a region are interconnected with low-latency, high-throughput, and redundant networking, which allows you to design your applications for high availability and fault tolerance within a single region.
                              Regions are separate geographic areas that AWS uses to house its data centers. Each region is isolated from others to ensure the highest possible fault tolerance and stability.

                              Different regions have different services available, and there may be differences in pricing and latency depending on the region you choose. When designing your applications, it's important to consider the geographic location of your users and the services you need to ensure optimal performance and cost-effectiveness.`
            },
            {
              "title": "AWS Local Zones",
              "description": `Help you run latency-sensitive applications closer to end-users by placing compute, storage, database, and other select AWS services in locations that are geographically closer to your users.
                              Helpful when there are no AWS regions close enough to your end-users, or when you need to run applications that require single-digit millisecond latency.

                              AWS Local Zones are an extension of an AWS Region that places compute, storage, database, and other select AWS services closer to your end-users. This helps reduce latency and improve performance for applications that require single-digit millisecond latency.
                              Local Zones are ideal for use cases such as real-time gaming, live video streaming, and machine learning inference, where low latency is critical.
                              They are connected to the parent region via high-bandwidth, low-latency networking, allowing you to seamlessly integrate Local Zones with your existing AWS resources.`
            },
            {
              "title": "AWS Wavelength Zones",
              "description": `Provide ultra-low latency access to AWS services at the edge of the 5G network, enabling developers to build applications that require single-digit millisecond latency.

                              AWS Wavelength Zones bring AWS services to the edge of the 5G network, enabling developers to build applications that require ultra-low latency and high bandwidth.
                              They are ideal for use cases such as augmented reality (AR), virtual reality (VR), and real-time gaming, where milliseconds matter.
                              Wavelength Zones are connected to the parent region via high-bandwidth, low-latency networking, allowing you to seamlessly integrate Wavelength Zones with your existing AWS resources.`
            },
          ]
        },
      ]
    },
    {
      "name": "Access Management",
      "groups": [
        {
          "name": "Concepts",
          "services": [
            {
              "title": "Principle of least privilege",
              "description": `Only provide the minimum access necessary for users to perform their job functions. This minimizes potential security risks by limiting unnecessary permissions.`
            },
            {
              "title": "IAM Roles",
              "description": `Roles are used to delegate access to users, applications, or services that don't normally have access to your AWS resources.
                              Roles define a set of permissions that determine what actions are allowed and what resources can be accessed.
                              Has policies attached to them that define the permissions.
                              Not associated with a specific user or group.
                              User can assume a role to gain temporary access to the permissions defined in the role's policies.`
            },
            {
              "title": "Policies",
              "description": `Policies define permissions and can be attached to users, groups, or roles to specify what actions are allowed or denied on AWS resources.
                              Defines what actions are allowed or denied on specific resources.`
            },
            {
              "title": "Permission",
              "description": `Permission in policies define what actions are allowed or denied on specific AWS resources.`
            },
            {
              "title": "Security Groups",
              "description": `Help you control inbound and outbound traffic to your **AWS resources or instance level**. Such as EC2 instances and VPCs. Set what traffic is **allowed** to reach your resources.
                              Stateful (remembers), which means that if you allow inbound traffic on a specific port, the response traffic is automatically allowed to flow back out, regardless of outbound rules.`
            },
            {
              "title": "Network Access Control Lists (NACLs)",
              "description": `**Denies or allows** traffic at the **subnet level** within a VPC.
                              Stateless (forgets), which means that you must explicitly allow return traffic by configuring rules for both inbound and outbound traffic. It **checks the traffic again** when it leaves the subnet, and you need to ensure that the appropriate rules are in place to allow the return traffic.`
            },
            {
              "title": "Security Credentials",
              "description": `Password policy: password requirements, rotation, and reuse
                              Multi-factor authentication (MFA): adds an extra layer of security by requiring a second form of authentication
                              Access keys: used for programmatic access to AWS services via APIs or SDKs`
            },
            {
              "title": "AWS account root user",
              "description": `SUPER powerful user with unrestricted access to all AWS services and resources in the account.
                              Should only be used for initial setup and account management tasks.
                              Best practice is to create individual IAM users with appropriate permissions for day-to-day tasks and avoid using the root user.
                              There are certain tasks that require root user access, such as changing account settings or closing the account or accessing AWS GovCloud.`
            }
          ]
        },
        {
          "name": "Services",
          "services": [
            {
              "title": "AWS IAM Identity Center",
              "description": `used to be called AWS Single Sign- On(SSO).It is a cloud - based service that makes it easy to centrally manage SSO access to multiple AWS accounts
                              and business applications.With IAM Identity Center, you can create or connect your workforce identities and manage their access to AWS resources and applications from a single place.`
            },
            {
              "title": "Identity and Access Management (IAM)",
              "description": `Manage access to services and resouces in the AWS cloud.
                              Manage users, groups, roles, and permissions to securely control access to AWS resources.
                              Can provide access to users or other AWS services.
                              Permissions are globally applied across all AWS Regions.
                              Follow the principle of least privilege when granting permissions.
                              Manage Users, IAM roles, and Federated users

                              Manage Users: individuals who need access to AWS resources and are assigned unique credentials.
                              Manage Roles: Create roles to manage permissions and what those roles can do.An entity assumes a roles to obtain temporary access to the permissions defined in the role's policies.
                                            Used to provide a user from another AWS account with access to your AWS resources.
                              Manage Federated Users: Enable identity federation: allow existing identities in your enterprise to access AWS without having to create an IAM user for each identity.Can use any identity management solution that uses SAML 2.0 or one of the AWS federation samples`
            },
            {
              "title": "AWS Secrets Manager",
              "description": `Saves all your "secrets" such as database credentials, API keys, and other sensitive information.`
            },
            {
              "title": "AWS Systems Manager",
              "description": `A centralized service that helps you manage your AWS resources and applications in multi cloud and hybrid environments.
                              Can operate multiple AWS services from a single interface, and automate operational tasks across your AWS resources.
                              For IT administrators, it provides a unified interface to view operational data from multiple AWS services and allows you to automate operational tasks across your AWS resources.`
            },
            {
              "title": "AWS Web Application Firewall (WAF)",
              "description": `Filters incoming traffic for the signal of bad actors
                              Has machine learning capabilities and recognize new threats as it evolves
                              Protects your web applications from common web exploits that could affect application availability, compromise security, or consume excessive resources.
                              It allows you to create custom rules to block common attack patterns, such as SQL injection or cross-site scripting (XSS), and rules that are designed for specific applications, such as WordPress.
                              Protects web applications againts exploits that could compromize security, affect availability, or consume excessive resources.
                              Improves web traffic filtering and monitoring capabilities to help protect against common web exploits.`
            },
            {
              "title": "AWS Shield",
              "description": `Protects applications running on AWS against **DDoS attacks**. It provides always-on detection and automatic inline mitigations that minimize application downtime and latency.
                              **AWS Shield Standard** provides protection against common network and transport layer DDoS attacks at **no additional cost**. Free to use and automatically protects all AWS customers from DDoS attacks.

                              **AWS Shield Advanced** offers enhanced DDoS attack protection for applications running on AWS, including additional detection and mitigation capabilities, **24/7 access to the AWS DDoS Response Team (DRT)**, and **financial protections** against DDoS-related costs.
                                                      Integrates with AWS WAF for more granular control over web traffic and provides real-time attack visibility through AWS CloudWatch metrics and reports.
                                                      Available globally on all CloudFront and Route 53 resources, and on Elastic Load Balancing, Amazon EC2, and Amazon Global Accelerator resources in supported regions.`
            },
            {
              "title": "AWS Inspector",
              "description": `Automated security assessment service that helps improve the **security and compliance** of applications deployed on AWS.
                              It automatically assesses applications for vulnerabilities or deviations from best practices, and provides detailed findings and recommendations for remediation.
                              After the assessment is complete, it generates a detailed report with findings and recommendations for remediation, which can be used to improve the security posture of your applications.
                              You can define your own **standard and best practices, or use predefined templates provided by AWS.**`
            },
            {
              "title": "AWS Trusted Advisor",
              "description": `Guides provisioning of resouces to follow AWS best practices.
                              Scans your infrastructure and provides real-time recommendations to help you optimize your AWS environment for cost, performance, security, and fault tolerance.
                              Based on five categories: cost optimization, performance, security, fault tolerance, and service limits.
                              It provides recommendations to help you optimize your AWS environment in these areas.

                              **Seven Core trusted advisor checks**:
                              **S3 bucket permissions**, security groups - open ports, IAM use, MFA on root account, EBS public snapshots, RDS public snapshots, and service limits.
                              **Security groups** - specific ports unrestricted.
                              **IAM use**: checks for unused IAM users, groups, roles, and access keys.
                              **MFA on root account**: checks if MFA is enabled for the root account.
                              **Elastic Block Store (EBS) public snapshots**: checks for EBS snapshots that are shared with the public.
                              **Relational Database Service (RDS) public snapshots**: checks for RDS snapshots that are shared with the public.
                              **Service limits**: checks for any service limits that have been exceeded or are close to being exceeded.

                              **Full Trusted Advisor** checks are available to customers with Business or Enterprise support plans. More types of checks. Notifications through weekly updates. Set up automated actions in response to alerts using Cloudwatch.
                              Customers with Basic or Developer support plans have access to a subset of Trusted Advisor checks, primarily focused on security and service limits.`
            },
            {
              "title": "AWS GuardDuty",
              "description": `24/7 threat detection service that continuously monitors for malicious activity and unauthorized behavior to protect your AWS accounts and workloads.
                              Monitors for malicious or unauthorized behavior by analyzing data from AWS CloudTrail event logs, Amazon VPC Flow Logs, and DNS logs.
                              Uses machine learning, anomaly detection, and integrated threat intelligence to identify and prioritize potential threats.
                              Analyzes events to send actionable alerts via Cloudwatch`
            }
          ]
        },
        {
          "name": "Services 2",
          "services": [
            {
              "title": "AWS Artifact",
              "description": `Provides on-demand access to AWS's security and compliance reports and select online agreements.
                              On-demand self-service portal for accessing AWS compliance documentation and AWS agreements and independent software vendor (ISV) compliance reports.
                              Review, accept, and tract status of AWS agreements specific to your organizations industry.`
            },
            {
              "title": "AWS Cloudwatch",
              "description": `Observes and monitors application performance.
                              Set alarms and automated actions to activate at predermined thresholds to automatically mitigate potential issues.`
            },
            {
              "title": "AWS Cloudtrail",
              "description": `Generates audit trails of every action taken by a user, role, or AWS service in your account.
                              tracks what the user did, when they did it, and from where they did it.
                              Provides event history of your AWS account activity, including actions taken through the AWS Management Console, AWS SDKs, command line tools, and other AWS services.`
            },
            {
              "title": "AWS Audit manager",
              "description": `Automates evidence collection to help you audit your AWS usage and assess risk and compliance with regulations and industry standards.
                              Generate audit-ready reports to prove system complince for audits`
            },
            {
              "title": "AWS Config",
              "description": `Provides detailed views of AWS resouce configurations in your AWS account.
                              Tracks how configurations and relationships between resouces change over time.
                              Can monitor configuration settings and send alerts when a resouce violdates your rules`
            }
          ]
        },
      ]
    },
    {
      "name": "AI/ML and analytics services",
      "groups": [
        {
          "name": "AI/ML Services",
          "services": [
            {
              "title": "Amazon SageMaker",
              "description": `Fully managed machine learning service that helps you build, train, and deploy machine learning models quickly and easily. It provides a comprehensive set of tools and features to support the entire machine learning workflow, from data preparation to model deployment.
                              Develop real-world applications: product recommendation features, robotics, voice-assisted devices`
            },
            {
              "title": "Amazon Lex",
              "description": `Build conversational interfaces using voice and text.
                              Amazon Lex provides the deep functionality and flexibility of natural language understanding (NLU) and automatic speech recognition (ASR) to create engaging user experiences.

                              Integrate voice assistance and chatbots to provide self-service customer service to your customers.`
            },
            {
              "title": "Amazon Polly **(not done)**",
              "description": `Turns text into lifelike speech using deep learning.
                              Amazon Polly allows you to create applications that talk, and build entirely new categories of speech-enabled products.`
            },
            {
              "title": "Amazon Kendra",
              "description": `Utilizes machine learning to help find answers faster with intelligent search capabilities.
                              Helps customers and employees find information they need when they need it, by utilizating natural langeuage processing (NLP) and machine learning to understand the context of the search query and provide relevant results. It can index and search unstructured data from various sources, such as documents, web pages, and databases, making it easier for users to find the information they need quickly and efficiently.

                              A highly accurate and easy-to-use enterprise search service powered by machine learning.
                              Amazon Kendra enables organizations to index and search unstructured and structured data across multiple sources, providing relevant answers to user queries.`
            }
          ]
        },
        {
          "name": "Data Analytics Services",
          "services": [
            {
              "title": "Amazon Athena",
              "description": `Interactive query service that makes it easy to analyze data in **Amazon S3** using **standard SQL**.
                              Amazon Athena is serverless, so there is no infrastructure to manage, and you pay only for the queries that you run.`
            },
            {
              "title": "Amazon Kinesis",
              "description": `Platform on AWS to collect, process, and analyze real-time, streaming data like video, audio, application logs, website clickstreams, and IoT telemetry data.
                              Amazon Kinesis makes it easy to load and analyze streaming data, and also provides the ability to build custom streaming data applications for specialized needs.`
            },
            {
              "title": "Amazon Glue",
              "description": `Integrates data from over 70 diverse data sources and prepares the data for analytics by cleaning, enriching, and transforming it. It provides a serverless environment to run your extract, transform, and load (ETL) jobs, and you only pay for the resources consumed while running those jobs.

                              Fully managed extract, transform, and load (ETL) service that makes it easy to prepare and load data for analytics.
                              Amazon Glue simplifies and automates the difficult and time-consuming tasks of data discovery, conversion, mapping, and job scheduling.`
            },
            {
              "title": "Amazon QuickSight",
              "description": `**Business intelligence (BI)** service that makes it easy to create and publish interactive dashboards that include ML Insights.
                              That help you quickly build **visualizations and perform ad-hoc analysis of your data**, and then publish the results to share with others.

                              Amazon QuickSight can automatically scale to tens of thousands of users without any infrastructure to manage, and you pay only for what you use.`
            },
            {
              "title": "Data Lake",
              "description": `A centralized repository that allows you to store all your **structured and unstructured** data at any scale.
                              AWS recommend using **Amazon S3** as the foundation for your data lake, because of its durability, scalability, and cost-effectiveness. Then use analytics services like Amazon Athena, Amazon Redshift, and Amazon EMR to analyze your data directly in the data lake without having to move it to a separate analytics system.

                              You can use AWS Lake Formation to set up and manage your data lake, making it easier to ingest, catalog, clean, and secure your data.
                              You can store your data as-is, without having to first structure it, and run different types of analytics—from dashboards and visualizations to big data processing,
                              real-time analytics, and machine learning to guide better decisions.`
            },
          ]
        },
      ]
    },
    {
      "name": "Database",
      "groups": [
        {
          "name": "Other database related services",
          "services": [
            {
              "title": "Relational database management system (RDBMS)",
              "description": "Stores data in a ways so that it relates to other pieces of data."
            },
            {
              "title": "AWS Database migration service (DMS)",
              "description": `Help make migration smooth Minimizing application downtime during database migrations
                              A key benefit of AWS DMS is that the source database remains fully operational during migration, which minimizes downtime to applications.`
            },
            {
              "title": "AWS Schema conversion tool (SCT)",
              "description": `Helps convert your database schema from one database engine to another.
                              A key benefit of AWS SCT is that it simplifies the process of migrating databases to AWS, reducing the time and effort required for schema conversion.`
            },
            {
              "title": "Amazon RDS test text",
              "description": `A ** managed relational database ** service that handles routine tasks.

            == Key Features:==
            - ** Multi - AZ deployment ** for high availability
            - ** Automated backups** for data resilience
            - Supports ** MySQL, PostgreSQL, Oracle **, and more`
            }
          ]
        },
        {
          "name": "Relational Database",
          "services": [
            {
              "title": "Amazon Relational Database Service (Amazon RDS)",
              "description": `A managed relational database service that handles routine database tasks such as backups, patching, and hardware provisioning. You can deploy on-premises with Amazon RDS on AWS Outposts.

                            Supports multiple database instance class types that optimize for memory, performance, or input / output(I / O).

                            To improve data resilience, Amazon RDS offers Multi - AZ deployment and automated backups.You can manually create backups using DB snapshots, which are full backups of your entire database instance, useful for specific point -in -time recovery or long - term data archiving purposes.

                            Amazon RDS offers security features including network isolation, encryption in transit, and encryption at rest.You can readily scale database resources vertically or horizontally as needed.

                           ** Supported database engines **
                            Amazon RDS supports different database engines, including Amazon Aurora, MySQL, PostgreSQL, Microsoft SQL Server, MariaDB, and Oracle Database.

                            Use cases
                            Some examples of practical use cases for Amazon RDS are web applications, enterprise workloads, and product inventories for e - commerce platforms.

                            Cost optimization
                            Amazon RDS eliminates the high upfront costs of purchasing and maintaining database hardware infrastructure.You only pay for the compute and storage resources that you consume through a flexible pay - as - you - go model.As a managed service, it also reduces operational expenses by automating time - consuming administrative tasks like backups, patching, and monitoring.

                            Multi - AZ deployment
                            Amazon RDS improves database reliability through Multi - AZ deployments.It automatically replicates data to a standby instance in a different Availability Zone.During system failures, maintenance, or zone disruptions, Amazon RDS automatically fails over to the standby instance without manual intervention.This ensures continuous database operations with minimal downtime.

                            Performance optimization
                            Amazon RDS enhances database performance through automated management of resource allocation, monitoring, and optimization tasks.It includes features like automated backups and read replicas that can help offload read traffic from the primary instance.Amazon RDS performance insights provide real - time monitoring and analysis of database load, to help you identify and resolve performance bottlenecks quickly.

                            Security controls
		                        Amazon RDS enhances database security through multiple layers of protection, including VPC isolation as well as encryption at rest and in transit.It leverages automated backups and offers Multi - AZ deployments to provide resiliency against potential system failures.`
            },
            {
              "title": "Amazon Aurora",
              "description": `Aurora is a Fully managed relational database engine designed to help reduce unnecessary I / O operations.It's compatible with **MySQL and PostgreSQL**, provides high performance and availability, and automatically scales alongside your workloads. Aurora replicates data across multiple Availability Zones for enhanced durability and fault tolerance, and features automated backups, encryption at rest, and continuous monitoring.
                                **One of the database engines supported by Amazon RDS.**

                                Use cases
                                Some examples of practical use cases for Aurora are gaming applications, media and content management, and real - time analytics.

                                High performance and availability
                                Aurora delivers up to five times the throughput of standard MySQL and three times the throughput of PostgreSQL.It uses a distributed storage system across multiple nodes to provide high performance and availability.

                                Automated storage and backup management
                                Aurora automatically grows storage from ** 10 GB to 128 TB ** based on your actual data usage, which eliminates guesswork in capacity planning.It also continuously backs up your database to Amazon Simple Storage Service(Amazon S3) to provide point -in -time recovery.

                                Advanced replication and fault tolerance
                                Aurora replicates data across three Availability Zones with six copies of data, and provides 99.99 % availability.It automatically detects database failures and redirects traffic to healthy replicas without data loss.

                                The Aurora distributed storage architecture offers up to five times the throughput of standard MySQL while maintaining compatibility.It was specifically designed to handle high transaction workloads by distributing I / O across multiple storage nodes`
            }
          ]
        },
        {
          "name": "NoSQL Database",
          "services": [
            {
              "title": "NoSQL databases",
              "description": `NoSQL databases are sometimes referred to as non - relational databases because their structures are different than relational databases like Amazon RDS.Instead of row and column relationships, NoSQL databases build a structure for the data that they contain using key-value pairs instead.With key - value pairs, data is organized into items identified by unique keys.

                            Each key has one or more associated attributes, or values, that represent various characteristics of the data.You can think of a key as a word entry in a dictionary, and the value as its associated definition.Not every item in the table has to have the same attributes, and you can add or remove attributes at any time

                            Name: John Doe
                            Address: 123 Any Street
                            Favorite drink: Medium latte`
            },
            {
              "title": "Amazon DynamoDB",
              "description": `DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance for both document and key - value data structures.It's a powerful and incredibly fast database option for use cases that require a flexible schema, and is ideal for applications that require high performance and seamless scaling.

                            DynamoDB seamlessly scales alongside your data without impacting performance, which means that you only pay for the resources that you use.It also includes built -in security features for enhanced protection, and automatically spreads your data across multiple servers to handle your workload.

                            Use cases
                            Some examples of practical use cases for DynamoDB are gaming platforms, financial service applications, and mobile applications with global user bases.

                            Scalability with provisioned capacity
                            DynamoDB automatically scales throughput up or down based on actual usage, which ensures consistent performance without manual intervention.You can specify target utilization levels, and DynamoDB automatically provisions capacity to maintain those targets.With no practical limits on table size or the amount of data stored, DynamoDB can seamlessly accommodate growing applications.

                            Consistent high performance
                            DynamoDB delivers single - digit millisecond response times at any scale, which makes it ideal for high - performance applications.It maintains consistent performance by automatically distributing data across multiple servers and SSDs.

                            High availability and durability
                            DynamoDB delivers 99.999 % data availability by replicating data across three distinct facilities within each AWS Region.It also maintains multiple copies in separate AWS Regions, to provide built -in fault tolerance and data durability.This ensures continuous operation and protection against data loss even if individual facilities fail.

                            Data encryption
                            DynamoDB offers comprehensive encryption capabilities to protect information both at rest and in transit.All data is automatically encrypted behind the scenes before being written to the storage layer.DynamoDB includes the flexibility to choose between different kinds of encryption keys for customized security control.`
            }
          ]
        },
        {
          "name": "In-Memory Database/Cache",
          "services": [
            {
              "title": "In-memory caches",
              "description": `An in -memory cache is a high - speed storage layer that temporarily stores frequently accessed data in a computer's main memory, or RAM. Retrieving data from RAM provides extremely fast processing and retrieval speeds, often hundreds or thousands of times faster than traditional disk-based storage systems.

                            When applications need specific information, they first check the cache before requesting it from the original data source.This reduces the load on primary databases and speeds up response times for end users.In - memory caches are ideal for storing session data, API responses, database query results, and other information that applications require repeatedly.`
            },
            {
              "title": "Caching layer",
              "description": `	Reduce database volume
                            Storing frequency access data into a fast location
                            Stored in system mermory(cache)
                            Near - instantaneous access to data
                            Reduces strain on backend
                            Cache method
                            Redis OSS, valkey, memcached.`
            },
            {
              "title": "Amazon ElastiCache",
              "description": `	ElastiCache is a fully managed in -memory caching service that was built to help reduce the complexity of administering in -memory caching systems.This means that you can continue to use the same Redis, Valkey, or Memcached tools and configurations to scale your workloads.It automatically detects and replaces failed nodes, which makes it ideal for applications that need consistent high performance.
                                Fully managed redis and memcache compatible service.

                                Use cases
                                Some examples of practical use cases for ElastiCache are session data management, database query enhancement, and gaming leaderboards.

                                Benefits
                                High performance for Redis, Valkey, or Memcached instances
                                ElastiCache streamlines the deployment and maintenance of in -memory caching environments, offering high availability for Redis, Valkey, and Memcached by automatically handling hardware provisioning, software patching, and monitoring.ElastiCache offers seamless scalability so you can add or remove nodes as demand changes.


                                High availability
                                ElastiCache provides high availability by constantly monitoring primary nodes for potential failures.When issues are detected, it maintains application availability while promoting a replica node to become the new primary without manual intervention.The entire recovery process typically finishes within minutes, which minimizes downtime and preserves operations during infrastructure disruptions.


                                Replication across multiple Availability Zones
                                ElastiCache enables automatic replication across multiple Availability Zones to protect against infrastructure failures.You can configure primary and replica nodes across different Availability Zones according to their durability requirements.This helps to ensure that data remains accessible even if one zone experiences an outage.

                                Data encryption
                                ElastiCache supports data encryption mechanisms to safeguard sensitive information throughout its lifecycle.At - rest encryption protects data while stored in disk storage and automated backups.In - transit encryption secures data traveling between clients and cache nodes by employing transport layer security, or TLS, for encrypted connections.`
            },
            {
              "title": "Amazon MemoryDB for Redis",
              "description": `Provides support quick reads and writes for scalability that can power mobile and web applications.`
            },
            {
              "title": "Amazon Dynamodb Accelerator (DAX)",
              "description": `Managed in memory cache for DynamoDB that delivers up to a 10x performance improvement for read - intensive workloads.`
            }
          ]
        },
        {
          "name": "Additional Database Services",
          "services": [
            {
              "title": "Amazon DocumentDB",
              "description": `	Amazon DocumentDB(with MongoDB compatibility) is fully managed service designed to handle semistructured data, which is information that doesn't conform to rigid relational schemas. Amazon DocumentDB is a MongoDB-compatible database, so it manages JSON-like documents with dynamic schemas.

                                Amazon DocumentDB is perfect for applications requiring frequent schema changes and document - oriented data.Unlike relational databases or nonrelational databases, you can quickly iterate without relying on predefined schemas.Amazon DocumentDB can store, query, and index JSON data effortlessly, all while benefiting from automatic scaling, continuous backup, and enterprise - grade security features.

                                Use cases
                                Some examples of practical use cases for Amazon DocumentDB are content management systems, catalog and inventory management, and user profile and personalization systems.

                                Benefits
                                MongoDB compatibility
                                Amazon DocumentDB is fully compatible with MongoDB workloads and supports MongoDB APIs, drivers, and tools.This compatibility means that you can use existing MongoDB code and skills without modification.You can also migrate MongoDB applications to Amazon DocumentDB with minimal changes to their application code.

                                Performance and scalability
                                Amazon DocumentDB automatically scales storage up to 64 TB in 10 GB increments based on your application needs.It can handle millions of requests per second with consistent performance.It also provides the option to scale compute resources up or down as needed.

                                Increased read throughput
                                Amazon DocumentDB improves read throughput for high - volume applications by creating up to 15 replica instances that share underlying storage.

                                Storing and managing a large product catalog for an ecommerce application
                                Amazon DocumentDB excels at handling semistructured data like product catalogs.`
            },
            {
              "title": "AWS Backup",
              "description": `	AWS Backup streamlines data protection across various AWS resources and on - premises deployments by providing a single dashboard for monitoring and managing backups.It eliminates the complexity of managing multiple backup strategies by supporting multiple storage types, including Amazon Elastic Block Store(Amazon EBS) volumes, Amazon Elastic File System(Amazon EFS) file systems, and various databases.

                                AWS Backup centralizes and automates data protection processes, improving consistency and reducing administrative overhead.It offers flexible scheduling options, encryption capabilities, and cross - Region backup support for enhanced disaster recovery.

                                Use cases
                                Some examples of practical use cases for AWS Backup are centralized disaster recovery, consistent backup policies for compliance requirements, and consolidating multiple backup processes through a single interface.

                                Centralized backup management
                                AWS Backup provides a single dashboard to manage backups across multiple AWS services and accounts.You can monitor backup jobs, restore points, and verify compliance status from one central location to reduce operational complexity and potential configuration errors.

                                You can create automated backup schedules that align with your business requirements and compliance needs.You can set up backup policies that automatically protect new resources as they're created.

                                Cross - region backup redundancy
                                AWS Backup enables automatic replication of backup data across different AWS Regions for disaster recovery purposes.You can quickly restore data from secondary Regions if the primary Region experiences an outage.Cross - Region redundancy helps you meet compliance requirements while guaranteeing data accessibility during Regional failures.

                                Streamlined regulatory compliance
                                AWS Backup maintains detailed audit logs and reports to demonstrate compliance with regulatory requirements.You can use it to enforce backup policies across your organization and track backup activities for security and compliance purposes.`
            },
            {
              "title": "Amazon Neptune",
              "description": `	Neptune is a ** fully managed **, purpose - built graph database service that manages highly connected data sets, like those used in social networking applications.It excels at understanding complex relationships that are difficult to identify in traditional relational databases like user connections, friend networks, and interaction patterns.Neptune can maintain high performance even as data complexity grows, and offers high availability with automatic failover and backups.

                                Use cases
                                Some examples of practical use cases for Amazon Neptune are social network user connection mapping, fraud detection systems, and search and recommendation systems.

                                Purpose - built for complex relationships
                                Neptune excels at storing and querying highly connected data using graph models.It supports both property graph and resource description framework, or RDF, models making it ideal for relationship mapping and pattern matching applications.

                                High performance and scalability
                                Neptune delivers consistent performance at scale, processing billions of relationships in milliseconds.It automatically grows storage up to 64 TB based on your application needs.Its purpose - built engine optimizes graph queries to enable fast traversal of connected data points at scale.

                                Neptune provides low - latency and high - throughput performance for both read and write operations, making it suitable for real - time applications working with connected data.
                                Neptune is optimized for storing and querying highly connected data with millisecond latency.

                                ** A graph database service optimized for storing and querying highly connected data relationships ** `
            },
            {
              "title": "Amazon Quantum Ledger Database (QLDB)",
              "description": `is a fully managed, serverless ledger database offering an immutable, transparent, and cryptographically verifiable transaction log for tracking all application data changes`
            },
            {
              "title": "Amazon managed blockchain",
              "description": `Help manage blockchain network`
            },
            {
              "title": "Aws database accelerator options",
              "description": `Dynamodb accelator(DAX) Cache layer for non relational data`
            },
            {
              "title": "Amazon Redshift",
              "description": `Fully managed - no server to provision or manage
                              **Petabyte scale** data warehousing service in the cloud
                              Faster and cheaper than other warehousing solutions
                              **Data warehouse**: stores extremely large amounts of data and is optimized for complex queries and analysis.
                              Secure, quick to set-up, and easy to scale.`
            }
          ]
        }
      ]
    },
    {
      "name": "Compute",
      "groups": [
        {
          "name": "Virtual Machines",
          "services": [
            {
              "title": "Amazon EC2 (Elastic Compute Cloud)",
              "description": `Elastic Compute Cloud provides secure, resizable compute capacity in the cloud. Wide selection of instance types optimized for different use cases.
                              Offers a variety of pricing options, including on - demand, reserved, and spot instances, to help you optimize costs based on your workload requirements.

                              **Instance types**
                              - General purpose: balanced compute, memory, and networking resources for a wide range of applications.
                              - Compute optimized: ideal for compute - intensive workloads that require high performance. Such scientific modeling, gaming servers, and high - performance web servers.
                              - Memory optimized: designed for memory - intensive workloads that require high memory capacity. for Large in - memory databases, real - time big data analytics, and high - performance computing.
                              - Storage optimized: optimized for workloads that require high, sequential read and write access to large data sets on local storage.
                              - Accelerated computing: ideal for workloads that require hardware accelerators, such as GPUs or FPGAs, for machine learning, high - performance computing, and graphics processing.`

            },
            {
              "title": "Amazon Lightsail",
              "description": `Easy-to-use virtual private server (VPS) with simple management. Includes everything you need to launch your project quickly.
                              **Good for simple workfloads and users new to cloud computing.**
                              Preconfigured and ready-to-use virtual private servers (VPS) that provide a simple way to launch and manage a virtual machine on AWS. It includes everything you need to get started, such as a virtual machine, SSD-based storage, data transfer, DNS management, and a static IP address.
                              create website and run business software
                              cost effective monthly fees
                              one-click-to-launch services, including WordPress, Magento, and LAMP stack.
                              easy to quickly deploy projects`
            }
          ]
        },
        {
          "name": "Containers and Orchestration",
          "services": [
            {
              "title": "containers",
              "description": `Similar to virtual machines, but more lightweight and portable. They package applications and their dependencies together, allowing for consistent environments across development,
                              testing, and production. Containers share the host system's kernel, making them more efficient than traditional virtual machines.`
            },
            {
              "title": "Amazon ECS (Elastic Container Service)",
              "description": `Elastic Container Service is a fully managed container orchestration service. Deep integration with AWS services for production workloads.
                              Helps you run and scale containerized applications on AWS with ease. It supports Docker containers and allows you to easily run and scale containerized applications using simple APIs.`
            },
            {
              "title": "Amazon EKS (Elastic Kubernetes Service)",
              "description": `An open source container orchestration service that makes it easy to deploy, manage, and scale containerized applications using Kubernetes on AWS.

                              Elastic Kubernetes Service makes it easy to run Kubernetes on AWS without managing the control plane. Certified Kubernetes conformant.

                              Amazon EKS is a fully managed Kubernetes service that makes it easy to run Kubernetes on AWS without needing to manage the Kubernetes control plane.
                              It is certified Kubernetes conformant, which means you can use existing Kubernetes tools and plugins with Amazon EKS. With Amazon EKS,
                              you can easily run and scale containerized applications using Kubernetes on AWS.`
            }
          ]
        },
        {
          "name": "Other services",
          "services": [
            {
              "title": "AWS Elastic Beanstalk",
              "description": ` Infrastructure as a code (IaC) service that makes it easy to deploy and manage applications in the AWS cloud.
                              Handles deployment, capacity provisioning, load balancing, and **auto-scaling** for web applications. Supports multiple programming languages and platforms.
                              accomodates services developed in Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker on familiar servers such as Apache, Nginx, Passenger, and IIS.

                              Free to use, you only pay for the underlying AWS resources that your application consumes.
                              allows manual management of infrastructure if you want more control, while still providing the benefits of a managed service.`
            },
            {
              "title": "Elastic Load Balancing",
              "description": `Automatically distributes incoming application traffic across multiple targets, such as Amazon EC2 instances, containers, and IP addresses. Helps ensure high availability and fault tolerance.
                              Fault tolerance and high availability: Elastic Load Balancing automatically distributes incoming application traffic across multiple targets, such as Amazon EC2 instances, containers, and IP addresses.
                              This helps ensure that your applications remain available and responsive even if some targets become unhealthy or unavailable.
                              Monitors the health of servers`
            }
          ]
        },
        {
          "name": "Serverless",
          "services": [
            {
              "title": "AWS Lambda",
              "description": `Infrastructure as a code (IaC) service that makes it easy to deploy and manage applications in the AWS cloud.
                              Run code without provisioning or managing servers. Automatically scales based on demand. Pay only for the compute time you consume.
                              Event driven, serverless compute service that lets you run code without provisioning or managing servers. You can use AWS Lambda to run code for virtually any type of application or backend service with zero administration. Just upload your code, and Lambda takes care of everything required to run and scale your code with high availability. You pay only for the compute time you consume - there is no charge when your code is not running.`
            },
            {
              "title": "AWS Fargate",
              "description": `Serverless compute engine for **containers**. Works with both **ECS and EKS**. Eliminates the need to provision and manage servers.
                              AWS Fargate is a serverless compute engine for containers that works with both Amazon Elastic Container Service (ECS) and Amazon Elastic Kubernetes Service (EKS).
                              With AWS Fargate, you no longer have to provision, configure, or manage virtual machines to run containers.
                              WS Fargate eliminates the need to choose server types, decide when to scale your clusters, or optimize cluster packing. You can focus on designing and building your applications instead of managing the infrastructure that runs them.`
            }
          ]
        }
      ]
    },
    {
      "name": "Storage",
      "groups": [
        {
          "name": "Object Storage",
          "services": [
            {
              "title": "Description",
              "description": `Files are broken into pieces and stored as objects in buckets. Each object has a unique identifier and metadata.
                              Ideal for unstructured data like **images, videos, and backups**.
                              Good for **static data** that doesn't change frequently, and can be accessed via APIs.
                              Components of an object storage system include **data**, **identifier**, and **metadata**.`
            },
            {
              "title": "Amazon S3 (Simple Storage Service)",
              "description": `Simple Storage Service offers industry-leading scalability, data availability, security, and performance. Store and retrieve any amount of data at any time.
                              Has 99.999999999 % durability and 99.99 % availability of objects over a given year. Provides comprehensive security and compliance capabilities that meet even the most stringent regulatory requirements.`
            },
            {
              "title": "Amazon Glacier (Glacier)",
              "description": `Low-cost cloud storage service for data archiving and long-term backup. Secure, durable, and extremely low-cost storage for data that is rarely accessed.`
            },
            {
              "title": "Amazon S3 Deep Archive (S3 Deep Archive)",
              "description": `Lowest cost storage class for long-term data archiving that is accessed once or twice a year. Ideal for data that can be retained for 7-10 years or more, such as compliance archives and digital preservation.`
            },
            {
              "title": "Amazon S3 Storage classes",
              "description": `Amazon S3 offers a range of storage classes designed to meet different use cases and cost requirements.
                                These include S3 Standard, S3 Intelligent-Tiering, S3 Standard-IA (Infrequent Access), S3 One Zone-IA (Infrequent Access), S3 on outpost, S3 Glacier (instant retrieval), S3 Glacier (flexible retrieval), and S3 Glacier Deep Archive.
                                Each class provides varying levels of durability, availability, and cost.

                                **S3 Standard**: general-purpose storage for frequently accessed data. Offers high durability and availability.
                                **S3 Intelligent-Tiering**: automatically moves data to the most cost-effective access tier based on changing access patterns.
                                **S3 Standard-IA**: for data that is accessed less frequently but requires rapid access when needed. Offers lower storage costs compared to S3 Standard. For data that is accessed monthly with millisecond retrieval.
                                **S3 One Zone-IA**: for infrequently accessed data that can be stored in a single Availability Zone. For data that don't requrement multi-AZ redundancy. Offers lower cost than S3 Standard-IA but with less availability and durability.
                                **S3 on outpost**: for data that needs to remain on-premises due to latency or data residency requirements. Offers the same durability and availability as S3 Standard.
                                                    Object storage for on-premises AWS Outposts environments. Provides the same durability and low latency access as S3 in the cloud, but is designed for workloads that require data to remain on-premises due to latency or data residency requirements.

                                **S3 Glacier (instant retrieval)**: for data archiving with retrieval times in milliseconds. Offers low-cost storage for data that is rarely accessed but requires immediate retrieval when needed.
                                **S3 Glacier (flexible retrieval)**: for data archiving with retrieval times in minutes to hours. Offers low-cost storage for data that is rarely accessed and does not require immediate retrieval.
                                                                      low-cost storage with low retrival fees for archived or backed-up data with 1-5 minutes, 3-5 hours, or 12 hours retrieval time.
                                **S3 Glacier Deep Archive**: for long-term data archiving with retrieval times in hours. Offers the lowest cost storage option for data that is rarely accessed and can be retained for 7-10 years or more.
                                                              12 or 48 hours retrieval time for long-term data archiving that is accessed once or twice a year.`
            }
          ]
        },
        {
          "name": "Block Storage",
          "services": [
            {
              "title": "Description",
              "description": `Stores data in units of blocks. Utilizes unique identifiers to access specific blocks.
                              **When data is requested, the blocks are retrieved and assembled to form the complete file.**
                              Ideal for databases and applications that require low-latency access to data.
                              Provides high performance and is often used for boot volumes, databases, and applications that require consistent, low-latency storage.`
            },
            {
              "title": "Amazon EBS (Elastic Block Store)",
              "description": `Elastic Block Store provides persistent block storage volumes for EC2 instances. Designed for workloads requiring low-latency access.
                              Raw unformatted blok device attached to an EC2 isntance. Can add multiple EBS volumnes to one EC2 instance.
                              Automatically replicated within its availability zone.
                              Persistent block storage volumes which do not disappear when the EC2 instance is stopped or terminated.
                              Can be encrypted for data security.`
            },
            {
              "title": "Amazon instance store",
              "description": `Attached physically to the EC2 host, which provides high I/O performance
                              Data is deleted when EC2 is stopped or terminated
                              Block storage that is attached to EC2 `
            }
          ]
        },
        {
          "name": "File Storage",
          "services": [
            {
              "title": "Description",
              "description": `Files are stored in a hierarchical structure with directories and subdirectories. Ideal for shared file storage and applications that require a traditional file system interface.`
            },
            {
              "title": "Amazon EFS (Elastic File System) **not complete**",
              "description": "Elastic File System provides simple, scalable, elastic file storage for use with AWS Cloud services and on-premises resources."
            },
            {
              "title": "Amazon FSx",
              "description": "Fully managed third-party file systems. Supports Windows File Server, Lustre, NetApp ONTAP, and OpenZFS."
            }
          ]
        },
        {
          "name": "AWS Snow Family",
          "services": [
            {
              "title": "Description",
              "description": `AWS hybrid cloud service that extends AWS infrastructure and services into the edge, where customers physically reside.
                              These are physical devices that are shipped to customers for data transfer and edge computing use cases.`
            },
            {
              "title": "AWS Snowcone",
              "description": `Tiny  at 4.5 lb, 8 TB of HDD storage and 14 TB of SSD storage, and 2 vCPUs with 4 GB of memory.
                              Provides edge computing capabilities and data transfer for environments with limited space and power. Ideal for use cases like edge computing, data collection, and data transfer to AWS.
                              Trasfer data back to AWS over the internet using AWS DataSync or AWS Snowball Edge.
                              Ship device back to AWS for rapid offline data trasfer.`
            },
            {
              "title": "AWS Snowball",
              "description": `Medium size solution, weighing 45 lb, with 80-210 TB of storage , and 80-416 vCPUs with 10-42 TB of memory.
                              Can choose between compute optimized or storage optimized.
                              Transfer data to the device to ship back to AWS or utilize its compute capabilities to do local processing.`
            },
            {
              "title": "AWS Snowmobile",
              "description": `Exabyte-scale data transfer service used to move extremely large amounts of data to AWS.
                              100 petabytes of data per Snowmobile, and can be used for data center migrations, disaster recovery, and large-scale data transfer projects.
                              Snowmobile is a 45-foot long ruggedized shipping container, pulled by a semi-trailer truck.
                              Ideal for large-scale data migrations, such as moving entire data centers to AWS.
                              Both **AWS Snowball edge and AWS Snowmobile are HIPAA eligible**, and can be used for secure data transfer in compliance with healthcare regulations.`
            }
          ]
        },
        {
          "name": "Other storage services",
          "services": [
            {
              "title": "AWS storage gateway",
              "description": `Hybrid storage solution.
                              S3 -> storage gateway -> on premise storage
                              Uses virtual machines to connect storage on-premises with AWS cloud storage. Provides seamless integration for backup, archiving, and disaster recovery use cases.
                              Has 3 types of gateways: file gateway, volume gateway, and tape gateway.
                              **File gateway**: Files stored as objects in S3, accessed via NFS or SMB protocols. One to one representation of files in S3 buckets. Ideal for file-based applications and backup use cases
                                                Asynchronous updates as local files are updated. Local Cache to provide low-latency access to frequently accessed data.

                              **Volume gateway**: Block storage volumes stored, accessed via iSCSI protocol. Volumes can be cached or stored entirely in the cloud. Ideal for applications that require low-latency access to data.
                                                  Asynchronous backed up as point-in-time snapshots and stored as Elastic Block Store (EBS) snapshots in AWS. Local cache to provide low-latency access to frequently accessed data.
                                                  Stored volume: complete copy on-premises and send snapshots to AWS.
                                                  Cached volume: store frequently accessed data on-premises and asynchronously back up all data to AWS.

                              **Tape gateway**: Virtual tape library (VTL) that stores virtual tapes in S3. Accessed via iSCSI protocol. Ideal for backup and archival use cases that require tape-based workflows.
                                                Uses existing tape-based backup infrastructure to back up to virtual tapes.
                                                Data stored locally, then asynchronously backed up to AWS. Virtual tapes can be archived in Amazon S3 Glacier for long-term retention.
                                                Data can be archived in Amazon S3 Glacier for long-term retention.

                              Pricing: you pay for storage and to access stored data. The quicker you can access the data, the more expensive it is.
                                        For example data stored via tape gateway is much cheaper when saved to S3 Glacier Deep archive comapred to S3 Glacier`
            },
            {
              "title": "AWS Backup",
              "description": `Back up as a solution. Fully manged backup service that makes it easy to centralize and automate the backup of data across AWS services and on-premises environments. Provides a single dashboard to manage backups, set backup policies, and monitor backup activity.
                              Exabyte scale.
                              Provides data protection for AWS resources such as Amazon EBS volumes, Amazon RDS databases, Amazon DynamoDB tables, Amazon EFS file systems, and AWS Storage Gateway volumes. It also supports on-premises backup through the AWS Storage Gateway.`
            }
          ]
        }
      ]
    },
    {
      "name": "Other services",
      "groups": [
        {
          "name": "Business Application services",
          "services": [
            {
              "title": "Description",
              "description": `These services help organizations meet customer needs`
            },
            {
              "title": "Amazon SES (Simple Email Service) (not done)",
              "description": `Amazon Simple Email Service (SES) is a cloud-based email sending service designed to help digital marketers and application developers send marketing, notification, and transactional emails.
              It provides a reliable, scalable, and cost-effective way to send and receive email using your own email addresses and domains.
                              SES integrates with other AWS services, making it easy to send emails from applications hosted on AWS.
                              It offers features such as email authentication, dedicated IP addresses, and analytics to monitor email delivery and engagement.`
            },
            {
              "title": "Amazon Connect (not done)",
              "description": `Amazon Connect is a cloud-based contact center service that makes it easy to set up and manage a customer contact center. It provides a seamless experience for customers and agents, enabling efficient handling of customer interactions across multiple channels, including voice, chat, and email.
                              Connect integrates with other AWS services to provide a comprehensive solution for customer engagement and support.

                              It offers features such as automated call routing, real-time and historical analytics, and integration with CRM systems to improve customer service and operational efficiency.`
            },
          ]
        },
        {
          "name": "Customer Engagement services",
          "services": [
            {
              "title": "Description",
              "description": `Customer engagement services at AWS engage with their customers throughout their lifecycle to provide the best customer service experience possible.`
            },
            {
              "title": "AWS Activate for Startups (not done)",
              "description": `provides smaller and more advanced startups free tools and resources to get up to speed quickly on AWS including AWS credits, support credits and AWS solution templates tailored to startup use cases.

                              AWS Activate provides startups with resources they need to quickly get started on AWS, including credits, training, and support.
                              It helps startups build and scale their applications on AWS by providing access to technical support, training, and a variety of AWS services.
                              AWS Activate also offers a community of startups and experts to help guide and support new businesses.`
            },
            {
              "title": "Amazon IQ (not done)",
              "description": `links you up with AWS certified experts pre-vetted by AWS providing on-demand access to experts to help you complete projects faster.

                              Amazon IQ is a service that provides insights and analytics to help businesses understand customer behavior and preferences. It enables organizations to make data-driven decisions to improve customer engagement and satisfaction.
                              Amazon IQ integrates with other AWS services to provide a comprehensive solution for customer insights and analytics.

                              It offers features such as real-time data processing, predictive analytics, and integration with CRM systems to enhance customer engagement and operational efficiency.`
            },
            {
              "title": "AWS Managed Services (not done)",
              "description": `AWS managed services or AMS provides infrastructure operations management for your AWS infrastructure with full lifecycle services to provision, run and support your infrastructure.

                              AWS Managed Services (AMS) provides ongoing management of your AWS infrastructure, allowing you to focus on your applications and business. AMS helps you operate your AWS environment efficiently and securely by automating common activities such as change requests, monitoring, patch management, security, and backup services.
                              It offers a range of services including infrastructure management, security and compliance, and operational support, helping organizations reduce operational overhead and improve reliability.`
            },
            {
              "title": "AWS Support (not done)",
              "description": `AWS Support and customer service resources are also a big part of AWS's customer engagement ecosystem with general support services,
                              multiple self-service resources, and AWS support plans amongst many other resources to help you ask questions, troubleshoot,
                              and help build infrastructure aligned with best practices.

                              AWS Support provides a range of plans to help you optimize your AWS environment, resolve issues, and improve your cloud operations. It offers technical support, guidance, and best practices to ensure your applications run smoothly on AWS.
                              AWS Support includes features such as 24/7 access to Cloud Support Engineers, proactive guidance, and access to AWS Trusted Advisor for best practice recommendations.`
            },
          ]
        },
        {
          "name": "Developer Tools Services/Capabilities",
          "services": [
            {
              "title": "Description",
              "description": `These services help you version control your source code and build test and deploy your applications to AWS or your on premises environment.`
            },
            {
              "title": "AWS AppConfig (not done)",
              "description": `AWS AppConfig is a service that allows you to manage application configurations separately from your code. It helps you deploy application configurations in a controlled and monitored way, reducing the risk of errors and downtime.
                              AppConfig integrates with other AWS services, making it easy to manage configurations for applications hosted on AWS.
                              It offers features such as validation, deployment strategies, and monitoring to ensure configurations are applied safely and effectively.`
            },
            {
              "title": "AWS Cloud9 (not done)",
              "description": `AWS Cloud9 is a cloud-based integrated development environment (IDE) that allows you to write, run, and debug code with just a browser. It provides a seamless experience for developers, enabling them to collaborate in real-time and access their development environment from anywhere.

                              Cloud9 integrates with other AWS services to provide a comprehensive development experience.
                              It offers features such as code completion, debugging, and terminal access to improve developer productivity and operational efficiency.`
            },
            {
              "title": "AWS CloudShell (not done)",
              "description": `AWS CloudShell is a browser-based shell that makes it easy to securely manage, interact with, and explore your AWS resources. It provides a pre-authenticated shell environment with the AWS CLI and other tools installed, allowing you to quickly run commands and scripts without needing to configure a local environment.

                              CloudShell integrates with other AWS services to provide a seamless management experience.
                              It offers features such as persistent storage, session management, and access to AWS resources to improve operational efficiency and productivity.`
            },
            {
              "title": "AWS CodeArtifact (not done)",
              "description": `AWS CodeArtifact is a fully managed artifact repository service that makes it easy for organizations to securely store, publish, and share software packages used in their development process. It helps teams manage their dependencies and ensures that they are using trusted and up-to-date packages.

                              CodeArtifact integrates with other AWS services to provide a comprehensive software development experience.
                              It offers features such as package versioning, access control, and integration with build tools to improve developer productivity and operational efficiency.`
            },
            {
              "title": "AWS CodeBuild (not done)",
              "description": `AWS CodeBuild is a fully managed continuous integration service that compiles source code, runs tests, and produces software packages that are ready to deploy. It eliminates the need to provision, manage, and scale your own build servers.

                              CodeBuild integrates with other AWS services to provide a comprehensive continuous integration and delivery experience.
                              It offers features such as build automation, scalability, and integration with source control systems to improve developer productivity and operational efficiency.`
            },
            {
              "title": "AWS CodeCommit (not done)",
              "description": `AWS CodeCommit is a fully managed source control service that makes it easy for teams to host secure and scalable Git repositories. It eliminates the need to manage your own source control system or worry about scaling its infrastructure.

                              CodeCommit integrates with other AWS services to provide a comprehensive software development experience.
                              It offers features such as automated backups, encryption, and integration with CI/CD tools to improve developer productivity and operational efficiency.`
            },
            {
              "title": "AWS CodeDeploy (not done)",
              "description": `AWS CodeDeploy is a fully managed deployment service that automates application deployments to various compute services, including Amazon EC2, AWS Lambda, and on-premises servers. It helps you release new features quickly and reliably.

                              CodeDeploy integrates with other AWS services to provide a comprehensive continuous delivery experience.
                              It offers features such as automated deployments, rollback capabilities, and integration with CI/CD tools to improve developer productivity and operational efficiency.`
            },
            {
              "title": "AWS CodePipeline (not done)",
              "description": `AWS CodePipeline is a fully managed continuous delivery service that helps you automate your release pipelines for fast and reliable application and infrastructure updates. It allows you to model, visualize, and automate the steps required to release your software.
                  `
            },
            {
              "title": "AWS CodeStar (not done)",
              "description": `AWS CodeStar is a cloud-based integrated development environment (IDE) that allows you to write, run, and debug code with just a browser. It provides a seamless experience for developers, enabling them to collaborate in real-time and access their development environment from anywhere.
                  `
            },
            {
              "title": "AWS X-Ray (not done)",
              "description": `AWS X-Ray helps developers analyze and debug production, distributed applications, such as those built using a microservices architecture. With X-Ray, you can understand how your application and its underlying services are performing to identify and troubleshoot the root cause of performance issues and errors.
              `
            },
          ]
        },
        {
          "name": "End-user Computing services",
          "services": [
            {
              "title": "Description",
              "description": `End-user computing services allow employees to securely access desktops and other applications from a variety of devices. You might have heard of or used applications that allow you to remotely access your work computer, sometimes called remote desktops or virtual desktop infrastructure (VDI).`
            },
            {
              "title": "AWS AppStream 2.0 (not done)",
              "description": `AWS AppConfig is a service that allows you to manage application configurations separately from your code. It helps you deploy application configurations in a controlled and monitored way, reducing the risk of errors and downtime.
                              AppConfig integrates with other AWS services, making it easy to manage configurations for applications hosted on AWS.
                              It offers features such as validation, deployment strategies, and monitoring to ensure configurations are applied safely and effectively.`
            },
            {
              "title": "AWS WorkSpaces (not done)",
              "description": `AWS WorkSpaces is a cloud-based integrated development environment (IDE) that allows you to write, run, and debug code with just a browser. It provides a seamless experience for developers, enabling them to collaborate in real-time and access their development environment from anywhere.

                              WorkSpaces integrates with other AWS services to provide a comprehensive development experience.
                              It offers features such as code completion, debugging, and terminal access to improve developer productivity and operational efficiency.`
            },
            {
              "title": "AWS WorkSpaces Web (not done)",
              "description": `AWS WorkSpaces Web is a browser-based shell that makes it easy to securely manage, interact with, and explore your AWS resources. It provides a pre-authenticated shell environment with the AWS CLI and other tools installed, allowing you to quickly run commands and scripts without needing to configure a local environment.

                              WorkSpaces Web integrates with other AWS services to provide a seamless management experience.
                              It offers features such as persistent storage, session management, and access to AWS resources to improve operational efficiency and productivity.`
            },
          ]
        },
        {
          "name": "Front-End Web and Mobile services",
          "services": [
            {
              "title": "Description",
              "description": `Front-end web and mobile services on AWS are tools that are built on top of AWS, so that you benefit from the reliability of AWS and build web and mobile apps faster with the most well-known service being AWS Amplify. They make it simple to innovate with end-to-end solutions, to develop, test, and monitor your applications, as well as scale seamlessly across the globe. Services that are in-scope for IoT services are AWS IoT Core and AWS IoT Greengrass.`
            },
            {
              "title": "AWS Amplify (not done)",
              "description": `AWS Amplify is a service that allows you to manage application configurations separately from your code. It helps you deploy application configurations in a controlled and monitored way, reducing the risk of errors and downtime.
                              Amplify integrates with other AWS services, making it easy to manage configurations for applications hosted on AWS.
                              It offers features such as validation, deployment strategies, and monitoring to ensure configurations are applied safely and effectively.`
            },
            {
              "title": "AWS AppSync (not done)",
              "description": `AWS Cloud9 is a cloud-based integrated development environment (IDE) that allows you to write, run, and debug code with just a browser. It provides a seamless experience for developers, enabling them to collaborate in real-time and access their development environment from anywhere.

                              Cloud9 integrates with other AWS services to provide a comprehensive development experience.
                              It offers features such as code completion, debugging, and terminal access to improve developer productivity and operational efficiency.`
            },
          ]
        },
        {
          "name": "IoT services",
          "services": [
            {
              "title": "Description",
              "description": `They help you connect and manage IoT devices and data.`
            },
            {
              "title": "AWS IoT Core (not done)",
              "description": ``
            },
            {
              "title": "AWS Greengrass (not done)",
              "description": `AWS Greengrass is a service that extends AWS functionality to edge devices, allowing them to act locally on the data they generate while still using the cloud for management, analytics, and storage.

                              Greengrass integrates with other AWS services to provide a comprehensive IoT solution.
                              It offers features such as local compute, messaging, data caching, and machine learning inference to improve device functionality and operational efficiency.`
            },
          ]
        },
      ]
    },
    {
      "name": "Billing and Cost Management",
      "groups": [
        {
          "name": "Concepts and services",
          "services": [
            {
              "title": "AWS Billing Dashboard",
              "description": `Estimate and plan for your aws cost
                              simplify account with multiple AWS accounts through consolidated billing.
                              Receive alerts for service usage and spending thresholds.
                              Visualize monthly costs and usage patterns with detailed reports and graphs.

                              The AWS Billing Dashboard provides a comprehensive view of your AWS account's billing and usage information. It allows you to monitor your spending, set budgets, and manage your costs effectively.

                              View detailed billing information and usage reports.
                              Set up budgets and alerts to control costs.
                              Analyze spending patterns and optimize resource usage.
                              Access detailed billing reports and cost allocation data.`
            },
            {
              "title": "Types of charges",
              "description": `Compute, Storage, Outbound Data transfer

                Compute: Charges for using AWS compute services such as Amazon EC2, AWS Lambda, and Amazon ECS. These charges are based on factors like instance type, usage duration, and the number of requests.
                Storage: Charges for using AWS storage services such as Amazon S3, Amazon EBS, and Amazon Glacier. These charges are based on the amount of data stored, the storage class used, and the number of requests made to access the data.
                Outbound Data transfer: Charges for data transferred out of AWS to the internet or to other AWS regions. **Inbound data transfer is typically free**, but outbound data transfer is charged based on the amount of data transferred.`
            },
            {
              "title": "AWS Cost Explorer",
              "description": `help you get granular insights into your AWS costs and usage. It provides a user-friendly interface to visualize and analyze your spending patterns, allowing you to identify cost-saving opportunities and optimize resource usage.

              AWS Cost Explorer helps you visualize, understand,
              and manage your AWS costs and usage over time. It provides detailed insights into your spending patterns,
              allowing you to identify cost-saving opportunities and optimize resource usage.
              `
            },
            {
              "title": "AWS Free Tier",
              "description": `AWS Free Tier helps you explore and try out AWS services for free within certain usage limits. It provides an opportunity to learn and experiment with AWS services without incurring costs.

              AWS free tier types:
              12 months free - includes 85+ AWS services with specific usage limits for each service, such as 750 hours of Amazon EC2 t2.micro instances, 5 GB of Amazon S3 storage, and 1 million AWS Lambda requests per month.
              always free - shows services that are free to use regardless of the time frame, with some usage limits.
              trials - offers limited-time access to certain AWS services for free, allowing you to explore and test them before committing to a paid plan.
              `
            },

          ]
        },
        {
          "name": "Compute Resources Pricing models",
          "services": [
            {
              "title": "Pay as you go (on-demand instances)",
              "description": ` is the most flexible pricing plan where you only pay for what you use with no need for commitment and flexibility to changes in needs. `
            },
            {
              "title": "Save when you commit (reserved instances)",
              "description": `allows you to save money by committing to using a specific resource for a certain period of time. `
            },
            {
              "title": "Saving plans",
              "description": `Like reserved instances, you can save money by committing in advance with saving plans. The very high level difference is that you commit to an hourly spend or how much you spend per an hour of usage as opposed to resource usage or booking a certain amount of computing power. You can save up to 72% compared to on-demand pricing for one or three-year hourly spend commitment.`
            },
            {
              "title": "Spot instances(Take avantage of unused EC2 capacity at a discounted price)",
              "description": `AWS has loads and loads of servers at the ready to service its global customers. As a result, a lot of the resources go unused from time to time. To solve this problem, AWS will put these unutilized resources up for sale with huge savings compared with on-demand instances. Amazon EC2 spot instances are up to
                            90% off on-demand pricing. The downside to relying on spot instances is that they're not always available, so you would only be able to utilize them for resources you need for short periods of time on a flexible schedule. Spot instances are great for running tests or doing computational work with flexible timing. `
            },
            {
              "title": "Dedicated hosts (physical servers with EC2 instance capacity fully dedicated to your use)",
              "description": ` With Amazon EC2 dedicated hosts, you can benefit from the cost effectiveness of utilizing your own
              licenses while also taking advantage of the elasticity and simplicity of AWS. With dedicated hosts, as the name suggests,
              you get your own physical server dedicated to your organization, which can help with certain compliance requirements.`
            },
            {
              "title": "Dedicated Instances (EC2 instances that run on hardware dedicated to a single customer)",
              "description": `. Amazon EC2 instances are by default running on shared tenancy hardware,
              which means that while each instance is isolated, it's still running on the same server that's shared between many different customers.

              Dedicated instances provide each customer with dedicated hardware so that instances are isolated from other customers at a hardware level.
              Each physical hardware is linked to one single AWS account, though this specific hardware may have non-dedicated instance from that same AWS account.
               As with dedicated hosts, utilizing dedicated instances may help solve some compliance requirements for your organization.`
            },
            {
              "title": "Capacity reservations (reserve capacity for EC2 instances in a specific Availability Zone for any duration)",
              "description": `You can also reserve compute capacity in advance with capacity reservations.
              Sometimes your workloads are flexible and can be turned on or off depending on resource availability,
               but other times you want to make sure the resource is available in advance in a certain availability zone.
               While there is no explicit savings from reserving in advance with capacity reservation compared to on-demand rate,
                you are not charged anything for the reservation, allowing you to be confident that you have resources available to you
                when you need it without any additional costs. `
            },
            {
              "title": "Pay less by using more (volume discounts)",
              "description": `The concept of pay less per unit or volume by using more allows you to take advantage of volume discounts for certain services, such as receiving tiered pricing for Amazon S3, where the more you use, the less you pay per gigabyte of storage.`
            },
          ]
        },
        {
          "name": "AWS budgets and cost management resources",
          "services": [
            {
              "title": "AWS Budgets",
              "description": `Help you visualize cost **before you spend**
                              AWS Budgets allows you to set custom cost and usage budgets that alert you when you exceed your thresholds. This helps you manage your AWS costs and usage effectively.
                              Send alerts when your costs or usage exceed (or are forecasted to exceed) your budget thresholds.
                              Respond with custom actions, such as sending notifications or triggering AWS Lambda functions to automate cost management tasks.
                              Receive AWS budgets report daily, weekly, or monthly via email to keep track of your spending and usage patterns.`
            },
            {
              "title": "AWS Cost Explorer",
              "description": `Helps you analyze **after you spend**
                              Analyze your AWS resouce usage after the fact and create usage forecast to project future AWS costs. It provides a user-friendly interface to visualize and analyze your spending patterns, allowing you to identify cost-saving opportunities and optimize resource usage.
                              Create custom reports based on usage to analyze data at high or granular levels.`
            },
            {
              "title": "AWS Cost and Usage Report (AWS CUR)",
              "description": `Provide your AWS cost and usage data as a report to help understand cost drivers
                              **Identify ways to optimize monthly AWS usage bills**
                              Provide **metadata** on AWS services, pricing, credits, fees, taxes, discounts, cost categoriex, Reserved Instances and savings plans.
                              Utilize AWS cost allocation tags on reports.
                              Integrate data with **Amazon Athena, Amazon Redshift, and Amazon QuickSight** for detailed analysis.`
            },
            {
              "title": "AWS Billing Conductor",
              "description": `Analyze your organization or customers' spending and bill for resouce usage based on your defined rates.
                              Generate AWS Cost and Usage reports for each billing group`
            },
            {
              "title": "AWS Pricing Calculator",
              "description": `Located at Calculator.aws

                              Replaced the AWS Total Cost of Ownership Calculator

                              Takes estimated resource usage you input from current infrastructure and provides estimated costs for running your workloads on AWS Cloud

                              Estimate your AWS costs and usage for your architecture.
                              The AWS Pricing Calculator allows you to create custom cost estimates for AWS services based on your specific usage patterns and requirements.`
            },
          ]
        },
        {
          "name": "AWS Consolidated Billing",
          "services": [
            {
              "title": "Description",
              "description": `Creates a payer AWS account to view and pay combined billing charges for all linked accounts in the organization.
                              Independent account that can't use any other services.
                              Cannot deploy services into the linked accounts
                              All reousce usage becomes consolidated as usage from one large entity - organization may be eligible for volume discounts.`
            },
          ]
        },
      ]
    },
    {
      "name": "Support plans and resources",
      "groups": [
        {
          "name": "AWS Support plans",
          "services": [
            {
              "title": "Basic Support Plan",
              "description": `Free(included for all AWS customers) pairs well with AWS free tier
                              for experimenting or testing in AWS
                              Account and Billing inquiries
                              Service quota increase request
                              Access to support forums and documentation
                              Access to AWS Health Dashboard and AWS Trusted advisor checks`
            },
            {
              "title": "Developer Support Plan",
              "description": `Great for developers who are in the experimentation phase and need technical support for their applications. **It includes all the features of the Basic Support Plan**
                              ability to open support tickets.
                              Not fast enough for production workloads
                              **Minimum spend of $29 per month or 3% of monthly AWS usage**, whichever is greater.
                              Access to best-practice guidance and AWS support API.
                              **Prioritize response on AWS re:Post, access to AWS support App in Slack**
                              Unlimited number of support cases via one primary contact(root user) with business-hour email access to Cloud Support Associates
                              **SLA (Service Level Agreement): 24 hours for general guidance and 12 hours for system impaired issues.**

                              Access to **Support Automation Workflows(SAW)** with AWS Support prefix in AWS Support self-service runbooks
                              **Runbooks**: help you proactively monitor and identify network issues, collect and analyze logs, and troubleshoot issues with your AWS resources.

                              Provides guidance for developing and testing applications on AWS. Includes access to AWS Trusted Advisor checks, AWS Support API, and best practice guidance.`
            },
            {
              "title": "Business Support Plan",
              "description": `Ideal for production workloads and provides 24/7 access to AWS support engineers via phone, chat, and email. **It includes all the features of the Developer Support Plan**
                              Access to AWS Trusted Advisor checks and AWS Support API.
                              Access to AWS Support API to automate support case management with AWS Trusted Advisor and Support Center

                              Access to use-case guidance on how to use AWS products and services to support your organization's needs 24/7

                              Access to Support Automation Workflows with prefixes AWSSupport and AWSPremiumSupport

                              Infrastructure Event Management (for additional fee)

                              Support response: less than 24 hours for general guidance, less than 12 hours for system impaired, less than 4 hours for production system impaired, less than 1 hour for production system down

                              Minimum spend of $100 per month or ...
                                10% of monthly charges for $0-$10,000
                                7% of monthly charges for $10,000-$80,000
                                5% of monthly charges for $80,000-$250,000
                                3% of monthly charges over $250,000`
            },
            {
              "title": "Enterprise On-Ramping Support Plan",
              "description": `
                              Minimum spend of of $5,500 or 10% of monthly charges

                              For those with production and/or business-critical workloads in AWS

                              Everything in Business Support plan

                              Access to consultative application architecture guidance to see how AWS services and resources can work together

                              Access to short-term engagement with AWS Support to receive architectural and scaling guidance for Infrastructure Event Management (once a year)

                              **Access to a pool of Technical Account Managers (TAMs)** for support cases, proactive guidance, general use case support, etc., as well as white-gloved case routing via the Concierge Support Team

                              **Support response**: less than 24 hours for general guidance, less than 12 hours for system impaired, less than 4 hours for production system impaired, less than 1 hour for production system down,
                              and less than 30 minutes for business-critical system down
                              `
            },
            {
              "title": "Enterprise Support Plan",
              "description": `For those with production and/or business-critical workloads in AWS
                              Everything in Enterprise On-Ramping Support Plan

                              Minimum spend of $15,000 or ...
                              10% of monthly changes for $0-$150,000
                              7% of monthly charges for $150,000-$500,000
                              5% of monthly charges for $500,000-$1,000,000
                              3% of monthly charges over $1,000,000

                              Infrastructure Event Management (not limited to once a year)

                              Access to proactive workshops, reviews, and deep dives

                              AWS Incident Detection and Response service available for additional fee

                              Assigned a Technical Account Manager (TAM)

                              Receive prioritized recommendations from AWS Trusted Advisor Priority

                              Access to online self-paced labs for employee training

                              Support SLA: less than 24 hours for general guidance, less than 12 hours for system impaired, less than 4 hours for production system impaired, less than 1 hour for production
                              system down, and less than 15 minutes for business- or mission-critical system down
                              `
            },
            {
              "title": "Compare support plan site",
              "description": `aws.amazon.com/premiumsupport/plans/`
            },
          ]
        },
        {
          "name": "Official AWS Resources",
          "services": [
            {
              "title": "Resources",
              "description": `
              You can find ready access AWS resources at AWS Whitepapers, Blogs, and Documentation.
              AWS Whitepapers and Guides:
              https://aws.amazon.com/whitepapers
              AWS Blog:
              https://aws.amazon.com/blogs
              AWS Documentation:
              https://docs.aws.amazon.com

              You can ask questions and get responses from peers, AWS community leaders, and AWS employees at AWS re:Post.
              AWS re:Post:
              https://repost.aws

              AWS Knowledge Center is an official AWS repost hub that answers most frequently asked questions and requests they receive from AWS customers in articles and videos formats.
              AWS Knowledge Center:
              https://repost.aws/knowledge-center

              If a company is creating an AWS-based business, they could gain credibility in AWS-supported programs to help expand and differentiate their offerings by joining the AWS Partner program. Aside from the credibility you earn by being an official AWS-sanctioned partner, your organization can receive partner training, certification, volume discounts, and attend partner events.
              Partner Network has a group of highly skilled partners that provide AWS professional services to help you, as a customer, execute your enterprise cloud computing initiatives. The AWS  Some programs available to AWS partners may be the AWS Marketplace Channel programs, where partners can sell their AWS products, like pre-made Amazon EC2 instance templates on the AWS Marketplace,
              and AWS Training Partner program, which validates authenticity of a training program by becoming an official AWS training partner. As a consumer, when you encounter issues, you could look to companies that are part of the AWS Partner programs to find qualified service providers to solve your business needs.
              AWS Partner Networks

              If you are looking for business or technological solutions, and don't want to architect infrastructure from the ground up, you could take advantage of the AWS Marketplace,where vendors and partners provide expert services and software solutions that run on AWS for you to purchase and utilize.
              AWS Marketplace:
              https://aws.amazon.com/marketplace

              When you're ready to talk to someone, you also have access to the AWS Support Plans with tiered services available, depending on how much you utilize your AWS resources and how much you're willing to pay.
              AWS Support Plans

              When you encounter abuse of AWS resources, you can contact the AWS Trust and Safety Team through a form available when you Google report abusive activity from Amazon Web Service resources.
              AWS Trust and Safety Team

              contact AWS support directly. For that, AWS has a page dedicated for AWS support services available both to the public and for subscribers at aws.amazon.com/contact-us.
              AWS Support Center:
              https://aws.amazon.com/contact-us`
            },
          ]
        },
        {
          "name": "Compute Resources Pricing models",
          "services": [
            {
              "title": "Pay as you go (on-demand instances)",
              "description": ` is the most flexible pricing plan where you only pay for what you use with no need for commitment and flexibility to changes in needs. `
            },
            {
              "title": "Save when you commit (reserved instances)",
              "description": `allows you to save money by committing to using a specific resource for a certain period of time. `
            },
            {
              "title": "Saving plans",
              "description": `Like reserved instances, you can save money by committing in advance with saving plans. The very high level difference is that you commit to an hourly spend or how much you spend per an hour of usage as opposed to resource usage or booking a certain amount of computing power. You can save up to 72% compared to on-demand pricing for one or three-year hourly spend commitment.`
            },
            {
              "title": "Spot instances(Take avantage of unused EC2 capacity at a discounted price)",
              "description": `AWS has loads and loads of servers at the ready to service its global customers. As a result, a lot of the resources go unused from time to time. To solve this problem, AWS will put these unutilized resources up for sale with huge savings compared with on-demand instances. Amazon EC2 spot instances are up to
                            90% off on-demand pricing. The downside to relying on spot instances is that they're not always available, so you would only be able to utilize them for resources you need for short periods of time on a flexible schedule. Spot instances are great for running tests or doing computational work with flexible timing. `
            },
            {
              "title": "Dedicated hosts (physical servers with EC2 instance capacity fully dedicated to your use)",
              "description": ` With Amazon EC2 dedicated hosts, you can benefit from the cost effectiveness of utilizing your own
              licenses while also taking advantage of the elasticity and simplicity of AWS. With dedicated hosts, as the name suggests,
              you get your own physical server dedicated to your organization, which can help with certain compliance requirements.`
            },
            {
              "title": "Dedicated Instances (EC2 instances that run on hardware dedicated to a single customer)",
              "description": `. Amazon EC2 instances are by default running on shared tenancy hardware,
              which means that while each instance is isolated, it's still running on the same server that's shared between many different customers.

              Dedicated instances provide each customer with dedicated hardware so that instances are isolated from other customers at a hardware level.
              Each physical hardware is linked to one single AWS account, though this specific hardware may have non-dedicated instance from that same AWS account.
               As with dedicated hosts, utilizing dedicated instances may help solve some compliance requirements for your organization.`
            },
            {
              "title": "Capacity reservations (reserve capacity for EC2 instances in a specific Availability Zone for any duration)",
              "description": `You can also reserve compute capacity in advance with capacity reservations.
              Sometimes your workloads are flexible and can be turned on or off depending on resource availability,
               but other times you want to make sure the resource is available in advance in a certain availability zone.
               While there is no explicit savings from reserving in advance with capacity reservation compared to on-demand rate,
                you are not charged anything for the reservation, allowing you to be confident that you have resources available to you
                when you need it without any additional costs. `
            },
            {
              "title": "Pay less by using more (volume discounts)",
              "description": `The concept of pay less per unit or volume by using more allows you to take advantage of volume discounts for certain services, such as receiving tiered pricing for Amazon S3, where the more you use, the less you pay per gigabyte of storage.`
            },
          ]
        },
        {
          "name": "AWS budgets and cost management resources",
          "services": [
            {
              "title": "AWS Budgets",
              "description": `Help you visualize cost **before you spend**
                              AWS Budgets allows you to set custom cost and usage budgets that alert you when you exceed your thresholds. This helps you manage your AWS costs and usage effectively.
                              Send alerts when your costs or usage exceed (or are forecasted to exceed) your budget thresholds.
                              Respond with custom actions, such as sending notifications or triggering AWS Lambda functions to automate cost management tasks.
                              Receive AWS budgets report daily, weekly, or monthly via email to keep track of your spending and usage patterns.`
            },
            {
              "title": "AWS Cost Explorer",
              "description": `Helps you analyze **after you spend**
                              Analyze your AWS resouce usage after the fact and create usage forecast to project future AWS costs. It provides a user-friendly interface to visualize and analyze your spending patterns, allowing you to identify cost-saving opportunities and optimize resource usage.
                              Create custom reports based on usage to analyze data at high or granular levels.`
            },
            {
              "title": "AWS Cost and Usage Report (AWS CUR)",
              "description": `Provide your AWS cost and usage data as a report to help understand cost drivers
                              **Identify ways to optimize monthly AWS usage bills**
                              Provide **metadata** on AWS services, pricing, credits, fees, taxes, discounts, cost categoriex, Reserved Instances and savings plans.
                              Utilize AWS cost allocation tags on reports.
                              Integrate data with **Amazon Athena, Amazon Redshift, and Amazon QuickSight** for detailed analysis.`
            },
            {
              "title": "AWS Billing Conductor",
              "description": `Analyze your organization or customers' spending and bill for resouce usage based on your defined rates.
                              Generate AWS Cost and Usage reports for each billing group`
            },
            {
              "title": "AWS Pricing Calculator",
              "description": `Located at Calculator.aws

                              Replaced the AWS Total Cost of Ownership Calculator

                              Takes estimated resource usage you input from current infrastructure and provides estimated costs for running your workloads on AWS Cloud

                              Estimate your AWS costs and usage for your architecture.
                              The AWS Pricing Calculator allows you to create custom cost estimates for AWS services based on your specific usage patterns and requirements.`
            },
          ]
        },
        {
          "name": "AWS Consolidated Billing",
          "services": [
            {
              "title": "Description",
              "description": `Creates a payer AWS account to view and pay combined billing charges for all linked accounts in the organization.
                              Independent account that can't use any other services.
                              Cannot deploy services into the linked accounts
                              All reousce usage becomes consolidated as usage from one large entity - organization may be eligible for volume discounts.`
            },
          ]
        },
      ]
    },
    {
      "name": "AWS framework",
      "groups": [
        {
          "name": "AWS Well-Architected Framework ",
          "services": [
            {
              "title": "Operational Excellence",
              "description": `Document everything
                              Refine operational procedures
                              Anticipate failure
                              Update processes
                              It focuses on running and monitoring systems to deliver business value while continuously improving processes.
                              This includes things like automating deployments through pipelines and responding to events effectively to ensure smooth operations.`
            },
            {
              "title": "Security",
              "description": `Best pratices should be automated
                              Data should always be protected
                              Enable traceability
                              Don’t let bad actors in and keep everything locked down.
                              This is where this pillar comes in.
                              It helps to make sure you are building security into your solutions using best practices.
                              Additionally, it shows you how to maintain data integrity, protect systems, and adhere to the principle of least privilege access.`
            },
            {
              "title": "Reliability",
              "description": `This pillar is centered on recovery planning and making sure systems can withstand failures.
                              This includes strategies for recovering from disruptions.
                              The other part of the pillar pertains to adapting systems to meet evolving business and customer demands.

                              test disaster recovery plans
                              incorporate redundancy
                              have duplicate copies of resources`
            },
            {
              "title": "Performance Efficiency",
              "description": `It focuses on using resources efficiently, like with rightsizing your EC2 instance based on workload and memory requirements.
                              More so, this pillar promotes making informed decisions to ensure efficiency continues, even as business needs change. `
            },
            {
              "title": "Cost Optimization/avoid unnecessary costs",
              "description": `use only what you need
                              reserve resouces in advance
                              As you can guess, it focuses on controlling and reducing expenditures by optimizing resource allocation.

                              For example, you provision a specific EC2 instance to start out.
                              And then, as you gain more information on your workload, you realize the instance is being underutilized.
                              Are you stuck with it ? No.You can switch to an instance with lower specs, which might actually be more cost - effective.
                              Moreover, if you don’t need a service, deprovision it.Eliminate the cost.`
            },
            {
              "title": "Sustainability",
              "description": `
                              It emphasizes designing energy - efficient systems and minimizing ** environmental impact **.
                              This pillar encourages using the most appropriate AWS infrastructure to reduce the need for always - on resources.

                              For example, if you don’t need an always - on EC2 instance, consider switching to AWS Lambda.
                              Or maybe using a smaller Amazon RDS instance if you don’t need that extra storage.
                              Not only are you reducing cost, but you can lower energy consumption and carbon emissions.`
            }
          ]
        },
        {
          "name": "AWS Cloud Adoption Framework (AWS CAF)",
          "services": [
            {
              "title": "AWS Cloud Adoption Framework (AWS CAF)",
              "description": `Identifies best practices and guidance to help organizations successfully adopt the cloud.`
            },
            {
              "title": "AWS CAF transformations domain",
              "description": `each domain transformation enables the next transformation
                              ** Technological transformations **: refers to utilizing the cloud to migrate and modernize legacy infrastructure, application, and data and analytics platforms.
                              ** Process transformations **: talks about digitizing, automating, and optimizing business operations.
                              ** Organizational transformation **: reimagines the organizational model or how your business and technology teams work together to create customer value and meet strategic goals.
                              ** Product transformation **: reimagines the business model by creating new value proposition and revenue models. `
            },
            {
              "title": "AWS CAF Functional and business stake holders/ perspectives and foundational",
              "description": `enables the transformation chain
                                  ** Business perspective **: makes sure that IT aligns with business needs and that IT investments link to key business results.
                                  Use the Business perspective to create a strong business case for cloud adoption and prioritize cloud adoption initiatives.Make sure that your business strategies and goals align with your IT strategies and goals.
                                  stake holders: business managers, strategists, and finance managers.CEO, CFO, COO
                                  ensure that the cloud investments link to key business results and outcomes.

                              ** People perspective **: supports development of an organization - wide change management strategy for successful cloud adoption.
                                  Use the People perspective to evaluate organizational structures and roles, assess new skill and process requirements, and identify gaps.This helps prioritize training, staffing, and organizational changes.
                                  create a culture that embraces change and innovation.
                                  stake holders: human resources managers, Staffing, and oPeople managers.

                              ** Governance perspective **: focuses on skills and processes to align IT strategy with business strategy.This perspective helps you maximize business value and minimize risks.
                                  Use it to understand how to update the staff skills and processes necessary to maintain business governance in the cloud.Manage and measure cloud investments to evaluate business outcomes.
                                  Maximize organizational benefits while minimizing cloud - transformation risks.
                                  stake holders: Chief information officer(CIO), Program managers, project managers, and legal counsels.

                              ** Platform perspective **: includes principles and patterns for implementing new solutions in the cloud and migrating on - premises workloads to the cloud.
                                  Use a variety of architectural models to understand and communicate the structure of IT systems and their relationships.Describe the architecture of the target state environment in detail.
                                  Build enterprise - grade scalable, hybrid cloud platforms, implement cloud - native solutions and modernize existing infrastructure.
                                  Stake holders: infrastructure architects, IT managers, application architects, and DevOps engineers.

                              ** Security perspective **: makes sure that the organization meets security objectives for visibility, auditability, control, and agility.
                                  Use AWS CAF to structure the selection and implementation of security controls that meet the organization's needs.
                                  Achive the confidentiality, integrity, and availability of data and systems in the cloud.
                                  Stake holders: chief information security officers(CISOs), security architects, and security analysts.

                              ** Operations perspective **: helps you to enable, run, use, operate, and recover IT workloads to the level agreed upon with your business stakeholders.
                                  Define how day - to - day, quarter - to - quarter, and year - to - year business is conducted.Align with and support the operations of the business.AWS CAF helps these stakeholders define current operating procedures and identify the process changes and training needed to implement successful cloud adoption.
                                  Ensure that the cloud services delivered meet business needs.
                                  Stake holders: IT operations managers, IT support managers, IT support staff, and site reliability engineers(SREs).
                                  `
            },
            {
              "title": "AWS CAF Phases",
              "description": ` transformation journey to adopting the cloud
                              ** Envision Phase **: Demonstrate how cloud adoption will help accelerate business outcomes and objectives.
                              ** Align Phase **: Identify capabilities gaps acress the six CAF perspectives, identifty cross - organization dependencies, and recognize stakeholder concerns.
                              ** Launch Phase **: Deliver polot initizitve in production and demonstrate incremental business value before scaling to full production.
                              ** Scale Phase **: Expands pilots, scaling up to meet desired business needs while sustaining business benefits.
                              `
            },
          ]
        },
      ]
    },
    {
      "name": "Cloud computing concepts",
      "groups": [
        {
          "name": "Cloud computing models",
          "services": [
            {
              "title": "Software as a Service (SaaS)",
              "description": `users have the flexibility to migrate existing resouces to the cloud, and / or build new apps within the cloud environment.
                              completed products manged by the service
                              Easy to use – no need to manage underlying infrastructure
                              Least flexability
                              Ex – email platforms like gmail, office 365 `
            },
            {
              "title": "Platform as a Service (PaaS)",
              "description": `deploy and manage applications without worry of underlying inftrastructure
                              Execute programming languages to host applications – heroku, google app engine
                              More flexible than saas
                              Less flexible than iaas `
            },
            {
              "title": "Infrastructure as a Service (IaaS)",
              "description": `basic building blocks, most flexible and management contorl
                              Closest to having a traditional on premise data center
                              Users are responsible for managing applications, data, runtime, middleware, and operating systems
                              Provides highest level of flexability and control
                              Ex – amazon webservices, azure, google cloud platform `
            }
          ]
        },
        {
          "name": "Cloud computing deployment models",
          "services": [
            {
              "title": "Public Cloud/ Cloud Native",
              "description": `users have the flexibility to migrate existing resouces to the cloud, and / or build new apps within the cloud environment.
                              100 % cloud based infrastructure
                              All applications and data are hosted on the cloud providers infrastructure`
            },
            {
              "title": "Private Cloud/ On-Premises",
              "description": `using virtualization and resouce management tools does not provide the benefits of cloud computing.
                              However it is sometimes sought for its ability to provided dedicated resources and low latency
                              In most cases this deployment model is the same as legacy it infrastructure whule using application management and virtualization technologies

                              Infrastructure is hosted within the organizations own facilities similar to traditional IT infrastructure

                              Pros - full control over hardawre and software and data
                              Cons hight upfront cost.Limited scalability `
            },
            {
              "title": "Hybrid Cloud",
              "description": `cloud based and on premise work together.Good when legacy applications must remain on premise due to maintenance preferences or regalatory requeirements

                              A company might retain regulated legacy applications on - premise while using cloud services for advanced data processing and analytics

                              Common use case - running the customer facing apes in the cloud while keeping financial data on premise
                              company using cloud storage for backup and disaster recovery of on premise data

                              Great for businesses with existing it investments that want to leverage cloud benefits without full migration `
            }
          ]
        },
        {
          "name": "Advantages of cloud computing",
          "services": [
            {
              "title": "Trade fixed expense for variable expense",
              "description": `Instead of investing hardware and staff and upkeep to make sure everything is running smoothly
                              Aws cost will be variable from month to month.Billed only on what you use.When testing you do not need to invest immediately `
            },
            {
              "title": "Benefit from massive economies of scale ",
              "description": `Aws buys at low cost and allows the costomers to use them
                              Small businesses can use expensive hardware that previuosly only large companies would be able to use
                              use a portion of the hardware and share the cost with other customers `
            },
            {
              "title": "Stop guessing capacity ",
              "description": `You estimate a number of people in a year in your business so you purchase a set of hardware.
                                What if the next year ther are less users ? You are stuck with the hardware
                                What if the next year there are more users ? You won't be able to handle  the users
                              In aws scaling takes minutes.You can scale up and down resouces based on the amount of users `
            },
            {
              "title": "Increase speed and agility  ",
              "description": `You can create test environments to experiement
                              After testing you can delete the provision / resouces and cost
                              You can rapidly deploy applications and services, accelerating time to market and facilitating quicker responses to chnaing business needs and market conditions. `
            },
            {
              "title": "Stop spending money running and maintaining data centers ",
              "description": `You do not have to think about cost, power, maintenance of servers, hardware upgrades, cooling, physical security etc.
                              Aws takes care of all of that for you so you can focus on your core business  `
            },
            {
              "title": "Go global in minutes  ",
              "description": `Aws has servers in different region
                              When on without aws it takes months and years to expand a business to different areas`
            }
          ]
        },

        {
          "name": "Four domains",
          "services": [
            {
              "title": "Domains",
              "description": `Cloud Concepts, Security and Compliance, Cloud Technology and services, Billing, Pricing and Support`
            },
          ]
        },
      ]
    }
  ]
};

// Load and render AWS services data
function loadData() {
  renderDiagram(awsServicesData);
}

// Render the entire diagram
function renderDiagram(data) {
  const container = document.getElementById('diagramContainer');
  container.innerHTML = '';

  data.categories.forEach(category => {
    const categoryElement = createCategoryElement(category);
    container.appendChild(categoryElement);
  });
}

// Create a category circle element
function createCategoryElement(category) {
  const categoryDiv = document.createElement('div');
  categoryDiv.className = 'category';

  const title = document.createElement('div');
  title.className = 'category-title';
  title.textContent = category.name;
  categoryDiv.appendChild(title);

  const groupsContainer = document.createElement('div');
  groupsContainer.className = 'groups-container';

  category.groups.forEach(group => {
    const groupElement = createGroupElement(group);
    groupsContainer.appendChild(groupElement);
  });

  categoryDiv.appendChild(groupsContainer);
  return categoryDiv;
}

// Create a group circle element
function createGroupElement(group) {
  const groupDiv = document.createElement('div');
  groupDiv.className = 'group';

  const title = document.createElement('div');
  title.className = 'group-title';
  title.textContent = group.name;
  groupDiv.appendChild(title);

  const servicesContainer = document.createElement('div');
  servicesContainer.className = 'services-container';

  group.services.forEach(service => {
    const serviceElement = createServiceElement(service);
    servicesContainer.appendChild(serviceElement);
  });

  groupDiv.appendChild(servicesContainer);
  return groupDiv;
}

// Create a service element with expandable description or More Info button
function createServiceElement(service) {
  const serviceDiv = document.createElement('div');
  serviceDiv.className = 'service';

  const titleDiv = document.createElement('div');
  titleDiv.className = 'service-title';
  titleDiv.textContent = service.title;

  const DESCRIPTION_THRESHOLD = 200; // Characters
  const isLongDescription = service.description.length > DESCRIPTION_THRESHOLD;

  if (isLongDescription) {
    // For long descriptions, add a "More Info" button
    const moreInfoBtn = document.createElement('button');
    moreInfoBtn.className = 'more-info-btn';
    moreInfoBtn.textContent = 'More Info';
    moreInfoBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      openModal(service.title, service.description);
    });

    serviceDiv.appendChild(titleDiv);
    serviceDiv.appendChild(moreInfoBtn);
  } else {
    // For short descriptions, keep the expandable behavior
    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'service-description';
    descriptionDiv.innerHTML = formatText(service.description);

    serviceDiv.addEventListener('click', function (e) {
      e.stopPropagation();
      this.classList.toggle('expanded');
    });

    serviceDiv.appendChild(titleDiv);
    serviceDiv.appendChild(descriptionDiv);
  }

  return serviceDiv;
}

// Format text with bold and highlight markup
function formatText(text) {
  // Convert **bold** to <strong>bold</strong>
  text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  // Convert ==highlight== to <mark>highlight</mark>
  text = text.replace(/==(.+?)==/g, '<mark>$1</mark>');

  return text;
}

// Open modal with service information
function openModal(title, description) {
  const modal = document.getElementById('infoModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');

  modalTitle.textContent = title;

  // Handle both \n\n (paragraph breaks) and single \n (line breaks)
  // First split by double line breaks for paragraphs
  const paragraphs = description.split('\n\n').filter(p => p.trim());

  modalDescription.innerHTML = paragraphs
    .map(para => {
      // Replace single line breaks within paragraphs with <br>
      const formattedPara = para.replace(/\n/g, '<br>');
      // Apply text formatting (bold, highlight)
      return `< p > ${formatText(formattedPara)}</p > `;
    })
    .join('');

  modal.style.display = 'block';
}

// Close modal
function closeModal() {
  const modal = document.getElementById('infoModal');
  modal.style.display = 'none';
}

// Setup modal event listeners
function setupModalListeners() {
  const modal = document.getElementById('infoModal');
  const closeBtn = document.querySelector('.modal-close');

  // Close button
  closeBtn.addEventListener('click', closeModal);

  // Click outside modal to close
  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // ESC key to close
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      closeModal();
    }
  });
}

// Initialize the diagram when the page loads
document.addEventListener('DOMContentLoaded', function () {
  loadData();
  setupModalListeners();
});
