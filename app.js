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
              "description": "Help make migration smooth Minimizing application downtime during database migrations \n\nA key benefit of AWS DMS is that the source database remains fully operational during migration, which minimizes downtime to applications."
            },
            {
              "title": "Amazon RDS test text",
              "description": `A **managed relational database** service that handles routine tasks.

            ==Key Features:==
            - **Multi-AZ deployment** for high availability
            - **Automated backups** for data resilience
            - Supports **MySQL, PostgreSQL, Oracle**, and more`
            }
          ]
        },
        {
          "name": "Relational Database",
          "services": [
            {
              "title": "Amazon Relational Database Service (Amazon RDS)",
              "description": `A managed relational database service that handles routine database tasks such as backups, patching, and hardware provisioning.

                            Supports multiple database instance class types that optimize for memory, performance, or input/output (I/O).

                            To improve data resilience, Amazon RDS offers Multi-AZ deployment and automated backups. You can manually create backups using DB snapshots, which are full backups of your entire database instance, useful for specific point-in-time recovery or long-term data archiving purposes.

                            Amazon RDS offers security features including network isolation, encryption in transit, and encryption at rest. You can readily scale database resources vertically or horizontally as needed.

                           **Supported database engines**
                            Amazon RDS supports different database engines, including Amazon Aurora, MySQL, PostgreSQL, Microsoft SQL Server, MariaDB, and Oracle Database.

                            Use cases
                            Some examples of practical use cases for Amazon RDS are web applications, enterprise workloads, and product inventories for e-commerce platforms.

                            Cost optimization
                            Amazon RDS eliminates the high upfront costs of purchasing and maintaining database hardware infrastructure. You only pay for the compute and storage resources that you consume through a flexible pay-as-you-go model. As a managed service, it also reduces operational expenses by automating time-consuming administrative tasks like backups, patching, and monitoring.

                            Multi-AZ deployment
                            Amazon RDS improves database reliability through Multi-AZ deployments. It automatically replicates data to a standby instance in a different Availability Zone. During system failures, maintenance, or zone disruptions, Amazon RDS automatically fails over to the standby instance without manual intervention. This ensures continuous database operations with minimal downtime.

                            Performance optimization
                            Amazon RDS enhances database performance through automated management of resource allocation, monitoring, and optimization tasks. It includes features like automated backups and read replicas that can help offload read traffic from the primary instance. Amazon RDS performance insights provide real-time monitoring and analysis of database load, to help you identify and resolve performance bottlenecks quickly.

                            Security controls
		                    Amazon RDS enhances database security through multiple layers of protection, including VPC isolation as well as encryption at rest and in transit. It leverages automated backups and offers Multi-AZ deployments to provide resiliency against potential system failures.`
            },
            {
              "title": "Amazon Aurora",
              "description": `Aurora is a managed relational database designed to help reduce unnecessary I/O operations. It's compatible with **MySQL and PostgreSQL**, provides high performance and availability, and automatically scales alongside your workloads. Aurora replicates data across multiple Availability Zones for enhanced durability and fault tolerance, and features automated backups, encryption at rest, and continuous monitoring.

                                Use cases
                                Some examples of practical use cases for Aurora are gaming applications, media and content management, and real-time analytics.

                                High performance and availability
                                Aurora delivers up to five times the throughput of standard MySQL and three times the throughput of PostgreSQL. It uses a distributed storage system across multiple nodes to provide high performance and availability.

                                Automated storage and backup management
                                Aurora automatically grows storage from **10 GB to 128 TB** based on your actual data usage, which eliminates guesswork in capacity planning. It also continuously backs up your database to Amazon Simple Storage Service (Amazon S3) to provide point-in-time recovery.

                                Advanced replication and fault tolerance
                                Aurora replicates data across three Availability Zones with six copies of data, and provides 99.99% availability. It automatically detects database failures and redirects traffic to healthy replicas without data loss.

                                The Aurora distributed storage architecture offers up to five times the throughput of standard MySQL while maintaining compatibility. It was specifically designed to handle high transaction workloads by distributing I/O across multiple storage nodes`
            }
          ]
        },
        {
          "name": "NoSQL Database",
          "services": [
            {
              "title": "NoSQL databases",
              "description": `NoSQL databases are sometimes referred to as non-relational databases because their structures are different than relational databases like Amazon RDS. Instead of row and column relationships, NoSQL databases build a structure for the data that they contain using key-value pairs instead. With key-value pairs, data is organized into items identified by unique keys.

                            Each key has one or more associated attributes, or values, that represent various characteristics of the data. You can think of a key as a word entry in a dictionary, and the value as its associated definition. Not every item in the table has to have the same attributes, and you can add or remove attributes at any time

                            Name: John Doe
                            Address: 123 Any Street
                            Favorite drink: Medium latte`
            },
            {
              "title": "Amazon DynamoDB",
              "description": `	DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance for both document and key-value data structures. It's a powerful and incredibly fast database option for use cases that require a flexible schema, and is ideal for applications that require high performance and seamless scaling.

                            DynamoDB seamlessly scales alongside your data without impacting performance, which means that you only pay for the resources that you use. It also includes built-in security features for enhanced protection, and automatically spreads your data across multiple servers to handle your workload.

                            Use cases
                            Some examples of practical use cases for DynamoDB are gaming platforms, financial service applications, and mobile applications with global user bases.


                            Scalability with provisioned capacity
                            DynamoDB automatically scales throughput up or down based on actual usage, which ensures consistent performance without manual intervention. You can specify target utilization levels, and DynamoDB automatically provisions capacity to maintain those targets. With no practical limits on table size or the amount of data stored, DynamoDB can seamlessly accommodate growing applications.

                            Consistent high performance
                            DynamoDB delivers single-digit millisecond response times at any scale, which makes it ideal for high-performance applications. It maintains consistent performance by automatically distributing data across multiple servers and SSDs.

                            High availability and durability
                            DynamoDB delivers 99.999% data availability by replicating data across three distinct facilities within each AWS Region. It also maintains multiple copies in separate AWS Regions, to provide built-in fault tolerance and data durability. This ensures continuous operation and protection against data loss even if individual facilities fail.

                            Data encryption
                            DynamoDB offers comprehensive encryption capabilities to protect information both at rest and in transit. All data is automatically encrypted behind the scenes before being written to the storage layer. DynamoDB includes the flexibility to choose between different kinds of encryption keys for customized security control.`
            }
          ]
        },
        {
          "name": "In-Memory Database/Cache",
          "services": [
            {
              "title": "In-memory caches",
              "description": `An in-memory cache is a high-speed storage layer that temporarily stores frequently accessed data in a computer's main memory, or RAM. Retrieving data from RAM provides extremely fast processing and retrieval speeds, often hundreds or thousands of times faster than traditional disk-based storage systems.

                            When applications need specific information, they first check the cache before requesting it from the original data source. This reduces the load on primary databases and speeds up response times for end users. In-memory caches are ideal for storing session data, API responses, database query results, and other information that applications require repeatedly.`
            },
            {
              "title": "Caching layer",
              "description": `	Reduce database volume
                            Storing frequency access data into a fast location
                            Stored in system mermory (cache)
                            Near - instantaneous access to data
                            Reduces strain on backend
                            Cache method
                            Redis OSS, valkey, memcached.`
            },
            {
              "title": "Amazon ElastiCache",
              "description": `	ElastiCache is a fully managed in-memory caching service that was built to help reduce the complexity of administering in-memory caching systems. This means that you can continue to use the same Redis, Valkey, or Memcached tools and configurations to scale your workloads. It automatically detects and replaces failed nodes, which makes it ideal for applications that need consistent high performance.

                                Use cases
                                Some examples of practical use cases for ElastiCache are session data management, database query enhancement, and gaming leaderboards.

                                Benefits
                                High performance for Redis, Valkey, or Memcached instances
                                ElastiCache streamlines the deployment and maintenance of in-memory caching environments, offering high availability for Redis, Valkey, and Memcached by automatically handling hardware provisioning, software patching, and monitoring. ElastiCache offers seamless scalability so you can add or remove nodes as demand changes.


                                High availability
                                ElastiCache provides high availability by constantly monitoring primary nodes for potential failures. When issues are detected, it maintains application availability while promoting a replica node to become the new primary without manual intervention. The entire recovery process typically finishes within minutes, which minimizes downtime and preserves operations during infrastructure disruptions.


                                Replication across multiple Availability Zones
                                ElastiCache enables automatic replication across multiple Availability Zones to protect against infrastructure failures. You can configure primary and replica nodes across different Availability Zones according to their durability requirements. This helps to ensure that data remains accessible even if one zone experiences an outage.

                                Data encryption
                                ElastiCache supports data encryption mechanisms to safeguard sensitive information throughout its lifecycle. At-rest encryption protects data while stored in disk storage and automated backups. In-transit encryption secures data traveling between clients and cache nodes by employing transport layer security, or TLS, for encrypted connections.`
            }
          ]
        },
        {
          "name": "Additional Database Services",
          "services": [
            {
              "title": "Amazon DocumentDB",
              "description": `	Amazon DocumentDB (with MongoDB compatibility) is fully managed service designed to handle semistructured data, which is information that doesn't conform to rigid relational schemas. Amazon DocumentDB is a MongoDB-compatible database, so it manages JSON-like documents with dynamic schemas.

                                Amazon DocumentDB is perfect for applications requiring frequent schema changes and document-oriented data. Unlike relational databases or nonrelational databases, you can quickly iterate without relying on predefined schemas. Amazon DocumentDB can store, query, and index JSON data effortlessly, all while benefiting from automatic scaling, continuous backup, and enterprise-grade security features.

                                Use cases
                                Some examples of practical use cases for Amazon DocumentDB are content management systems, catalog and inventory management, and user profile and personalization systems.

                                Benefits
                                MongoDB compatibility
                                Amazon DocumentDB is fully compatible with MongoDB workloads and supports MongoDB APIs, drivers, and tools. This compatibility means that you can use existing MongoDB code and skills without modification. You can also migrate MongoDB applications to Amazon DocumentDB with minimal changes to their application code.

                                Performance and scalability
                                Amazon DocumentDB automatically scales storage up to 64 TB in 10 GB increments based on your application needs. It can handle millions of requests per second with consistent performance. It also provides the option to scale compute resources up or down as needed.

                                Increased read throughput
                                Amazon DocumentDB improves read throughput for high-volume applications by creating up to 15 replica instances that share underlying storage.

                                Storing and managing a large product catalog for an ecommerce application
                                Amazon DocumentDB excels at handling semistructured data like product catalogs.`
            },
            {
              "title": "AWS Backup",
              "description": `	AWS Backup streamlines data protection across various AWS resources and on-premises deployments by providing a single dashboard for monitoring and managing backups. It eliminates the complexity of managing multiple backup strategies by supporting multiple storage types, including Amazon Elastic Block Store (Amazon EBS) volumes, Amazon Elastic File System (Amazon EFS) file systems, and various databases.

                                AWS Backup centralizes and automates data protection processes, improving consistency and reducing administrative overhead. It offers flexible scheduling options, encryption capabilities, and cross-Region backup support for enhanced disaster recovery.

                                Use cases
                                Some examples of practical use cases for AWS Backup are centralized disaster recovery, consistent backup policies for compliance requirements, and consolidating multiple backup processes through a single interface.

                                Centralized backup management
                                AWS Backup provides a single dashboard to manage backups across multiple AWS services and accounts. You can monitor backup jobs, restore points, and verify compliance status from one central location to reduce operational complexity and potential configuration errors.

                                You can create automated backup schedules that align with your business requirements and compliance needs. You can set up backup policies that automatically protect new resources as they're created.

                                Cross-region backup redundancy
                                AWS Backup enables automatic replication of backup data across different AWS Regions for disaster recovery purposes. You can quickly restore data from secondary Regions if the primary Region experiences an outage. Cross-Region redundancy helps you meet compliance requirements while guaranteeing data accessibility during Regional failures.

                                Streamlined regulatory compliance
                                AWS Backup maintains detailed audit logs and reports to demonstrate compliance with regulatory requirements. You can use it to enforce backup policies across your organization and track backup activities for security and compliance purposes.`
            },
            {
              "title": "Amazon Neptune",
              "description": `	Neptune is a **fully managed**, purpose-built graph database service that manages highly connected data sets, like those used in social networking applications. It excels at understanding complex relationships that are difficult to identify in traditional relational databases like user connections, friend networks, and interaction patterns. Neptune can maintain high performance even as data complexity grows, and offers high availability with automatic failover and backups.

                                Use cases
                                Some examples of practical use cases for Amazon Neptune are social network user connection mapping, fraud detection systems, and search and recommendation systems.

                                Purpose-built for complex relationships
                                Neptune excels at storing and querying highly connected data using graph models. It supports both property graph and resource description framework, or RDF, models making it ideal for relationship mapping and pattern matching applications.

                                High performance and scalability
                                Neptune delivers consistent performance at scale, processing billions of relationships in milliseconds. It automatically grows storage up to 64 TB based on your application needs. Its purpose-built engine optimizes graph queries to enable fast traversal of connected data points at scale.

                                Neptune provides low-latency and high-throughput performance for both read and write operations, making it suitable for real-time applications working with connected data.
                                Neptune is optimized for storing and querying highly connected data with millisecond latency.

                                **A graph database service optimized for storing and querying highly connected data relationships**`
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
              "description": `Dynamodb accelator (DAX) Cache layer for non relational data`
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
              "title": "Amazon EC2",
              "description": "Elastic Compute Cloud provides secure, resizable compute capacity in the cloud. Wide selection of instance types optimized for different use cases."
            },
            {
              "title": "Amazon Lightsail",
              "description": "Easy-to-use virtual private server (VPS) with simple management. Includes everything you need to launch your project quickly."
            }
          ]
        },
        {
          "name": "Containers",
          "services": [
            {
              "title": "Amazon ECS",
              "description": "Elastic Container Service is a fully managed container orchestration service. Deep integration with AWS services for production workloads."
            },
            {
              "title": "Amazon EKS",
              "description": "Elastic Kubernetes Service makes it easy to run Kubernetes on AWS without managing the control plane. Certified Kubernetes conformant."
            }
          ]
        },
        {
          "name": "Serverless",
          "services": [
            {
              "title": "AWS Lambda",
              "description": "Run code without provisioning or managing servers. Pay only for the compute time you consume. Supports multiple programming languages."
            },
            {
              "title": "AWS Fargate",
              "description": "Serverless compute engine for containers. Works with both ECS and EKS. Eliminates the need to provision and manage servers."
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
              "title": "Amazon S3",
              "description": "Simple Storage Service offers industry-leading scalability, data availability, security, and performance. Store and retrieve any amount of data at any time."
            },
            {
              "title": "Amazon Glacier",
              "description": "Low-cost cloud storage service for data archiving and long-term backup. Secure, durable, and extremely low-cost storage for data that is rarely accessed."
            }
          ]
        },
        {
          "name": "Block Storage",
          "services": [
            {
              "title": "Amazon EBS",
              "description": "Elastic Block Store provides persistent block storage volumes for EC2 instances. Designed for workloads requiring low-latency access."
            }
          ]
        },
        {
          "name": "File Storage",
          "services": [
            {
              "title": "Amazon EFS",
              "description": "Elastic File System provides simple, scalable, elastic file storage for use with AWS Cloud services and on-premises resources."
            },
            {
              "title": "Amazon FSx",
              "description": "Fully managed third-party file systems. Supports Windows File Server, Lustre, NetApp ONTAP, and OpenZFS."
            }
          ]
        }
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
                              update processes
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
                              Are you stuck with it? No. You can switch to an instance with lower specs, which might actually be more cost-effective.
                              Moreover, if you don’t need a service, deprovision it. Eliminate the cost.`
            },
            {
              "title": "Sustainability",
              "description": `
                              It emphasizes designing energy-efficient systems and minimizing **environmental impact**.
                              This pillar encourages using the most appropriate AWS infrastructure to reduce the need for always-on resources.

                              For example, if you don’t need an always-on EC2 instance, consider switching to AWS Lambda.
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
                              **Technological transformations**: refers to utilizing the cloud to migrate and modernize legacy infrastructure, application, and data and analytics platforms.
                              **Process transformations**: talks about digitizing, automating, and optimizing business operations.
                              **Organizational transformation**: reimagines the organizational model or how your business and technology teams work together to create customer value and meet strategic goals.
                              **Product transformation**: reimagines the business model by creating new value proposition and revenue models. `
            },
            {
              "title": "AWS CAF Functional and business stake holders/ perspectives and foundational",
              "description": `enables the transformation chain
                              **Business perspective**: makes sure that IT aligns with business needs and that IT investments link to key business results.
                                  Use the Business perspective to create a strong business case for cloud adoption and prioritize cloud adoption initiatives. Make sure that your business strategies and goals align with your IT strategies and goals.
                                  stake holders: business managers, strategists, and finance managers. CEO, CFO, COO
                                  ensure that the cloud investments link to key business results and outcomes.

                              **People perspective**: supports development of an organization-wide change management strategy for successful cloud adoption.
                                  Use the People perspective to evaluate organizational structures and roles, assess new skill and process requirements, and identify gaps. This helps prioritize training, staffing, and organizational changes.
                                  create a culture that embraces change and innovation.
                                  stake holders: human resources managers, Staffing, and oPeople managers .

                              **Governance perspective**: focuses on skills and processes to align IT strategy with business strategy. This perspective helps you maximize business value and minimize risks.
                                  Use it to understand how to update the staff skills and processes necessary to maintain business governance in the cloud. Manage and measure cloud investments to evaluate business outcomes.
                                  Maximize organizational benefits while minimizing cloud-transformation risks.
                                  stake holders: Chief information officer (CIO), Program managers, project managers, and legal counsels.

                              **Platform perspective**: includes principles and patterns for implementing new solutions in the cloud and migrating on-premises workloads to the cloud.
                                  Use a variety of architectural models to understand and communicate the structure of IT systems and their relationships. Describe the architecture of the target state environment in detail.
                                  Build enterprise-grade scalable, hybrid cloud platforms, implement cloud-native solutions and modernize existing infrastructure.
                                  Stake holders: infrastructure architects, IT managers, application architects, and DevOps engineers.

                              **Security perspective**: makes sure that the organization meets security objectives for visibility, auditability, control, and agility.
                                  Use AWS CAF to structure the selection and implementation of security controls that meet the organization's needs.
                                  Achive the confidentiality, integrity, and availability of data and systems in the cloud.
                                  Stake holders: chief information security officers (CISOs), security architects, and security analysts.

                              **Operations perspective**: helps you to enable, run, use, operate, and recover IT workloads to the level agreed upon with your business stakeholders.
                                  Define how day-to-day, quarter-to-quarter, and year-to-year business is conducted. Align with and support the operations of the business. AWS CAF helps these stakeholders define current operating procedures and identify the process changes and training needed to implement successful cloud adoption.
                                  Ensure that the cloud services delivered meet business needs.
                                  Stake holders: IT operations managers, IT support managers, IT support staff, and site reliability engineers (SREs).
                                  `
            },
            {
              "title": "AWS CAF Phases",
              "description": ` transformation journey to adopting the cloud
                              **Envision Phase**: Demonstrate how cloud adoption will help accelerate business outcomes and objectives.
                              **Align Phase**: Identify capabilities gaps acress the six CAF perspectives, identifty cross-organization dependencies, and recognize stakeholder concerns.
                              **Launch Phase**: Deliver polot initizitve in production and demonstrate incremental business value before scaling to full production.
                              **Scale Phase**: Expands pilots, scaling up to meet desired business needs while sustaining business benefits.
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
              "description": `users have the flexibility to migrate existing resouces to the cloud, and/or build new apps within the cloud environment.
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
              "title": "Public Cloud",
              "description": `users have the flexibility to migrate existing resouces to the cloud, and/or build new apps within the cloud environment.
                              100% cloud based infrastructure
                              All applications and data are hosted on the cloud providers infrastructure`
            },
            {
              "title": "Private Cloud/ On-Premises",
              "description": `using virtualization and resouce management tools does not provide the benefits of cloud computing.
                              However it is sometimes sought for its ability to provided dedicated resources and low latency
                              In most cases this deployment model is the same as legacy it infrastructure whule using application management and virtualization technologies

                              Infrastructure is hosted within the organizations own facilities similar to traditional IT infrastructure

                              Pros - full control over hardawre and software and data
                              Cons hight upfront cost. Limited scalability `
            },
            {
              "title": "Hybrid Cloud",
              "description": `cloud based and on premise work together. Good when legacy applications must remain on premise due to maintenance preferences or regalatory requeirements

                              A company might retain regulated legacy applications on-premise while using cloud services for advanced data processing and analytics

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
                              Aws cost will be variable from month to month. Billed only on what you use. When testing you do not need to invest immediately `
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
                                What if the next year ther are less users? You are stuck with the hardware
                                What if the next year there are more users? You won't be able to handle  the users
                              In aws scaling takes minutes. You can scale up and down resouces based on the amount of users `
            },
            {
              "title": "Increase speed and agility  ",
              "description": `You can create test environments to experiement
                              After testing you can delete the provision/resouces and cost
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
                              When on without aws it takes months and years to expand a business to different areas `
            }
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
      return `<p>${formatText(formattedPara)}</p>`;
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
