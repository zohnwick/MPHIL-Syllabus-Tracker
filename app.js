/* ================================================
   SyllabusTrack v3 — app.js
   RCI MPhil Clinical Psychology
   macOS-style split-pane UI with unit/topic depth
   ================================================ */
'use strict';

// ─── Storage ─────────────────────────────────────
const STORE = 'syllabustrack_rci_v3';

function loadState() {
  try {
    const data = JSON.parse(localStorage.getItem(STORE) || '{}');
    if (data.version !== 3) {
      // Version 3 forces a reset due to granular topic splitting changing the IDs
      return { version: 3, completed: {}, exams: [] };
    }
    // Ensure all exams have a completed object
    if (data.exams) {
      data.exams.forEach(ex => { if (!ex.completed) ex.completed = {}; });
    }
    return data;
  } catch {
    return { version: 3, completed: {}, exams: [] };
  }
}
function saveState() { localStorage.setItem(STORE, JSON.stringify(state)); }

let state = loadState();
let activePaperId = null;
let activeExamId = null;

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}
const expandedUnits = new Set();

// ─── Full Syllabus Data (Official RCI M.Phil) ─────
const SYLLABUS = {
  year1: {
    label: 'Year 1 — Part I',
    papers: [
      {
        id: 'p11',
        number: 'Paper I',
        shortTitle: 'Psychosocial & Psychopathology',
        title: 'Psychosocial Foundations of Behavior and Psychopathology',
        description: 'Covers the psychosocial and cultural determinants of behavior, followed by clinical psychopathology including concepts of normality, classification systems, and specific mental disorders.',
        color: '#5B4FDB',
        icon: '\uD83E\uDDE0',
        pills: [
          { icon: 'book', label: '100 Marks' },
          { icon: 'layers', label: '12 Units' }
        ],
        units: [
          {
            id: 'p11u1', number: 'I', title: 'Introduction', desc: 'Psychosocial sciences, models of man, areas of specialization, ethical and legal issues.',
            topics: [{ id: 'p11u1t1', text: 'Psychosocial sciences: history, models of man, and current trends' }, { id: 'p11u1t2', text: 'Ethical, legal issues, and code of conduct' }]
          },
          {
            id: 'p11u2', number: 'II', title: 'Mental health and illness', desc: 'Concept of mental health and illness, perspectives from various models.',
            topics: [{ id: 'p11u2t1', text: 'Mental health care ?" past and present, stigma and attitude towards mental illness' }, { id: 'p11u2t2', text: 'Perspectives ?" psychodynamic, behavioral, cognitive, humanistic, existential and biological models' }]
          },
          {
            id: 'p11u3', number: 'III', title: 'Epidemiology', desc: 'Epidemiological studies in Indian context.',
            topics: [{ id: 'p11u3t1', text: 'Epidemiological studies in Indian context' }, { id: 'p11u3t2', text: 'Socio-cultural correlates of mental illness, mental health, and QOL' }]
          },
          {
            id: 'p11u4', number: 'IV', title: 'Self and relationships', desc: 'Self-concept, learned helplessness, social skills, and coping.',
            topics: [{ id: 'p11u4t1', text: 'Self-concept, self-image, self-perception and self-regulations' }, { id: 'p11u4t2', text: 'Learned helplessness and attribution theories, social skill model' }, { id: 'p11u4t3', text: 'Stress diathesis model, resilience, coping and social support' }]
          },
          {
            id: 'p11u5', number: 'V', title: 'Family influences', desc: 'Parenting styles, abuse, separation, marital discord, family burden.',
            topics: [{ id: 'p11u5t1', text: 'Early deprivation, trauma, neglect and abuse, attachment and separation' }, { id: 'p11u5t2', text: 'Inadequate parenting, marital discord and divorce, family burden, expressed emotions and relapse' }]
          },
          {
            id: 'p11u6', number: 'VI', title: 'Societal influences', desc: 'Discrimination, poverty, crime, terrorism, and migration.',
            topics: [{ id: 'p11u6t1', text: 'Discrimination in race, gender, ethnicity; social class, poverty and unemployment' }, { id: 'p11u6t2', text: 'Crime, delinquency, social tension, violence, urban stressors, torture & terrorism, migration' }]
          },
          {
            id: 'p11u7', number: 'VII', title: 'Disability', desc: 'Definition, classification, impact, and needs.',
            topics: [{ id: 'p11u7t1', text: 'Definition and classification of disability, psychosocial models' }, { id: 'p11u7t2', text: 'Assessment/certification of disability ?" areas and measures' }]
          },
          {
            id: 'p11u8', number: 'VIII', title: 'Rehabilitation', desc: 'Rehabilitation processes, caregivers issues, rights of mentally ill.',
            topics: [{ id: 'p11u8t1', text: 'Approaches and interventions in rehabilitation, models of adaptation' }, { id: 'p11u8t2', text: 'Family and caregivers issues, rights of mentally ill, empowerment issues' }]
          },
          {
            id: 'p11u9', number: 'IX', title: 'Policies and Acts', desc: 'Rehabilitation Policies, Mental Health Act, RCI Act, PWD Act.',
            topics: [{ id: 'p11u9t1', text: 'Rehabilitation Policies and Acts (Mental Health Act 1987, PWD Act 1995, RCI Act 1992, etc.)' }, { id: 'p11u9t2', text: 'Assistance, social benefits, rehabilitation ethics and professional code of conduct' }]
          },
          {
            id: 'p11u10', number: 'X', title: 'Introduction to psychopathology', desc: 'Concepts of abnormality, classification models (categorical, dimensional).',
            topics: [{ id: 'p11u10t1', text: 'Concepts of normality and abnormality, continuity vs discontinuity models' }, { id: 'p11u10t2', text: 'Classification systems, reliability, advantages and limitations' }, { id: 'p11u10t3', text: 'Clinical interviewing, diagnosis, MSE, and diagnostic formulation' }]
          },
          {
            id: 'p11u11', number: 'XI', title: 'Psychological theories', desc: 'Theories of principal clinical disorders.',
            topics: [{ id: 'p11u11t1', text: 'Psychodynamic, behavioral, cognitive, humanistic theories' }, { id: 'p11u11t2', text: 'Theories of anxiety, OCD, somatoform, psychotic, mood, personality, and substance disorders' }]
          },
          {
            id: 'p11u12', number: 'XII', title: 'Indian thoughts', desc: 'Concept of mental health and illness in Indian thought.',
            topics: [{ id: 'p11u12t1', text: 'Concept of mental health and illness; nosology and taxonomy of mental illness' }, { id: 'p11u12t2', text: 'Social identity, Varnashrama Vyawastha, concept of cognition, emotion, personality' }]
          }
        ]
      },
      {
        id: 'p12',
        number: 'Paper II',
        shortTitle: 'Statistics & Research',
        title: 'Statistics and Research Methodology',
        description: 'Comprehensive overview of research methods, experimental design, and quantitative/qualitative statistical analyses applied in behavioral sciences.',
        color: '#2563EB',
        icon: '\uD83D\uDCCA',
        pills: [
          { icon: 'book', label: '100 Marks' },
          { icon: 'layers', label: '12 Units' }
        ],
        units: [
          {
            id: 'p12u1', number: 'I', title: 'Introduction', desc: 'Measurement in behavioral sciences, scale types, test construction.',
            topics: [{ id: 'p12u1t1', text: 'Scientific method and its features; problems in measurement' }, { id: 'p12u1t2', text: 'Levels of measurement: nominal, ordinal, interval, ratio scales' }, { id: 'p12u1t3', text: 'Test construction: item analysis, reliability, validity and norms' }]
          },
          {
            id: 'p12u2', number: 'II', title: 'Sampling', desc: 'Probability and non-probability sampling methods.',
            topics: [{ id: 'p12u2t1', text: 'Probability and non-probability sampling methods' }, { id: 'p12u2t2', text: 'Sampling and non-sampling errors and methods of minimizing them' }]
          },
          {
            id: 'p12u3', number: 'III', title: 'Concept of probability', desc: 'Probability distributions and descriptive statistics.',
            topics: [{ id: 'p12u3t1', text: 'Probability distribution: normal, poisson, binomial' }, { id: 'p12u3t2', text: 'Descriptive statistics: central tendency, dispersion, skewness and kurtosis' }]
          },
          {
            id: 'p12u4', number: 'IV', title: 'Hypothesis testing', desc: 'Types of errors, level of significance, and power of tests.',
            topics: [{ id: 'p12u4t1', text: 'Null and alternate hypothesis, type I and type II errors' }, { id: 'p12u4t2', text: 'Level of significance, power of the test, p-value, confidence interval' }]
          },
          {
            id: 'p12u5', number: 'V', title: 'Parametric tests', desc: 't-test, ANOVA, ANCOVA, and regression.',
            topics: [{ id: 'p12u5t1', text: 't-test, normal z-test, F-test and post-hoc tests' }, { id: 'p12u5t2', text: 'One-way and two-way ANOVA, ANCOVA, repeated measures ANOVA' }, { id: 'p12u5t3', text: 'Simple linear correlation and regression' }]
          },
          {
            id: 'p12u6', number: 'VI', title: 'Non-parametric tests', desc: 'Distribution-free tests of significance.',
            topics: [{ id: 'p12u6t1', text: 'One-sample tests (sign test, Mc Nemer test)' }, { id: 'p12u6t2', text: 'Two-sample tests (Mann Whitney U, Wilcoxon rank sum)' }, { id: 'p12u6t3', text: 'k-sample tests (Kruskal Wallies, Friedman) and chi-square test' }]
          },
          {
            id: 'p12u7', number: 'VII', title: 'Experimental design', desc: 'Types of research designs.',
            topics: [{ id: 'p12u7t1', text: 'Randomization, replication, completely randomized design' }, { id: 'p12u7t2', text: 'Randomized block, factorial, crossover, and single subject design' }]
          },
          {
            id: 'p12u8', number: 'VIII', title: 'Epidemiological studies', desc: 'Prevalence, incidence, diagnostic efficiency.',
            topics: [{ id: 'p12u8t1', text: 'Rates: Prevalence and incidence; Prospective and retrospective studies' }, { id: 'p12u8t2', text: 'Diagnostic Efficiency Statistics (sensitivity, specificity, predictive values)' }, { id: 'p12u8t3', text: 'Risk Estimation: odds ratio and survival analysis' }]
          },
          {
            id: 'p12u9', number: 'IX', title: 'Multivariate analysis', desc: 'Advanced statistical modeling techniques.',
            topics: [{ id: 'p12u9t1', text: 'Multiple regression, logistic regression, factor analysis' }, { id: 'p12u9t2', text: 'Cluster analysis, discriminant function, path analysis, MANOVA' }]
          },
          {
            id: 'p12u10', number: 'X', title: 'Sample size estimation', desc: 'Determining correct sample size for research.',
            topics: [{ id: 'p12u10t1', text: 'Sample size determination for mean and proportion estimation' }]
          },
          {
            id: 'p12u11', number: 'XI', title: 'Qualitative analysis', desc: 'Content analysis and qualitative methods.',
            topics: [{ id: 'p12u11t1', text: 'Content analysis, qualitative methods of psychosocial research' }]
          },
          {
            id: 'p12u12', number: 'XII', title: 'Use of computers', desc: 'Software for behavioral science statistics.',
            topics: [{ id: 'p12u12t1', text: 'Use of relevant statistical packages and their limitations' }]
          }
        ]
      },
      {
        id: 'p13',
        number: 'Paper III',
        shortTitle: 'Psychiatry',
        title: 'Psychiatry',
        description: 'Signs, symptoms, etiology, and management of psychiatric disorders, organic conditions, and behavioral syndromes across the lifespan.',
        color: '#0891B2',
        icon: '\uD83C\uDFE5',
        pills: [
          { icon: 'book', label: '100 Marks' },
          { icon: 'layers', label: '11 Units' }
        ],
        units: [
          {
            id: 'p13u1', number: 'I', title: 'Signs and symptoms', desc: 'Disorders of mental state and behavioral manifestations.',
            topics: [{ id: 'p13u1t1', text: 'Disorders of consciousness, attention, motor behavior, orientation' }, { id: 'p13u1t2', text: 'Experience of self, speech, thought, perception, emotion, and memory' }]
          },
          {
            id: 'p13u2', number: 'II', title: 'Psychoses', desc: 'Schizophrenia and affective disorders.',
            topics: [{ id: 'p13u2t1', text: 'Schizophrenia, affective disorders, delusional disorders' }, { id: 'p13u2t2', text: 'Types, clinical features, etiology and management' }]
          },
          {
            id: 'p13u3', number: 'III', title: 'Neurotic, stress-related and somatoform disorders', desc: 'Neurotic conditions.',
            topics: [{ id: 'p13u3t1', text: 'Types, clinical features, etiology and management' }]
          },
          {
            id: 'p13u4', number: 'IV', title: 'Disorders of personality and behavior', desc: 'Personality, substance, and impulse disorders.',
            topics: [{ id: 'p13u4t1', text: 'Specific personality disorders, habit and impulse disorders' }, { id: 'p13u4t2', text: 'Disorders due to psychoactive substance use, sexual disorders' }]
          },
          {
            id: 'p13u5', number: 'V', title: 'Organic mental disorders', desc: 'Dementia, delirium, and related systemic disorders.',
            topics: [{ id: 'p13u5t1', text: 'Dementia, delirium and neuralgic/systemic conditions' }]
          },
          {
            id: 'p13u6', number: 'VI', title: 'Childhood and adolescence disorders', desc: 'Developmental, behavioral, and emotional disorders.',
            topics: [{ id: 'p13u6t1', text: 'Types, clinical features, etiology and management' }]
          },
          {
            id: 'p13u7', number: 'VII', title: 'Mental retardation', desc: 'Intellectual disability.',
            topics: [{ id: 'p13u7t1', text: 'Classification, etiology and management' }]
          },
          {
            id: 'p13u8', number: 'VIII', title: 'Neurobiology of mental disorders', desc: 'Neurobiological theories of major syndromes.',
            topics: [{ id: 'p13u8t1', text: 'Theories of psychosis, mood disorders, suicide, anxiety' }, { id: 'p13u8t2', text: 'Theories of substance use and emotional/behavioral syndromes' }]
          },
          {
            id: 'p13u9', number: 'IX', title: 'Therapeutic approaches', desc: 'Pharmacological and psychological management strategies.',
            topics: [{ id: 'p13u9t1', text: 'Drugs, ECT, psychosurgery, psychotherapy, behavior therapy' }, { id: 'p13u9t2', text: 'Preventive and rehabilitative strategies, half-way homes, daycares' }]
          },
          {
            id: 'p13u10', number: 'X', title: 'Consultation-liaison psychiatry', desc: 'Psychiatric consultation in medical settings.',
            topics: [{ id: 'p13u10t1', text: 'Psychiatric consultation in general hospital and primary care setting' }]
          },
          {
            id: 'p13u11', number: 'XI', title: 'Special populations', desc: 'Geriatric, HIV/AIDS, and disaster management.',
            topics: [{ id: 'p13u11t1', text: 'Geriatric, terminally ill, HIV/AIDS, suicidal, abused, violent patients' }, { id: 'p13u11t2', text: 'Psychiatric services in community and disaster/calamity' }]
          }
        ]
      }
    ]
  },

  year2: {
    label: 'Year 2 — Part II',
    papers: [
      {
        id: 'p21',
        number: 'Paper I',
        shortTitle: 'Biological Foundations',
        title: 'Biological Foundations of Behavior',
        description: 'Focuses on the nervous system, brain anatomy, neurotransmitters, and specialized neuropsychological syndromes.',
        color: '#16A34A',
        icon: '\uD83D\uDD2C',
        pills: [
          { icon: 'book', label: '100 Marks' },
          { icon: 'layers', label: '15 Units' }
        ],
        units: [
          {
            id: 'p21u1', number: 'I', title: 'Anatomy of the brain', desc: 'Major anatomical sub-divisions and structures.',
            topics: [{ id: 'p21u1t1', text: 'Cortical and sub-cortical regions, anatomical connectivity' }, { id: 'p21u1t2', text: 'Blood supply to brain and the CSF system' }]
          },
          {
            id: 'p21u2', number: 'II', title: 'Structure and functions of cells', desc: 'Neurons and communication within the CNS.',
            topics: [{ id: 'p21u2t1', text: 'Cells of the nervous system, blood-brain barrier' }, { id: 'p21u2t2', text: 'Membrane potential, action potential, neurotransmitters' }]
          },
          {
            id: 'p21u3', number: 'III', title: 'Biochemistry of the brain', desc: 'Metabolic and genetic aspects of disorders.',
            topics: [{ id: 'p21u3t1', text: 'Biochemical, metabolic and genetic aspect of major mental disorders' }]
          },
          {
            id: 'p21u4', number: 'IV', title: 'Sensory-motor systems', desc: 'Organization of internal and sensory-motor environments.',
            topics: [{ id: 'p21u4t1', text: 'Receptors, thalamocortical pathways and motor responses' }]
          },
          {
            id: 'p21u5', number: 'V', title: 'Regulation of Internal Environment', desc: 'Limbic and autonomic systems.',
            topics: [{ id: 'p21u5t1', text: 'Role of limbic, autonomic and neuroendocrine systems' }, { id: 'p21u5t2', text: 'Reticular formation and sleep/wakefulness regulation' }]
          },
          {
            id: 'p21u6', number: 'VI', title: 'Neurobiology of Behaviour', desc: 'Neurological aspects of basic drives.',
            topics: [{ id: 'p21u6t1', text: 'Neurological aspects of drives, motivation, hunger, thirst, sex' }, { id: 'p21u6t2', text: 'Emotions, learning and memory' }]
          },
          {
            id: 'p21u7', number: 'VII', title: 'Neurotransmitters and behaviour', desc: 'Role of specific neuromodulators.',
            topics: [{ id: 'p21u7t1', text: 'Acetylcholine, monoamines, amino acids, peptides, lipids' }]
          },
          {
            id: 'p21u8', number: 'VIII', title: 'Introduction to Neuropsychology', desc: 'Relationship between structure and function.',
            topics: [{ id: 'p21u8t1', text: 'Logic of cerebral organization, localization and lateralization' }, { id: 'p21u8t2', text: 'Approaches and methodologies of clinical neuropsychology' }]
          },
          {
            id: 'p21u9', number: 'IX', title: 'Frontal lobe syndrome', desc: 'Executive functions and disturbances.',
            topics: [{ id: 'p21u9t1', text: 'Disturbances of regulatory functions, attention, emotion, memory' }, { id: 'p21u9t2', text: 'Language and motor functions' }]
          },
          {
            id: 'p21u10', number: 'X', title: 'Temporal lobe syndrome', desc: 'Hearing, integrative functions, and memory.',
            topics: [{ id: 'p21u10t1', text: 'Hearing, vestibular functions, disturbances in learning/memory' }, { id: 'p21u10t2', text: 'Language, emotions, time perception and consciousness' }]
          },
          {
            id: 'p21u11', number: 'XI', title: 'Parietal and occipital lobe syndromes', desc: 'Sensory functions, body schema, and visual perception.',
            topics: [{ id: 'p21u11t1', text: 'Disturbances in sensory functions, body schema, agnosias, apraxias' }, { id: 'p21u11t2', text: 'Visual space perception, color perception, writing/reading ability' }]
          },
          {
            id: 'p21u12', number: 'XII', title: 'Neuropsychological profile of conditions', desc: 'Profiles of dementia and psychiatric disorders.',
            topics: [{ id: 'p21u12t1', text: 'Profiles of cortical and subcortical dementia, major mental disorders' }]
          },
          {
            id: 'p21u13', number: 'XIII', title: 'Functional human brain mapping', desc: 'Imaging and electrophysiology.',
            topics: [{ id: 'p21u13t1', text: 'QEEG, EP & ERP, PET, SPECT, fMRI' }]
          },
          {
            id: 'p21u14', number: 'XIV', title: 'Neuropsychological assessment', desc: 'Principles and indications of assessment.',
            topics: [{ id: 'p21u14t1', text: 'Principles, relevance, scope and indications for assessment' }, { id: 'p21u14t2', text: 'Issues involved in neuropsychological assessment of children' }]
          },
          {
            id: 'p21u15', number: 'XV', title: 'Neuropsychological rehabilitation', desc: 'Rehabilitation of brain injury and cognitive deficits.',
            topics: [{ id: 'p21u15t1', text: 'Principles, objectives and methods of neuro-rehabilitation' }, { id: 'p21u15t2', text: 'Scope of computer-based retraining, neurofeedback, cognitive aids' }]
          }
        ]
      },
      {
        id: 'p22',
        number: 'Paper II',
        shortTitle: 'Psychotherapy',
        title: 'Psychotherapy and Counseling',
        description: 'Comprehensive study of psychological interventions, counseling procedures, diverse therapeutic approaches, and contemporary issues.',
        color: '#D97706',
        icon: '\uD83D\uDDE3',
        pills: [
          { icon: 'book', label: '100 Marks' },
          { icon: 'layers', label: '15 Units' }
        ],
        units: [
          {
            id: 'p22u1', number: 'I', title: 'Introduction to Psychotherapy', desc: 'Definitions, ethics, consent, and goal setting.',
            topics: [{ id: 'p22u1t1', text: 'Ethical and legal issues, rights and responsibilities, consent' }, { id: 'p22u1t2', text: 'Planning and recording sessions, structuring, goals, pre/post-assessment' }]
          },
          {
            id: 'p22u2', number: 'II', title: 'Therapeutic Relationship', desc: 'Factors influencing the therapist-client alliance.',
            topics: [{ id: 'p22u2t1', text: 'Client and therapist characteristics, illness, technique and relationship factors' }]
          },
          {
            id: 'p22u3', number: 'III', title: 'Interviewing', desc: 'Interviewing skills and techniques.',
            topics: [{ id: 'p22u3t1', text: 'Objectives, structured vs unstructured interview, micro skills' }, { id: 'p22u3t2', text: 'Reflection, facilitation, confrontation, silences, verbal/non-verbal' }]
          },
          {
            id: 'p22u4', number: 'IV', title: 'Affective psychotherapies', desc: 'Psychodynamic, humanistic, and existential therapies.',
            topics: [{ id: 'p22u4t1', text: 'Psychodynamic, brief psychotherapy, humanistic, existential, gestalt' }, { id: 'p22u4t2', text: 'Person-centered, transactional analysis, reality therapy, supportive, oriental approaches' }]
          },
          {
            id: 'p22u5', number: 'V', title: 'Behavior therapies', desc: 'Principles of behavior modification and techniques.',
            topics: [{ id: 'p22u5t1', text: 'Foundations, behavioral assessment, desensitization, extinction' }, { id: 'p22u5t2', text: 'Skill training, operant procedures, aversion, self-control, biofeedback' }]
          },
          {
            id: 'p22u6', number: 'VI', title: 'Cognitive therapies', desc: 'CBT, REBT, and third-wave cognitive interventions.',
            topics: [{ id: 'p22u6t1', text: 'Cognitive model, REBT, cognitive behavior therapy, dialectical behavior therapy' }, { id: 'p22u6t2', text: 'Mindfulness based cognitive therapy, schema focused therapy' }]
          },
          {
            id: 'p22u7', number: 'VII', title: 'Systemic therapies', desc: 'Family, marital, and group therapies.',
            topics: [{ id: 'p22u7t1', text: 'Family therapy, marital therapy, group therapy, sex therapy, interpersonal therapy' }]
          },
          {
            id: 'p22u8', number: 'VIII', title: 'Physiological therapies', desc: 'Relaxation, biofeedback, and EMDR.',
            topics: [{ id: 'p22u8t1', text: 'Progressive muscular relaxation, autogenic training, EMDR' }]
          },
          {
            id: 'p22u9', number: 'IX', title: 'Counseling', desc: 'Goals and procedures for specific domains of counseling.',
            topics: [{ id: 'p22u9t1', text: 'Behavioral, cognitive and humanistic approaches to counseling' }]
          },
          {
            id: 'p22u10', number: 'X', title: 'Therapy in special conditions', desc: 'Integrative therapies for crisis, disaster, personality disorders.',
            topics: [{ id: 'p22u10t1', text: 'Self harm, bereavement, disasters, personality disorders, substance use' }, { id: 'p22u10t2', text: 'HIV/AIDS, learning disabilities, mental retardation' }]
          },
          {
            id: 'p22u11', number: 'XI', title: 'Therapy with children', desc: 'Psychoanalytic, behavioral, and play therapies for children.',
            topics: [{ id: 'p22u11t1', text: 'Psychoanalytic therapies, behavioral and play techniques' }, { id: 'p22u11t2', text: 'Parent and family counseling, therapy with adolescents' }]
          },
          {
            id: 'p22u12', number: 'XII', title: 'Psychoeducation', desc: 'Therapeutic education and collaborative recovery.',
            topics: [{ id: 'p22u12t1', text: 'Information and emotional support, models of therapeutic education' }, { id: 'p22u12t2', text: 'Family counseling for relapse-prevention and rehabilitation' }]
          },
          {
            id: 'p22u13', number: 'XIII', title: 'Psychosocial rehabilitation', desc: 'Empirically supported rehabilitation therapies.',
            topics: [{ id: 'p22u13t1', text: 'Rehabilitation services, assessment, group/supportive therapy' }]
          },
          {
            id: 'p22u14', number: 'XIV', title: 'Indian approaches', desc: 'Yoga, Meditation, and Mindfulness-based interventions.',
            topics: [{ id: 'p22u14t1', text: 'Yoga, Meditation, Mindfulness-based intervention: methods, processes, outcome' }]
          },
          {
            id: 'p22u15', number: 'XV', title: 'Contemporary issues and research', desc: 'Evidence-based practice and outcome research.',
            topics: [{ id: 'p22u15t1', text: 'Evidence-based practice, managed care, process and outcome research' }]
          }
        ]
      },
      {
        id: 'p23',
        number: 'Paper III',
        shortTitle: 'Behavioural Medicine',
        title: 'Behavioral Medicine',
        description: 'Application of psychological principles to general medical settings, chronic illnesses, health behaviors, and end-of-life care.',
        color: '#DC2626',
        icon: '\uD83D\uDC8A',
        pills: [
          { icon: 'book', label: '100 Marks' },
          { icon: 'layers', label: '13 Units' }
        ],
        units: [
          {
            id: 'p23u1', number: 'I', title: 'Introduction', desc: 'Theoretical models of health behavior and illness.',
            topics: [{ id: 'p23u1t1', text: 'Psychological influences on health, neuroendocrine/neuroimmune responses' }, { id: 'p23u1t2', text: 'Behavioral patterns, coping styles, psychophysiological models of disease' }]
          },
          {
            id: 'p23u2', number: 'II', title: 'Central nervous system', desc: 'Psychosocial aspects of stroke, trauma, epilepsy, dementia.',
            topics: [{ id: 'p23u2t1', text: 'Disturbances in cerebrovascular, developmental, degenerative, trauma, convulsive diseases' }, { id: 'p23u2t2', text: 'Assessment and psychological intervention' }]
          },
          {
            id: 'p23u3', number: 'III', title: 'Cardiovascular system', desc: 'Psychobehavioral responses in hypertension and cardiac conditions.',
            topics: [{ id: 'p23u3t1', text: 'Coping with illness, lifestyle issues in hypertension, MI, CABG' }, { id: 'p23u3t2', text: 'Psychological management of CVS diseases, quality of life' }]
          },
          {
            id: 'p23u4', number: 'IV', title: 'Respiratory system', desc: 'Psychological factors in asthma and airway diseases.',
            topics: [{ id: 'p23u4t1', text: 'Emotional arousal, anxiety, panic symptoms in airway diseases' }, { id: 'p23u4t2', text: 'Behavioral and biofeedback strategies as adjunct management' }]
          },
          {
            id: 'p23u5', number: 'V', title: 'Gastrointestinal system', desc: 'IBS, peptic ulcer, and stress/coping evaluations.',
            topics: [{ id: 'p23u5t1', text: 'Personality and stress in functional GI disorders (IBS, IBD, ulcers)' }, { id: 'p23u5t2', text: 'Role of psychotherapy, behavior modification, biofeedback' }]
          },
          {
            id: 'p23u6', number: 'VI', title: 'Genitourinary/renal/reproductive system', desc: 'Sexual dysfunctions, infertility, and dialysis.',
            topics: [{ id: 'p23u6t1', text: 'Sexual dysfunctions, voiding problems/enuresis, end-stage renal disease' }, { id: 'p23u6t2', text: 'Primary/secondary infertility, validated psychological interventions' }]
          },
          {
            id: 'p23u7', number: 'VII', title: 'Dermatology', desc: 'Psychodermatological conditions like psoriasis and dermatitis.',
            topics: [{ id: 'p23u7t1', text: 'Stress in psoriasis, urticaria, alopecia, impact on body image/mood' }, { id: 'p23u7t2', text: 'Interventions: relaxation, stress management, biofeedback' }]
          },
          {
            id: 'p23u8', number: 'VIII', title: 'Oncology', desc: 'Psychosocial issues associated with cancer.',
            topics: [{ id: 'p23u8t1', text: 'Quality of life, grief reaction, fear of treatment, recurrence' }, { id: 'p23u8t2', text: 'Assessment tools and goals of interventions for individual/family' }]
          },
          {
            id: 'p23u9', number: 'IX', title: 'HIV/AIDS', desc: 'Counseling, assessment, and HAART adherence.',
            topics: [{ id: 'p23u9t1', text: 'Pre/post-test counseling, psychosocial issues, assessments' }, { id: 'p23u9t2', text: 'HAART adherence, neuropsychological findings, prevention awareness' }]
          },
          {
            id: 'p23u10', number: 'X', title: 'Pain', desc: 'Acute and chronic pain management strategies.',
            topics: [{ id: 'p23u10t1', text: 'Physiological/psychological processes in pain, assessment tools' }, { id: 'p23u10t2', text: 'Cognitive, behavioral, biofeedback and hypnotic therapies' }]
          },
          {
            id: 'p23u11', number: 'XI', title: 'Terminally ill', desc: 'Palliative care, grief, and euthanasia.',
            topics: [{ id: 'p23u11t1', text: 'Psychology of dying, breaking bad news, bereavement counseling' }, { id: 'p23u11t2', text: 'End-of-life distress, hospice issues, euthanasia' }]
          },
          {
            id: 'p23u12', number: 'XII', title: 'Other general clinical conditions', desc: 'Diabetes, obesity, sleep, surgery preparation.',
            topics: [{ id: 'p23u12t1', text: 'Application in diabetes, sleep disorders, obesity, burns, surgery preparation' }, { id: 'p23u12t2', text: 'Organ replacement, sensory impairment, abnormal illness behavior' }]
          },
          {
            id: 'p23u13', number: 'XIII', title: 'Contemporary Issues', desc: 'Psychoneuroimmunology and modern health psychology.',
            topics: [{ id: 'p23u13t1', text: 'Research in health psychology, psychoneuroimmunology, sociobiology' }]
          }
        ]
      }
    ]
  },

  clinical: {
    label: 'Clinical Training',
    papers: [
      {
        id: 'cl1',
        number: 'Practical I',
        shortTitle: 'Assessment',
        title: 'Psychological Assessments',
        description: 'Competency in various psychological tests including intelligence, personality, diagnostic clarification, and neuropsychology.',
        color: '#7C3AED',
        icon: '\uD83D\uDCCB',
        pills: [
          { icon: 'book', label: 'Practical Exam + Viva' },
          { icon: 'layers', label: '8 Units' }
        ],
        units: [
          {
            id: 'cl1u1', number: 'I', title: 'Introduction', desc: 'Case history and mental status examination.',
            topics: [{ id: 'cl1u1t1', text: 'Case history, mental status examination, rationale of assessment' }, { id: 'cl1u1t2', text: 'Behavioral observations, report writing formats' }]
          },
          {
            id: 'cl1u2', number: 'II', title: 'Tests of cognitive functions', desc: 'Intelligence and memory tests.',
            topics: [{ id: 'cl1u2t1', text: 'Bender gestalt, WMS, PGI memory scale, Bhatia\'s battery' }, { id: 'cl1u2t2', text: 'Binet\'s test, Raven\'s matrices, WAIS-R, WAPIS' }]
          },
          {
            id: 'cl1u3', number: 'III', title: 'Tests for diagnostic clarification', desc: 'Rorschach, MMPI, thought disorders.',
            topics: [{ id: 'cl1u3t1', text: 'Rorschach psychodiagnostics, color form sorting, object sorting, proverbs' }, { id: 'cl1u3t2', text: 'MMPI, clinical analysis questionnaire, IPDE, screening instruments (GHQ)' }]
          },
          {
            id: 'cl1u4', number: 'IV', title: 'Adjustment and personality assessment', desc: 'Inventories and projective tests.',
            topics: [{ id: 'cl1u4t1', text: '16PF, NEO-PI, EPQ, locus of control, adjustment inventories' }, { id: 'cl1u4t2', text: 'Projective tests: sentence completion, TAT, HTP, draw-a-person' }]
          },
          {
            id: 'cl1u5', number: 'V', title: 'Rating scales', desc: 'Scales for anxiety, depression, mania, OCD.',
            topics: [{ id: 'cl1u5t1', text: 'Self-rated and observer-rated scales (Y-BOCS, BDI, STAI, HADS)' }]
          },
          {
            id: 'cl1u6', number: 'VI', title: 'Assessment of children', desc: 'CBCL and intelligence tests for children.',
            topics: [{ id: 'cl1u6t1', text: 'Developmental psychopathology checklist, CBCL' }, { id: 'cl1u6t2', text: 'SFB, C-RPM, Malin\'s WISC' }]
          },
          {
            id: 'cl1u7', number: 'VII', title: 'Tests for people with disabilities', desc: 'Adaptations for visually/physically handicapped.',
            topics: [{ id: 'cl1u7t1', text: 'WAIS-R/WISC-R adaptations, blind learning aptitude test' }]
          },
          {
            id: 'cl1u8', number: 'VIII', title: 'Neuropsychological assessment', desc: 'Neuropsychological batteries.',
            topics: [{ id: 'cl1u8t1', text: 'LNNB, Halstead-Reitan battery, PGI-BBD, NIMHANS battery' }]
          }
        ]
      },
      {
        id: 'cl2',
        number: 'Submission I',
        shortTitle: 'Case Records I',
        title: 'Psychodiagnostics Reports (Group B)',
        description: 'Submission of five fully worked out cases of full-length Psychodiagnostics Report.',
        color: '#0891B2',
        icon: '\uD83D\uDCC1',
        pills: [
          { icon: 'book', label: '100 Marks' },
          { icon: 'layers', label: '1 Unit' }
        ],
        units: [
          {
            id: 'cl2u1', number: 'I', title: '5 Case Records', desc: 'Five full-length Psychodiagnostic Reports.',
            topics: [{ id: 'cl2u1t1', text: 'Case 1' }, { id: 'cl2u1t2', text: 'Case 2' }, { id: 'cl2u1t3', text: 'Case 3' }, { id: 'cl2u1t4', text: 'Case 4' }, { id: 'cl2u1t5', text: 'Case 5' }]
          }
        ]
      },
      {
        id: 'cl3',
        number: 'Practical II',
        shortTitle: 'Therapies',
        title: 'Psychological Therapies',
        description: 'Practical/clinical assessment and intervention using empirically supported therapies with viva voce.',
        color: '#D97706',
        icon: '\uD83D\uDDC2',
        pills: [
          { icon: 'book', label: 'Practical Exam + Viva' },
          { icon: 'layers', label: '1 Unit' }
        ],
        units: [
          {
            id: 'cl3u1', number: 'I', title: 'Psychological Therapy', desc: 'Application of interventions in clinical settings.',
            topics: [{ id: 'cl3u1t1', text: 'Therapeutic intervention and management' }, { id: 'cl3u1t2', text: 'Clinical viva voce' }]
          }
        ]
      },
      {
        id: 'cl4',
        number: 'Submission II',
        shortTitle: 'Case Records II',
        title: 'Psychotherapy Reports (Group B)',
        description: 'Submission of five fully worked out cases of full-length Psychotherapy Report.',
        color: '#16A34A',
        icon: '\uD83D\uDCC1',
        pills: [
          { icon: 'book', label: '100 Marks' },
          { icon: 'layers', label: '1 Unit' }
        ],
        units: [
          {
            id: 'cl4u1', number: 'I', title: '5 Case Records', desc: 'Five full-length Psychotherapy Reports.',
            topics: [{ id: 'cl4u1t1', text: 'Therapy Case 1' }, { id: 'cl4u1t2', text: 'Therapy Case 2' }, { id: 'cl4u1t3', text: 'Therapy Case 3' }, { id: 'cl4u1t4', text: 'Therapy Case 4' }, { id: 'cl4u1t5', text: 'Therapy Case 5' }]
          }
        ]
      },
      {
        id: 'cl5',
        number: 'Dissertation',
        shortTitle: 'Dissertation',
        title: 'Dissertation (Group C)',
        description: 'Original research project demonstrating capability in planning and executing research under supervision.',
        color: '#7C3AED',
        icon: '\uD83C\uDF93',
        pills: [
          { icon: 'book', label: '100 Marks' },
          { icon: 'layers', label: '1 Unit' }
        ],
        units: [
          {
            id: 'cl5u1', number: 'I', title: 'Research Project', desc: 'Execution and submission of the dissertation.',
            topics: [{ id: 'cl5u1t1', text: 'Protocol formulation and approval' }, { id: 'cl5u1t2', text: 'Data collection and analysis' }, { id: 'cl5u1t3', text: 'Thesis writing and submission' }]
          }
        ]
      }
    ]
  }
};

// ─── Helpers: Progress Calculation ───────────────
function topicIds(paper) {
  return paper.units.flatMap(u => u.topics.map(t => t.id));
}

function getActiveExam() {
  if (!activePaperId || !activePaperId.startsWith('exam_')) return null;
  return state.exams.find(e => e.id === activePaperId);
}

function isTopicDone(topicId) {
  const exam = getActiveExam();
  if (exam) return !!exam.completed[topicId];
  return !!state.completed[topicId];
}

function setTopicDone(topicId, doneState) {
  const exam = getActiveExam();
  if (exam) {
    exam.completed[topicId] = doneState;
  } else {
    state.completed[topicId] = doneState;
  }
}

function calcPaperProgress(paper) {
  const ids = topicIds(paper);
  const done = ids.filter(id => {
    // If we are calculating for an exam specifically (via sidebar or rendering)
    if (paper.id.startsWith('exam_')) {
      const ex = state.exams.find(e => e.id === paper.id);
      return ex ? !!ex.completed[id] : false;
    }
    return !!state.completed[id];
  }).length;
  return { done, total: ids.length, pct: ids.length ? Math.round((done / ids.length) * 100) : 0 };
}

function calcUnitProgress(unit) {
  const ids = unit.topics.map(t => t.id);
  const done = ids.filter(id => isTopicDone(id)).length;
  return { done, total: ids.length, pct: ids.length ? Math.round((done / ids.length) * 100) : 0 };
}

function calcYearProgress(yearKey) {
  const papers = SYLLABUS[yearKey].papers;
  const allIds = papers.flatMap(topicIds);
  const done = allIds.filter(id => state.completed[id]).length;
  return { done, total: allIds.length, pct: allIds.length ? Math.round((done / allIds.length) * 100) : 0 };
}

function calcOverall() {
  const allIds = Object.values(SYLLABUS).flatMap(yr => yr.papers.flatMap(topicIds));
  const done = allIds.filter(id => state.completed[id]).length;
  return { done, total: allIds.length, pct: allIds.length ? Math.round((done / allIds.length) * 100) : 0 };
}

// ─── DOM Shortcuts ────────────────────────────────
const el = id => document.getElementById(id);
function setText(id, val) { const e = el(id); if (e) e.textContent = val; }
function setWidth(id, pct) { const e = el(id); if (e) e.style.width = pct + '%'; }

// ─── Stats Bar Update ─────────────────────────────
function updateStatsBar() {
  const ov = calcOverall();
  setText('sb-done', ov.done);
  setText('sb-total', ov.total);
  setText('sb-pct', ov.pct + '%');
  setWidth('sb-bar', ov.pct);

  const y1 = calcYearProgress('year1');
  const y2 = calcYearProgress('year2');
  const cl = calcYearProgress('clinical');
  setText('chip-y1', y1.pct + '%');
  setText('chip-y2', y2.pct + '%');
  setText('chip-cl', cl.pct + '%');
  setText('nav-y1-pct', y1.pct + '%');
  setText('nav-y2-pct', y2.pct + '%');
  setText('nav-cl-pct', cl.pct + '%');
}

// ─── Sidebar Rendering ────────────────────────────
function renderSidebar() {
  const mapping = { year1: 'nav-year1', year2: 'nav-year2', clinical: 'nav-clinical' };
  Object.entries(mapping).forEach(([yearKey, containerId]) => {
    const container = el(containerId);
    if (!container) return;
    container.innerHTML = '';
    SYLLABUS[yearKey].papers.forEach(paper => {
      const prog = calcPaperProgress(paper);
      const div = document.createElement('div');
      div.className = 'nav-item' + (activePaperId === paper.id ? ' active' : '');
      div.dataset.paper = paper.id;
      div.setAttribute('role', 'button');
      div.setAttribute('tabindex', '0');
      div.setAttribute('aria-label', paper.title);
      div.innerHTML = [
        '<span class="nav-item-icon">' + paper.icon + '</span>',
        '<div class="nav-item-body">',
          '<div class="nav-item-title">' + paper.shortTitle + '</div>',
          '<div class="nav-item-sub">' + paper.number + '</div>',
        '</div>',
        '<div class="nav-item-progress">',
          '<span class="nav-item-pct" id="npct-' + paper.id + '">' + prog.pct + '%</span>',
          '<div class="nav-mini-bar-wrap">',
            '<div class="nav-mini-bar" id="nbar-' + paper.id + '" style="width:' + prog.pct + '%;background:' + paper.color + '"></div>',
          '</div>',
        '</div>'
      ].join('');
      
      div.addEventListener('click', () => selectPaper(paper.id));
      div.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectPaper(paper.id); } });
      container.appendChild(div);
    });
  });
}

function updateSidebarProgress() {
  Object.values(SYLLABUS).forEach(yr => {
    yr.papers.forEach(paper => {
      const prog = calcPaperProgress(paper);
      setText('npct-' + paper.id, prog.pct + '%');
      setWidth('nbar-' + paper.id, prog.pct);
    });
  });
}

// ─── Welcome Grid ─────────────────────────────────
function renderWelcomeGrid() {
  const grid = el('welcome-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const allPapers = Object.values(SYLLABUS).flatMap(yr => yr.papers);
  allPapers.forEach(paper => {
    const prog = calcPaperProgress(paper);
    const card = document.createElement('div');
    card.className = 'wg-card';
    card.dataset.paper = paper.id;
    card.innerHTML = [
      '<div class="wg-icon">' + paper.icon + '</div>',
      '<div class="wg-title">' + paper.shortTitle + '</div>',
      '<div class="wg-pct" id="wgpct-' + paper.id + '">' + prog.pct + '%</div>',
      '<div class="wg-bar-wrap"><div class="wg-bar" id="wgbar-' + paper.id + '" style="width:' + prog.pct + '%;background:' + paper.color + '"></div></div>'
    ].join('');
    
    card.addEventListener('click', () => selectPaper(paper.id));
    grid.appendChild(card);
  });
}

function updateWelcomeGrid() {
  Object.values(SYLLABUS).forEach(yr => {
    yr.papers.forEach(paper => {
      const prog = calcPaperProgress(paper);
      setText('wgpct-' + paper.id, prog.pct + '%');
      setWidth('wgbar-' + paper.id, prog.pct);
    });
  });
}

// ─── Paper Selection ──────────────────────────────
function findPaper(id) {
  for (const yr of Object.values(SYLLABUS)) {
    const p = yr.papers.find(p => p.id === id);
    if (p) return p;
  }
  return null;
}

function selectPaper(paperId) {
  try {
    activePaperId = paperId;

    // Update sidebar active state
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const navItem = document.querySelector('.nav-item[data-paper="' + paperId + '"]');
    if (navItem) navItem.classList.add('active');

    const paper = findPaper(paperId);
    if (!paper) { console.error('[ST] paper not found:', paperId); return; }

    // Show paper-view, hide welcome
    const welcome = el('welcome-view');
    const paperView = el('paper-view');
    if (welcome) { welcome.style.display = 'none'; }
    if (paperView) {
      paperView.classList.add('visible');
      paperView.removeAttribute('hidden');
    }

    // Hide delete button for normal papers
    const delBtn = el('delete-exam-btn');
    if (delBtn) delBtn.style.display = 'none';

    // Show detail panel on mobile
    const appContainer = el('app-container');
    if (appContainer) appContainer.classList.add('view-detail');

    renderPaperDetail(paper);

    // Scroll detail panel to top
    const panel = el('detail-panel');
    if (panel) panel.scrollTop = 0;
  } catch(err) {
    console.error('[ST] selectPaper error:', err);
  }
}

// ─── Paper Detail Rendering ───────────────────────
function renderPaperDetail(paper) {
  const prog = calcPaperProgress(paper);

  // Hero
  const hero = el('paper-hero');
  if (hero) {
    hero.style.setProperty('--hero-color', paper.color);
  }

  setText('hero-emoji', paper.icon);
  setText('hero-number', paper.number);
  setText('hero-title', paper.title);
  setText('hero-desc', paper.description);
  setText('ring-pct', prog.pct + '%');

  // Accent on hero number badge
  const badge = el('hero-number');
  if (badge) {
    badge.style.color = paper.color;
    badge.style.background = paper.color + '1A';
  }

  // Pills
  const pillsContainer = el('hero-pills');
  if (pillsContainer) {
    pillsContainer.innerHTML = [
      { label: paper.number + ' · ' + (SYLLABUS.year1.papers.find(p=>p.id===paper.id) ? 'Year 1' : SYLLABUS.year2.papers.find(p=>p.id===paper.id) ? 'Year 2' : 'Clinical') },
      { label: paper.units.length + ' Unit' + (paper.units.length > 1 ? 's' : '') },
      { label: topicIds(paper).length + ' Topics' },
      { label: paper.pills.find(p => p.icon === 'book')?.label || '' }
    ].filter(p => p.label).map(p => '<span class="hero-pill">' + p.label + '</span>').join('');
  }

  // Update ring
  updateHeroRing(paper, prog.pct);

  // Render units
  const container = el('units-container');
  if (!container) return;
  container.innerHTML = '';

  // Auto-expand first unit on first visit to this paper
  if (paper.units.length > 0 && !expandedUnits.has(paper.units[0].id)) {
    expandedUnits.add(paper.units[0].id);
  }

  paper.units.forEach((unit, idx) => {
    const uProg = calcUnitProgress(unit);
    const isExpanded = expandedUnits.has(unit.id);
    const section = document.createElement('div');
    section.className = 'unit-section';
    section.id = 'us-' + unit.id;

    section.innerHTML = [
      '<button class="unit-header' + (isExpanded ? ' expanded' : '') + '"',
      ' id="uh-' + unit.id + '"',
      ' data-unit="' + unit.id + '"',
      ' aria-expanded="' + isExpanded + '">',
        '<div class="unit-num-badge" style="background:' + paper.color + '18;color:' + paper.color + '">' + unit.number + '</div>',
        '<div class="unit-info">',
          '<div class="unit-title">' + unit.title + '</div>',
          '<div class="unit-sub">' + unit.topics.length + ' topics</div>',
        '</div>',
        '<div class="unit-header-right">',
          '<div class="unit-progress-inline">',
            '<div class="unit-bar-wrap">',
              '<div class="unit-bar" id="ub-' + unit.id + '" style="width:' + uProg.pct + '%;background:' + paper.color + '"></div>',
            '</div>',
            '<span class="unit-pct" id="upct-' + unit.id + '">' + uProg.pct + '%</span>',
          '</div>',
          '<svg class="unit-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none">',
            '<path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
          '</svg>',
        '</div>',
      '</button>',
      '<p class="unit-desc">' + unit.desc + '</p>',
      '<div class="topics-panel' + (isExpanded ? ' open' : '') + '" id="tp-' + unit.id + '">',
        '<div class="topics-inner">',
          unit.topics.map(function(topic) { return renderTopicRow(topic, paper.id, unit.id); }).join(''),
        '</div>',
      '</div>'
    ].join('');

    container.appendChild(section);
  });

  // Use event delegation on the container for all clicks
  container.addEventListener('click', function onContainerClick(e) {
    // Unit header toggle
    const hdr = e.target.closest('.unit-header');
    if (hdr) { toggleUnit(hdr.dataset.unit); return; }
    // Topic row toggle
    const row = e.target.closest('.topic-row');
    if (row) { toggleTopic(row.dataset.topic, row.dataset.paper, row.dataset.unit); }
  });

  container.addEventListener('keydown', function(e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const row = e.target.closest('.topic-row');
    if (row) { e.preventDefault(); toggleTopic(row.dataset.topic, row.dataset.paper, row.dataset.unit); }
  });
}

function renderTopicRow(topic, paperId, unitId) {
  const done = isTopicDone(topic.id);
  return [
    '<div class="topic-row' + (done ? ' done' : '') + '"',
    ' id="tr-' + topic.id + '"',
    ' data-topic="' + topic.id + '"',
    ' data-paper="' + paperId + '"',
    ' data-unit="' + unitId + '"',
    ' role="checkbox" aria-checked="' + done + '" tabindex="0">',
      '<div class="topic-check' + (done ? ' done' : '') + '" id="tc-' + topic.id + '"></div>',
      '<div class="topic-text-wrap"><span class="topic-text">' + topic.text + '</span></div>',
    '</div>'
  ].join('');
}

// ─── Ring Update ──────────────────────────────────
function updateHeroRing(paper, pct) {
  const ringEl = el('hero-ring');
  if (!ringEl) return;
  const circumference = 226; // 2 * pi * 36
  const offset = circumference - (circumference * pct / 100);
  // Use setAttribute — more reliable for SVG presentation attributes
  ringEl.setAttribute('stroke-dashoffset', offset);
  ringEl.setAttribute('stroke', paper.color);
}

// ─── Unit Toggle ──────────────────────────────────
function toggleUnit(unitId) {
  const hdr = el('uh-' + unitId);
  const panel = el('tp-' + unitId);
  if (!hdr || !panel) return;

  const isOpen = expandedUnits.has(unitId);
  if (isOpen) {
    expandedUnits.delete(unitId);
    hdr.classList.remove('expanded');
    hdr.setAttribute('aria-expanded', 'false');
    panel.classList.remove('open');
  } else {
    expandedUnits.add(unitId);
    hdr.classList.add('expanded');
    hdr.setAttribute('aria-expanded', 'true');
    panel.classList.add('open');
  }
}

// ─── Topic Toggle ─────────────────────────────────
function toggleTopic(topicId, paperId, unitId) {
  const was = isTopicDone(topicId);
  setTopicDone(topicId, !was);
  saveState();

  // Update DOM
  const row = el('tr-' + topicId);
  const chk = el('tc-' + topicId);
  if (row) {
    row.classList.toggle('done', !was);
    row.setAttribute('aria-checked', (!was).toString());
  }
  if (chk) chk.classList.toggle('done', !was);

  // Update unit progress
  const paper = findPaper(paperId);
  if (paper) {
    const unit = paper.units.find(u => u.id === unitId) || paper.units.find(u => u.topics.some(t => t.id === topicId));
    if (unit) {
      const uProg = calcUnitProgress(unit);
      setWidth('ub-' + unit.id, uProg.pct);
      setText('upct-' + unit.id, uProg.pct + '%');
      const uPctEl = el('upct-' + unit.id);
      if (uPctEl) uPctEl.style.color = uProg.pct === 100 ? paper.color : '';
      const uBarEl = el('ub-' + unit.id);
      if (uBarEl) uBarEl.style.background = paper.color;
    }

    // Update hero ring
    const prog = calcPaperProgress(paper);
    updateHeroRing(paper, prog.pct);
    setText('ring-pct', prog.pct + '%');

    // Completion toast
    if (!was && calcUnitProgress(paper.units.find(u => u.topics.some(t => t.id === topicId)) || paper.units[0]).pct === 100) {
      const unit2 = paper.units.find(u => u.topics.some(t => t.id === topicId));
      if (unit2) showToast('Unit ' + unit2.number + ' complete — ' + unit2.title);
    }
    if (!was && prog.pct === 100) {
      showToast('\uD83C\uDF89 ' + paper.shortTitle + ' fully complete!');
    }
  }

  updateSidebarProgress();
  updateWelcomeGrid();
  updateStatsBar();
}

// ─── Theme ────────────────────────────────────────
function initTheme() {
  const key = 'syllabustrack_theme_v3';
  const saved = localStorage.getItem(key) || 'light';
  document.documentElement.setAttribute('data-theme', saved);

  el('theme-btn')?.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(key, next);
  });
}

// ─── Reset ────────────────────────────────────────
function initReset() {
  const overlay = el('dialog-overlay');
  el('reset-btn')?.addEventListener('click', () => overlay?.classList.add('open'));
  el('dlg-cancel')?.addEventListener('click', () => overlay?.classList.remove('open'));
  overlay?.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });
  el('dlg-confirm')?.addEventListener('click', () => {
    state.completed = {};
    state.exams.forEach(ex => ex.completed = {});
    saveState();
    expandedUnits.clear();
    overlay?.classList.remove('open');
    updateStatsBar();
    updateSidebarProgress();
    updateWelcomeGrid();
    if (activePaperId) {
      const activeIsExam = activePaperId.startsWith('exam_');
      if (activeIsExam) {
        const ex = state.exams.find(e => e.id === activePaperId);
        if (ex) selectExam(ex);
      } else {
        const yr = SYLLABUS.year1.papers.find(p=>p.id===activePaperId) ? 'year1' : 
                   SYLLABUS.year2.papers.find(p=>p.id===activePaperId) ? 'year2' : 'clinical';
        const p = SYLLABUS[yr].papers.find(p=>p.id===activePaperId);
        if (p) selectPaper(p);
      }
    }
    showToast('All progress reset');
  });

  // Mobile Back Button
  el('mobile-back-btn')?.addEventListener('click', () => {
    const appContainer = el('app-container');
    if (appContainer) appContainer.classList.remove('view-detail');
  });
}

// ─── Search ───────────────────────────────────────
function initSearch() {
  el('search-input')?.addEventListener('input', e => {
    const q = e.target.value.toLowerCase().trim();
    document.querySelectorAll('.nav-item').forEach(item => {
      const title = item.querySelector('.nav-item-title')?.textContent.toLowerCase() || '';
      item.style.display = (!q || title.includes(q)) ? '' : 'none';
    });
  });
}

// ─── Toast ────────────────────────────────────────
let toastTimer = null;
function showToast(msg) {
  const t = el('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}

// ─── Internal Exams Logic ─────────────────────────
function renderExamTree() {
  const tree = el('exam-syllabus-tree');
  if (!tree) return;
  
  const chevSvg = '<svg class="tree-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  let html = '';
  Object.values(SYLLABUS).forEach((year, yIdx) => {
    html += '<div class="tree-year" id="ty-' + yIdx + '"><div class="tree-year-label">' + year.label + chevSvg + '</div><div class="tree-year-content">';
    year.papers.forEach((paper, pIdx) => {
      html += '<div class="tree-paper" id="tp-' + yIdx + '-' + pIdx + '"><div class="tree-paper-label"><div class="tp-left"><input type="checkbox" class="cb-paper" data-paper="' + paper.id + '"> ' + paper.title + '</div>' + chevSvg + '</div><div class="tree-units">';
      paper.units.forEach(unit => {
        html += '<label class="tree-unit-label"><input type="checkbox" class="cb-unit" data-unit="' + unit.id + '" value="' + unit.topics.map(t=>t.id).join(',') + '"> Unit ' + unit.number + ': ' + unit.title + '</label>';
      });
      html += '</div></div>';
    });
    html += '</div></div>';
  });
  tree.innerHTML = html;

  // Accordion toggles
  tree.querySelectorAll('.tree-year-label').forEach(lbl => {
    lbl.addEventListener('click', (e) => {
      if (e.target.type === 'checkbox') return;
      lbl.parentElement.classList.toggle('open');
    });
  });
  tree.querySelectorAll('.tree-paper-label').forEach(lbl => {
    lbl.addEventListener('click', (e) => {
      if (e.target.type === 'checkbox') return;
      lbl.parentElement.classList.toggle('open');
    });
  });

  // Handle cascading checkboxes
  tree.querySelectorAll('.cb-paper').forEach(cb => {
    cb.addEventListener('change', e => {
      const parent = e.target.closest('.tree-paper');
      parent.querySelectorAll('.cb-unit').forEach(u => u.checked = e.target.checked);
    });
  });
}

function initExams() {
  const modal = el('exam-modal-overlay');
  el('add-exam-btn')?.addEventListener('click', () => {
    el('exam-name').value = '';
    renderExamTree();
    modal?.classList.add('open');
  });
  el('exam-cancel-btn')?.addEventListener('click', () => modal?.classList.remove('open'));
  el('exam-close-btn')?.addEventListener('click', () => modal?.classList.remove('open'));

  el('exam-save-btn')?.addEventListener('click', () => {
    const name = el('exam-name').value.trim() || 'Untitled Exam';
    const selectedTopics = [];
    document.querySelectorAll('.cb-unit:checked').forEach(cb => {
      if (cb.value) selectedTopics.push(...cb.value.split(','));
    });

    if (selectedTopics.length === 0) {
      alert('Please select at least one unit to include in the exam.');
      return;
    }

    const exam = { id: 'exam_' + generateId(), name, selectedTopics, completed: {} };
    state.exams.push(exam);
    saveState();
    modal?.classList.remove('open');
    renderSidebarExams();
    showToast('Exam created successfully');
  });

  // Delete Exam logic
  el('delete-exam-btn')?.addEventListener('click', () => {
    if (!activePaperId || !activePaperId.startsWith('exam_')) return;
    if (confirm('Are you sure you want to delete this exam? This cannot be undone.')) {
      state.exams = state.exams.filter(e => e.id !== activePaperId);
      saveState();
      activePaperId = null;
      renderSidebarExams();
      el('welcome-view').style.display = 'block';
      el('paper-view').classList.remove('visible');
      el('paper-view').setAttribute('hidden', 'true');
      
      const appContainer = el('app-container');
      if (appContainer) appContainer.classList.remove('view-detail');
      
      showToast('Exam deleted');
    }
  });

  renderSidebarExams();
}

function renderSidebarExams() {
  const container = el('nav-exams');
  if (!container) return;
  container.innerHTML = '';
  
  if (!state.exams || state.exams.length === 0) {
    container.innerHTML = '<div style="padding: 8px 12px; font-size: 0.8rem; color: var(--fg-muted)">No exams created</div>';
    return;
  }

  state.exams.forEach(exam => {
    const done = exam.selectedTopics.filter(id => exam.completed[id]).length;
    const total = exam.selectedTopics.length;
    const pct = total ? Math.round((done / total) * 100) : 0;

    const div = document.createElement('div');
    div.className = 'nav-item' + (activePaperId === exam.id ? ' active' : '');
    div.dataset.paper = exam.id;
    div.setAttribute('role', 'button');
    div.innerHTML = [
      '<span class="nav-item-icon">\uD83D\uDCC4</span>',
      '<div class="nav-item-body">',
        '<div class="nav-item-title">' + exam.name + '</div>',
        '<div class="nav-item-sub">Internal Exam</div>',
      '</div>',
      '<div class="nav-item-progress">',
        '<span class="nav-item-pct" id="npct-' + exam.id + '">' + pct + '%</span>',
        '<div class="nav-mini-bar-wrap">',
          '<div class="nav-mini-bar" id="nbar-' + exam.id + '" style="width:' + pct + '%;background:#F59E0B"></div>',
        '</div>',
      '</div>'
    ].join('');
    
    div.addEventListener('click', () => selectExam(exam));
    container.appendChild(div);
  });
}

function selectExam(exam) {
  try {
    activePaperId = exam.id;
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const navItem = document.querySelector('.nav-item[data-paper="' + exam.id + '"]');
    if (navItem) navItem.classList.add('active');

    const welcome = el('welcome-view');
    const paperView = el('paper-view');
    if (welcome) welcome.style.display = 'none';
    if (paperView) {
      paperView.classList.add('visible');
      paperView.removeAttribute('hidden');
    }

    // Build dynamic virtual paper for rendering
    const virtualPaper = {
      id: exam.id,
      number: 'Exam',
      shortTitle: exam.name,
      title: exam.name + ' (Internal Exam)',
      description: 'Custom selection of units across the syllabus.',
      color: '#F59E0B',
      icon: '\uD83D\uDCC4',
      pills: [ { icon: 'layers', label: exam.selectedTopics.length + ' Topics' } ],
      units: []
    };

    // Extract units that have topics selected in this exam
    const selectedSet = new Set(exam.selectedTopics);
    Object.values(SYLLABUS).forEach(yr => {
      yr.papers.forEach(p => {
        p.units.forEach(u => {
          const matchingTopics = u.topics.filter(t => selectedSet.has(t.id));
          if (matchingTopics.length > 0) {
            virtualPaper.units.push({
              id: u.id,
              number: p.shortTitle + ' ' + u.number, // Prefix with paper short title for context
              title: u.title,
              desc: u.desc,
              topics: matchingTopics
            });
          }
        });
      });
    });

    // Show delete button
    const delBtn = el('delete-exam-btn');
    if (delBtn) delBtn.style.display = 'inline-flex';

    // Show detail panel on mobile
    const appContainer = el('app-container');
    if (appContainer) appContainer.classList.add('view-detail');

    renderPaperDetail(virtualPaper);

    const panel = el('detail-panel');
    if (panel) panel.scrollTop = 0;
  } catch(err) {
    console.error('[ST] selectExam error:', err);
  }
}

function splitText(text) {
  let clean = text.replace(/\?"/g, '-');
  let parts = [];
  let current = '';
  let depth = 0;
  for (let i = 0; i < clean.length; i++) {
    const char = clean[i];
    if (char === '(') depth++;
    if (char === ')') depth--;
    if (depth === 0) {
      if (char === ';') { parts.push(current); current = ''; continue; }
      if (char === ',') { parts.push(current); current = ''; continue; }
      if (clean.substring(i, i+5).toLowerCase() === ' and ') { parts.push(current); current = ''; i += 4; continue; }
      if (clean.substring(i, i+3) === ' & ') { parts.push(current); current = ''; i += 2; continue; }
    }
    current += char;
  }
  parts.push(current);
  return parts.map(p => p.trim()).filter(p => p.length > 0)
    .map(p => p.charAt(0).toUpperCase() + p.slice(1));
}

function normalizeSyllabus() {
  Object.values(SYLLABUS).forEach(year => {
    year.papers.forEach(paper => {
      paper.units.forEach(unit => {
        let newTopics = [];
        let tIdx = 1;
        unit.topics.forEach(oldTopic => {
          const splitFragments = splitText(oldTopic.text);
          splitFragments.forEach(frag => {
            newTopics.push({ id: unit.id + 't' + (tIdx++), text: frag });
          });
        });
        unit.topics = newTopics;
      });
    });
  });
}

// ─── Init ─────────────────────────────────────────
function init() {
  try {
    normalizeSyllabus();
    initTheme();
    initExams();
    renderSidebar();
    renderWelcomeGrid();
    updateStatsBar();
    initReset();
    initSearch();
  } catch (err) {
    console.error('[SyllabusTrack] Init error:', err);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
