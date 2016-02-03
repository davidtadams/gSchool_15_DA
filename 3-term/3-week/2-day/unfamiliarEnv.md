# Application Analysis in Unfamiliar Environments

---

## Standards and Objectives:

- Set up developer environments for applications written in an unfamiliar languages
  - Install all necessary dependencies and start attached services
  - Local database is created and populated
  - Application starts and all “working” features are usable

- Analyze existing code in applications written in unfamiliar languages to fulfill requirements
  - Fixes bugs in existing, unfamiliar code (at least 1)
  - Adds features to fulfill requirements (at least 1)

---

## Action Plan

1. Choose a Language

1. Setup Development Environment

1. Write/Compile/Run Hello World

1. Fix a bug in an existing project

1. Implement a feature in an existing project

1. Build and Deploy a Web Service/Application

---

# Overview of Server Side Languages

---

![php](http://php.net/images/logo.php)

PHP is a popular general-purpose scripting language that is especially suited to web development.

Fast, flexible and pragmatic, PHP powers everything from your blog to the most popular websites in the world.

---

# php

```php
<?php
$file = fopen("file.txt", "r");
while(!feof($file)){
    $line = fgets($file);
    echo $line;
}
fclose($file);
?>
```

---

![python](https://www.python.org/static/img/python-logo@2x.png)

Python is a programming language that lets you work quickly and integrate systems more effectively.

Python is powerful... and fast; plays well with others; runs everywhere; is friendly & easy to learn; is Open.

---

# python

```py
with open("file.txt", "r") as ins:
    for line in ins:
        print line
```

---

ruby

![ruby](https://www.ruby-lang.org/images/header-ruby-logo@2x.png)

A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.

---

# ruby

```rb
File.foreach('file.txt').with_index do |line |
    puts line
end
```

---

<img src="http://devstickers.com/assets/img/pro/2p4i.png" style="max-height:200px"/>

C# is an elegant and type-safe object-oriented language that enables developers to build a variety of secure and robust applications that run on the .NET Framework. You can use C# to create Windows client applications, XML Web services, distributed components, client-server applications, database applications, and much, much more.

---

C#

```csharp
var fileStream = new FileStream(@"file.txt", FileMode.Open, FileAccess.Read);
using (var streamReader = new StreamReader(fileStream, Encoding.UTF8))
{
    while ((string line = streamReader.ReadLine()) != null)
    {
        System.Console.WriteLine(line)
    }
}
```

---

![C++](https://isocpp.org/images/uploads/logo-sun.jpg)

C++ is a general purpose programming language with a bias towards systems programming. C++ supports data abstraction, object-oriented programming and generic programming.

---

# C++

```C++
#include <fstream>
#include <string>
#include <iostream>

int main()
{
    std::ifstream file("file.txt");
    std::string str;
    while (std::getline(file, str))
    {
        cout << str;
    }
}
```

---

![java](https://upload.wikimedia.org/wikipedia/en/8/88/Java_logo.png)

Java is a general-purpose computer programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible. It is intended to let application developers "write once, run anywhere" (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.

---

```java
FileInputStream fstream = new FileInputStream("file.txt");
BufferedReader br = new BufferedReader(new InputStreamReader(fstream));

String strLine;

while ((strLine = br.readLine()) != null)   {
  System.out.println (strLine);
}

br.close();
```

---

# Overview of Server Side Frameworks

https://github.com/showcases/web-application-frameworks?s=stars

---

Ruby
 - Ruby on Rails
 - Sinatra

---

C#
 - ASP.NET

---

python
 - Django
 - flask

---

PHP
 - Laravel
 - Cake PHP
 - CodeIgniter
 - http://www.phptherightway.com/

---

C++
 - Wt, C++ Web Toolkit
 - CppCMS
 - TreeFrog
 - Silicon Framework

---

Java
 - Spring
 - Spark
 - Ninja

---

# Research Languages and Frameworks that Interest You

 - Check Job Posting websites to get a feel for language/framework popularity
 - Search reddit.com/r/programming reddit.com/r/webdev etc
 - Find top frameworks on github

---

# Setup Development Environment

---

- Find Relevant Docker Image
- Find Relevant VM Ware/Virtualbox Image
- Install the SDK/Setup Development Environment
- Choose an IDE: Visual Studio, Eclipse, InteliJ, XCode

---

Familiarize yourself with the Language
 - Official Tutorials
 - Official Documentation
 - StackOverflow Questions
 - CodeSchool etc.
 - You don't have to learn the whole language, just learn enough to be productive

---

# Write/Compile/Run Hello World

---

# PUSH

---

Write a Web Service
 - Use an existing project/example
  - translate to new language
  - recognize commonalities
  - API endpoints should be the same
   - front end client should not care what the back end language is

---

Deploy a Web Service
 - Deploy to a service you have not yet used
  - AWS
  - IBM Bluemix
  - run.pivotal.io
  - Google Cloud
  - Azure

---

# Where to look for help

- Practice Search Engine Foo (Google Foo)
- Stack Exchange/Stack Overflow
- Language/Framework Specific Sub-reddit
- Google Groups/Forums
- Other Forums/Q&A Websites

---

## Standards and Objectives:

- Set up developer environments for applications written in an unfamiliar languages
  - Install all necessary dependencies and start attached services
  - Local database is created and populated
  - Application starts and all “working” features are usable

- Analyze existing code in applications written in unfamiliar languages to fulfill requirements
  - Fixes bugs in existing, unfamiliar code (at least 1)
  - Adds features to fulfill requirements (at least 1)

---
