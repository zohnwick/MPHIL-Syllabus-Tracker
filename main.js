
const SYLLABUS = {
  year1: {
    label: 'Year 1 â€” Part I',
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
    label: 'Year 2 â€” Part II',
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


const el = id => document.getElementById(id);
const lsKey = 'SyllabusTrack_V2_State';

let state = {
  completed: {},
  exams: []
};
let activePaper = null;

function loadState() {
  try {
    const s = localStorage.getItem(lsKey);
    if (s) state = JSON.parse(s);
  } catch (e) { console.error('Failed to load state', e); }
}
function saveState() {
  localStorage.setItem(lsKey, JSON.stringify(state));
}

function calcPaperProgress(paper) {
  let total = 0, done = 0;
  const isExam = paper.id.startsWith('exam_');
  const compSrc = isExam ? paper.completed : state.completed;
  
  paper.units.forEach(u => {
    u.topics.forEach(t => {
      total++;
      if (compSrc[t.id]) done++;
    });
  });
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
  return { total, done, pct };
}

function calcYearProgress(yearKey) {
  let total = 0, done = 0;
  SYLLABUS[yearKey].papers.forEach(p => {
    const prog = calcPaperProgress(p);
    total += prog.total; done += prog.done;
  });
  return { pct: total === 0 ? 0 : Math.round((done / total) * 100) };
}

function calcOverall() {
  let total = 0, done = 0;
  Object.keys(SYLLABUS).forEach(k => {
    SYLLABUS[k].papers.forEach(p => {
      const prog = calcPaperProgress(p);
      total += prog.total; done += prog.done;
    });
  });
  return { total, done, pct: total === 0 ? 0 : Math.round((done / total) * 100) };
}

function updateStats() {
  const ov = calcOverall();
  el('sb-val').textContent = `${ov.done}/${ov.total}`;
  el('sb-pct').textContent = `${ov.pct}%`;
  el('sb-bar').style.width = `${ov.pct}%`;

  const y1 = calcYearProgress('year1');
  const y2 = calcYearProgress('year2');
  const cl = calcYearProgress('clinical');
  el('chip-y1').textContent = `${y1.pct}%`; el('nav-y1-pct').textContent = `${y1.pct}%`;
  el('chip-y2').textContent = `${y2.pct}%`; el('nav-y2-pct').textContent = `${y2.pct}%`;
  el('chip-cl').textContent = `${cl.pct}%`; el('nav-cl-pct').textContent = `${cl.pct}%`;
}

function renderSidebar() {
  const mapping = { year1: 'nav-year1', year2: 'nav-year2', clinical: 'nav-clinical' };
  Object.entries(mapping).forEach(([key, id]) => {
    const container = el(id);
    container.innerHTML = '';
    SYLLABUS[key].papers.forEach(p => {
      const prog = calcPaperProgress(p);
      const div = document.createElement('div');
      div.className = 'nav-item' + (activePaper === p.id ? ' active' : '');
      div.dataset.paper = p.id;
      div.innerHTML = `
        <div class="nav-icon">${p.icon}</div>
        <div class="nav-info">
          <div class="nav-title">${p.shortTitle}</div>
          <div class="nav-sub">${p.number}</div>
        </div>
        <div class="nav-prog">
          <span class="nav-pct" id="spct-${p.id}">${prog.pct}%</span>
          <div class="mini-bar-wrap">
            <div class="mini-bar" id="sbar-${p.id}" style="width:${prog.pct}%;background:${p.color}"></div>
          </div>
        </div>
      `;
      div.addEventListener('click', () => showPaper(p));
      container.appendChild(div);
    });
  });

  const examsNav = el('nav-exams');
  examsNav.innerHTML = '';
  if (state.exams.length === 0) examsNav.innerHTML = '<div style="padding:10px 16px;font-size:0.8rem;color:var(--fg-muted)">No exams created.</div>';
  state.exams.forEach(p => {
    const prog = calcPaperProgress(p);
    const div = document.createElement('div');
    div.className = 'nav-item' + (activePaper === p.id ? ' active' : '');
    div.dataset.paper = p.id;
    div.innerHTML = `
      <div class="nav-icon">${p.icon}</div>
      <div class="nav-info">
        <div class="nav-title">${p.shortTitle}</div>
        <div class="nav-sub">${p.number}</div>
      </div>
      <div class="nav-prog">
        <span class="nav-pct" id="spct-${p.id}">${prog.pct}%</span>
        <div class="mini-bar-wrap">
          <div class="mini-bar" id="sbar-${p.id}" style="width:${prog.pct}%;background:${p.color}"></div>
        </div>
      </div>
    `;
    div.addEventListener('click', () => showPaper(p));
    examsNav.appendChild(div);
  });
}

function renderWelcome() {
  const grid = el('welcome-grid');
  grid.innerHTML = '';
  Object.values(SYLLABUS).forEach(yr => {
    yr.papers.forEach(p => {
      const prog = calcPaperProgress(p);
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="card-icon">${p.icon}</div>
        <div class="card-title">${p.shortTitle}</div>
        <div class="card-pct" id="cpct-${p.id}">${prog.pct}%</div>
        <div class="sb-bar-wrap" style="margin-top:8px"><div class="sb-bar" id="cbar-${p.id}" style="width:${prog.pct}%;background:${p.color}"></div></div>
      `;
      card.addEventListener('click', () => showPaper(p));
      grid.appendChild(card);
    });
  });
}

function showToast(msg) {
  const t = el('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

function showPaper(paper) {
  activePaper = paper.id;
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const activeNav = document.querySelector(`.nav-item[data-paper="${paper.id}"]`);
  if (activeNav) activeNav.classList.add('active');

  document.documentElement.style.setProperty('--h-color', paper.color);
  el('hero-icon').textContent = paper.icon;
  el('hero-number').textContent = paper.number;
  el('hero-number').style.color = paper.color;
  el('hero-title').textContent = paper.title;
  el('hero-desc').textContent = paper.description;

  const isExam = paper.id.startsWith('exam_');
  el('delete-exam-btn').style.display = isExam ? 'inline-flex' : 'none';

  const uCont = el('units-container');
  uCont.innerHTML = '';

  const compSrc = isExam ? paper.completed : state.completed;

  paper.units.forEach(u => {
    let uTotal = u.topics.length, uDone = 0;
    u.topics.forEach(t => { if (compSrc[t.id]) uDone++; });
    const uPct = uTotal === 0 ? 0 : Math.round((uDone / uTotal) * 100);

    const div = document.createElement('div');
    div.className = 'unit';
    let html = `
      <div class="unit-hdr">
        <div class="unit-info">
          <div class="unit-num">${u.number}</div>
          <div>
            <div class="unit-title">${u.title}</div>
          </div>
        </div>
        <div class="unit-prog">
          <span class="unit-pct" id="upct-${u.id}">${uPct}%</span>
          <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="var(--fg-muted)" stroke-width="2" stroke-linecap="round"/></svg>
        </div>
      </div>
      <div class="topics">
    `;
    u.topics.forEach(t => {
      const doneClass = compSrc[t.id] ? ' done' : '';
      html += `
        <div class="topic${doneClass}" data-tid="${t.id}" data-uid="${u.id}">
          <div class="topic-check"></div>
          <div class="topic-text">${t.text}</div>
        </div>
      `;
    });
    html += `</div>`;
    div.innerHTML = html;
    
    div.querySelector('.unit-hdr').addEventListener('click', () => div.classList.toggle('open'));
    
    div.querySelectorAll('.topic').forEach(tDiv => {
      tDiv.addEventListener('click', (e) => {
        e.stopPropagation();
        const tid = tDiv.dataset.tid;
        if (compSrc[tid]) delete compSrc[tid];
        else compSrc[tid] = true;
        
        tDiv.classList.toggle('done');
        saveState();
        updateStats();
        
        // update unit pct
        let nd = 0; u.topics.forEach(tx => { if (compSrc[tx.id]) nd++; });
        el(`upct-${u.id}`).textContent = `${uTotal === 0 ? 0 : Math.round((nd / uTotal) * 100)}%`;
        
        // update sidebar & welcome card
        const prog = calcPaperProgress(paper);
        const ring = el('hero-ring');
        if (ring) {
          const offset = 226 - (226 * prog.pct) / 100;
          ring.style.strokeDashoffset = offset;
        }
        el('ring-val').textContent = prog.pct + '%';
        
        const spct = el(`spct-${paper.id}`); if (spct) spct.textContent = prog.pct + '%';
        const sbar = el(`sbar-${paper.id}`); if (sbar) sbar.style.width = prog.pct + '%';
        const cpct = el(`cpct-${paper.id}`); if (cpct) cpct.textContent = prog.pct + '%';
        const cbar = el(`cbar-${paper.id}`); if (cbar) cbar.style.width = prog.pct + '%';
      });
    });
    uCont.appendChild(div);
  });

  const prog = calcPaperProgress(paper);
  const ring = el('hero-ring');
  if (ring) {
    const offset = 226 - (226 * prog.pct) / 100;
    ring.style.strokeDashoffset = offset;
  }
  el('ring-val').textContent = prog.pct + '%';

  // Toggle View
  el('view-welcome').classList.remove('active');
  el('view-paper').classList.add('active');
  el('app').classList.remove('sidebar-open');
}

function goHome() {
  activePaper = null;
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  el('view-paper').classList.remove('active');
  el('view-welcome').classList.add('active');
}

// Search
function initSearch() {
  const input = el('search-input');
  input.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    document.querySelectorAll('.nav-item').forEach(el => {
      const txt = el.textContent.toLowerCase();
      el.style.display = txt.includes(q) ? 'flex' : 'none';
    });
    document.querySelectorAll('.nav-group').forEach(grp => {
      if (q) grp.classList.add('open');
    });
  });
}

// Exams
function generateId() { return Math.random().toString(36).substr(2, 9); }

function initExams() {
  const modal = el('exam-modal');
  el('add-exam-btn').addEventListener('click', () => {
    el('exam-name').value = '';
    renderExamTree();
    modal.classList.add('open');
  });
  
  el('save-exam-btn').addEventListener('click', () => {
    const name = el('exam-name').value.trim() || 'Untitled Exam';
    const selectedTids = [];
    document.querySelectorAll('.cb-topic:checked').forEach(cb => selectedTids.push(cb.value));
    
    if (selectedTids.length === 0) {
      alert('Please select at least one topic.');
      return;
    }
    
    const exam = {
      id: 'exam_' + generateId(),
      number: 'Internal Exam',
      shortTitle: name,
      title: name,
      description: 'Custom selection of topics for internal exam preparation.',
      color: '#5B4FDB',
      icon: 'ðŸ“',
      completed: {},
      units: []
    };
    
    // Group selected topics into virtual units
    let unitIdx = 1;
    Object.keys(SYLLABUS).forEach(yr => {
      SYLLABUS[yr].papers.forEach(p => {
        p.units.forEach(u => {
          const matched = u.topics.filter(t => selectedTids.includes(t.id));
          if (matched.length > 0) {
            exam.units.push({
              id: 'ex_u' + (unitIdx++),
              number: p.shortTitle,
              title: u.title,
              topics: matched.map(t => ({ id: t.id, text: t.text }))
            });
          }
        });
      });
    });
    
    state.exams.push(exam);
    saveState();
    modal.classList.remove('open');
    renderSidebar();
    showToast('Exam created successfully');
    showPaper(exam);
  });
  
  el('delete-exam-btn').addEventListener('click', () => {
    if (!activePaper || !activePaper.startsWith('exam_')) return;
    if (confirm('Delete this exam?')) {
      state.exams = state.exams.filter(e => e.id !== activePaper);
      saveState();
      renderSidebar();
      goHome();
      showToast('Exam deleted');
    }
  });
}

function renderExamTree() {
  const tree = el('exam-tree');
  let html = '';
  Object.keys(SYLLABUS).forEach(yr => {
    SYLLABUS[yr].papers.forEach(p => {
      html += `<label class="cb-paper">${p.shortTitle}</label>`;
      p.units.forEach(u => {
        html += `<div style="margin-left:10px;">
          <div style="font-weight:600;font-size:0.8rem;color:var(--fg-muted);margin:8px 0 4px;">${u.title}</div>`;
        u.topics.forEach(t => {
          html += `<label class="cb-unit-label">
            <input type="checkbox" class="cb-topic" value="${t.id}" /> ${t.text}
          </label>`;
        });
        html += `</div>`;
      });
    });
  });
  tree.innerHTML = html;
}

function splitText(text) {
  let clean = text.replace(/"/g, ''); // strip any corrupted quotes
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

// App Initialization
function init() {
  normalizeSyllabus();
  loadState();
  updateStats();
  renderSidebar();
  renderWelcome();
  initSearch();
  initExams();

  // Accordions
  document.querySelectorAll('.nav-group-hdr').forEach(hdr => {
    hdr.addEventListener('click', (e) => {
      if (e.target.closest('.nav-add-btn')) return;
      hdr.parentElement.classList.toggle('open');
    });
  });

  // Mobile Menu
  el('menu-btn').addEventListener('click', () => document.querySelector('.app').classList.add('sidebar-open'));
  el('sidebar-overlay').addEventListener('click', () => document.querySelector('.app').classList.remove('sidebar-open'));
  el('back-btn').addEventListener('click', goHome);

  // Theme
  const thKey = 'SyllabusTrack_Theme_V2';
  const savedTh = localStorage.getItem(thKey) || 'light';
  document.documentElement.setAttribute('data-theme', savedTh);
  el('theme-btn').addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(thKey, next);
  });

  // Reset
  el('reset-btn').addEventListener('click', () => el('reset-modal').classList.add('open'));
  el('confirm-reset-btn').addEventListener('click', () => {
    state.completed = {};
    state.exams.forEach(ex => ex.completed = {});
    saveState();
    el('reset-modal').classList.remove('open');
    updateStats();
    renderSidebar();
    renderWelcome();
    if (activePaper) showPaper(activePaper.startsWith('exam_') ? state.exams.find(e => e.id === activePaper) : SYLLABUS.year1.papers[0]); // fallback
    showToast('All progress has been reset');
  });
}

document.addEventListener('DOMContentLoaded', init);

