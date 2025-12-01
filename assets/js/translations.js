/**
 * Davinci Fighting - Système de traduction i18n
 * Langues: FR (défaut), EN, NL
 */

const translations = {
    // ============================================
    // FRANÇAIS (défaut)
    // ============================================
    fr: {
        // Meta & SEO
        meta: {
            title: "Davinci Fighting | Bien plus qu'une salle de combat — Une communauté",
            description: "Salle de sports de combat à Bruxelles. MMA, BJJ, Boxe Anglaise, Kick Boxing pour adultes, juniors et enfants. Séance d'essai gratuite."
        },

        // Navigation
        nav: {
            disciplines: "Disciplines",
            pricing: "Tarifs",
            schedule: "Horaires",
            contact: "Contact",
            book: "Réserver",
            home: "Accueil"
        },

        // Categories
        categories: {
            adult: "Adulte",
            junior: "Junior",
            baby: "Baby",
            pro: "Pro",
            free: "Gratuit"
        },

        // Hero Section
        hero: {
            label: "Brussels Training Center",
            title1: "Bien plus qu'une",
            title2: "salle de",
            title3: "combat",
            title4: "Une communauté",
            subtitle: "L'esprit d'équipe et la solidarité sont notre force. Nous partageons les victoires comme les défaites, et grandissons ensemble.",
            cta_primary: "Réserver un essai gratuit",
            cta_secondary: "Découvrir nos disciplines",
            stat_disciplines: "Disciplines",
            stat_open: "Ouvert",
            stat_ages: "Tous âges"
        },

        // Disciplines Section
        disciplines: {
            section_label: "Nos disciplines",
            section_title: "Trouvez votre",
            section_title_accent: "art",
            tab_adult: "Adulte",
            tab_junior: "Junior",
            tab_baby: "Baby",

            // MMA
            mma: {
                name: "MMA",
                desc: "Arts martiaux mixtes combinant plusieurs disciplines de combat",
                schedule: "Lun, Mer, Ven"
            },

            // BJJ
            bjj: {
                name: "BJJ",
                desc: "Jiu-Jitsu Brésilien - \"Lutte au sol\", art du grappling et soumissions",
                schedule: "Lun, Mer, Ven"
            },

            // Boxe Anglaise
            boxing: {
                name: "Boxe Anglaise",
                desc: "\"Le noble art\" - Boxe traditionnelle avec les poings uniquement",
                schedule: "Lun, Mer, Ven"
            },

            // Kick Boxing
            kickboxing: {
                name: "Kick Boxing",
                desc: "\"Boxe pieds-poings\" - Techniques de boxe et coups de pied",
                schedule: "Mar, Jeu, Sam"
            },

            // Open Mat
            openmat: {
                name: "Open Mat Grappling",
                desc: "Entraînement libre de lutte au sol - Ouvert à tous",
                schedule: "Dimanche 12h30",
                price: "GRATUIT"
            },

            // MMA Junior
            mma_junior: {
                name: "MMA Junior",
                desc: "Arts martiaux mixtes adaptés pour les jeunes de 8 à 16 ans",
                schedule: "Mer, Sam",
                age: "8-16 ans"
            },

            // BJJ Junior
            bjj_junior: {
                name: "BJJ Junior",
                desc: "Jiu-Jitsu Brésilien pour les jeunes combattants",
                schedule: "Mer, Sam",
                age: "8-16 ans"
            },

            // Kick Boxing Junior
            kickboxing_junior: {
                name: "Kick Boxing Junior",
                desc: "Boxe pieds-poings adaptée pour les 10-15 ans",
                schedule: "Mar, Jeu",
                age: "10-15 ans"
            },

            // Baby Boxe
            baby_boxe: {
                name: "Baby Boxe",
                desc: "Initiation ludique à la boxe pour les tout-petits",
                schedule: "Mer, Sam",
                age: "3-6 ans"
            },

            // Kick Boxing Baby
            kickboxing_baby: {
                name: "Kick Boxing Baby",
                desc: "Introduction au kick boxing pour les enfants",
                schedule: "Mer, Sam",
                age: "6-9 ans"
            },

            // Musculation
            fitness: {
                name: "Musculation",
                desc: "Salle de musculation avec ambiance positive et énergisante",
                schedule: "6j/7"
            }
        },

        // About Section
        about: {
            section_label: "Notre philosophie",
            section_title: "Unis par le",
            section_title_accent: "combat",
            section_title2: ", liés par le respect",
            text: "Chez Davinci Fighting, nous croyons que les arts martiaux sont bien plus qu'un simple sport. C'est un chemin de développement personnel où chaque membre de notre communauté grandit ensemble, partageant les victoires comme les défaites.",
            feature1_title: "Tous niveaux",
            feature1_desc: "Débutants et confirmés bienvenus",
            feature2_title: "Coachs experts",
            feature2_desc: "Encadrement professionnel",
            feature3_title: "Flexibilité",
            feature3_desc: "Cours 7 jours sur 7",
            feature4_title: "Communauté",
            feature4_desc: "Une vraie famille de combattants",
            cta: "Rejoindre la famille"
        },

        // Pricing Section
        pricing: {
            section_label: "Nos tarifs",
            section_title: "Investissez en",
            section_title_accent: "vous",
            note: "Première séance d'essai gratuite pour toutes les disciplines",
            tab_adult: "Adulte Combat",
            tab_junior: "Junior & Baby",
            tab_fitness: "Fitness",

            duration_1: "1 Mois",
            duration_3: "3 Mois",
            duration_6: "6 Mois",
            duration_12: "12 Mois",

            commitment: "engagement",
            per_month: "/mois",
            save: "Économisez",

            feature_unlimited: "Accès illimité aux cours",
            feature_no_commit: "Sans engagement long",
            feature_tracking: "Suivi personnalisé",
            feature_best_value: "Meilleur rapport qualité/prix",
            feature_max_savings: "Économie maximale",

            cta: "S'inscrire"
        },

        // Schedule Section
        schedule: {
            section_label: "Planning",
            section_title: "Horaires",
            section_title_accent: "hebdomadaires",

            day: "Jour",
            morning: "Matin",
            afternoon: "Après-midi",
            evening: "Soir",

            monday: "Lundi",
            tuesday: "Mardi",
            wednesday: "Mercredi",
            thursday: "Jeudi",
            friday: "Vendredi",
            saturday: "Samedi",
            sunday: "Dimanche",

            classes: "cours",

            legend_adult: "Adulte",
            legend_junior: "Junior (8-16 ans)",
            legend_baby: "Baby (3-9 ans)",
            legend_free: "Gratuit"
        },

        // CTA Section
        cta: {
            label: "Prêt à commencer ?",
            title: "Votre première séance est",
            title_accent: "gratuite",
            text: "Venez découvrir notre salle, rencontrer nos coachs et essayer la discipline de votre choix. Sans engagement, sans pression.",
            btn_primary: "Réserver maintenant",
            btn_secondary: "Appeler"
        },

        // Contact Section
        contact: {
            title: "Nous trouver",
            address_title: "Adresse",
            phone_title: "Téléphone",
            email_title: "Email"
        },

        // Footer
        footer: {
            legal: "Mentions légales",
            privacy: "Politique de confidentialité",
            designed_by: "Conçu par"
        },

        // 404 Page
        error404: {
            title: "Page non trouvée | Davinci Fighting",
            knockout: "K.O. Technique",
            message: "Cette page a quitté le ring. Retournez à l'accueil pour reprendre le combat.",
            redirect: "Redirection dans",
            btn: "Retour à l'accueil"
        },

        // Discipline Pages Common
        discipline_page: {
            breadcrumb_home: "Accueil",
            breadcrumb_disciplines: "Disciplines",
            about_label: "À propos",
            schedule_label: "Planning",
            schedule_title: "Horaires",
            equipment_label: "Équipement",
            equipment_title: "Premier",
            equipment_title_accent: "cours d'essai ?",
            equipment_provided: "Équipement fourni gratuitement",
            equipment_desc: "Pour votre premier cours d'essai, pas besoin d'équipement ! On s'occupe de tout à l'accueil. Venez simplement avec une tenue de sport confortable.",
            equipment_note: "L'équipement personnel sera nécessaire pour les cours suivants",
            pricing_label: "Tarifs",
            pricing_title: "Abonnements",
            pricing_note: "Première séance d'essai gratuite. Accès illimité aux cours selon la formule choisie.",
            cta_title: "Votre première séance est",
            cta_title_accent: "gratuite",
            cta_text: "Venez découvrir dans une ambiance familiale. Aucun engagement, juste l'envie de progresser.",
            cta_btn: "Réserver ma séance gratuite",
            cta_call: "Appeler:",
            per_week: "Par semaine",
            per_session: "Par séance",
            min_age: "Âge minimum",
            all_levels: "Tous niveaux",
            beginners_welcome: "Débutants bienvenus",
            expert_coaches: "Coachs experts",
            pro_supervision: "Encadrement pro",
            free_trial: "Essai gratuit",
            first_free: "1ère séance offerte",
            classes_per_week: "cours par semaine",
            no_commitment: "Sans engagement",
            preferred_rate: "Tarif préférentiel",
            best_value: "Meilleur rapport qualité/prix",
            max_savings: "Économie maximale",
            unlimited_access: "Accès illimité"
        },

        // MMA Page Specific
        mma_page: {
            title: "MMA Adulte | Davinci Fighting - Arts Martiaux Mixtes Bruxelles",
            hero_subtitle: "Arts martiaux mixtes combinant plusieurs disciplines de combat. Striking, grappling, soumissions - devenez un combattant complet.",
            about_title: "L'art du",
            about_title_accent: "combat complet",
            about_text: "Le MMA (Mixed Martial Arts) est l'aboutissement ultime des arts martiaux modernes. Cette discipline complète combine les techniques de frappe de la boxe et du kickboxing avec le grappling du jiu-jitsu brésilien et de la lutte.",
            about_text2: "Chez Davinci Fighting, nos cours de MMA sont ouverts à tous les niveaux. Que vous soyez débutant curieux ou pratiquant expérimenté, vous trouverez un environnement adapté pour progresser à votre rythme dans une ambiance familiale et bienveillante.",
            schedule_desc: "Trois séances par semaine pour une progression optimale. Chaque cours dure 1 heure et inclut échauffement, technique et sparring contrôlé."
        },

        // Legal Pages
        legal: {
            mentions_title: "Mentions Légales",
            privacy_title: "Politique de confidentialité",
            last_update: "Dernière mise à jour",
            editor_title: "Éditeur du site",
            editor_intro: "Le présent site web est édité par :",
            legal_form: "Forme juridique",
            asbl: "Association Sans But Lucratif (ASBL)",
            company_number: "N° Entreprise (BCE)",
            vat_number: "N° TVA",
            headquarters: "Siège social",
            phone: "Téléphone",
            email: "Email",
            intellectual_property: "Propriété intellectuelle",
            limitation_liability: "Limitation de responsabilité",
            hyperlinks: "Liens hypertextes",
            registration_conditions: "Conditions d'inscription",
            internal_rules: "Règlement intérieur",
            medical_certificate: "Certificat médical",
            minors: "Mineurs",
            subscriptions: "Abonnements",
            applicable_law: "Droit applicable",
            contact: "Contact"
        }
    },

    // ============================================
    // ENGLISH
    // ============================================
    en: {
        // Meta & SEO
        meta: {
            title: "Davinci Fighting | More than a fighting gym — A community",
            description: "Combat sports gym in Brussels. MMA, BJJ, Boxing, Kick Boxing for adults, juniors and children. Free trial session."
        },

        // Navigation
        nav: {
            disciplines: "Disciplines",
            pricing: "Pricing",
            schedule: "Schedule",
            contact: "Contact",
            book: "Book",
            home: "Home"
        },

        // Categories
        categories: {
            adult: "Adult",
            junior: "Junior",
            baby: "Kids",
            pro: "Pro",
            free: "Free"
        },

        // Hero Section
        hero: {
            label: "Brussels Training Center",
            title1: "More than a",
            title2: "fighting",
            title3: "gym",
            title4: "A community",
            subtitle: "Team spirit and solidarity are our strength. We share victories and defeats, and grow together.",
            cta_primary: "Book a free trial",
            cta_secondary: "Discover our disciplines",
            stat_disciplines: "Disciplines",
            stat_open: "Open",
            stat_ages: "All ages"
        },

        // Disciplines Section
        disciplines: {
            section_label: "Our disciplines",
            section_title: "Find your",
            section_title_accent: "art",
            tab_adult: "Adult",
            tab_junior: "Junior",
            tab_baby: "Kids",

            // MMA
            mma: {
                name: "MMA",
                desc: "Mixed martial arts combining multiple combat disciplines",
                schedule: "Mon, Wed, Fri"
            },

            // BJJ
            bjj: {
                name: "BJJ",
                desc: "Brazilian Jiu-Jitsu - Ground fighting, grappling art and submissions",
                schedule: "Mon, Wed, Fri"
            },

            // Boxe Anglaise
            boxing: {
                name: "Boxing",
                desc: "\"The noble art\" - Traditional boxing with fists only",
                schedule: "Mon, Wed, Fri"
            },

            // Kick Boxing
            kickboxing: {
                name: "Kick Boxing",
                desc: "\"Feet and fists boxing\" - Boxing techniques and kicks",
                schedule: "Tue, Thu, Sat"
            },

            // Open Mat
            openmat: {
                name: "Open Mat Grappling",
                desc: "Free ground fighting training - Open to all",
                schedule: "Sunday 12:30pm",
                price: "FREE"
            },

            // MMA Junior
            mma_junior: {
                name: "MMA Junior",
                desc: "Mixed martial arts adapted for ages 8 to 16",
                schedule: "Wed, Sat",
                age: "8-16 years"
            },

            // BJJ Junior
            bjj_junior: {
                name: "BJJ Junior",
                desc: "Brazilian Jiu-Jitsu for young fighters",
                schedule: "Wed, Sat",
                age: "8-16 years"
            },

            // Kick Boxing Junior
            kickboxing_junior: {
                name: "Kick Boxing Junior",
                desc: "Kick boxing adapted for ages 10-15",
                schedule: "Tue, Thu",
                age: "10-15 years"
            },

            // Baby Boxe
            baby_boxe: {
                name: "Baby Boxing",
                desc: "Fun introduction to boxing for toddlers",
                schedule: "Wed, Sat",
                age: "3-6 years"
            },

            // Kick Boxing Baby
            kickboxing_baby: {
                name: "Kids Kick Boxing",
                desc: "Introduction to kick boxing for children",
                schedule: "Wed, Sat",
                age: "6-9 years"
            },

            // Musculation
            fitness: {
                name: "Weight Training",
                desc: "Gym with positive and energizing atmosphere",
                schedule: "6 days/week"
            }
        },

        // About Section
        about: {
            section_label: "Our philosophy",
            section_title: "United by",
            section_title_accent: "combat",
            section_title2: ", bound by respect",
            text: "At Davinci Fighting, we believe martial arts are much more than just a sport. It's a path of personal development where every member of our community grows together, sharing victories and defeats.",
            feature1_title: "All levels",
            feature1_desc: "Beginners and experts welcome",
            feature2_title: "Expert coaches",
            feature2_desc: "Professional supervision",
            feature3_title: "Flexibility",
            feature3_desc: "Classes 7 days a week",
            feature4_title: "Community",
            feature4_desc: "A true family of fighters",
            cta: "Join the family"
        },

        // Pricing Section
        pricing: {
            section_label: "Our pricing",
            section_title: "Invest in",
            section_title_accent: "yourself",
            note: "First trial session free for all disciplines",
            tab_adult: "Adult Combat",
            tab_junior: "Junior & Kids",
            tab_fitness: "Fitness",

            duration_1: "1 Month",
            duration_3: "3 Months",
            duration_6: "6 Months",
            duration_12: "12 Months",

            commitment: "commitment",
            per_month: "/month",
            save: "Save",

            feature_unlimited: "Unlimited class access",
            feature_no_commit: "No long commitment",
            feature_tracking: "Personal tracking",
            feature_best_value: "Best value",
            feature_max_savings: "Maximum savings",

            cta: "Sign up"
        },

        // Schedule Section
        schedule: {
            section_label: "Planning",
            section_title: "Weekly",
            section_title_accent: "schedule",

            day: "Day",
            morning: "Morning",
            afternoon: "Afternoon",
            evening: "Evening",

            monday: "Monday",
            tuesday: "Tuesday",
            wednesday: "Wednesday",
            thursday: "Thursday",
            friday: "Friday",
            saturday: "Saturday",
            sunday: "Sunday",

            classes: "classes",

            legend_adult: "Adult",
            legend_junior: "Junior (8-16 years)",
            legend_baby: "Kids (3-9 years)",
            legend_free: "Free"
        },

        // CTA Section
        cta: {
            label: "Ready to start?",
            title: "Your first session is",
            title_accent: "free",
            text: "Come discover our gym, meet our coaches and try the discipline of your choice. No commitment, no pressure.",
            btn_primary: "Book now",
            btn_secondary: "Call"
        },

        // Contact Section
        contact: {
            title: "Find us",
            address_title: "Address",
            phone_title: "Phone",
            email_title: "Email"
        },

        // Footer
        footer: {
            legal: "Legal notice",
            privacy: "Privacy policy",
            designed_by: "Designed by"
        },

        // 404 Page
        error404: {
            title: "Page not found | Davinci Fighting",
            knockout: "Technical K.O.",
            message: "This page has left the ring. Return to home to continue the fight.",
            redirect: "Redirecting in",
            btn: "Back to home"
        },

        // Discipline Pages Common
        discipline_page: {
            breadcrumb_home: "Home",
            breadcrumb_disciplines: "Disciplines",
            about_label: "About",
            schedule_label: "Planning",
            schedule_title: "Schedule",
            equipment_label: "Equipment",
            equipment_title: "First",
            equipment_title_accent: "trial class?",
            equipment_provided: "Equipment provided free",
            equipment_desc: "For your first trial class, no equipment needed! We take care of everything at reception. Just come with comfortable sportswear.",
            equipment_note: "Personal equipment will be required for subsequent classes",
            pricing_label: "Pricing",
            pricing_title: "Subscriptions",
            pricing_note: "First trial session free. Unlimited class access according to chosen plan.",
            cta_title: "Your first session is",
            cta_title_accent: "free",
            cta_text: "Come discover in a family atmosphere. No commitment, just the desire to progress.",
            cta_btn: "Book my free session",
            cta_call: "Call:",
            per_week: "Per week",
            per_session: "Per session",
            min_age: "Minimum age",
            all_levels: "All levels",
            beginners_welcome: "Beginners welcome",
            expert_coaches: "Expert coaches",
            pro_supervision: "Pro supervision",
            free_trial: "Free trial",
            first_free: "1st session free",
            classes_per_week: "classes per week",
            no_commitment: "No commitment",
            preferred_rate: "Preferred rate",
            best_value: "Best value",
            max_savings: "Maximum savings",
            unlimited_access: "Unlimited access"
        },

        // MMA Page Specific
        mma_page: {
            title: "Adult MMA | Davinci Fighting - Mixed Martial Arts Brussels",
            hero_subtitle: "Mixed martial arts combining multiple combat disciplines. Striking, grappling, submissions - become a complete fighter.",
            about_title: "The art of",
            about_title_accent: "complete combat",
            about_text: "MMA (Mixed Martial Arts) is the ultimate achievement of modern martial arts. This complete discipline combines striking techniques from boxing and kickboxing with grappling from Brazilian jiu-jitsu and wrestling.",
            about_text2: "At Davinci Fighting, our MMA classes are open to all levels. Whether you're a curious beginner or an experienced practitioner, you'll find a suitable environment to progress at your own pace in a family-friendly atmosphere.",
            schedule_desc: "Three sessions per week for optimal progression. Each class lasts 1 hour and includes warm-up, technique and controlled sparring."
        },

        // Legal Pages
        legal: {
            mentions_title: "Legal Notice",
            privacy_title: "Privacy Policy",
            last_update: "Last update",
            editor_title: "Website publisher",
            editor_intro: "This website is published by:",
            legal_form: "Legal form",
            asbl: "Non-Profit Organization (ASBL)",
            company_number: "Company Number (BCE)",
            vat_number: "VAT Number",
            headquarters: "Headquarters",
            phone: "Phone",
            email: "Email",
            intellectual_property: "Intellectual property",
            limitation_liability: "Limitation of liability",
            hyperlinks: "Hyperlinks",
            registration_conditions: "Registration conditions",
            internal_rules: "Internal rules",
            medical_certificate: "Medical certificate",
            minors: "Minors",
            subscriptions: "Subscriptions",
            applicable_law: "Applicable law",
            contact: "Contact"
        }
    },

    // ============================================
    // NEDERLANDS
    // ============================================
    nl: {
        // Meta & SEO
        meta: {
            title: "Davinci Fighting | Meer dan een vechtsportzaal — Een gemeenschap",
            description: "Vechtsportzaal in Brussel. MMA, BJJ, Boksen, Kickboksen voor volwassenen, junioren en kinderen. Gratis proefles."
        },

        // Navigation
        nav: {
            disciplines: "Disciplines",
            pricing: "Tarieven",
            schedule: "Uurrooster",
            contact: "Contact",
            book: "Boeken",
            home: "Home"
        },

        // Categories
        categories: {
            adult: "Volwassene",
            junior: "Junior",
            baby: "Kids",
            pro: "Pro",
            free: "Gratis"
        },

        // Hero Section
        hero: {
            label: "Brussels Training Center",
            title1: "Meer dan een",
            title2: "vecht",
            title3: "zaal",
            title4: "Een gemeenschap",
            subtitle: "Teamgeest en solidariteit zijn onze kracht. We delen overwinningen en nederlagen, en groeien samen.",
            cta_primary: "Boek een gratis proefles",
            cta_secondary: "Ontdek onze disciplines",
            stat_disciplines: "Disciplines",
            stat_open: "Open",
            stat_ages: "Alle leeftijden"
        },

        // Disciplines Section
        disciplines: {
            section_label: "Onze disciplines",
            section_title: "Vind je",
            section_title_accent: "kunst",
            tab_adult: "Volwassene",
            tab_junior: "Junior",
            tab_baby: "Kids",

            // MMA
            mma: {
                name: "MMA",
                desc: "Mixed martial arts die meerdere vechtsporten combineert",
                schedule: "Ma, Wo, Vr"
            },

            // BJJ
            bjj: {
                name: "BJJ",
                desc: "Braziliaans Jiu-Jitsu - Grondgevecht, grappling kunst en submissions",
                schedule: "Ma, Wo, Vr"
            },

            // Boxe Anglaise
            boxing: {
                name: "Boksen",
                desc: "\"De edele kunst\" - Traditioneel boksen met alleen vuisten",
                schedule: "Ma, Wo, Vr"
            },

            // Kick Boxing
            kickboxing: {
                name: "Kickboksen",
                desc: "\"Voeten en vuisten boksen\" - Bokstechnieken en trappen",
                schedule: "Di, Do, Za"
            },

            // Open Mat
            openmat: {
                name: "Open Mat Grappling",
                desc: "Vrije grondgevecht training - Open voor iedereen",
                schedule: "Zondag 12:30",
                price: "GRATIS"
            },

            // MMA Junior
            mma_junior: {
                name: "MMA Junior",
                desc: "Mixed martial arts aangepast voor 8 tot 16 jaar",
                schedule: "Wo, Za",
                age: "8-16 jaar"
            },

            // BJJ Junior
            bjj_junior: {
                name: "BJJ Junior",
                desc: "Braziliaans Jiu-Jitsu voor jonge vechters",
                schedule: "Wo, Za",
                age: "8-16 jaar"
            },

            // Kick Boxing Junior
            kickboxing_junior: {
                name: "Kickboksen Junior",
                desc: "Kickboksen aangepast voor 10-15 jaar",
                schedule: "Di, Do",
                age: "10-15 jaar"
            },

            // Baby Boxe
            baby_boxe: {
                name: "Baby Boksen",
                desc: "Leuke introductie tot boksen voor peuters",
                schedule: "Wo, Za",
                age: "3-6 jaar"
            },

            // Kick Boxing Baby
            kickboxing_baby: {
                name: "Kids Kickboksen",
                desc: "Introductie tot kickboksen voor kinderen",
                schedule: "Wo, Za",
                age: "6-9 jaar"
            },

            // Musculation
            fitness: {
                name: "Krachttraining",
                desc: "Fitnessruimte met positieve en energieke sfeer",
                schedule: "6 dagen/week"
            }
        },

        // About Section
        about: {
            section_label: "Onze filosofie",
            section_title: "Verenigd door",
            section_title_accent: "gevecht",
            section_title2: ", verbonden door respect",
            text: "Bij Davinci Fighting geloven we dat martial arts veel meer zijn dan alleen een sport. Het is een pad van persoonlijke ontwikkeling waar elk lid van onze gemeenschap samen groeit, overwinningen en nederlagen delend.",
            feature1_title: "Alle niveaus",
            feature1_desc: "Beginners en gevorderden welkom",
            feature2_title: "Expert coaches",
            feature2_desc: "Professionele begeleiding",
            feature3_title: "Flexibiliteit",
            feature3_desc: "Lessen 7 dagen per week",
            feature4_title: "Gemeenschap",
            feature4_desc: "Een echte familie van vechters",
            cta: "Word lid van de familie"
        },

        // Pricing Section
        pricing: {
            section_label: "Onze tarieven",
            section_title: "Investeer in",
            section_title_accent: "jezelf",
            note: "Eerste proefles gratis voor alle disciplines",
            tab_adult: "Volwassene Vechtsport",
            tab_junior: "Junior & Kids",
            tab_fitness: "Fitness",

            duration_1: "1 Maand",
            duration_3: "3 Maanden",
            duration_6: "6 Maanden",
            duration_12: "12 Maanden",

            commitment: "verbintenis",
            per_month: "/maand",
            save: "Bespaar",

            feature_unlimited: "Onbeperkte toegang tot lessen",
            feature_no_commit: "Geen lange verbintenis",
            feature_tracking: "Persoonlijke begeleiding",
            feature_best_value: "Beste waarde",
            feature_max_savings: "Maximale besparing",

            cta: "Inschrijven"
        },

        // Schedule Section
        schedule: {
            section_label: "Planning",
            section_title: "Wekelijks",
            section_title_accent: "rooster",

            day: "Dag",
            morning: "Ochtend",
            afternoon: "Middag",
            evening: "Avond",

            monday: "Maandag",
            tuesday: "Dinsdag",
            wednesday: "Woensdag",
            thursday: "Donderdag",
            friday: "Vrijdag",
            saturday: "Zaterdag",
            sunday: "Zondag",

            classes: "lessen",

            legend_adult: "Volwassene",
            legend_junior: "Junior (8-16 jaar)",
            legend_baby: "Kids (3-9 jaar)",
            legend_free: "Gratis"
        },

        // CTA Section
        cta: {
            label: "Klaar om te beginnen?",
            title: "Je eerste les is",
            title_accent: "gratis",
            text: "Kom onze zaal ontdekken, ontmoet onze coaches en probeer de discipline van je keuze. Geen verbintenis, geen druk.",
            btn_primary: "Nu boeken",
            btn_secondary: "Bellen"
        },

        // Contact Section
        contact: {
            title: "Vind ons",
            address_title: "Adres",
            phone_title: "Telefoon",
            email_title: "Email"
        },

        // Footer
        footer: {
            legal: "Juridische vermeldingen",
            privacy: "Privacybeleid",
            designed_by: "Ontworpen door"
        },

        // 404 Page
        error404: {
            title: "Pagina niet gevonden | Davinci Fighting",
            knockout: "Technische K.O.",
            message: "Deze pagina heeft de ring verlaten. Keer terug naar home om het gevecht voort te zetten.",
            redirect: "Doorverwijzing in",
            btn: "Terug naar home"
        },

        // Discipline Pages Common
        discipline_page: {
            breadcrumb_home: "Home",
            breadcrumb_disciplines: "Disciplines",
            about_label: "Over",
            schedule_label: "Planning",
            schedule_title: "Uurrooster",
            equipment_label: "Uitrusting",
            equipment_title: "Eerste",
            equipment_title_accent: "proefles?",
            equipment_provided: "Uitrusting gratis verstrekt",
            equipment_desc: "Voor je eerste proefles is geen uitrusting nodig! We regelen alles bij de receptie. Kom gewoon met comfortabele sportkleding.",
            equipment_note: "Persoonlijke uitrusting is nodig voor volgende lessen",
            pricing_label: "Tarieven",
            pricing_title: "Abonnementen",
            pricing_note: "Eerste proefles gratis. Onbeperkte toegang tot lessen volgens gekozen formule.",
            cta_title: "Je eerste les is",
            cta_title_accent: "gratis",
            cta_text: "Kom ontdekken in een familiale sfeer. Geen verbintenis, alleen de wil om te groeien.",
            cta_btn: "Boek mijn gratis les",
            cta_call: "Bellen:",
            per_week: "Per week",
            per_session: "Per sessie",
            min_age: "Minimum leeftijd",
            all_levels: "Alle niveaus",
            beginners_welcome: "Beginners welkom",
            expert_coaches: "Expert coaches",
            pro_supervision: "Pro begeleiding",
            free_trial: "Gratis proefles",
            first_free: "1e les gratis",
            classes_per_week: "lessen per week",
            no_commitment: "Geen verbintenis",
            preferred_rate: "Voorkeurtarief",
            best_value: "Beste waarde",
            max_savings: "Maximale besparing",
            unlimited_access: "Onbeperkte toegang"
        },

        // MMA Page Specific
        mma_page: {
            title: "MMA Volwassene | Davinci Fighting - Mixed Martial Arts Brussel",
            hero_subtitle: "Mixed martial arts die meerdere vechtdisciplines combineert. Striking, grappling, submissions - word een complete vechter.",
            about_title: "De kunst van",
            about_title_accent: "compleet gevecht",
            about_text: "MMA (Mixed Martial Arts) is het ultieme resultaat van moderne martial arts. Deze complete discipline combineert slagtechnieken uit boksen en kickboksen met grappling uit Braziliaans jiu-jitsu en worstelen.",
            about_text2: "Bij Davinci Fighting staan onze MMA-lessen open voor alle niveaus. Of je nu een nieuwsgierige beginner bent of een ervaren beoefenaar, je vindt een geschikte omgeving om in je eigen tempo vooruitgang te boeken in een familiale sfeer.",
            schedule_desc: "Drie sessies per week voor optimale vooruitgang. Elke les duurt 1 uur en bevat warming-up, techniek en gecontroleerd sparren."
        },

        // Legal Pages
        legal: {
            mentions_title: "Juridische Vermeldingen",
            privacy_title: "Privacybeleid",
            last_update: "Laatst bijgewerkt",
            editor_title: "Website uitgever",
            editor_intro: "Deze website wordt uitgegeven door:",
            legal_form: "Rechtsvorm",
            asbl: "Vereniging Zonder Winstoogmerk (VZW)",
            company_number: "Ondernemingsnummer (KBO)",
            vat_number: "BTW-nummer",
            headquarters: "Maatschappelijke zetel",
            phone: "Telefoon",
            email: "Email",
            intellectual_property: "Intellectueel eigendom",
            limitation_liability: "Beperking van aansprakelijkheid",
            hyperlinks: "Hyperlinks",
            registration_conditions: "Inschrijvingsvoorwaarden",
            internal_rules: "Huisreglement",
            medical_certificate: "Medisch attest",
            minors: "Minderjarigen",
            subscriptions: "Abonnementen",
            applicable_law: "Toepasselijk recht",
            contact: "Contact"
        }
    }
};

// Global export (works for both module and non-module contexts)
if (typeof window !== 'undefined') {
    window.davinciTranslations = translations;
}
