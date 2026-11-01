<!-- HEADER -->
<img src="assets/haunter.gif" align="right" width="160" />

<h1 align="center">Hey! I'm Damian</h1> 
<h3 align="center">Data Scientist • Python • Machine Learning • Forecasting</h3>

<p align="center">
  <a href="https://www.linkedin.com/in/damian-cichocki-3x3"><img src="https://img.shields.io/badge/-LinkedIn-blue?logo=Linkedin&logoColor=white" /></a>
  <a href="https://acroice.github.io"><img src="https://img.shields.io/badge/-Portfolio-0B3B8C?logo=githubpages&logoColor=white" /></a>
  <img src="https://img.shields.io/badge/Focus-Forecasting%20%C2%B7%20SQL%20%C2%B7%20Validation-1f6feb" />
</p>

---

## 🧭 About me
I’m Damian, a **Data Scientist** with a background in Business Intelligence. Working with reports got me interested in what comes next: can we use the history we have to make a useful prediction?

That question keeps me busy with forecasting, Python and SQL. I’m also interested in financial services, particularly how models are validated, explained and used to support decisions.

🔎 **Before training:** what are we predicting, and what would we actually know at prediction time?  
🧪 **Before trusting a score:** does it beat a simple baseline on later, unseen data?  
🔧 **After evaluation:** where does it fail, and what does that tell us about the data?  

---

## ⚙️ Tech Stack

<p align="center">
  <img src="https://skillicons.dev/icons?i=python,sklearn,gcp,git,github,linux,postgresql,docker&perline=8" alt="Python, scikit-learn, Google Cloud, Git, GitHub, Linux, PostgreSQL and Docker" />
</p>

💡 **Analysis & modelling:** Python · Pandas · NumPy · scikit-learn · SQL  
🛠️ **Data & delivery:** BigQuery · Qlik Sense · Git · Cloud Functions · Cloud Scheduler  
🚀 **Exploring next:** XGBoost · Vertex AI · experiment tracking

---

## 🚀 Featured Projects

**FPL333 Analytics**  
<sub>Live dashboard · Scheduled ingestion · Modelling next</sub>

Fantasy football gives me a reason to build something I can use, and a prediction problem to work towards: how many points might a player score next gameweek?

**Working today:** a league dashboard in Next.js / TypeScript and scheduled Python ingestion into BigQuery using Cloud Functions and Cloud Scheduler. Data flows through RAW → STAGING → FEATURES; I still trigger feature builds manually.  
**Next up:** a simple baseline, testing on later gameweeks, then a player-points model and a closer look at its errors. Vertex AI comes later; neither the model nor the Vertex AI integration is deployed.  
🔗 [Repo](https://github.com/acroice/fpl333) · [Live](https://fpl333.vercel.app/)

*On the ideas list:* comparing CPU and GPU training for demand forecasting, and a small toolkit for retail data checks and KPIs. Both are concepts, with no published repositories yet.

---

<img src="assets/pokemon-kanto.gif" align="right" width="145" style="margin-left:10px; margin-bottom:10px;"/>

<!-- 📊 Visuals -->
These visuals are here to introduce modelling questions. Their underlying data and calculations are not documented in this repo, so the displayed scores and intervals are illustrative, not verified results. The architecture sketch is conceptual, not the current FPL333 system.

### ⚙️ Model Evaluation
![Evaluation](assets/plot_model_eval.png)

An overall score is a starting point. I also want to see when the predictions miss and whether those errors follow a pattern.

### 🔮 Forecasting
![Forecast](assets/plot_forecast_ci.png)

A forecast needs a clear horizon. An interval needs a check too: how often did it contain the outcome on unseen data?

### 🧱 System Design
![Pipeline Diagram](assets/pipeline_diagram.png)

The interesting part is what connects the boxes: when data arrives, which checks it passes, and whether the same features can be built again for a new prediction.

---
### 📚 Currently Learning
The questions I’m working through as I build:

- 🧮 **Features:** how to use lags and rolling windows without letting future information slip in.
- 🔧 **Validation:** how performance changes across time periods and player groups, not just on average.
- 🧰 **Reproducibility:** how to rerun an experiment and trace its data, settings and results.
- 📈 **Interpretation:** what feature importance and SHAP can tell me, and where their explanations stop.

---

## 💬 Let's Connect
<p align="center">
  <a href="https://www.linkedin.com/in/damian-cichocki-3x3"><img src="https://img.shields.io/badge/-LinkedIn-blue?logo=linkedin&logoColor=white" /></a>
  <a href="mailto:damiancichocki@icloud.com"><img src="https://img.shields.io/badge/-Email%20Me-0078D4?logo=gmail&logoColor=white" /></a>
  <a href="https://acroice.github.io"><img src="https://img.shields.io/badge/-Portfolio-black?logo=githubpages&logoColor=white" /></a>
</p>

---

## 📈 GitHub Stats
<p align="center">
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=acroice&theme=transparent" />
</p>
