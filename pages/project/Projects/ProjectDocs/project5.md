---
title: Digit Classifier Competition - First Place

description: Used a hybrid, custom neural network and support vector machine model to effectively classify digits collected from various datasets, earning first place in a digit classification competition.

preview: previews/digitClassification.png

skills: MATLAB, TensorFlow, NumPy, Pandas

github: digitClassifier
---

![Digit Classification preview][image-1]

_No, not that kind of digit, that would have been __a lot__ cooler ;)._

My Artificial Intelligence II professor liked to include friendly competitions as optional parts of the assignments. One of our assignments had us building a classification model to classify handwritten digits. Our models were to be trained using MNIST’s handwritten digit dataset, and was to be tested against 12 000 digits produced by the class (about 100 digits generated per student over two years).

Although this was not my first encounter with this dataset (it’s a classic computer vision dataset after all), my past experience was only useful through the exploration phase, where we were expected to familiarize ourselves with the data, and consider our model space. This was largely because of the image sizes—we downsampled each image from 28x28 (the original sizes from the MNIST dataset) to ease computation.

As another interesting twist, we were restricted in the types and configurations of our model spaces, especially when it came to neural networks, where we were expected to use custom structured designs.

After experimenting with various SVM, KNN, and NN configurations, I had devised a model that used a fully connected neural network as its primary means of classification, and used an SVM as a fallback model to classify instances where it was less confident. A closer analysis uncovered that the neural network confused 2’s and 7’s by a significant margin, but was confident in classifying the remaining digits, and so the SVM was specifically trained to discern 2’s and 7’s.

What set this model apart was its flexibility: the neural network was able to flexibly classify all digits _except 2’s and 7’s_, which is where the fallback SVM came in, giving the overall model the flexibility and specificity to better classify 2’s and 7’s.

I built my model to emphasize its flexibility for two key reasons:
1. I understood that in downsampling the image sizes, detail would be lost, and I wanted the model to “fill in the gaps”
2. I noticed that there was a discrepancy in how our class’s data was collected: our class used a tool that only marked white pixels from black pixels (meaning that matrix values were {0, 1} upon collection), whereas the MNIST dataset used a wider range of pixel intensity (matrix values for the MNIST dataset are [0, 255]). These values were later normalized, but that meant that our training data was not congruent with the test data.


As a result of these properties, I figured that the test error was not a reliable indicator of a model’s proficiency. As per the competition’s rules, we were allowed two model submissions per competition-day, and each submission was tested against a subset of the MNIST dataset, yet the final test was to be conducted against our class’s dataset. This difference meant, that although my model struggled to break the top 15 in my class during the initial testing, it soared to first place after testing against out class’s dataset, thanks to the aforementioned flexibility, which allowed the model to generalize better.

Having built models in the past, I had the advantage of preempting the “overfitting trap”—where beginner model makers aim to minimize training data without considering its impact on test or production performance.

Upon reflecting on the exercise, I couldn’t help but notice that this was done by design: my professor used this trick to teach our class the importance of generalization, and it is a lesson I will never forget.

[image-1]:	previews/digitClassification.png "Digit Classification"