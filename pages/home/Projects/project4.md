---
title: Hercules Galaxy

description: Using tweets to assess local moods, and using changes in local emotions as a key feature in predicting criminal activity in Vancouver. Using natural language processing, local tweets were synthesized into an _emotional rating_ which was used to assess an area’s mood prior to a crime in the same area.

preview: previews/tweetcrime.png

skills: Python, Scikit-Learn, Tensorflow, Data Mining, Pandas

github: HerculesGalaxy
---

### Abstract
The US government spends nearly $800 billion each year combating criminal activity. Yet, the true cost of crime is buried under the economic, social, and especially emotional impact on those it afflicts. Thus, any tool which improves accuracy—even marginally—could yield exceptional benefit for governments and their people. The influence of a locality’s emotion, measured through localized Twitter data, is examined across nine crimes reported by the Vancouver Police Department. The results of this paper show that there is not a strong connection between the emotional data available on Twitter, and criminal activity in Vancouver city proper. Nevertheless, the current study asserts that this is not for a lack of causality, but rather the result of the complexity of the data and its analysis.

## Introduction
Law enforcement agencies have long struggled to reliably predict specific criminal events with enough actionable detail. And so, they resort to a plethora of tools and strategies to accomplish their agendas. This is especially true when considering the broad scope of crime to include transnational, organized, and state-sanctioned events. In general, this complexity is largely owed to the complexity of human behaviour, and the inability to capture this complexity in existing models.
The most prevalent and widely accepted models used by law enforcement agencies use kernel density estimation to predict the likelihood of criminal activity based on historical events, often through the use of hotspot mapping. This approach is principled on the assumption that the locations of past criminal events are good predictors of future ones. [1]()
The objective of this paper is two-fold: examine the effectiveness of using Twitter for evaluating human behaviour and determine the relationship between Twitter behaviour and crime to enhance existing predictive models for criminal behaviour. Understanding that finding an effective way to determine the real-time behaviour of a population is a difficult problem, this report aims to use a population’s mood in specific geographic areas as a proxy for human behaviour. Here, negative moods are expected to be related to increases in crime, with the opposite also holding true.
## Preparation
This report cites two sets of data: Twitter, to model human behaviour, and the Vancouver Police Department Crime dataset for detailed criminal events.
### Twitter Public API
Twitter provides public access to a small fraction of its tweets through its API. Users use Twitter to publicly post short messages known as Tweets to share their opinions and experiences with the Twitter public and their personal audiences. As such, it is believed to be a reasonable method for polling the opinions and experiences of people in real-time. 
Twitter’s data is very well structured and can be queried to get a particular user’s tweets (up to 3200 past tweets), as well as stream tweets in real time. Since the public API is a tiny subset of the data available, finding consistent and relevant data may be a challenge, especially since the methodology behind how Twitter determines which tweets to provide via its public API is proprietary.
The data available from the tweets themselves is very extensive. The particular field of interest include the date and time, location, language, author, retweets, favorites, and the message—the text body—of the tweet. Excluding location which can be toggled on or off via the user’s preferences, each of these features are included in every tweet.

### Vancouver Police Department Dataset
The Vancouver Police Department (VPD) provides a detailed dataset that is updated weekly (on Tuesday). Each observation contains location, neighborhood, incident, and the date and time accurate to the minute. There are a few entries which have been obfuscated to preserve the privacy of those involved, representing 8.1% of the dataset for the relevant time period.


## Approach

### Data Collection
![The geographic limits of the model.][image-1]
_ The geographic limits of the model._
The data from both datasets (Twitter, and VPD) came from the same locality and same timeframe to maximize their relevant. These sources were queried for data from February 23 to April 1, yet only data up to March 31 was used for modelling. This timeframe was selected as it represented five weeks’ worth of data, and the report used weeks as the delineation point for training and testing data.
In aggregate, 362,554 tweets were collected from the Vancouver area during this timeframe, and 7,925 criminal instances were catalogued from the Vancouver Police Department.

### Preparation
The Vancouver Police Department’s data was consistent and well maintained. Thus, the few modifications necessary were to drop the obfuscated criminal events, and convert their coordinates from UTC Zones to Latitude and Longitude to make them compatible with the location format of Twitter. After completing these steps, there were 7,276 criminal entries remaining.
Likewise, Twitter’s data was well structured but lacked consistency. As a result, the Tweets were filtered against a list of criteria to ensure that the language was English, that the location was a specific location in Vancouver, that the Tweet had meaningful text content, and that the user was not a robot. The language and location criteria were accomplished by filtering through the metadata available on the tweets, whereas filtering for meaningful text content utilized the TextBlob library to determine parts of speech. To determine if the source of the tweet was a robot, the tweet’s metadata as well as the user’s past tweet history was analyzed using a Naïve Bayes Classifier to determine the authenticity of the user. These preparation steps reduced the number of available tweets down to 40,715.

### Visualization
Once the data was been prepared, it was plotted in various formats to further analyze its behaviour and relationships.
![Vancouver crimes by frequency.][image-2]
_ Vancouver crimes by frequency from Feb. 23 to Mar. 31, 2017_
![A time-series of Vancouver crimes over the same period.][image-3]
_A time-series of Vancouver crimes over the same period._
Notably, Theft from Vehicle were the most frequent crimes. In fact, instances of theft make up more than half of all crimes in Vancouver. As these crimes are minor and often are not premeditated, this finding validated the approach and strategy of this paper.

![A map to illustrate the geographic frequency of the collected tweets.][image-4]
_ A map to illustrate the geographic frequency of the collected tweets._
Given that the data has a spatial component, both the crimes and tweets were plotted on a map to evaluate their spatial relationships. The twitter map shows that the vast majority of tweets come from downtown Vancouver and the West End, with relatively few tweets coming from the rest of Vancouver. 

![A map to illustrate the geographic frequency of crimes over the time period.][image-5]
_ A map to illustrate the geographic frequency of crimes over the time period._
In contrast, the heat map of crimes illustrates a map that has a similar concentration in the downtown and West End areas, yet, the rest of the map is covered with a layer of crime. This revelation indicated that tweets may not be effective in predicting crime outside of downtown Vancouver and the West End, yet, the crime map covers too large an area to be actionable. Thus, striking a balance between both these views could be a successful strategy.

### Model Space
As this is a two-part dataset, this approach required the processing of both sets of data into relevant features to use in a model to uncover their relationships.

#### Kernel Density Estimation
The primary feature for the crime data was the historical crime density of a location in Vancouver. Kernel density estimation was used to estimate the probability of particular crimes with respect to particular localities. This allowed for the exclusion of time as a sample-feature, but required that the timeframe be a parameter in the model. As a result, the data was compressed into weeks, such that crimes which occurred in a week were associated with tweets that were made during that week. This decision was made to simplify the model space and reduce the complexity of this strategy.

#### Sentiment Analysis
The tweets experienced a more rigorous process. After going through the filtering process, each tweet’s raw text was stripped of all repetitions, hashtags, emoji, emoticons, and user-mentions _(@ tags)_. It was deemed too unreliable to attempt to extract consistent meaning from these features.
The remaining text features were then analyzed for their sentiment value, scored on a scale of -1 (being exceptionally negative) to 1 (being exceptionally positive). Similarly, the raw text was also examined for its subjectivity, on a scale of 0 (being purely factual) to 1 (being purely emotional), as this report asserts that emotional tweets should have more of a bearing on emotion, and thus a higher significance.

![A time-series chart of Vancouver's mood.][image-6]
_ A time-series chart of Vancouver's mood._
To accomplish both these tasks, a bag of words approach was taken, scoring each word individually using TextBlob’s sentiment analysis tool, where the resulting average was the score of the text. Simplicity and consistency were the key criteria in choosing this approach, and this report asserts that a more technical approach may yield poorer results given that sentiment analysis tools are still in their infancy.

#### Predictive Model
The objective of the predictive model was to receive as input a tweet, and, with that tweet, estimate the distance to the nearest crime within the week. 

#### Feature Selection
Two predictive models were pursued, the first being a linear support vector machine provided by _scikit-learn_. This model, known as the Lasso, was selected for its ability to estimate sparse coefficients, with a preference for fewer input features. This model was selected to uncover which features were truly relevant. Although its predictive capabilities were ineffective, it suggested the exclusion of all features except the coordinates of the tweet, sentiment, and subjectivity, although it did indicate that the latter two were not of immense significance.

#### Prediction
Given that the data was primarily spatial in nature, plotting it in any other means yielded minimal insight, and thus the relationships between features could not easily be determined, even after the feature selection stage. As a result, a model that is flexible to handle any shape of data is preferred. Thus, the Bernoulli Restricted Boltzmann machines neural network, provided by scikit-learn, was selected. The advantages of the RBM are that it is highly capable of handling irregular data.
K-fold cross-validation was the preferred method of assessing the best model, as a result of the large pool of data, with the error being the squared error. Here, each week was treated as a fold, where the models used four weeks for training and one week for testing. Time was chosen instead of observation counts as it was believed that the date was most relevant, and the distribution of tweets was generally consistent. Further, this method of cross-validation aids in controlling for such discrepancies.
Three models were created, each predicated on an input tweet, and an output radius, to illustrate the predicted distance to a crime. Each model had 256 hidden nodes, and used 20 iterations per fold. The three models were designed as follows: one with which used only the location of the tweet (as the control), one which used only the sentiment and subjectivity components of the tweet, and one which used both the geographic coordinates and the sentiment and subjectivity components of the tweet.


## Conclusion

### Findings
The results of this testing indicated that the model with both the coordinates and text components was 8% more accurate than the control, with the model with just the text components showing no clear benefits over the control. However, this is caveated by the fact that this report believes that the sentiment analysis performed by the TextBlob library was sub-par, perhaps producing insignificant results. Nevertheless, these findings seem to indicate that there can be significant advantages in using natural language processing to aid in the prediction of crime, especially if the language processing tools are refined further. (see exhibits 6.7-6.9 for results).

### Future Work
This was an interesting exploration into the use of language as a measurement for emotion and ultimately as a predictor for crime. In the future, this paper expects to improve the model to include a context analysis to get an understanding of the topics discussed and attempt to correlate these with events even beyond the scope of crime.








[image-1]:	previews/crime-map "Geographic Boundaries"
[image-2]:	previews/crime-frequency "Crimes by Frequency"
[image-3]:	previews/crime-timeseries "Time-Series of the Dataset"
[image-4]:	previews/crime-tweetmap "Tweet Heat Map"
[image-5]:	previews/crime-crimemap "Crime Heat Map"
[image-6]:	previews/crime-emotion "Vancouver's Mood"