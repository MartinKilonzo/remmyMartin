---
title: Reddit Redesign

description: A content-focused redesign of Reddit inspired by 30+ design principles from Universal Principles of Design (Lidwell et al), with the goal of lowering the learning curve for new Redditors.

preview: previews/redditredesign.jpg

skills: JavaScript, React

github: RedditRedesign
---

![Content-focused browsing experience.][image-1]
_Content-focused browsing experience._

![Cleaner, more navigable navigation menu.][image-2]
_Cleaner, more navigable navigation menu._

![Cleaner, more functional search feature][image-3]
_Enhanced search feature, which is used to discover subreddits, threads, and content._

## Executive Summary of the Project
Reddit is a social media website where over 250 million unique users go to browse the latest, most popular content available on the internet. Here, users share images, articles, projects, videos, and other content, which are then ranked by other users using an upvote-downvote system to indicate the quality of the content. Users are able to reply to the content, creating a conversation surrounding the particular topics, which too are exposed to the content rating system. 

As the home of the internet’s seventh most popular website, Reddit’s desktop experience is very unimpressive. Although simple in design, Reddit is under-designed—it is difficult to navigate, and is reminiscent of websites predating the year 2000. The visuals affect the user’s perception of the website, and thus their experience. 

Moreover, its layout is cumbersome for the user, hampering their ability effectively use the application. Many of the title bars, and dropdown menus are unintuitive, and there are inconsistencies in the layout of the topic pages. Further, browsing through content is hampered by the user’s inability to preview a “post” before committing to reading it. In fact, this process is exceptionally cumbersome, as the user must either load the entire post in their current window, or open a new window for each new intriguing post. These, and many other issues make the in-browser Reddit experience disappointing, especially when compared to the experience offered from their mobile apps. 
Our goal was to change this—to transform Reddit’s landing page into an experience worthwhile, that is easy to navigate and encouraging to new users. To accomplish this task, we have explored many design principles to guide us in redesigning the webpage. 

Many of the title bars and drop-down menus are unintuitive, and there are inconsistencies in the layout of the topics in the front page of their website. We reorganized the topics on the front to be more interesting and more intuitive for users. Additionally, we noted the many redundant or duplicate features available on Reddit’s front page and removed or reorganized them to reduce clutter, simplifying the navigating process for users. 

Although these changes have significant impact on the visual appearance of Reddit, we aimed to minimize their effect on its functionality. We reorganized the functional components to be co-located with the relevant components—that is, the components which the effect. To this end, we redesigned what a post looks like, focusing on the content (typically an image or video), rather than the title, and providing their respective controls in an encapsulated content-tile. Taking this further, we split Reddit’s one-page, monolithic approach into three main views: the content view, the navigation view, and the search view—each with the respective components and functionality encapsulated in their views. This was done to emphasize the relationships between components and functions, reinforcing their mappings for users. 

It seems that Reddit forgot its primary purpose in designing their front page. As a content viewing website, their front page fails to emphasize the viewing of content. Moreover, it fails to act as a functional entry-point, as its illogical layout makes navigation a nightmare. Our redesign aims to refocus the Reddit experience on content viewing, by emphasizing the content, and providing ancillary content and navigation functionality in appropriate locations, reflective of a content-first experience. 


[Click here for the full report][1]


[1]:	previews/reddit-redesign.pdf "Reddit Redeisgn"

[image-1]:	previews/reddit-dashboard.jpg "Reddit Dashboard"
[image-2]:	previews/reddit-nav.jpg "Reddit Navigation Menu"
[image-3]:	previews/reddit-search.jpg "Reddit Search Bar"