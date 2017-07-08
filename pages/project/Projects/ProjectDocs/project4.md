---
title: Hercules Galaxy

description:  Designed and developed data visualization tools for the Schulich School of Medicine & Dentistry, allowing for the deeper analysis of various performance metrics, enabling the school to make informed decisions in allocating $60 000 000 in research grant funding.

preview: previews/herculesGalaxy.png

skills: C++, Qt

github: HerculesGalaxy
---

![Preview of the Hercules Galaxy app][image-1]

The Schulich School of Medicine & Dentistry at Western University has a Galaxy team responsible for allocating resources (primarily staff and funding) across its departments. For years, they have been using various systems to help them make allocation decisions, but each had their drawbacks, and so they had asked for a custom software solution.

Our team of six programmers worked alongside the Galaxy team to plan, design, build, and integrate their solution over the course of four months.

## Planning
The planning phase required our team to utilize development methodologies congruent to the needs of the project and the Galaxy team. Here we understood that communicating with the entire team would happen rarely, but we would have more frequent communication with the manager of the department. Understanding this, and having a preference for iterative development, we adopted Agile’s cyclic meetings, with bi-weekly meetings with the manager and monthly meetings with the overall team. This allowed us to regularly update the client on our progress, get regular feedback, and maximize participation in the process. It also gave us a natural schedule for minor and major updates, where minor releases would occur between the smaller meetings, and major releases would occur between the larger ones.

## Designing
The design for Hercules Galaxy can be split into two parts: the front-end (or UI), and the back-end.

### User Interface
The design for the user interface was entirely guided by the users of the application. Taking inspiration from their existing software products, we worked alongside each staff member to integrate their use cases and design preferences into the application.

### Application Design
We wrote a lengthy report detailing the the selected design methodologies, and our rationale for their selection, available [here][1].

## Building
With an understanding of our team’s strengths and the users’ requirements, we developed the application using Qt’s C++ library as it provides useful functions between front-end components and the functionality of the application, has been vetted by hundreds of firms, and is well supported by its strong user-base and detailed documentation. To learn more about the specifics of development, check out [this report][2].

## Integrating
Integrating the new system into the existing workflow of the Galaxy team required seamless interaction between their application and their database, which holds over a decades of records. This was another benefit of using QT: they provided a library which facilitated communication between the School’s SQL database, and the rest of the application.

Beyond this, we conducted various user and system tests to ensure the viability of the product. One of the benefits of including user in the development process is that it lowers their learning curve. Nonetheless, we produced an educational video and detailed application documentation to act as a reference,  or as training material for new employees.

[1]:	previews/herculesGalaxy/Hercules%20Galaxy.pdf "Hercules Galaxy Report"
[2]:	previews/herculesGalaxy/Hercules%20Galaxy.pdf "Hercules Galaxy Report"

[image-1]:	previews/herculesGalaxy.png "Hercules Galaxy"
