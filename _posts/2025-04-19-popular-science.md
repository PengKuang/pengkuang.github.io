---
layout: post
title: Can we make reading code easier with eye tracking?
date: 2025-04-19 11:36:00
description: popular science style article
tags: popular science
categories: work
thumbnail: assets/img/posts/cover-gaze.jpg
citation: false
---

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mb-3">
    {% include figure.liquid path="assets/img/posts/cover-gaze.jpg" class="img-fluid rounded" %}
    </div>
</div>
# Can we make reading code easier with eye tracking?

Peng Kuang

Reading code is time-consuming for software engineers and therefore costs a lot of money. A study at Lund University is investigating technologies to shorten the time needed for it. Eye tracking is one of the solutions that hopefully can achieve that.

# What is Code?

Code is the instructions that we use to communicate with a computer. We can write code in different programming languages such as C++, Java, and Python. A simple but commonly used code example for teaching the syntax (the way words can be arranged to formulate language structures) to beginners in almost every programming language is such a one-line statement:

```

    System.out.print(“Hello World!”);

```

_\*\* This example statement is written in Java. It tells the computer to print out “Hello World\!”. When it is written in other programming languages, the syntax can be slightly or largely different depending on the programming language you choose._

Similar to how we compose texts in natural languages, code can be written as short or long. It can be as short as just one sentence. It can also be as long as millions of lines. The latter case normally occurs when we are developing large-scale software. The software essentially is a container of code. Large-scale software is just the type of software that contains more code, like a thick textbook containing millions of lines of text.

# Why can code be difficult to understand?

In general, code is deemed difficult to understand. On the high level, the reason is twofold. Intrinsically, the syntax can be cognitively demanding to understand sometimes, especially if the programming language is poorly designed. Extrinsically, as the volume of code increases, so does its complexity. Therefore, it requires more cognitive effort to make sense of it. This is pronounced when the code is poorly written. For instance, the code style is inconsistent (software development usually involves many programmers writing different parts of the code nowadays), and/or the architecture is not well-designed such that different parts of code are entangled like spaghetti. Anecdotally, spaghetti code are not uncommon in the industry as businesses tend to prioritize delivery over perfect code.

![](https://web-api.textin.com/ocr_image/external/ef408b58cda90ef3.jpg)

An example of Spaghetti code.

# Why is it important to make it easier?

Many tools have been developed to mitigate the impact of these two factors, but still, it consumes a lot of programmers’ time to read and understand code. For example, Google reports that new software engineers at the company may take 12-21 weeks to get familiar with the codebase of a project. This implies that precious software engineer time is being invested in this. Moreover, many software engineers do not enjoy doing this task.

# How can we make it easier?

In our study, we deal with the presentation layer of the problem. That is, to focus on reducing programmers’ time spent navigating to the files (similar to the pages of a book) and searching for the relevant lines of code when working on a large codebase. Our approach does not care much about how the code functions.

![](https://web-api.textin.com/ocr_image/external/04c2a6cbd2c6e41c.jpg)

The components inside a typical eye tracker.

# Why eye tracking?

For this purpose, we make use of eye tracking. Eye tracking is an unintrusive technology that captures a user’s eye movement with infrared light and a camera. With algorithms, it can calculate where the user’s gaze was on a stimulus such as a code snippet.

Diving into such data, we can tell where programmers’ attention was distributed among the lines of a code file or the code files of a software project. If we visualize the attention distribution properly, programmers can follow these visual cues and only spend time reading the most relevant parts of code or code files. Additionally, we can measure the individual attention of a programmer and compare it with the summed attention of an entire developer team. The deviation derived from such comparison can inform the programmers of where they missed reading or can potentially spend more time, for example, when they are looking for errors in the code.

# Who will benefit from such support?

Providing such on-demand support may boost software engineers’ efficiency in reading and understanding a codebase and thus their productivity. Other cohorts of programmers can benefit from such gaze-based assistance too. For example, programming learners who often work on pre-scaffolded assignment projects, professional developer wannabes who attempt to contribute to open-source projects to build a good portfolio, and programmers (e.g., neurodivergent programmers, programmers with low proficiency in English) who prefer a learning style that is not purely textual. As Large Language Models (LLMs) such as ChatGPT and Co-pilot have lowered the barrier to learning programming, new kinds of tool assistance, e.g., enabled by eye-tracking in our case, may empower a broader and more diverse population than ever before.

| Fact Box                     |                                                                                                            |
| ---------------------------- | :--------------------------------------------------------------------------------------------------------- |
| _**Term**_                   | _**Explanation**_                                                                                          |
| Programming Languages        | A set of rules that a programmer can follow to compose instructions for a computer.                        |
| Codebase                     | A virtual space for storing all the code and other necessary files of a software project.                  |
| Stimulus                     | The material used in an eye-tracking experiment, e.g., an image or a code snippet.                         |
| Gaze                         | The output from an eye tracker. It describes the participant’s eye movement on a stimulus.                 |
| Large Language Models (LLMs) | A type of architecture that performs well in generating textual answers for questions in natural language. |
| ChatGPT                      | A platform enabled by an OpenAI-owned LLM where you can ask questions to get usually good answers.         |
| Co-pilot                     | A similar product to ChatGPT that was released by Microsoft.                                               |
