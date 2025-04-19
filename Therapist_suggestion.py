import pandas as pd
import numpy as np
import re
import string
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB
from sklearn.feature_extraction.text import CountVectorizer
from nltk.corpus import stopwords

# Load and preprocess the data
data = pd.read_csv('Combined Data.csv')
data['status'] = data['status'].replace({
    'Normal': 'Normal',
    'Depression': 'Depression',
    'Suicidal': 'Suicidal',
    'Anxiety': 'Anxiety',
    'Bipolar': 'Bipolar',
    'Stress': 'Stress',
    'Personality disorder': 'Personality Disorder'
})

stopword = set(stopwords.words('english'))

def clean_text(text):
    text = str(text).lower()
    text = re.sub(r'\[[:*?\]]','',text)
    text = re.sub(r'https?://\S+|www\.\S+','',text)
    text = re.sub(r'<.*?>','',text)
    text = re.sub('[%s]' % re.escape(string.punctuation), '', text)
    text = re.sub('\n','',text)
    text = re.sub('\w*\d\w*','',text)
    text = [word for word in text.split(' ') if word not in stopword]
    return " ".join(text)

data['statement'] = data['statement'].apply(clean_text)
# Prepare the data for training
x = np.array(data['statement'])
y = np.array(data['status'])
cv = CountVectorizer()
x = cv.fit_transform(x)

# Train-test split
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=42)

# Train the model
nb = MultinomialNB()
nb.fit(x_train, y_train)

# Save the model and vectorizer if needed for future use
import pickle
with open('model.pkl', 'wb') as f:
    pickle.dump(nb, f)
with open('cv.pkl', 'wb') as f:
    pickle.dump(cv, f)

def predict_status(input_text):
    input_text = clean_text(input_text)
    input_text_vectorized = cv.transform([input_text])
    prediction = nb.predict(input_text_vectorized)
    return prediction[0]
