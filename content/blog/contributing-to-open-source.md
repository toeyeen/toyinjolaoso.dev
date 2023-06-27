---
title: Contributing to Open Source
id: contributing-to-open-source
createdAt: 2023-06-26 23:27:37
type: post
blog: true
tags: ['Open source', 'Work']
author: 'Jolaoso Toyin'
excerpt: In this blog post, I want to share a valuable approach to effectively communicate suggestions and pain points in a new working environment. Whether it's at work, in an open-source project, or within a community, conveying your ideas in a clear and concise manner is crucial for them to be considered. Through my own experience, I have developed an approach with a success rate of around 95%..
---

This is the very first writing that I have not been forced to do, in one way or the other either be it a school project, monetary reasons, visa statement of purpose or exam. I see all these as motives for writing, but today I will say that I am writing because I want to educate other young developers and get better at writing. There is a purpose behind it  This is a huge milestone for me. I am not much of a writer, all my life I have always found a  way to distance myself from writing because of this I opted to do engineering coupled with some other funny and interesting reasons but it is a story for another day. Let's get right into what this blog is about.

Are you in a new working environment?  It could be work, open source, or even a simple discord community and you have been giving your suggestions but it does hold water so the facilitators do not consider it. There is a very high chance that this is because of the way you are passing your suggestion across, Today I will show my approach which I can comfortably tell you have a  95% success rate,  👀 I did the calculation myself.

### Steps you take

When suggesting a feature or explaining a pain point it will be great if you can break down your thoughts into different paragraphs. Example.

#### Title

Simple and short Title that explains the issue at hand in one glance

#### Description

Describe the situation, if you encountered a problem describe the use case and how it is a problem to the application e.g As a user when I want to place a bet but it takes me about 5 clicks to get my bet approved, or as a user, I would like to see the deposit page on the first load of the website. These are simple and straightforward examples

#### Examples

You can further give two or three examples depending on the subject topic (It shouldn’t be more than 5), but try as much to give an example. Some people believe examples should be optional but I think it is one of the most important things in the suggestions because it gives the reviewer a clear picture of what you are trying to achieve.

#### Suggestion

 This should contain how you think the task should be solved. Write or express yourself in a way that can easily get suggestions and opinions from your team or other collaborators.

#### Conclusion

A simple and concise conclusion of your problem.

Below is an example further detailing how your can present your suggestion

## Example

### Examine Project

I would like dev tools to examine the project to try to look for best practices and ways to improve my experience. This one might be a little bit more tricky, I think this would useful. Showing ways to better improve the app in general and in performance. The only problem is trying to figure out what's right.

- E.g: If you use SSG over node server you could possibly see a performance increase on average % -%.
- E.g: Instead of using `thisFunction` have you tried possibly making into a composable? You have duplicate code here, here and here. The downside to this is....
- E.g You don't seem to be using `server/`, it might be optimal to delete this directory until it's used.
- E.g The Nuxt Team prefers using `....` over `....`
- E.g It seems that you using the options api with only one method and data, have you tried using the Composition API to even simply it more ?

The standard is set based on what version of nuxt so then make it easier when people upgrade they can see where functions are deprecated or there is better alternatives.

- **Full Examine**
  - Takes quite a bit longer but can be a button that pressed to then scan the whole repo itself with some progress bar.
- **Quick Examine** (Run on start of dev)
  - Maybe it just scan components, pages, endpoints that loaded initially AKA (whatever page they are currently on).

The goal is to show how do best practices, optimize code/quality and performance. This could help people greatly especially for beginners and just old projects migrating to the newer standards of nuxt.
