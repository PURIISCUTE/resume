import type { ResumeData } from '../types/resume.ts';

export const initialResumeData: ResumeData = {
  contact: {
    name: 'PRATIK SURYA',
    title: 'AI & Software Engineer | Distributed Systems & Graph ML',
    location: 'Kuala Lumpur, Malaysia',
    phone: '+60 12-359 3215',
    email: 'pratiksurya02@gmail.com',
    linkedin: 'linkedin.com/in/pratik-surya02',
    github: '',
  },
  summary:
    'Software Engineering (Honours) undergraduate specializing in Artificial Intelligence at Monash University with production experience architecting end-to-end machine learning pipelines, temporal graph neural networks, and scalable cloud microservices. Proven track record deploying autonomous RAG agents, cutting administrative latency by 40%, and maintaining 99.9% infrastructure uptime.',
  education: [
    {
      institution: 'Monash University',
      degree: 'Bachelor of Software Engineering (Honours) — Minor in Artificial Intelligence',
      period: 'Aug 2022 – Nov 2026',
      location: 'Kuala Lumpur, Malaysia',
      coursework: [
        'Data Structures & Algorithms',
        'Advanced Databases',
        'Operating Systems',
        'Intelligent Systems',
        'Cloud Computing',
        'Distributed Software Architecture',
      ],
    },
  ],
  skills: [
    {
      category: 'Languages & Core',
      skills: ['Python', 'Java', 'C++', 'SQL', 'JavaScript / TypeScript', 'PHP', 'HTML5 / CSS3', 'Git', 'Linux / Bash', 'Docker'],
    },
    {
      category: 'AI, ML & Deep Learning',
      skills: [
        'PyTorch',
        'PyG (PyTorch Geometric)',
        'TensorFlow',
        'Scikit-Learn',
        'XGBoost',
        'GraphSAGE',
        'Temporal GNNs',
        'LLMs',
        'LangChain',
        'RAG Vector Retrieval',
        'SHAP',
        'SMOTE',
      ],
    },
    {
      category: 'Cloud, Systems & DBs',
      skills: [
        'AWS Architecture (EC2, S3, IAM)',
        'FastAPI',
        'PostgreSQL',
        'MongoDB',
        'MySQL',
        'Oracle',
        'Cisco Networking & DOC Ops',
        'Streamlit',
      ],
    },
  ],
  projects: [
    {
      title: 'FraudLens AI: Adaptive Financial Fraud Investigation System',
      subtitle: 'Temporal Graph Intelligence & Drift Detection',
      technologies: ['PyTorch Geometric', 'GraphSAGE', 'XGBoost', 'SHAP', 'Streamlit'],
      highlights: [
        'Architected an inductive Temporal Graph Neural Network (TGNN) modeling financial transactions as dynamic multigraphs to detect synthetic fraud syndicates.',
        'Engineered a structural concept drift detection algorithm tracking embedding divergence over time to trigger automated retraining before accuracy decay.',
        'Deployed an interactive investigation dashboard with sub-graph path tracing and SHAP feature attributions for audit transparency.',
      ],
    },
    {
      title: 'Enterprise AI Agent & Conversational Booking Automation',
      subtitle: 'Autonomous Agent & Vector RAG Pipeline',
      technologies: ['Python', 'LangChain', 'OpenAI API', 'FastAPI', 'PostgreSQL', 'Docker'],
      highlights: [
        'Designed an autonomous booking agent utilizing natural language intent parsing and entity extraction to automate campus scheduling workflows end-to-end.',
        'Integrated a RAG vector retrieval pipeline querying operational schemas dynamically, cutting administrative request overhead by 40%.',
        'Containerized asynchronous FastAPI microservices with Docker, implementing JWT-based RBAC and rate-limiting to sustain sub-100ms response times.',
      ],
    },
    {
      title: 'Deep Sequence Multivariate Time-Series Forecasting Engine',
      subtitle: 'Comparative Predictive Analytics Engine',
      technologies: ['TensorFlow', 'Keras', 'LSTM', 'ARIMA', 'Scikit-Learn'],
      highlights: [
        'Benchmarked classical ARIMA, ensemble regressors, and deep bidirectional LSTM networks across 10 years of multivariate national economic data.',
        'Implemented rolling-origin cross-validation with lag-feature optimization, boosting directional forecast accuracy by 18%.',
      ],
    },
    {
      title: 'Imbalance-Aware Credit Card Fraud Detection Pipeline',
      subtitle: 'Cost-Sensitive Machine Learning Classifier',
      technologies: ['Python', 'Scikit-Learn', 'SMOTE', 'K-Means', 'XGBoost'],
      highlights: [
        'Constructed an anomaly detection pipeline on 283K+ transactions combining SMOTE synthetic oversampling with cluster-informed undersampling.',
        'Optimized cost-sensitive decision boundaries to achieve an 0.8249 F1-Score and 0.8902 Precision, mitigating false-positive account freezes.',
      ],
    },
  ],
  experience: [
    {
      company: 'UNIRAZAK (URIMPACT Department)',
      role: 'AI & Software Development Intern',
      period: 'Feb 2026 – Apr 2026',
      location: 'Kuala Lumpur, Malaysia',
      highlights: [
        'Architected an AI Agent Booking System for university operations, embedding conversational NLP workflows into the enterprise web portal.',
        'Engineered RAG vector retrieval with strict role-based access control (RBAC), securing sensitive student records and maintaining data privacy.',
        'Optimized asynchronous API endpoints for high concurrency, enforcing parameter validation and robust automated error recovery.',
      ],
    },
    {
      company: 'Magnifi Machines',
      role: 'Network & Systems Engineer',
      period: 'Dec 2024 – Feb 2025',
      location: 'Kuala Lumpur, Malaysia',
      highlights: [
        'Administered Data Operations Center (DOC) infrastructure across multi-node server clusters to guarantee 99.9% verified uptime.',
        'Configured Cisco enterprise routers/switches, isolated latency anomalies, and established structured troubleshooting protocols, boosting incident response speed by 20%.',
      ],
    },
    {
      company: '180 Degrees Consulting KL',
      role: 'Technology Director',
      period: 'Jun 2024 – Dec 2024',
      location: 'Kuala Lumpur, Malaysia',
      highlights: [
        'Led 2 developers to architect and launch a central operations portal across 10+ teams, increasing cross-functional workflow speed by 15%.',
        'Managed web hosting architecture and DNS configurations, maintaining 95% system uptime and cutting cold page response times by 25%.',
        'Spearheaded responsive UI/UX design revamps, boosting platform engagement by 30% and reducing user drop-off rates by 10%.',
      ],
    },
    {
      company: 'The SmartBridge',
      role: 'Cloud Application Developer',
      period: 'Dec 2022 – Feb 2023',
      location: 'Remote',
      highlights: [
        'Evaluated AWS cloud architecture frameworks to identify resource efficiencies, reducing projected infrastructure costs by 15%.',
        'Built scalable backend microservices improving resource utilization by 20% and delivered 4 functional PoCs that secured executive approval.',
      ],
    },
  ],
  letterOfRecommendation:
    'Endorsed by VP of HR for outstanding performance in AI/ML engineering, rapid technical execution, and analytics delivery.',
  certifications: [
    'AI Engineer Bootcamp (NVIDIA & YTU Startup House Germany)',
    'Deep Learning Specialization (DeepLearning.AI)',
    'Advanced Neural Networks & NLP (Arithmatrix Tech)',
    'AI & ML Specialization (Corizo)',
    'AWS Machine Learning Foundations',
    'Walmart Advanced Software Engineering',
    'Java Data Structures & Algorithms',
    'Data Analytics & Visualization',
  ],
};
