const conceptMap = {

    NEET: {

        Biology: {

            "The Living World": {
                prerequisites: [],
                next: ["Biological Classification"]
            },

            "Biological Classification": {
                prerequisites: ["The Living World"],
                next: ["Plant Kingdom", "Animal Kingdom"]
            },

            "Plant Kingdom": {
                prerequisites: ["Biological Classification"],
                next: ["Morphology of Flowering Plants"]
            },

            "Animal Kingdom": {
                prerequisites: ["Biological Classification"],
                next: ["Anatomy of Flowering Plants"]
            },

            "Morphology of Flowering Plants": {
                prerequisites: ["Plant Kingdom"],
                next: ["Anatomy of Flowering Plants"]
            },

            "Anatomy of Flowering Plants": {
                prerequisites: ["Morphology of Flowering Plants"],
                next: []
            }

        },

        Chemistry: {

            "Some Basic Concepts of Chemistry": {
                prerequisites: [],
                next: ["Structure of Atom"]
            },

            "Structure of Atom": {
                prerequisites: ["Some Basic Concepts of Chemistry"],
                next: ["Chemical Bonding"]
            },

            "Chemical Bonding": {
                prerequisites: ["Structure of Atom"],
                next: []
            }

        },

        Physics: {

            "Units and Measurements": {
                prerequisites: [],
                next: ["Motion"]
            },

            "Motion": {
                prerequisites: ["Units and Measurements"],
                next: ["Laws of Motion"]
            },

            "Laws of Motion": {
                prerequisites: ["Motion"],
                next: []
            }

        }

    }

};