[MIT 6.S191: AI Bias and Fairness](https://www.youtube.com/watch?v=wmyVODy_WD8&t=9s)

- humans label and categorize sensory inputs to simplify groups
- we tend to notice atypical categories
- *bias and stereotypes* happen when we make decisions based on particular categories/labels
- [[Algorithmic Bias]] is tied to LLM image classification and recognition based on data its fed
	- predicted classes define how models are classifying people and making decisions
- **Bias in AI Stages** (basic list of bias taxonomy)
	- *Data*: respect to labels
	- *Model*: tracking, uncertainty and metrics
	- *Training*: perpetuated loops for training
	- *Evaluation*: checking subgroups in QA
	- *Deployment*: models performing differently in context than from testing
	- *Interpretation*: Human analysis error

### Data Bias
- *Selection Bias*: data is not randomized properly (eg. classification imbalance)
- *Reporting Bias*: information given is not likely or un-vetted (eg. news reports)
- *Sample Bias*: particular instances are checked more often (eg. hair and skin color for facial recognition)
## Interpretation Bias
- How humans can perpetuate these problems of bias
- *Correlation Fallacy*: correlation does not equal causation
- *Overgeneralization*: general conclusions tied to a small data set
- *Automation*: trusting AI overlooks versus human evaluation

- **distribution shift** - training models on a curated data set, but undermining its training on other areas (eg. profiles of mugs, but not training on other angles/full mugs)
	- eg. training model on typical western grocery spices versus typical eastern grocery spices -> leads to blind spots of bias towards the most prominent data set
- Creating an improper ratio of data points creates a class imbalance
	- Model is trying to optimize its classification accuracy and will pass based on bias of larger data set
	- eg. Health care. Brain tumor is relatively rare in a large group at 0.003% so model may optimize to reach this number with all data sets even if untrue.

#### Mitigating class imbalance
- *batch selection* - incremental updates per batch are made to classifier during learning
- *example weighting* - higher frequency results are weighed less than rare ones in order to keep their considerations relatively equal. 
	- *latent distribution* allows for heavier weighted results to move bell curve up to be less radical
- checking bias/fairness can be done through understanding classification evaluation
	- *1. desegregated evaluation* - evaluate performance based on multiple subgroups (eg. color, shape, size against others of the same class)
	- *2. intersectional evaluation* - compare desegregated groups against each other (eg. color AND shape)