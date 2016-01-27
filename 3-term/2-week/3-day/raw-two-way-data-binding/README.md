# 2-Way Data Binding

## Set the stage

Close your terminal windows / browser tabs / atom windows etc...

### Objectives

- Build a two-way data binding system using no JS frameworks at all
- Describe two-way data binding

### Why are we doing this?

Angular has a sophisticated 2-way data binding system.  Understanding the basics will demystify Angular's magic-looking data binding.

## Background

Many frontend web frameworks use a concept called data binding.  This means two things:

1. when _data changes_ (variables / properties) in your application, the DOM is updated
1. when _form field values_ change, data in your application (variables / properties) also change
  - which triggers step 1 :)

## Exercise

Open each html file in order.  Follow the challenges in comments.

## Stretch

Once you are done with the last one:

- redo the 2-way data binding without using properties on the window object (bind to some other object)
- package it into more of a framework (a top level function)
- support more deeply nested binds (like `data-bind="foo.bar"`)
- write tests for it with Karma + (Jasmine / Mocha Chai)
- enable the ability to bind to an array and have it add / remove nodes when things are added / removed from the array
