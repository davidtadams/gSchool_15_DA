[From this repo from Roberto](https://github.com/BertoOrt/go-curriculum)

# Introduction and Set-up

### What is go?

Go is a statically typed, programming language developed by Google. Why learn it? Very rarely will you hear about go without the word "concurrency". Basically, it is amazing at dealing with a lot of things at once. Go compiles and scales efficiently, making it ideal for large applications.

Check out the links below to learn more about Go or what any of those words mean.

Personally, I find go simple and fun to write. Concurrency is not essential to Go. We will take a look at goroutines and channels later on, for now we can write programs without it no problem.

### Hello go!

#### Installation

First, let's start by getting the gopher running in your computer.

Go has wonderful documentation over at [golang.org](golang.org). The installation can be found [here](https://golang.org/doc/code.html).

You can download Go [here](http://golang.org/doc/install) or with homebrew:

``` brew install go```

Next, let's set up your GOPATH.

Make a directory in your workspace where all your Go files are going to live. Inside, Go is organized with the following structure:

- ```bin``` : contains binaries and programs that are installed (this will make sense later)
- ```pkg``` : contains the object files, or packages
- ```src``` : contains all Go source files, yours and downloaded ones

You don't have to make those.

Your GOPATH is an environmental variable that points to your Go directory. In other words, it's what Go uses to know where everything is. So if your Go directory is goMagic, your GOPATH should be $HOME/workspace/goMagic and inside you would have ~/bin, ~/pkg, and ~/src.

To set up your GOPATH, include it in your bashrc, profile, or bash_profile so it is exported every session.

For example:

```vi ~/.bash_profile```

and include:

```
export GOPATH=$HOME/workspace/goMagic
export GOROOT=/usr/local/opt/go/libexec
export PATH=$PATH:$GOPATH/bin
```

Once you have it set up, type:

```echo $GOPATH```

your path should show up nicely.

To double check everything is good, lets get the go-challenges repo by entering:

```go get github.com/bertoort/go-challenges```

now you should see the folder structure inside your Go file. Inside your src directory, github.com/bertoort/go-challenges.

#### First program

By convention, all your programs should be managed inside a version control system like github. So, for me, all my projects are nested inside $GOPATH/src/github.com/bertoort.

Make a directory inside your github.com/[username]:

```mkdir $GOPATH/src/github.com/[username]/hello```

cd into it. Now, let's make our first go program:

```touch main.go```

Open it with the text editor of your choice and include:

```
package main

import "fmt"

func main() {
	fmt.Printf("Hello Go!")
}

```

Back on your command, enter:

```go run main.go```

and you should see Hello Go!

### Play Around!

#### Go Tools

Now that you have everything set up, check it out. Go has many tools builtin. Let's cover some of the basics:

- ```go build``` : compiles the packages named by the import paths, along with their dependencies.
- ```go install``` :  places the package object inside the pkg directory of the workspace so you can run it with a binary command.
- ```go get``` : pulls down source files and puts them in your src directory.
- ```godoc -http=:3000``` : will run the documentation site through a local port. This is great if you don't have internet.
- ```go test``` : it, well, tests your code if you have a test file set up.
- ```go fmt```: makes the code you wrote at 3am look gorgeous.

#### Challenges

Before jumping into your first real app, check out some of the [code examples](https://gobyexample.com/) and try out some of the [go-challenges](https://github.com/bertoort/go-challenges). This will be a great way to gradually get used to the syntax and become a successful Gopher!

##Resources

- [The Docs](https://golang.org)
- [Online Book](http://www.golang-book.com/)
- [Download](http://golang.org/doc/install)
- [Installation](https://golang.org/doc/code.html)
- [Code Examples](https://gobyexample.com/)
- [More Examples](https://github.com/codegangsta/essential-go)
- [go-challenges](https://github.com/bertoort/go-challenges)
- [Concurrency](https://www.youtube.com/watch?v=cN_DpYBzKso)
