---
title: Limitless

description: A business management application which uses computer-vision and RFID/NFC payments to streamline expense tracking and cash flow management for small business owners.

preview: previews/limitless.png

skills: Java, JavaScript, Python, React, MongoDB, Express.js, Flask, Scikit-Learn

github: Limitless
---

![Preview of the Limitless app][image-1]

In September of 2017, I was approached by a team of two business graduates and two programmers who wanted me to join them in competing in RBC’s Next Great Innovator hackathon. I was intrigued especially since this was the first hackathon I have participated in which had a prompt: we were tasked with designing and prototyping a tool that helps small-medium business owners manage and grow their businesses.

## Idea
Our first objective was to narrow down what “helps small-medium business owners manage and grow their businesses” entailed. After peering through hours of statistics and articles, and conducting dozens of interviews with entrepreneurs, it was clear to us that the most pressing issues these early entrepreneurs faced could be bucketed into three categories:
1. Generating sales
2. Managing their payments to suppliers
3. Finding competent employees
Considering the theme of the hackathon (it being hosted by Canada’s largest retail bank), we opted to try to help solve the second problem, and explored it further. After conducting a second round of interviews, we discovered that these business owners had trouble getting cash when they needed it, because the loan approval process was too slow for their fast-paced needs, or because of off-sync sales and invoice cycles. And so, our goal was to develop a product which can provide cash to businesses immediately, allowing entrepreneurs focus less on managing their cash, and more on growing their businesses.

## Hackathon
Having spent time with entrepreneurs to design a solution that worked for them beforehand, we came into the hackathon knowing what we were going to make, and how each component should look.

Our application brought used a collection of four features to solve entrepreneurs cash problems:
1. Dashboard to monitor the firm’s health
2. Payments view to manage cash accounts and balances
2. Android payments app to track cash outflows and manage access to accounts
4. Analytics which made recommendations to better manage cash inflows and outflows and detect unusual spending.
### Website
Using React.js as its front-end framework, the website provided an overview of the firm’s finances, coupled with controls to manage access, users, and change other settings. Each of the features were designed with scalability in mind, allowing certain users to add staff, teams, and departments allowing the app to grow with the firm.


![The Dashboard view of the Limitless app][image-2]
_The dashboard provides an instant snapshot of the business’s cash situation, allowing the owner to quickly assess its status on the fly._


![A cash breakdown by team and teammember][image-3]
_The team view allows management to track cash trends of specific teams, departments, and members._


![The payments view of the Limitless app][image-4]
_The payments view provides the necessary controls to manage spending accounts and their permissions, as well as track their performance._


### Android App
Built using Android Studio, the Android app allowed our solution to go mobile, with payments through NFC or eTransfers and receipt tracking through the device’s camera.

### Brains
Since the purpose of the application was to relieve entrepreneurs of the burden of managing their cash, we had to make the application capable of doing most of the work. Here, we developed a back-end which was responsible for analyzing the firm’s cash details, and handle the receipt reading.

The back-end analyzed a firm’s cash spending to detect discrepancies in spending across an employee’s history, other employees, teams, etc., and even compared cash usage patters against industry averages—aggregate metrics derived from other firms which use the app. This data was used in a regressive model, where, using Bollinger bands to establish upper and lower thresholds, we could predict a firm’s future cash position and make recommendations to ensure the firm stays financially healthy.

Receipts were also parsed from images provided by the payments app. Here, we used an OCR library to read a receipt’s contents, and then categorize purchases within the app to provide richer data for the system to analyze.

## Result
We ended up placing in the semi-finals, flawed by our overly-pragmatic approach. Nevertheless, it was a great experience that brought me closer to a team of awesome people, and exposed me to some cool technology.

[image-1]:	previews/limitless.png "Limitless"
[image-2]:	previews/limitless-dashboard.png "Limitless Dashboard"
[image-3]:	previews/limitless-team.png "Limitless Team"
[image-4]:	previews/limitless-payments.png "Limitless Payments"
