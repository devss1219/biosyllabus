// Retrieve stored syllabus data or initialize an empty object
const storedData = JSON.parse(localStorage.getItem("syllabus")) || {};

// Define syllabus structure
const syllabus = {
    "Biostatistics": {
        "Unit I: Introduction to Biostatistics": [
            "Definition",
            "Statistical Methods",
            "Biological Measurement",
            "Kinds of Biological Data",
            "Function of Statistics",
            "Limitation of Statistics"
        ],
        "Unit II: Data Collection and Representation": [
            "Collection of Data",
            "Sampling and Sampling Design",
            "Classification and Tabulation",
            "Types of Representation (Graphic, Bar Diagram, Pie Diagram, Curves)",
            "Basic Concept of Calculus"
        ],
        "Unit III: Measures of Central Tendency and Dispersion": [
            "Mean, Median, Mode, Geometric Mean",
            "Measure of Dispersion, Variability, and Changes",
            "Deviation (Quartile Deviation, Mean Deviation, Standard Deviation)",
            "Standard Error of Mean",
            "Coefficient of Variation"
        ],
        "Unit IV: Test of Significance": [
            "Chi-square Test",
            "t-Test",
            "F-Test",
            "ANOVA with Numerical"
        ],
        "Unit V: Probability and Distributions": [
            "Random Experiment and Associated Sample Space",
            "Events and Definition of Probability",
            "Algebra of Events",
            "Addition and Multiplication Theorems on Probability (Without Proof)",
            "Binomial, Poisson, and Normal Distributions Analysis"
        ]
    },
    "Cell Biology": {
        "Unit I": [
            "Cell as a basic unit of living system",
            "Biochemical composition of cell: protein, lipid, carbohydrate, nucleic acid",
            "The cell theory",
            "Ultra structure of cell",
            "Membrane composition",
            "Early studies on Plasma Membrane",
            "The lipid bilayer membrane",
            "A summary of membrane function - simple diffusion, facilitated transport, active transport",
            "Endocytosis, Pinocytosis, Phagocytosis, Exocytosis"
        ],
        "Unit II": [
            "Structure and function of Mitochondria, Chloroplast, Endoplasmic Reticulum, Golgi Complex, Lysosome, Ribosome, and Peroxisome",
            "Evolution of Mitochondria and Chloroplast"
        ],
        "Unit III": [
            "Structure and function of Nucleus",
            "Cell cycle: Mitosis and Meiosis"
        ],
        "Unit IV": [
            "Nucleic acids, structure of DNA",
            "DNA as genetic material - Griffith experiment, Hershey & Chase experiment, Meselson-Stahl experiment, and DNA replication",
            "Structure and types of RNA",
            "RNA as genetic material",
            "Transcription",
            "Post-transcriptional modifications: methylation, capping, splicing & polyadenylation"
        ],
        "Unit V": [
            "Genetic Code: Evidence & Essentiality of Codon",
            "Triplet code, Start and Stop codons",
            "Reading frames, universality of genetic code, overlapping and split gene",
            "Protein synthesis in Prokaryotes and Eukaryotes and its regulation"
        ]
    },
    
        "Biochemistry": {
            "Unit I: Carbohydrates": [
                "Monosaccharide: Classification, Configuration, Conformation, and Derivatives",
                "Common Disaccharides",
                "Structure and Occurrence of Storage and Structural Polysaccharides",
                "Glycoprotein Structure and Functions"
            ],
            "Unit II: Lipids": [
                "Fatty Acids",
                "Triacylglycerol",
                "Glycerophospholipids",
                "Sphingolipids: Sphingomyelins, Cerebrosides, and Gangliosides",
                "Cholesterol",
                "Micelles, Bilayers, Liposome",
                "Lipoprotein Structure and Function"
            ],
            "Unit III: Amino Acids and Proteins": [
                "Amino Acids: Structure, Nomenclature, and General Properties",
                "Peptide Bonds",
                "Primary Structure of Proteins: End Group Analysis, Amino Acid Composition, Specific Peptide Cleavage, and Sequence Determination",
                "Secondary Structure: Peptide Group, Helical Structure (α-Helix & Other Polypeptide Helices), β-Pleated Sheets, and Ramachandran Plot",
                "Protein Stability Factors: Electrostatic Interactions, Hydrogen Bonds, Hydrophobic Forces, Disulfide Bonds",
                "General Idea of Tertiary and Quaternary Structure of Proteins"
            ],
            "Unit IV: Vitamins and Enzymes": [
                "Vitamins of B-Group: Their Coenzyme Forms, Recommended Dietary Allowance (RDA), Sources, and Biochemical Functions",
                "Fat-Soluble Vitamins: RDA, Sources, and Functions"
            ],
            "Unit V: Metabolism": [
                "Outline of Following Pathways (Including Name & Structure of Intermediates, Name of Enzymes, and Regulatory Aspects but Excluding Mechanism of Enzymes)",
                "Glycolysis",
                "TCA Cycle",
                "HMP Pathway",
                "Glycogen Synthesis and Degradation",
                "Gluconeogenesis"
            ]
        },
        
            "Bioscience 1": {
                "Unit I: Cyanobacteria & Lichens": [
                    "General Features",
                    "Tunic Position",
                    "Distribution",
                    "Cell Structure",
                    "Heterocyst",
                    "Economic Importance with Special Reference to Nostoc Bloom",
                    "General Features of Lichens",
                    "Diversity, Range of Thallus Structure",
                    "Reproduction",
                    "Ecological Significance",
                    "Economic Importance of Lichens"
                ],
                "Unit II: Algae": [
                    "General Features",
                    "Classification",
                    "Distribution",
                    "Range of Thallus Organization",
                    "Reproduction",
                    "Economic Importance with Special Reference to Chara, Vaucheria, Fucus, Oedogonium"
                ],
                "Unit III: Fungi": [
                    "General Features",
                    "Classification",
                    "Distribution",
                    "Range of Thallus Organization",
                    "Reproduction",
                    "Parsexual Cycle",
                    "Economic Importance with Special Reference to Slime Mold, Albugo, Penicillium, Agaricus, Puccinia"
                ],
                "Unit IV: Bryophyta": [
                    "General Features",
                    "Classification",
                    "Distribution",
                    "Range of Thallus Organization",
                    "Reproduction",
                    "Economic Importance with Special Reference to Riccia, Marchantia, and Anthoceros"
                ],
                "Unit V: Pteridophyta, Gymnosperms & Angiosperms": [
                    "General Features",
                    "Outline Classification",
                    "Structure",
                    "Reproduction",
                    "Alternation of Generation",
                    "Stelar Evolution",
                    "Heterospory and Seed Habit",
                    "Type Study: Lycopodium, Selaginella, Equisetum, and Pteridium",
                    "General Features of Gymnosperms & Angiosperms with Examples"
                ]
            },
            
                "Bioscience 2": {
                    "Unit I: Introduction to Invertebrates": [
                        "General Principle of Taxonomy and Animal Classification",
                        "Salient Features and Outline Classification up to Order in Non-Chordates"
                    ],
                    "Unit II: Phylum - Protozoa, Porifera, and Coelenterata": [
                        "General Characters of Protozoa",
                        "Protozoan and Human Diseases",
                        "Type Study of Paramecium caudatum",
                        "General Idea of Origin of Metazoans, Metamerism, and Symmetry",
                        "General Characters of Porifera",
                        "Type Study of Sycon",
                        "General Characters of Coelenterates",
                        "Type Study of Obelia"
                    ],
                    "Unit III: Phylum - Platyhelminthes, Annelida, and Arthropoda": [
                        "General Characters of Platyhelminthes",
                        "Type Study of Taenia",
                        "Parasitic Adaptation",
                        "General Characters of Annelida",
                        "Type Study of Leech",
                        "General Characters of Arthropoda",
                        "Type Study of Palaemon",
                        "Economic Importance of Insects",
                        "Sericulture",
                        "Apiculture"
                    ],
                    "Unit IV: Phylum - Mollusca, Echinodermata, and Minor Phyla": [
                        "General Characters of Mollusca",
                        "Type Study of Pila globosa",
                        "General Characters of Echinodermata",
                        "External Features of Starfish",
                        "General Introduction of Minor Phyla and Their Examples"
                    ],
                    "Unit V: Phylum - Introduction to Chordata": [
                        "General Characters and Outline Classification of Phylum Chordata",
                        "General Characters and Classification of Class Mammalia"
                    ]
                },
                "Organic Chemistry": {
                    "Unit I: Fundamental Concepts": [
                        "Electromeric Effects: Inductive Effect, Mesomeric Effect, Electromeric Effect, Baker-Nathan Effect, Hydrogen Bonding",
                        "Organic Intermediates: Carbocation, Carbanions, Free Radical, Carbenes",
                        "Nucleophilic Substitution Reactions in Aliphatic Compounds (SN1 and SN2)",
                        "Elimination Reactions (E1 and E2)"
                    ],
                    "Unit II: Alkanes, Alkenes, Alkynes, and Alkyl Halides": [
                        "Structure, Classification, Nomenclature",
                        "Synthesis and Important Reactions"
                    ],
                    "Unit III: Alcohols": [
                        "Structure & Nomenclature",
                        "Physical Properties",
                        "Reaction of Alcohols: Reaction with Hydrogen Halide, Phosphorous Trihalide, and Thionyl Chloride",
                        "Conversion to Alkyl Halides & Alkyl Phosphates",
                        "Dehydration",
                        "Synthesis of Ethers from Alcohols (Williamson Synthesis)",
                        "Oxidation of Alcohols"
                    ],
                    "Unit IV: Chemistry of Carbonyl Compounds": [
                        "Structure, Nomenclature, and Physical Properties",
                        "Nucleophilic Addition to Carbon-Oxygen Double Bond",
                        "Reaction of Aldehydes and Ketones",
                        "Oxidation (Baeyer-Villiger Oxidation)",
                        "Reduction to Alcohols & Hydrocarbons (Clemmensen Reduction & Wolff-Kishner Reduction)",
                        "Addition of Water & Alcohols (Hydrates, Hemiacetal, Hemiketal, Thioacetal, and Thioketals)",
                        "Addition of Derivatives of Ammonia (Reaction with Hydroxylamine, Hydrazine, Phenylhydrazine, and Semicarbazide)",
                        "Addition of Hydrogen Cyanide & Halides",
                        "Wittig Reaction",
                        "Aldol Reaction"
                    ],
                    "Unit V: Aliphatic Carboxylic Acids, Their Derivatives, and Aliphatic Amines": [
                        "Structure, Nomenclature, Physical Properties, and Acidity of Carboxylic Acids",
                        "Reaction of Carboxylic Acids: Nucleophilic Substitution at Acyl Carbon, Reduction, Decarboxylation",
                        "Structure, Nomenclature, Physical Properties, and Basicity of Amines",
                        "Reaction of Amines: Oxidation, Reaction with Nitrous Acid, Hoffmann and Cope Elimination",
                        "Reaction of Amides: Hydrolysis, Conversion to Imides, Hoffmann Degradation"
                    ]
                },
                
                    "General Microbiology": {
                        "Unit I: Introduction to Microbiology": [
                            "Definition, Scope, and History of Microbiology",
                            "Difference Between Prokaryotic and Eukaryotic Microorganisms",
                            "Classification of Microorganisms: General Principles of Nomenclature",
                            "Whittaker's Five Kingdom Concept",
                            "Classification and Characterization of Bacteria According to Bergey's Manual of Systematic Bacteriology (9th Edition)"
                        ],
                        "Unit II: Microbiological Techniques and Sterilization": [
                            "Principle and Applications of Microscopy: Simple, Compound, Bright Field, Dark Field, Phase Contrast, Fluorescent, and Electron Microscopy",
                            "Sterilization Principles and Methods:",
                            "Physical Methods: Moist Heat, Dry Heat, Filtration, Pasteurization, Tyndallization, Radiation",
                            "Chemical Methods: Alcohols, Aldehydes, Phenols, Halogens, and Hypochlorites"
                        ],
                        "Unit III: Microbial Classification and Staining Techniques": [
                            "General Characteristics and Nature of:",
                            "Archaebacteria, Eubacteria, Rickettsia, Chlamydias, Spirochaetes, Actinomycetes",
                            "Viruses Including Phages (T-phage, Lambda), Mycoplasmas",
                            "Principles of Staining: Nature of Dyes",
                            "Types of Staining: Simple, Differential, Negative, and Spore Staining"
                        ],
                        "Unit IV: Microbial Cell Structure": [
                            "Ultrastructure of Bacterial Cells",
                            "Subcellular Structures: Slime, Capsule, Cell Wall, Pili, Flagella, Cell Inclusions",
                            "Biosynthesis of Bacterial Cell Wall and Its Composition"
                        ],
                        "Unit V: Media, Culture Techniques, and Preservation": [
                            "Types of Media: Simple, Enriched, and Transport Media with Examples",
                            "Culture Techniques: Spread Plate, Streak Plate, and Pour Plate Methods",
                            "Methods for Maintenance and Preservation of Cultures"
                        ]
                    }
                
                
            };
            
        
        
    
    



// Initialize localStorage with syllabus data if empty
Object.keys(syllabus).forEach(subject => {
    if (!storedData[subject]) storedData[subject] = {};

    Object.keys(syllabus[subject]).forEach(unit => {
        if (!storedData[subject][unit]) storedData[subject][unit] = {};

        syllabus[subject][unit].forEach(topic => {
            if (!(topic in storedData[subject][unit])) {
                storedData[subject][unit][topic] = false;
            }
        });
    });
});

localStorage.setItem("syllabus", JSON.stringify(storedData));

// Save data to localStorage
function saveData() {
    localStorage.setItem("syllabus", JSON.stringify(storedData));
}

// Toggle syllabus visibility
function toggleSyllabus(subject) {
    const subjectDiv = document.getElementById(`subject-${encodeURIComponent(subject)}`);
    if (subjectDiv) {
        subjectDiv.style.display = subjectDiv.style.display === "none" ? "block" : "none";
    }
}

// Toggle unit visibility
function toggleUnit(subject, unit) {
    const unitDiv = document.getElementById(`unit-${encodeURIComponent(subject)}-${encodeURIComponent(unit)}`);
    if (unitDiv) {
        const isVisible = unitDiv.style.display === "block";
        unitDiv.style.display = isVisible ? "none" : "block";
        unitDiv.classList.toggle("open", !isVisible);
    }
}

// Toggle topic completion
function toggleTopic(subject, unit, topic) {
    storedData[subject][unit][topic] = !storedData[subject][unit][topic];
    saveData();
    document.querySelector(`[data-topic='${subject}-${unit}-${topic}']`).checked = storedData[subject][unit][topic];
}

// Remove all ticks with password authentication
function removeAllTicks(subject, unit) {
    const password = prompt("Enter the password to remove all ticks:");
    if (password === "4567") {
        Object.keys(storedData[subject][unit]).forEach(topic => {
            storedData[subject][unit][topic] = false;
        });
        saveData();
        renderSyllabus();
        alert("All ticks have been removed successfully!");
    } else {
        alert("Incorrect password! Operation canceled.");
    }
}

// Render syllabus structure dynamically
function renderSyllabus() {
    const syllabusDiv = document.getElementById("units");
    syllabusDiv.innerHTML = "";

    Object.keys(syllabus).forEach(subject => {
        const subjectDiv = document.createElement("div");
        subjectDiv.innerHTML = `<h2 onclick="toggleSyllabus('${subject}')">${subject}</h2>`;

        const subjectContent = document.createElement("div");
        subjectContent.id = `subject-${encodeURIComponent(subject)}`;
        subjectContent.style.display = "none";

        Object.keys(syllabus[subject]).forEach(unit => {
            const unitDiv = document.createElement("div");
            unitDiv.classList.add("unit");
            unitDiv.innerHTML = `<h3 class="unit-header" onclick="toggleUnit('${subject}', '${unit}')">${unit}</h3>`;

            const unitContent = document.createElement("div");
            unitContent.id = `unit-${encodeURIComponent(subject)}-${encodeURIComponent(unit)}`;
            unitContent.style.display = "none";

            syllabus[subject][unit].forEach(topic => {
                const topicDiv = document.createElement("div");
                topicDiv.classList.add("topic-item");
                const isChecked = storedData[subject][unit][topic] ? "checked" : "";
                topicDiv.innerHTML = `
                    <input type="checkbox" data-topic="${subject}-${unit}-${topic}"
                    onclick="toggleTopic('${subject}', '${unit}', '${topic}')" ${isChecked}>
                    ${topic}
                `;
                unitContent.appendChild(topicDiv);
            });

            const removeButton = document.createElement("button");
            removeButton.classList.add("remove-btn");
            removeButton.textContent = "Remove All Ticks";
            removeButton.onclick = () => removeAllTicks(subject, unit);
            unitContent.appendChild(removeButton);

            unitDiv.appendChild(unitContent);
            subjectContent.appendChild(unitDiv);
        });

        subjectDiv.appendChild(subjectContent);
        syllabusDiv.appendChild(subjectDiv);
    });
}

// Call renderSyllabus to initialize UI
renderSyllabus();
